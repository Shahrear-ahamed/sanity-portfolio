import React from "react";

export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-3xl my-7">{children}</h3>
    </div>
  );
}
