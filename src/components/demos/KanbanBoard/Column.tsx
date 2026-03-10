"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { FaPlus, FaTrash, FaXmark } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useDroppable } from "@dnd-kit/core";
import { Popover } from "antd";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { motion } from "framer-motion";

import Card from "./Card";
import { CardType, ColumnType } from "./KanbanBoard";

interface Props {
  column: ColumnType;
  cards: CardType[];
  onAddCard: (columnId: string, content: string) => void;
  onChangeTitle: (columnId: string, title: string) => void;
  onDelete: (columnId: string) => void;
  onToggleCompleteCard: (cardId: string) => void;
  onChangeContentCard: (cardId: string, content: string) => void;
  onDeleteCard: (cardId: string) => void;
  overlayDragging?: boolean;
}

export default function Column({
  column,
  cards,
  onChangeTitle,
  onDelete,
  onAddCard,
  onToggleCompleteCard,
  onChangeContentCard,
  onDeleteCard,
  overlayDragging,
}: Props) {
  const t = useTranslations("kanbanBoard");
  const [showTitle, setShowTitle] = useState(false);
  const [showAddCard, setShowAddCard] = useState(false);
  const [openPopover, setOpenPopover] = useState<boolean>(false);
  const formRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const {
    attributes,
    listeners,
    setNodeRef: setSortableRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: column.id });

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
      }

      if (
        showTitle &&
        titleRef.current &&
        !titleRef.current.contains(event.target as Node)
      ) {
        setShowTitle(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showAddCard, showTitle]);

  const columnSchema = Yup.object({
    title: Yup.string()
      .trim()
      .required(t("enterListName"))
      .max(50, "Max 50 characters"),
  });

  const cardSchema = Yup.object({
    content: Yup.string().trim().required(t("enterCardContent")),
  });

  return (
    <div
      {...attributes}
      {...listeners}
      ref={setRefs}
      style={style}
      className={`relative border-2 border-[theme(--primary-light)] p-4 rounded-lg shrink-0 w-70 ${
        overlayDragging
          ? "bg-black/80 cursor-grabbing"
          : "bg-black/50 cursor-grab"
      }`}
    >
      <div className={`font-bold mb-2 flex items-center gap-2`}>
        <div
          ref={titleRef}
          onDoubleClick={() => setShowTitle(true)}
          className={`${overlayDragging ? "cursor-grabbing" : "cursor-pointer"} flex-1 h-full`}
        >
          {showTitle ? (
            <div onPointerDown={(e) => e.stopPropagation()}>
              <Formik
                initialValues={{ title: column.title }}
                enableReinitialize
                validationSchema={columnSchema}
                onSubmit={(values) => {
                  setShowTitle(false);
                  onChangeTitle(column.id, values.title);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Popover
                      placement="bottom"
                      overlayClassName="popover-error"
                      styles={{
                        body: {
                          backgroundColor: "#ffc9c9",
                          boxShadow: "0 0 2px #e7000b",
                          padding: 0,
                        },
                      }}
                      content={
                        <div className="text-red-600 text-sm font-semibold px-6 py-2">
                          {errors.title}
                        </div>
                      }
                      open={!!(errors.title && touched.title)}
                    >
                      <Field
                        name="title"
                        autoFocus
                        placeholder={t("enterListName")}
                        className="px-2 py-1 rounded border border-[theme(--primary-light)]"
                        onKeyDown={(e: React.KeyboardEvent) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            (
                              e.target as HTMLInputElement
                            ).form?.requestSubmit();
                          }
                        }}
                      />
                    </Popover>
                  </Form>
                )}
              </Formik>
            </div>
          ) : (
            <p className="text-base px-2 py-1 border border-transparent">
              {column.title}
            </p>
          )}
        </div>
        <Popover
          open={openPopover && !overlayDragging && !isDragging}
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
            <div
              onPointerDown={(e) => e.stopPropagation()}
              className="min-w-40 flex flex-col items-start gap-2"
            >
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
          <button
            className={`${overlayDragging ? "cursor-grabbing" : "cursor-pointer hover:bg-white/20"} shrink-0 h-full aspect-square rounded transition-all duration-200 p-2 center-flex [&.ant-popover-open]:bg-white/20`}
          >
            <HiDotsHorizontal className="w-full h-full" />
          </button>
        </Popover>
      </div>

      <SortableContext
        items={cards.map((c) => c.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-2">
          {cards.map((card) => {
            const cardList = (
              <Card
                key={card.id}
                card={card}
                onToggleComplete={onToggleCompleteCard}
                onChangeContent={onChangeContentCard}
                onDelete={onDeleteCard}
              />
            );

            return overlayDragging ? (
              cardList
            ) : (
              <motion.div
                key={card.id}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                {cardList}
              </motion.div>
            );
          })}
        </div>
      </SortableContext>

      {/* ADD CARD */}
      <div className="mt-2">
        {!showAddCard ? (
          <button
            onClick={() => setShowAddCard(true)}
            className={`${overlayDragging ? "cursor-grabbing" : "cursor-pointer hover:bg-white/20 hover:px-2"} select-none flex items-center gap-2 text-left w-full px-1 py-1 rounded transition-all duration-200`}
          >
            <FaPlus className="w-4 h-4 font-bold" />
            {t("addCard")}
          </button>
        ) : (
          <div
            ref={formRef}
            onPointerDown={(e) => e.stopPropagation()}
            className="cursor-auto"
          >
            <Formik
              initialValues={{ content: "" }}
              validationSchema={cardSchema}
              validateOnBlur={false}
              validateOnChange={false}
              onSubmit={(values, { resetForm }) => {
                onAddCard(column.id, values.content);
                resetForm();
                textareaRef.current?.focus();
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <Popover
                    placement="bottom"
                    overlayClassName="popover-error"
                    styles={{
                      body: {
                        backgroundColor: "#ffc9c9",
                        boxShadow: "0 0 2px #e7000b",
                        padding: 0,
                      },
                    }}
                    content={
                      <div className="text-red-600 text-sm font-semibold px-6 py-2">
                        {errors.content}
                      </div>
                    }
                    open={!!errors.content}
                  >
                    <Field
                      ref={textareaRef}
                      as="textarea"
                      name="content"
                      autoFocus
                      placeholder={t("enterCardContent")}
                      className="w-full border p-2 rounded mb-2 text-white"
                    />
                  </Popover>
                  <div className="flex gap-2">
                    <button
                      className={`cursor-pointer hover:bg-[theme(--primary-light)] hover:text-black border border-[theme(--primary-light)] px-4 py-1 rounded`}
                    >
                      {t("addCard")}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddCard(false)}
                      className={`cursor-pointer hover:bg-red-400 w-10 flex items-center justify-center rounded `}
                    >
                      <FaXmark />
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </div>
    </div>
  );
}
