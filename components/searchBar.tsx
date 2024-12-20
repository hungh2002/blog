/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { searchPost } from "@/lib/searchPost";
import { Card } from "./ui/card";
import Link from "next/link";
import { Post } from "@/config/database/models/Post";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState<Array<Post>>([]);

  const getResult = async () => {
    setResult(await searchPost(search));
  };

  useEffect(() => {
    getResult();
  }, [search]);

  const resultMap = result.map((item) => (
    <li key={item.id} className="border-b-2 border-neutral-600">
      <Link href={`/${item.id}`}>{item.title}</Link>
    </li>
  ));

  return (
    <Card className="relative">
      <Input
        type="text"
        value={search}
        placeholder="Search ..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul
        className={`absolute p-3 w-full ${
          search ? "border-x-2 border-b-2 border-neutral-600" : ""
        } `}
      >
        {search ? resultMap : ""}
      </ul>
    </Card>
  );
};

export default SearchBar;
