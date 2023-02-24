import { AllProducts } from "../../components/allproducts";
import { Product } from "../../components/product";

export const dynamic = "force-dynamic";

async function fetchProducts() {
  const productsResponse = await fetch(
    "https://nextjs-13-blog-app.vercel.app/api/products",
    {
      cache: "no-store",
    }
  );
  return productsResponse.json();
}

export default async function Page() {
  const { allProducts: { products = [] } = {} } = await fetchProducts();

  return <AllProducts products={products} />;
}
