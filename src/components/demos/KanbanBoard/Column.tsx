"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { FaPlus, FaTrash, FaXmark } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { CardType, ColumnType } from "./KanbanBoard";
import Card from "./Card";
import { Popover } from "antd";

interface Props {
  column: ColumnType;
  cards: CardType[];
  onAddCard: (columnId: string, content: string) => void;
  onChangeTitle: (columnId: string, title: string) => void;
  onDelete: (columnId: string) => void;
  onToggleCompleteCard: (cardId: string) => void;
  onChangeContentCard: (cardId: string, content: string) => void;
  onDeleteCard: (cardId: string) => void;
  overlayDragging?: boolean; // overlay column đang kéo
}

export default function Column({
  column,
  cards,
  onAddCard,
  onChangeTitle,
  onDelete,
  onToggleCompleteCard,
  onChangeContentCard,
  onDeleteCard,
  overlayDragging,
}: Props) {
  const t = useTranslations("kanbanBoard");
  const [title, setTitle] = useState(column.title);
  const [showTitle, setShowTitle] = useState(false);
  const [showAddCard, setShowAddCard] = useState(false);
  const [cardContent, setCardContent] = useState("");
  const formRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const [openPopover, setOpenPopover] = useState<boolean>(false);

  // SORTABLE (COLUMN)
  const {
    attributes,
    listeners,
    setNodeRef: setSortableRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: column.id });

  // DROPPABLE (CARD)
  const { setNodeRef: setDroppableRef } = useDroppable({ id: column.id });
  const setRefs = (node: HTMLDivElement | null) => {
    setSortableRef(node);
    setDroppableRef(node);
  };

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.3 : 1,
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        showAddCard &&
        formRef.current &&
        !formRef.current.contains(event.target as Node)
      ) {
        setShowAddCard(false);
        setCardContent("");
      }

      if (
        showTitle &&
        titleRef.current &&
        !titleRef.current.contains(event.target as Node)
      ) {
        setShowTitle(false);
        setTitle(column.title);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showAddCard, showTitle]);

  const handleAdd = () => {
    if (!cardContent.trim()) return;
    onAddCard(column.id, cardContent);
    setCardContent("");
    const textarea =
      formRef.current?.querySelector<HTMLTextAreaElement>("textarea");
    textarea?.focus(); // đặt con trỏ vào textarea sau khi thêm card
  };

  return (
    <div
      ref={setRefs}
      style={style}
      className={`relative border-2 border-[theme(--primary-light)] p-4 rounded-lg shrink-0 w-[280px] ${
        overlayDragging ? "bg-black/80" : "bg-black/50"
      }`}
    >
      <div
        {...attributes}
        {...listeners}
        className={`absolute inset-0  ${
          overlayDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      />

      <div className="relative">
        <div className={`font-bold mb-2 flex items-center gap-2`}>
          <div
            ref={titleRef}
            onDoubleClick={() => setShowTitle(true)}
            className="cursor-pointer flex-1 h-full"
          >
            {showTitle ? (
              <input
                type="text"
                value={title}
                autoFocus
                placeholder={t("enterListName")}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (!title.trim()) return;
                  if (e.key === "Enter") {
                    setShowTitle(false);
                    onChangeTitle(column.id, title);
                  }
                }}
                className="px-2 py-1 rounded border border-[theme(--primary-light)]"
              />
            ) : (
              <p className=" text-base px-2 py-1 border border-transparent">
                {column.title}
              </p>
            )}
          </div>
          <Popover
            open={openPopover}
            onOpenChange={(open) => setOpenPopover(open)}
            trigger="click"
            placement="bottomLeft"
            overlayClassName="popover-primary-light"
            styles={{
              body: {
                backgroundColor: "black",
                color: "white",
                boxShadow: "0 0 2px #34ffec",
              },
            }}
            content={
              <div className="min-w-40 flex flex-col items-start gap-2 ">
                <button
                  onClick={() => {
                    setShowAddCard(true);
                    setOpenPopover(false);
                  }}
                  className="px-2 py-1 shadow-[0_0_2px_#34ffec] flex items-center gap-2 rounded hover:bg-[theme(--primary-light)] text-white hover:text-black hover:shadow-none cursor-pointer transition-all duration-200"
                >
                  <FaPlus className="w-4 h-4 font-bold" />
                  <span className="text-base font-medium">{t("addCard")}</span>
                </button>

                <button
                  onClick={() => onDelete(column.id)}
                  className="px-2 py-1 shadow-[0_0_2px_#34ffec] flex items-center gap-2 rounded hover:bg-red-400 text-white hover:shadow-none cursor-pointer transition-all duration-200"
                >
                  <FaTrash className="w-4 h-4" />
                  <span className="text-base font-medium">{t("delete")}</span>
                </button>
              </div>
            }
          >
            <button className="shrink-0 h-full aspect-square rounded transition-all duration-200 cursor-pointer p-2 center-flex hover:bg-white/20 [&.ant-popover-open]:bg-white/20">
              <HiDotsHorizontal className="w-full h-full" />
            </button>
          </Popover>
        </div>

        <SortableContext
          items={cards.map((c) => c.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-2">
            {cards.map((card) => (
              <Card
                key={card.id}
                onToggleComplete={onToggleCompleteCard}
                onChangeContent={onChangeContentCard}
                onDelete={onDeleteCard}
                card={card}
              />
            ))}
          </div>
        </SortableContext>

        <div className="mt-2">
          {!showAddCard ? (
            <button
              onClick={() => setShowAddCard(true)}
              className="select-none flex items-center gap-2 text-left w-full cursor-pointer px-1 py-1 rounded transition-all duration-200 hover:bg-white/20 hover:px-2"
            >
              <FaPlus className="w-4 h-4 font-bold" />
              {t("addCard")}
            </button>
          ) : (
            <div ref={formRef}>
              <textarea
                autoFocus
                value={cardContent}
                onChange={(e) => setCardContent(e.target.value)}
                className="w-full border p-2 rounded mb-2"
                placeholder={t("enterCardContent")}
              />
              <div className="flex gap-2">
                <button
                  onClick={handleAdd}
                  className="select-none border border-[theme(--primary-light)] text-white transition-all duration-200 hover:bg-[theme(--primary-light)] hover:text-black px-4 py-1 cursor-pointer rounded"
                >
                  {t("addCard")}
                </button>
                <button
                  onClick={() => {
                    setShowAddCard(false);
                    setCardContent("");
                  }}
                  className="select-none w-10 flex items-center justify-center rounded hover:bg-red-400 cursor-pointer transition-all duration-200"
                >
                  <FaXmark className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
