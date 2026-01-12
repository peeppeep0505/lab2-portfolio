import { useParams, useNavigate } from "react-router-dom"; 
import { products } from "../data/products";

const ProductDetail = () => {
  const { id } = useParams(); // ดึง ID จาก URL 
  const navigate = useNavigate(); // ใช้สำหรับสั่งเปลี่ยนหน้า 

  // ค้นหาสินค้าที่ ID ตรงกับใน URL 
  const product = products.find((p) => p.id === id);

  // กรณีไม่พบสินค้า (NotFound Handling)  
  if (!product) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold text-red-500">Product not found!</h2>
        <button 
          onClick={() => navigate("/")} 
          className="mt-4 text-blue-500 underline"
        >
          Go back to Catalog
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto border rounded-2xl shadow-sm p-10"> 
      <button
        onClick={() => navigate(-1)} // สั่งย้อนกลับไปหน้าก่อนหน้า 
        className="mb-4 text-sm text-gray-500 hover:text-black transition"
      >
        ← Back to Catalog
      </button>
      
      <h1 className="text-4xl font-bold mb-2">{product.name}</h1> 
      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
        {product.category} 
      </span>
      <p className="text-2xl text-green-600 my-4">{product.price} THB</p> 
      <p className="text-gray-600 leading-relaxed">{product.desc}</p> 
    </div>
  );
};

export default ProductDetail; 