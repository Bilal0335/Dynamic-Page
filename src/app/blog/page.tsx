import React from "react";
import Link from "next/link";

const Blog = async () => {
  const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const res = await fetchData.json(); // Convert the response to JSON

  return (
    <div>
      <h1>Blog Page</h1>
      <ol>
        {res.map((item: any) => (
          <li key={item.id}>
            <Link href={`/blog/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Blog;

{
  //   {
  //     "accessToken": "e5f047fae36661f7a2a99b628dd4160a65820e525143c99df8cbcd2a7afac55d"
  // }
  /* {res.map((items: any, i: any) => (
  <li key={items.id}>
    <Link href={`/blog/${items.id}`}>{items.title}</Link>
  </li>
))} */
}

{
  /* <li>
  <Link href={"/blog/video1"}>Video 1</Link>
</li>
<li>
  <Link href={"/blog/video2"}>Video 2</Link>
</li>
<li>
  <Link href={"/blog/video3"}>Video 3</Link>
</li> */
}
