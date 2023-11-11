import React from "react";

export default function Mouse() {
  return (
    <div className="absolute bottom-0 left-1/2">
      <div className="w-6 h-10 relative overflow-hidden border-2 border-solid border-white rounded-3xl before:w-1 before:h-1 before:absolute before:opacity-100 before:content-[''] before:top-1 before:left-[50%] before:-translate-x-1/2 before:bg-primary before:animate-[wheel_1.3s_infinite] before:rounded-full"></div>
    </div>
  );
}
