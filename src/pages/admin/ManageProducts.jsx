import React, { useState, useEffect } from 'react';
import api from '../../api';
import { FaPlus, FaEdit, FaTrash, FaArrowLeft } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [categories, setCategories] = useState([]); // Dynamic categories
  const [loading, setLoading] = useState(true);
  
  // Form State
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    industry: ''
  });
  const [showForm, setShowForm] = useState(false);

  const fetchProducts = async () => {
    try {
      const res = await api.get('/products');
      setProducts(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const fetchIndustries = async () => {
    try {
      const res = await api.get('/industries');
      setIndustries(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await api.get('/categories');
      setCategories(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchIndustries();
    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      try {
        await api.delete(`/products/${id}`);
        setProducts(products.filter(p => p._id !== id));
        Swal.fire(
            'Deleted!',
            'Product has been deleted.',
            'success'
        );
      } catch (err) {
        console.error(err);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Failed to delete product',
        });
      }
    }
  };

  const handleEdit = (product) => {
    setIsEditing(true);
    setCurrentProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      industry: product.industry?._id || ''
    });
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await api.put(`/products/${currentProduct._id}`, formData);
        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: 'Product updated successfully',
            timer: 1500
        });
      } else {
        await api.post('/products', formData);
        Swal.fire({
            icon: 'success',
            title: 'Created!',
            text: 'Product created successfully',
            timer: 1500
        });
      }
      setShowForm(false);
      setFormData({ name: '', category: '', industry: '' });
      setIsEditing(false);
      fetchProducts();
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Operation failed',
      });
    }
  };

  return (
    <div className="container mx-auto px-10 py-10 font-primary">
      <Link to="/admin" className="flex items-center gap-2 text-gray-600 mb-6 hover:text-black">
        <FaArrowLeft /> Back to Dashboard
      </Link>
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Products</h1>
        <button 
          onClick={() => {
            setShowForm(true);
            setIsEditing(false);
            setFormData({ name: '', category: '', industry: '' });
          }}
          className="bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-opacity-90"
        >
          <FaPlus /> Add Product
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4">{isEditing ? 'Edit Product' : 'Add New Product'}</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Product Name</label>
                <input 
                    type="text" 
                    placeholder="Enter product name" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="border p-2 rounded w-full"
                    required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Category</label>
                <select
                    value={formData.category}
                    onChange={e => setFormData({...formData, category: e.target.value})}
                    className="border p-2 rounded w-full"
                    required
                >
                    <option value="">Select Category</option>
                    {categories.map(cat => (
                        <option key={cat._id} value={cat.name}>{cat.name}</option>
                    ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Industry</label>
                <select 
                    value={formData.industry}
                    onChange={e => setFormData({...formData, industry: e.target.value})}
                    className="border p-2 rounded w-full"
                    required
                >
                    <option value="">Select Industry</option>
                    {industries.map(ind => (
                    <option key={ind._id} value={ind._id}>{ind.name}</option>
                    ))}
                </select>
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 text-gray-600">Cancel</button>
                <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
                    {isEditing ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {loading ? <p>Loading...</p> : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 rounded-tl-xl">Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">Industry</th>
                <th className="p-4 rounded-tr-xl">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product._id} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium">{product.name}</td>
                  <td className="p-4">{product.category}</td>
                  <td className="p-4">{product.industry?.name || '-'}</td>
                  <td className="p-4 flex gap-3">
                    <button onClick={() => handleEdit(product)} className="text-blue-600 hover:text-blue-800"><FaEdit /></button>
                    <button onClick={() => handleDelete(product._id)} className="text-red-600 hover:text-red-800"><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
