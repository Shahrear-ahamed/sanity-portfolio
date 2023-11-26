import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

export function LoadingSkeleton() {
  return (
    <Card
      className="space-y-5 md:space-y-0 md:flex-row md:justify-between md:gap-5 md:h-[300px] bg-primary/20 [&>*:first-child]:!bg-primary/20"
      radius="sm">
      <Skeleton className="rounded-l-md rounded-r-none md:w-full">
        <div className="h-24 rounded-md bg-default-200"></div>
      </Skeleton>
      <div className="space-y-3 p-5 md:w-full md:flex md:flex-col md:justify-between">
        <div>
          <Skeleton className="w-3/5 rounded-md">
            <div className="h-3 w-3/5 rounded-md bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-md mt-2">
            <div className="h-3 w-4/5 rounded-md bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-md mt-2">
            <div className="h-3 w-4/5 rounded-md bg-default-200"></div>
          </Skeleton>
        </div>
        <Skeleton className="w-[125px] rounded-md">
          <div className="h-10 w-full rounded-md bg-default-200"></div>
        </Skeleton>
      </div>
    </Card>
  );
}

export function HomeBlogsLoading({ className }: { className?: string }) {
  return (
    <Card
      className={`w-full min-h-[400px] ${className} block !bg-primary/20 [&>*:first-child]:!bg-primary/20`}
      radius="sm">
      <Skeleton className="rounded-t-md rounded-b-none">
        <div className="h-32 rounded-md bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3 p-4 h-[calc(100%-128px)] flex flex-col justify-between">
        <div className="space-y-3">
          <Skeleton className="w-3/5 rounded-md">
            <div className="h-3 w-3/5 rounded-md bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-md">
            <div className="h-3 w-4/5 rounded-md bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-md">
            <div className="h-3 w-2/5 rounded-md bg-default-300"></div>
          </Skeleton>
        </div>
        <div className="">
          <Skeleton className="w-2/5 rounded-md">
            <div className="h-6 w-2/5 rounded-md bg-default-300"></div>
          </Skeleton>
        </div>
      </div>
    </Card>
  );
}

export function HomeProjectsLoading({ index }: { index: number }) {
  const idx = index - 1;
  return (
    <Card
      className={`w-full h-[300px] space-y-5 ${galleryStyle[idx].style} !bg-primary/20 [&>div]:h-full [&>div]:!bg-primary/20`}
      radius="sm">
      <Skeleton className="rounded-md">
        <div className="h-24 rounded-md bg-default-300"></div>
      </Skeleton>
    </Card>
  );
}


const galleryStyle = [
  {
    idx: 0,
    style: "col-span-12 sm:col-span-6 lg:col-span-4",
  },
  {
    idx: 1,
    style: "col-span-12 sm:col-span-6 lg:col-span-5",
  },
  {
    idx: 2,
    style: "col-span-12 sm:col-span-6 lg:col-span-3",
  },
  {
    idx: 3,
    style: "col-span-12 sm:col-span-6 lg:col-span-5",
  },
  {
    idx: 4,
    style: "col-span-12 sm:col-span-6 lg:col-span-3",
  },
  {
    idx: 5,
    style: "col-span-12 sm:col-span-6 lg:col-span-4",
  },
];