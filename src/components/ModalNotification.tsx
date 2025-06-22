import { Modal } from "antd";
import { FaCircleCheck, FaCircleExclamation } from "react-icons/fa6";

function ModalNotification({ notification }: { notification: { status: boolean | null; message: string }}) {
  return (
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
  );
}

export default ModalNotification;
