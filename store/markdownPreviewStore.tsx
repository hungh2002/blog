import { create } from "zustand";

interface MarkdownPreviewState {
  title: string;
  content: string;
  tag: string;
  update: {
    title: (newTitle: string) => void;
    content: (newContent: string) => void;
    tag: (newtag: string) => void;
  };
}

const useMarkdownPreviewStore = create<MarkdownPreviewState>()((set) => ({
  title: "",
  content: "",
  tag: "",
  update: {
    title: (newTitle) => set({ title: newTitle }),
    content: (newContent) => set({ content: newContent }),
    tag: (newtag) => set({ tag: newtag }),
  },
}));

export default useMarkdownPreviewStore;
