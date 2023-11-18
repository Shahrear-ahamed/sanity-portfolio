import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

export default function LoadingSkeleton() {
  return (
    <Card
      className="space-y-5 p-2 md:space-y-0 md:flex-row md:justify-between md:gap-5 md:h-[300px] bg-primary/10"
      radius="md">
      <Skeleton className="rounded-md md:w-full">
        <div className="h-24 rounded-md bg-primary/20"></div>
      </Skeleton>
      <div className="space-y-3 md:w-full md:flex md:flex-col md:justify-between">
        <div>
          <Skeleton className="w-3/5 rounded-md">
            <div className="h-3 w-3/5 rounded-md bg-primary/20"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-md mt-2">
            <div className="h-3 w-4/5 rounded-md bg-primary/20"></div>
          </Skeleton>
        </div>
        <Skeleton className="w-2/5 rounded-md">
          <div className="h-3 w-2/5 rounded-md bg-primary/20"></div>
        </Skeleton>
      </div>
    </Card>
  );
}
