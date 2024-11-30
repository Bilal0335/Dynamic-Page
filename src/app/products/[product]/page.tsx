interface paramsProps {
  params: {
    product: string;
  };
}
const Product = async ({ params }: paramsProps) => {
  const fetchData = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.product}`
  );
  const res = await fetchData.json();
  console.log(res);
  return (
    <div>
      <h2>Product Detail</h2>
      <h1>{res.id}</h1>
      <h3>{res.title}</h3>
      <p>{res.body}</p>
    </div>
  );
};

export default Product;
