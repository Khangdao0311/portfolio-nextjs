"use client";

import { useState, createContext, useContext } from "react";

export const NotiContext = createContext<{
  loading: boolean;
  setLoading: (loading: boolean) => void;
  notification: { status: boolean | null; message: string };
  setNotification: (notification: {
    status: boolean | null;
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
