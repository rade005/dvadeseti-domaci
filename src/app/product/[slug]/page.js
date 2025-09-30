export default async function Slug({params}) {
    const slug = params.slug;

    const url = `https://dummyjson.com/products/${slug}`;
    const response = await fetch(url);

    if(!response.ok) {
        return <h1>Ova stranica ne postoji</h1>;
    }

   const product = await response.json();

    return (
        <div>
        <h1>{product.title}</h1>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
        </div>
    )
}