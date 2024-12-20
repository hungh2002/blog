"use client";

import { getPostsList } from "@/lib/getPostsList";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";

const PostsList = () => {
  const [postsList, setPostsList] = useState<
    Array<{
      id: number;
      title: string;
    }>
  >([]);

  const getData = async () => {
    setPostsList(await getPostsList());
  };

  useEffect(() => {
    getData();
  }, []);

  const dataMap = postsList.map((item) => (
    <li key={item.id} className="w-1/6">
      <Link href={`/${item.id}`}>
        <Card>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
        </Card>
      </Link>
    </li>
  ));

  return <ul className="flex flex-row flex-wrap p-4 gap-3">{dataMap}</ul>;
};
export default PostsList;
