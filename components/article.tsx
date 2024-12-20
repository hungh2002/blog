"use client";

import { getPost } from "@/lib/getPost";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

const Article = ({ postId }: { postId: number }) => {
  const [post, setPost] = useState<{
    id: number;
    title: string;
    content: string | null;
    tag: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>(null);

  const getData = async () => {
    setPost(await getPost(postId));
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  return (
    <div>
      <Markdown className="prose prose-2xl dark:prose-invert">
        {post?.title}
      </Markdown>
      <Markdown className="prose prose-base dark:prose-invert">
        {post?.content}
      </Markdown>
    </div>
  );
};
export default Article;
