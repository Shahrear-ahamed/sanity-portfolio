import { Pagination } from "@nextui-org/react";
import React from "react";

export default function PaginationCom({
  totalData,
  limit,
  page,
  setPage,
}: {
  totalData: number;
  limit: number;
  page: number;
  setPage: (page: number) => void;
}) {
  const total = Math.ceil(totalData / limit);

  return (
    <Pagination
      showShadow
      isCompact
      showControls
      total={total}
      initialPage={1}
      className="[&>ul]:!bg-primary [&>ul]:!bg-opacity-10 [&>ul]:!rounded [&>ul>li]:!bg-transparent [&>ul>span]:!rounded [&>ul>span]:!text-background mt-5"
    />
  );
}
