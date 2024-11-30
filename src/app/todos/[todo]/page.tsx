const Todo = async ({ params }: { params: { todo: string } }) => {
  const fetchDatas = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.todo}`
  );
  const res = await fetchDatas.json();

  return (
    <>
      <div className="py-2 px-4 shadow-2xl shadow-yellow-500 rounded-lg border-2 border-red-600 font-bold mt-14 ml-14 mr-14">
        <h1 className="text-3xl text-center font-black mb-5 underline">Todos</h1>

        <div className="mb-4">
          <p className="text-2xl font-semibold">
            UserId: <span className="text-1xl text-red-500 font-bold">{res.userId}</span>
          </p>
        </div>

        <div className="mb-4">
          <p className="text-2xl font-semibold">
            ID: <span className="text-1xl  text-red-500 font-bold">{res.id}</span>
          </p>
        </div>

        <div className="mb-4">
          <p className="text-2xl font-semibold">
            Title: <span className="text-2xl font-normal text-green-900">{res.title}</span>
          </p>
        </div>

        <div className="mb-4">
          <p className="text-2xl font-semibold">
            Description: <span className="text-xl font-normal text-blue-700" >{res.body}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Todo;
