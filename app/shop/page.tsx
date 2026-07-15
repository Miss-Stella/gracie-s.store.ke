import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/shop/ProductGrid";

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProductGrid />
      </main>
      <Footer />
    </>
  );
}