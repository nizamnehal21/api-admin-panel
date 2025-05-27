import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




const Main = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState('');


  const GetData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    
    setProducts(data);

    console.log(data);
  }

  useEffect(() => {

    GetData();
  }, []);

  return (
    <>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
            <form
              onSubmit={async (e) => {
                e.preventDefault();

                const newProduct = {
                  title,
                  price: parseFloat(price),
                  description,
                  image: image || '',
                  category: category || 'misc',
                  rating: {
                    rate: parseFloat(rating),
                    count: 1 
                  }
                };

                try {
                  const res = await fetch('https://fakestoreapi.com/products', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newProduct),
                  });

                  const data = await res.json();
                  data.rating = { rate: parseFloat(rating), count: 1 }; 
                  data.category = category || 'misc'; 
                  data.image = image || ''; 

                  console.log('Product added:', data);
                  alert('Product added successfully!');
                  setProducts([data, ...products]); 
                  setShowModal(false);

                  setTitle('');
                  setPrice('');
                  setDescription('');
                  setCategory('');
                  setRating('');
                  setImage('');

                } catch (error) {
                  console.error('Error adding product:', error);
                  alert('Failed to add product.');
                }
              }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Title"
                className="w-full border p-2 rounded"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Price"
                className="w-full border p-2 rounded"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Category"
                className="w-full border p-2 rounded"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
              <textarea
                placeholder="Description"
                className="w-full border p-2 rounded"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />

              <input
                type="number"
                placeholder="Rating"
                className="w-full border p-2 rounded"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              />
              <input
                type="File"
                placeholder="Image URL"
                className="w-full border p-2 rounded"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />

              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}



      <div className=" w-[82vw] mt-15 ml-[17vw] ">
        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Products</h1>
            <div className="flex items-center space-x-4">
              <button className="border px-4 py-2 rounded shadow-sm bg-white">Export</button>
              <button
                onClick={() => setShowModal(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add Product
              </button>
              <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                SA
              </div>
            </div>
          </div>

          {/* Subheader */}
          <p className="text-gray-500 mb-4">Manage all products from FakeStore API</p>

          {/* Tabs */}
          <div className="flex space-x-4 mb-4">
            <button className="px-4 py-1 rounded bg-blue-100 text-blue-600 font-semibold">All</button>
            <button className="px-4 py-1 rounded hover:bg-gray-100">Electronics</button>
            <button className="px-4 py-1 rounded hover:bg-gray-100">Jewelery</button>
            <button className="px-4 py-1 rounded hover:bg-gray-100">Clothing</button>
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center border rounded px-3 py-2 w-64 bg-white">
              <input className="w-full outline-none" type="text" placeholder="Search..." />
            </div>
            <select className="px-3 py-2 border rounded bg-white">
              <option>All Categories</option>
              <option>Men's Clothing</option>
              <option>Women's Clothing</option>
              <option>Electronics</option>
              <option>Jewelery</option>
            </select>
          </div>

          {/* Table */}
          <div className="bg-white shadow rounded max-w-full">
            <div className="grid grid-cols-7 p-4 border-b text-sm font-semibold text-gray-600">
              <div>ID</div>
              <div>Title</div>
              <div>Price</div>
              <div>Category</div>
              <div>Rating</div>
              <div>Pictures</div>
              <div>Actions</div>
            </div>

            {products.map(product => (
              <div key={product.id} className="grid grid-cols-7 p-4 text-sm items-center border-b w-full">
                <div>{product.id}</div>
                <div className="truncate pr-2">{product.title}</div>
                <div>${product.price}</div>
                <div>{product.category}</div>
                <div>{product.rating?.rate}⭐</div>

                <img src={product.image} alt={product.title} className="w-10 h-10 rounded" />

                <div>
                  <Link to={`/product-detail/${product.id}`} className="text-blue-600 hover:underline mr-2">
                    <button className="text-blue-600 hover:underline">View</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Main;
