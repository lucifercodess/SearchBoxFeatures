import React from 'react';

const SearchBox = ({ searchText, setSearchText }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search for blogs..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg"
      />
    </div>
  );
};

export default SearchBox;
