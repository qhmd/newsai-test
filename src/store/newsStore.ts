import { create } from 'zustand'
const useSearchStore = create<NewsStore>((set, get) => ({
    searchInput: "",
    searchQuery: "",
    isSearching: false,
    setSearchInput: (q) => set({ searchInput: q }),
    commitSearch: () => {
        const input = get().searchInput;
        if (input.trim()) {
            set({ searchQuery: input, isSearching: true });
        }
    },
    setIsSearching: (v) => set({ isSearching: v }),
}))

export default useSearchStore