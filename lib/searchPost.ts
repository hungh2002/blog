"use server";

import { postRepository } from "@/config/database/database";
import { Like } from "typeorm";

export const searchPost = async (search: string) => {
  const posts = await postRepository.find({
    where: [
      { title: Like(`%${search}%`) },
      { content: Like(`%${search}%`) },
      { tag: Like(`%${search}%`) },
    ],
    order: { updatedAt: "DESC" },
  });

  return posts.map((item) => {
    return { ...item };
  });
};
