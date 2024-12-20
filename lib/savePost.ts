"use server";

import { postRepository } from "@/config/database/database";
import { Post } from "@/config/database/models/Post";

export const savePost = async ({
  title,
  content,
  tag,
}: {
  title: string;
  content: string | null;
  tag: string | null;
}) => {
  const post = new Post();
  post.title = title;
  post.content = content;
  post.tag = tag;

  await postRepository.save(post);

  return { ...post };
};
