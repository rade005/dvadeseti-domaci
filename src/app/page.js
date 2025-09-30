export default async function Home() {

  const url = "https://dummyjson.com/products?limit=9";
  const response = await fetch(url);

  const data = await response.json();
  const products = data.products;


  return (
      <div>
        <ul>
      {products.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
  </ul>
</div>
  );
}
