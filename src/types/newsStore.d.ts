interface NewsStore {
  searchInput: string;   
  searchQuery: string;   
  isSearching: boolean;
  setSearchInput: (q: string) => void;
  commitSearch: () => void;
  setIsSearching: (v: boolean) => void;

}