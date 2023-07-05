"use client";
import React, { useState, useEffect } from 'react';

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
    <div className="container mx-auto px-4 mt-40">
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      <form onSubmit={handleSubmit} className="block">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="mb-4 p-2 border border-gray-400 block w-full"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="mb-4 p-2 border border-gray-400 block w-full"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4 block"
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Image Preview"
            className="mb-4 max-w-xs"
          />
        )}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}

export default AddPage;

