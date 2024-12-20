import MarkdownPreview from "@/components/markdownPreview";
import PostForm from "@/components/postForm";

const Admin = () => {
  return (
    <div className="flex flex-row">
      <div className="w-1/2">
        <PostForm />
      </div>
      <div className="px-2"></div>
      <div className="w-1/2">
        <MarkdownPreview />
      </div>
    </div>
  );
};
export default Admin;
