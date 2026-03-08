"use client";

interface Props {
  type: 1 | 2 | 3;
  onClick: () => void;
  content: any;
}

function Button({ type, content, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`center-flex aspect-1.5/1 rounded-lg cursor-pointer select-none shadow-[1px_1px_1px_rgba(255,255,255,0.5)] active:shadow-none ${type === 1 ? "bg-gray-600/50 hover:bg-gray-700/80 active:bg-gray-700/90 active:translate-0.5" : type === 2 ? "bg-gray-800/50 hover:bg-gray-900/80 active:bg-gray-900/90 active:translate-0.5" : "bg-blue-700/50 hover:bg-blue-800/80 active:bg-blue-800/90 active:translate-0.5"} `}
    >
      {content}
    </button>
  );
}

export default Button;
