import React, { useState } from 'react';
import BlogItem from './BlogItem';
import Loader from './Loader';

const BlogList = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(1); // 1 because we will always be at [age 1 at the beginning
  const blogsPerPage = 7; // Number of blogs per page
 

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  if (blogs.length === 0) {
    return <Loader />;
  }

  return (
    <div className="p-4">
      <ul className="space-y-4">
        {currentBlogs.map((blog, index) => (
          <BlogItem key={index} blog={blog} />
        ))}
      </ul>
      {/* this will show at the bottom of the screen */}
      {/* Pagination */}
      <div className="flex items-center justify-center mt-6 space-x-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-600 disabled:bg-gray-300 disabled:cursor-not-allowed`}
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-600 disabled:bg-gray-300 disabled:cursor-not-allowed`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogList;
