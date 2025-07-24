"use client";
import { useEffect } from "react";
import { toast } from "react-toastify";

import Loading from "@/components/Loading";
import { useNotiContext } from "@/context/NotiProvider";

function ModalNotification() {
  const { loading, notification } = useNotiContext()!;

  useEffect(() => {
    if (notification.status !== null) {
      toast[notification.status](`${notification.message}`);
    }
  }, [notification]);

  return <>{!!loading && <Loading />}</>;
}

export default ModalNotification;
