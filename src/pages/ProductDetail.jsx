import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!product) return <div className="min-h-screen flex items-center justify-center">Product not found</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Product Detail: {product.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
          <div>
            <p><strong>ID:</strong> {product.id}</p>
            <p><strong>Title:</strong> {product.title}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Rating:</strong> {product.rating?.rate} ⭐</p>
            <p><strong>Description:</strong> {product.description}</p>
          </div>
          <div className="flex justify-center">
            <img src={product.image} alt={product.title} className="w-48 h-48 object-contain rounded border" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
