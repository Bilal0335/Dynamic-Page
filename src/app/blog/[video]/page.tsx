interface VideoProps {
  params: {
    video: string; // ID of the video passed in the URL
  };
}

const Video = async ({ params }: VideoProps) => {
  const fetchData = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.video}`
  );
  const res = await fetchData.json(); // Convert the response to JSON

  return (
    <div>
      <h1>Video Page</h1>
      <p>{res.title}</p>
      <p>{res.body}</p>
    </div>
  );
};

export default Video;
