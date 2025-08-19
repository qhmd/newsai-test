import { Search } from "lucide-react";
import useSearchStore from "../store/newsStore";
import type { JSX } from "react";

const SearchCustom = (): JSX.Element => {
  const { searchInput, setSearchInput, commitSearch }: NewsStore = useSearchStore();

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      commitSearch();
    }
  };

  return (
    <div className="relative w-40 sm:w-96">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Search news"
        className="w-full h-10 px-4 py-2 pl-10 pr-4 text-zinc-400 bg-zinc-800 border border-zinc rounded-lg focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-900 focus:ring-opacity-20"
      />
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
        size={18}
        onClick={commitSearch} 
      />
    </div>
  );
};

export default SearchCustom;
