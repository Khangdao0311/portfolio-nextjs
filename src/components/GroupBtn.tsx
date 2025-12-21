"use client";
import { FloatButton } from "antd";
import { FaAnglesUp } from "react-icons/fa6";

import icons from "@/assets/icons";
import { openNewTab } from "@/utils/openNewTab";

function GroupBtn() {
  return (
    <FloatButton.Group
      shape="circle"
      style={{ insetInlineEnd: 24, zIndex: 49 }}
    >
      <FloatButton
        onClick={() => openNewTab("https://zalo.me/84976382553")}
        icon={<icons.zalo className="text-white group-hover:text-black" />}
        className="group !border-2 !border-[theme(--primary-light)] [&_.ant-float-btn-body]:!bg-black [&_.ant-float-btn-body]:hover:!bg-[theme(--primary-light)] [&_.ant-float-btn-body]:shadow-[0_0_5px_theme(--primary-light)] hover:scale-120  !transition-all duration-300"
      />
      <FloatButton.BackTop
        visibilityHeight={200}
        duration={200}
        icon={<FaAnglesUp className="text-white group-hover:text-black" />}
        className="group !border-2 !border-[theme(--primary-light)] [&_.ant-float-btn-body]:!bg-black [&_.ant-float-btn-body]:hover:!bg-[theme(--primary-light)] [&_.ant-float-btn-body]:shadow-[0_0_5px_theme(--primary-light)] hover:scale-120  !transition-all duration-300"
      />
    </FloatButton.Group>
  );
}

export default GroupBtn;
