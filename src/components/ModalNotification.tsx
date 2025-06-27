"use client";
import { Modal } from "antd";
import { FaCircleCheck, FaCircleExclamation } from "react-icons/fa6";

import Loading from "@/components/Loading";
import { useNotiContext } from "@/context/NotiProvider";

function ModalNotification() {
  const { loading, notification } = useNotiContext()!;

  return (
    <>
      {!!loading && <Loading />}
      <Modal
        open={notification.status !== null}
        footer={null}
        title={null}
        centered
        maskClosable={false}
        closable={false}
        width="auto"
      >
        {notification.status ? (
          <div className="center-flex flex-col gap-4">
            <div>
              <FaCircleCheck className="w-20 h-20 text-green-500 " />
            </div>
            <div className="text-xl font-medium text-green-700 text-center">
              {notification.message}
            </div>
          </div>
        ) : (
          <div className="center-flex flex-col gap-4">
            <div>
              <FaCircleExclamation className="w-20 h-20 text-red-500 " />
            </div>
            <div className="text-xl font-medium text-red-700 text-center">
              {notification.message}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

export default ModalNotification;
