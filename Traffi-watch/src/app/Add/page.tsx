"use client";
import React, { useState, useEffect, useNavigate } from 'react';
import { FiUpload, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { BsTextLeft } from "react-icons/bs";
import {IoTextOutline } from "react-icons/io5";

function AddPage() {
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [uri, setUri] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        location,
        description,
        image: uri
      };

      const response = await fetch('/api/posts/uploadToCloudinary', {
        method: 'POST',
        body: JSON.stringify(data)
      });

      if (response.ok) {
        // Post created successfully
        setSuccessMessage('Post created');
        setLocation('');
        setDescription('');
        setImageFile(null);
      } else {
        // Error occurred while creating the post
        const errorData = await response.json();
        setErrorMessage(`Error creating post: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error creating post:', error);
      setErrorMessage('An error occurred while creating the post');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setUri(reader.result);
    };
  };

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
  };

  useEffect(() => {
    // Clear error and success messages after a timeout
    const clearMessages = setTimeout(() => {
      setErrorMessage('');
      setSuccessMessage('');
    }, 5000);

    return () => clearTimeout(clearMessages);
  }, [errorMessage, successMessage]);

  return (
<div className="container p-8 mx-auto px-4 mt-40 flex items-center justify-center bg-slate-400">
  {errorMessage && <p className="text-red-500">{errorMessage}</p>}
  {successMessage && <p className="text-green-500">{successMessage}</p>}
  <form onSubmit={handleSubmit} className="block">
    <div className="relative mb-4 w-40 h-40">
    <input
      type="text"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      placeholder="Location"
      className="pl-8 pr-2 py-2 border border-gray-400 block w-80"
    />
    <GrLocation className="absolute left-2 top-2 text-gray-900" style={{ fontSize: '1.25rem' }} />
  </div>
    <div className="relative mb-4">
  <textarea
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    placeholder="Description"
    className="pl-8 pr-2 py-2 border border-gray-400 block w-80 h-40 resize-none"
  ></textarea>
  <BsTextLeft className="absolute left-2 top-2 text-gray-900" style={{ fontSize: '1.5rem' }} />
</div>
    <input
      type="file"
      accept="image/*"
      onChange={handleImageChange}
      className="mb-4 block"
    />
    <button
      type="submit"
      className="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none hover:bg-blue-600 items-center justify-center"
    >
    Create Post
    </button>
  </form>
</div>

  );
}

export default AddPage;

