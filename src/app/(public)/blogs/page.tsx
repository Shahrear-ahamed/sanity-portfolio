"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import React, { useState } from "react";
import AllBlogPage from "@/components/view/AllBlogPage";

export default function BlogsPage() {
  const [limit, setLimit] = useState(2);
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(1);

  return (
    <section className="wrapper-container mx-auto my-10">
      <SectionTitle>
        All <span className="text-primary">Blogs</span>
      </SectionTitle>
      <AllBlogPage limit={limit} page={page} setPage={setPage} />
    </section>
  );
}
