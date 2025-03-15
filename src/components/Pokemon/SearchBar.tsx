
import { useState, useRef } from "react";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);

    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(() => {
      onSearch(value);
    }, 300);
  };

  return (
    <div className="mb-8 relative max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search Pokemon..."
        value={searchInput}
        onChange={handleSearchChange}
        className="w-full p-4 pl-12 pr-4 text-black rounded-full border-2 border-purple-200 focus:border-purple-400 focus:outline-none shadow-md transition-all duration-300"
      />
      <div className="absolute left-4 top-4 text-gray-400">
        🔍
      </div>
    </div>
  );
};

export default SearchBar;
