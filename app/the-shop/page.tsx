import Product from "@components/Product";
import { supabase } from "@lib/supabaseClient";
import { notFound } from "next/navigation";

export const revalidate = 60;
export default async function ProductPage() {
  const { data: products } = await supabase.from("products").select().eq("claimed", false);

  if (!products) notFound();

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}
