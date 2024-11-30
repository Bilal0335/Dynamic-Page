import Link from "next/link";
import Navbar from "../../../components/Navbar";
const Products = async () => {
  const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await fetchData.json();
  console.log(res);
  return (
    <div>
      <Navbar />
      <h3>Products List</h3>
      <ol>
        {/* <li>
          <Link href={"/products/product1"}>Product 1</Link>
        </li>
        <li>
          <Link href={"/products/product2"}>Product 2</Link>
        </li>
        <li>
          <Link href={"/products/product3"}>Product 3</Link>
        </li> */}
        {/* <li>Hello Post API</li> */}
        {res.map((items: any, i: any) => (
          <li key={items.id}>
            <Link href={`/products/${items.id}`}>{items.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Products;
