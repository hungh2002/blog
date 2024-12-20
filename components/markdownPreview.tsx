"use client";

import useMarkdownPreviewStore from "@/store/markdownPreviewStore";
import Markdown from "react-markdown";

const MarkdownPreview = () => {
  const markdownPreview = useMarkdownPreviewStore((state) => state);

  return (
    <div className="w-full h-full">
      Preview:
      <div className="w-full h-full bg-neutral-700">
        <Markdown className="prose prose-2xl dark:prose-invert">
          {markdownPreview.title}
        </Markdown>
        <Markdown className="prose prose-base dark:prose-invert">
          {markdownPreview.content}
        </Markdown>
      </div>
    </div>
  );
};
export default MarkdownPreview;
