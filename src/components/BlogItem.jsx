import React from 'react';

const BlogItem = ({ blog }) => {
  return (
    <li className="p-4 border-b border-gray-200 last:border-0">
      <strong className="text-xl">{blog.title}</strong> - <span className="text-gray-600">{blog.category}</span>
      <p className="mt-2 text-gray-700">{blog.content}</p>
    </li>
  );
};

export default BlogItem;
