import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Catalog = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Product Catalog</h1>
      
      {/* ช่องค้นหา (Controlled Component) */}
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-3 border rounded-lg mb-8 focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-800 dark:border-gray-600"
        onChange={(e) => setSearch(e.target.value)} 
      />

      {/* แสดงรายการสินค้าแบบ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;