type Post = {
  id: number;
  title: string;
  content: string;
  date: Date;
};

async function getBlogs() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  return posts;
}

export default async function Home() {
  const posts = await getBlogs();
  return (
    <div className="size-full overflow-none">
      <div className="size-full overflow-y-auto">
        <ul className="flex flex-col gap-2">
          {posts.map((post: Post) => (
            <li
              className="flex flex-col rounded-lg p-2 bg-slate-600 w-full"
              key={post.id}
            >
              <div className="grid grid-cols-[1fr,auto] w-full border-b-2 border-b-slate-700">
                <h2 className="">{post.title}</h2>
                <span className="self-end">{post.date.toString()}</span>
              </div>

              <article>{post.content}</article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
