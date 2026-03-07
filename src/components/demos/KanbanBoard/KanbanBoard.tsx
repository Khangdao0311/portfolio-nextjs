"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { FaPlus, FaXmark } from "react-icons/fa6";
import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  DragOverEvent,
  DragOverlay,
  pointerWithin,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

import Column from "./Column";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { setToggle } from "@/redux/slices/overlay";

export interface CardType {
  id: string;
  content: string;
  completed: boolean;
  columnId: string;
}

export interface ColumnType {
  id: string;
  title: string;
}

export default function KanbanBoard() {
  const t = useTranslations("kanbanBoard");
  const [columns, setColumns] = useState<ColumnType[]>([]);
  const [cards, setCards] = useState<CardType[]>([]);
  const [dataLocal, setDataLocal] = useState<any>({
    savedColumns: null,
    savedCards: null,
  });

  const [activeCard, setActiveCard] = useState<CardType | null>(null);
  const [activeColumn, setActiveColumn] = useState<ColumnType | null>(null);

  const [showAddColumn, setShowAddColumn] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const savedColumns = localStorage.getItem("kanban_columns");
    const savedCards = localStorage.getItem("kanban_cards");
    if (savedColumns !== null) setColumns(JSON.parse(savedColumns));
    if (savedCards !== null) setCards(JSON.parse(savedCards));
    setDataLocal({
      savedColumns,
      savedCards,
    });
  }, []);

  useEffect(() => {
    if (dataLocal.savedColumns !== null) {
      localStorage.setItem("kanban_columns", JSON.stringify(columns));
    }
  }, [columns]);

  useEffect(() => {
    if (dataLocal.savedCards !== null) {
      localStorage.setItem("kanban_cards", JSON.stringify(cards));
    }
  }, [cards]);

  // Click outside form thêm column
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        showAddColumn &&
        formRef.current &&
        !formRef.current.contains(event.target as Node)
      ) {
        setShowAddColumn(false);
        setNewColumnTitle("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showAddColumn]);

  const handleAddColumn = () => {
    if (!newColumnTitle.trim()) return;
    setColumns((prev) => [
      ...prev,
      { id: `col-${Date.now()}`, title: newColumnTitle },
    ]);
    setNewColumnTitle("");
    const input = formRef.current?.querySelector<HTMLInputElement>("input");
    input?.focus();
  };

  const handleChangeTitleColumn = (columnId: string, title: string) => {
    setColumns((prev) =>
      prev.map((e) => {
        if (e.id === columnId) {
          return { ...e, title: title };
        }
        return e;
      }),
    );
  };

  const handleDeleteColumn = (columnId: string) => {
    const column = columns.find((c) => c.id === columnId);
    if (!column) return;

    const result = confirm(
      t("areYouSureDeleteList", {
        title: column.title,
      }),
    );

    if (!result) return;
    setColumns((prev) => prev.filter((e) => e.id !== columnId));
  };

  const handleAddCard = (columnId: string, content: string) => {
    setCards((prev) => [
      ...prev,
      { id: `card-${Date.now()}`, content, completed: false, columnId },
    ]);
  };

  const handleToggleCompleteCard = (cardId: string) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === cardId ? { ...card, completed: !card.completed } : card,
      ),
    );
  };

  const handleChangeContentCard = (cardId: string, content: string) => {
    setCards((prev) =>
      prev.map((e) => {
        if (e.id === cardId) {
          return { ...e, content: content };
        }
        return e;
      }),
    );
  };

  const handleDeleteCard = (cardId: string) => {
    const card = cards.find((c) => c.id === cardId);
    if (!card) return;

    const result = confirm(t("areYouSureDeleteCard"));

    if (!result) return;
    setCards((prev) => prev.filter((e) => e.id !== cardId));
    dispatch(setToggle(false));
  };

  // Drag & Drop
  const handleDragStart = (event: DragStartEvent) => {
    const card = cards.find((c) => c.id === event.active.id);
    if (card) {
      setActiveCard(card);
      return;
    }
    const column = columns.find((c) => c.id === event.active.id);
    if (column) setActiveColumn(column);
  };

  const handleDragOver = (event: DragOverEvent) => {
    if (activeColumn) return;

    const { active, over } = event;
    if (!over) return;

    const activeCardData = cards.find((c) => c.id === active.id);
    if (!activeCardData) return;

    const overCardData = cards.find((c) => c.id === over.id);

    if (overCardData) {
      if (activeCardData.columnId !== overCardData.columnId) {
        setCards((prev) => {
          const activeIndex = prev.findIndex((c) => c.id === active.id);
          const overIndex = prev.findIndex((c) => c.id === over.id);
          const updated = [...prev];
          updated[activeIndex] = {
            ...updated[activeIndex],
            columnId: overCardData.columnId,
          };
          return arrayMove(updated, activeIndex, overIndex);
        });
      }
    } else {
      const columnId = over.id as string;
      if (activeCardData.columnId !== columnId) {
        setCards((prev) =>
          prev.map((c) => (c.id === active.id ? { ...c, columnId } : c)),
        );
      }
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) {
      setActiveCard(null);
      setActiveColumn(null);
      return;
    }

    if (activeColumn) {
      const oldIndex = columns.findIndex((c) => c.id === active.id);
      const newIndex = columns.findIndex((c) => c.id === over.id);
      if (oldIndex !== newIndex)
        setColumns((prev) => arrayMove(prev, oldIndex, newIndex));
      setActiveColumn(null);
      return;
    }

    const activeIndex = cards.findIndex((c) => c.id === active.id);
    const overIndex = cards.findIndex((c) => c.id === over.id);
    if (activeIndex !== -1 && overIndex !== -1 && activeIndex !== overIndex) {
      setCards((prev) => arrayMove(prev, activeIndex, overIndex));
    }

    setActiveCard(null);
  };

  return (
    <div className="flex items-start gap-4 w-full overflow-auto mt-20 min-h-[80vh]">
      <DndContext
        collisionDetection={pointerWithin}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={columns.map((c) => c.id)}
          strategy={horizontalListSortingStrategy}
        >
          {columns.map((col) => (
            <Column
              key={col.id}
              column={col}
              cards={cards.filter((c) => c.columnId === col.id)}
              onAddCard={handleAddCard}
              onChangeTitle={handleChangeTitleColumn}
              onDelete={handleDeleteColumn}
              onToggleCompleteCard={handleToggleCompleteCard}
              onChangeContentCard={handleChangeContentCard}
              onDeleteCard={handleDeleteCard}
            />
          ))}
        </SortableContext>

        <DragOverlay>
          {activeCard ? (
            <Card
              overlayDragging={true}
              key={activeCard.id}
              onToggleComplete={handleToggleCompleteCard}
              onChangeContent={handleChangeContentCard}
              onDelete={handleDeleteCard}
              card={activeCard}
            />
          ) : activeColumn ? (
            <Column
              column={activeColumn}
              cards={cards.filter((c) => c.columnId === activeColumn.id)}
              onAddCard={() => {}}
              onChangeTitle={() => {}}
              onDelete={() => {}}
              overlayDragging={true}
              onToggleCompleteCard={handleToggleCompleteCard}
              onChangeContentCard={handleChangeContentCard}
              onDeleteCard={handleDeleteCard}
            />
          ) : null}
        </DragOverlay>
      </DndContext>

      {/* Thêm column */}
      <div className="min-w-[280px]">
        {!showAddColumn ? (
          <button
            onClick={() => setShowAddColumn(true)}
            className="bg-black/20 border-2 border-[theme(--primary-light)] px-4 py-3 rounded-lg w-full flex items-center gap-2 cursor-pointer transition-all duration-300 hover:bg-black/80 hover:pl-6"
          >
            <FaPlus className="w-5 h-5 font-bold text-white" />
            <span className="text-base font-bold text-white">
              {t("addList")}
            </span>
          </button>
        ) : (
          <form
            ref={formRef}
            className="bg-black/20 border-2 border-[theme(--primary-light)] p-4 rounded-lg w-full"
          >
            <input
              autoFocus
              value={newColumnTitle}
              onChange={(e) => setNewColumnTitle(e.target.value)}
              placeholder={t("enterListName")}
              className="border w-full p-2 rounded mb-2.5"
            />
            <div className="flex gap-2 items-stretch">
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  handleAddColumn();
                }}
                className="border border-[theme(--primary-light)] text-white transition-all duration-200 hover:bg-[theme(--primary-light)] hover:text-black px-4 py-1 cursor-pointer rounded"
              >
                {t("addList")}
              </button>

              <button
                onClick={() => {
                  setShowAddColumn(false);
                  setNewColumnTitle("");
                }}
                className="w-10 flex items-center justify-center rounded hover:bg-red-400 cursor-pointer transition-all duration-200"
              >
                <FaXmark className="w-5 h-5 text-white" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
