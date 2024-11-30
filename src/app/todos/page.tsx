import Link from "next/link";
const Todos = async () => {
  const fetchDatas = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const res = await fetchDatas.json();
  console.log(res);
  return (
    <div>
      <h1 className=" text-center mb-5 mt-5 text-4xl text-green-900">Dynamic Todos</h1>
    
      <ul>
        <div className="grid grid-cols-4 gap-5 mb-5 p-4">
          {res.map((items: any) => (
            <li key={items.id}>
              <Link href={`/todos/${items.id}`}>
                <div className="py-5 px-7 shadow-2xl shadow-yellow-500 rounded-lg border-2 border-red-600 font-bold">
                  {items.title}
                </div>
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Todos;
