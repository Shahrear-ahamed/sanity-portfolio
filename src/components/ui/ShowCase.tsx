import React from "react";
import styles from "./ShowCase.module.css";

function ShowCase({
  icon,
  text,
  title,
  style,
  anim_delay,
}: {
  icon?: any;
  text?: any;
  title?: any;
  style?: any;
  anim_delay?: any;
}) {
  const paddingStyle = icon ? { padding: "8px 10px" } : { padding: "6px 10px" };
  const animation = { ...anim_delay, ...paddingStyle };
  return (
    <div
      style={animation}
      className={`flex text-black absolute rounded-md items-center flex-col bg-white border-3 border-solid border-primary animate-[float_3s_ease-in-out_infinite] ${style}`}>
      <span
        className="text-base font-medium text-primary"
        style={icon && { fontSize: "21px" }}>
        {icon || text}
      </span>
      <p className="text-xs font-medium">{title}</p>
    </div>
  );
}

export default ShowCase;
