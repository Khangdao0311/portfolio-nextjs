"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useDispatch } from "react-redux";
import { FaCircleCheck, FaTrash, FaXmark } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

import { CardType } from "./KanbanBoard";
import { setToggle } from "@/redux/slices/overlay";

export default function Card({
  card,
  onToggleComplete,
  onChangeContent,
  onDelete,
  overlayDragging,
}: {
  card: CardType;
  onToggleComplete: (cardId: string) => void;
  onChangeContent: (cardId: string, content: string) => void;
  onDelete: (cardId: string) => void;
  overlayDragging?: boolean;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: card.id });

  const t = useTranslations("kanbanBoard");
  const [showEdit, setShowEdit] = useState(false);
  const [content, setContent] = useState(card.content);
  const formRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();

  // Click outside form thêm column
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        showEdit &&
        formRef.current &&
        !formRef.current.contains(event.target as Node)
      ) {
        setShowEdit(false);
        setContent(card.content);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showEdit]);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.2 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative flex flex-1 ${showEdit ? "" : "group "} shadow-[inset_0_0_0_2px_black] hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.6)] rounded p-2 ${overlayDragging ? "bg-white/30" : "bg-white/20"}`}
    >
      <div
        {...attributes}
        {...listeners}
        className={`absolute inset-0 ${overlayDragging ? "cursor-grabbing" : "cursor-grab"}`}
      />

      <div className="flex w-full gap-2 relative">
        <div
          className={`absolute left-0 h-6 center-flex ${card.completed ? "opacity-100  " : "opacity-0 group-hover:opacity-100"}  transition-all duration-300`}
        >
          <button
            onClick={() => onToggleComplete(card.id)}
            className={`w-4 h-4 rounded-full border ${card.completed ? "border-green-500" : ""} cursor-pointer overflow-hidden transition-all duration-200`}
          >
            {card.completed && (
              <FaCircleCheck className="w-full h-full text-green-500 bg-white" />
            )}
          </button>
        </div>
        <span
          {...attributes}
          {...listeners}
          className={`flex-1 text-base text-white ${overlayDragging ? "cursor-grabbing" : "cursor-grab"} ${card.completed ? "ml-5" : "ml-0 group-hover:ml-5"}  transition-all duration-200`}
        >
          {card.content}
        </span>
        <button
          onClick={() => {
            setShowEdit(true);
            dispatch(setToggle(true));
          }}
          className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 cursor-pointer"
        >
          <FaRegEdit className="w-3 h-3 text-white" />
        </button>
      </div>

      {showEdit && (
        <>
          <div
            ref={formRef}
            className="absolute z-60 w-full h-full top-0 left-0 bg-amber-300"
          >
            <textarea
              placeholder={t("enterCardContent")}
              className="!min-h-full w-full bg-black p-2 border-2 border-white/60 rounded"
              rows={1}
              defaultValue={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="absolute top-0 -right-2 translate-x-full  min-w-[160px] flex flex-col items-start gap-2 text-white">
              <button
                onClick={() => onDelete(card.id)}
                className="px-2 py-1 border border-[theme(--primary-light)] hover hover:border-red-400 flex items-center gap-2 rounded bg-black hover:bg-red-400 text-white hover:shadow-none cursor-pointer transition-all duration-200"
              >
                <FaTrash className="w-4 h-4" />
                <span className="text-base font-medium">{t("delete")}</span>
              </button>
            </div>
            <div className="flex gap-2 items-stretch">
              <button
                onClick={() => {
                  if (!content.trim()) return;
                  onChangeContent(card.id, content);
                  setShowEdit(false);
                  dispatch(setToggle(false));
                }}
                className="border border-[theme(--primary-light)] hover:bg-[theme(--primary-light)] cursor-pointer px-4 py-1 bg-black hover:text-black rounded"
              >
                {t("save")}
              </button>

              <button
                onClick={() => {
                  setShowEdit(false);
                  setContent(card.content);
                  dispatch(setToggle(false));
                }}
                className="w-10 flex items-center justify-center rounded hover:bg-red-400 cursor-pointer transition-all duration-200"
              >
                <FaXmark className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
