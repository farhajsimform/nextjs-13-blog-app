import { Product } from "../../components/product";

export const dynamic = "force-dynamic";

async function fetchProducts() {
  const productsResponse = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  return productsResponse.json();
}

export default async function Page() {
  const { allProducts: { products = [] } = {} } = await fetchProducts();

  return (
    <div className="flex flex-wrap w-full mt-8 justify-center">
      {(products || []).map((product: any) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
