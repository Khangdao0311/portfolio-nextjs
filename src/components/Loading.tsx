function Loading() {
  return (
    <div className="fixed w-screen h-screen bg-black/80 z-50 center-flex">
      <div className="w-[50%] aspect-square max-w-[100px] border-8 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
    </div>
  );
}

export default Loading;
