"use client";

import { useState, createContext, useContext } from "react";

type ToastType = "success" | "error" | "info" | "warn";

export const NotiContext = createContext<{
  loading: boolean;
  setLoading: (loading: boolean) => void;
  notification: { status: ToastType | null; message: string };
  setNotification: (notification: {
    status: ToastType | null;
    message: string;
  }) => void;
} | null>(null);

export default function AppProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<any>({
    status: null,
    message: "",
  });

  return (
    <NotiContext.Provider
      value={{ loading, setLoading, notification, setNotification }}
    >
      {children}
    </NotiContext.Provider>
  );
}

function useNotiContext() {
  return useContext(NotiContext);
}

export { useNotiContext };
