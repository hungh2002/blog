"use client";

import { FormEvent } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import useMarkdownPreviewStore from "@/store/markdownPreviewStore";
import { savePost } from "@/lib/savePost";

const PostForm = () => {
  const markdownPreview = useMarkdownPreviewStore((state) => state);
  const updateMarkdownPreview = useMarkdownPreviewStore(
    (state) => state.update
  );

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    savePost({
      title: formData.get("title")!.toString(),
      content: formData.get("content")?.toString() as string | null,
      tag: formData.get("tag")?.toString() as string | null,
    });
  };

  return (
    <form onSubmit={onSubmit} className="relative">
      <Label>
        tag:
        <input
          type="text"
          name="tag"
          value={markdownPreview.tag}
          onChange={(e) => updateMarkdownPreview.tag(e.target.value)}
          required
          className="bg-neutral-700"
        />
      </Label>
      <br />
      <Label>
        Title:
        <Input
          type="text"
          name="title"
          value={markdownPreview.title}
          onChange={(e) => updateMarkdownPreview.title(e.target.value)}
          required
          className="bg-neutral-700"
        />
      </Label>
      <Label>
        Content:
        <Textarea
          value={markdownPreview.content}
          name="content"
          onChange={(e) => updateMarkdownPreview.content(e.target.value)}
          rows={40}
          required
          className="bg-neutral-700"
        />
      </Label>
      <Button
        type="submit"
        variant="secondary"
        className="absolute right-0 mt-2 mr-2 text-neutral-400"
      >
        Submit
      </Button>
    </form>
  );
};
export default PostForm;
