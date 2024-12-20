"use server";

import { postRepository } from "@/config/database/database";

export const getPost = async (postId: number) => {
  const post = await postRepository.findOne({ where: { id: postId } });

  return post ? { ...post } : null;
};
