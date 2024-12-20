"use server";

import { postRepository } from "@/config/database/database";

export const getPostsList = async () => {
  const postsList = await postRepository.find({
    select: { id: true, title: true },
    order: { updatedAt: "DESC" },
  });

  return postsList.map((item) => {
    return { ...item };
  });
};
