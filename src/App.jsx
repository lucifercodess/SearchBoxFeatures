import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import CategoryFilter from './components/CategoryFilter';
import BlogList from './components/BlogList';
import { blogs } from './constants/blog';


const App = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter blogs based on search and category
  const filterBlogs = () => {
    return blogs.filter((blog) => {
      const matchesSearch = blog.title.toLowerCase().includes(searchText.toLowerCase()) ||blog.content.toLowerCase().includes(searchText.toLowerCase());
      const matchesCategory = selectedCategory ? blog.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">Blog Search</h1>

      {/* search input box */}
      <SearchBox searchText={searchText} setSearchText={setSearchText} /> 
      {/* category dfilter you can filetr based on your choice */}
      <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      {/* this will actually display the blof list, and we map across the blog  */}
      <BlogList blogs={filterBlogs()} />
    </div>
  );
};

export default App;
