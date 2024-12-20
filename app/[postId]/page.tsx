import Article from "@/components/article";

const Post = async ({ params }: { params: Promise<{ postId: number }> }) => {
  const postId = (await params).postId;

  return (
    <div className="relative w-full h-full bg-neutral-700">
      <div className="absolute left-1/2 -translate-x-1/2 w-5/6 m-5">
        <Article postId={postId} />
      </div>
    </div>
  );
};
export default Post;
