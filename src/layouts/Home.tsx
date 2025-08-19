import { fetchNews } from "../../api/newsApi";
import { useInfiniteQuery } from "@tanstack/react-query";
import NewsCard from "../components/newsCard";
import SkeletonGrid from "../components/grid/skeletonGrid";
import NewsGrid from "../components/grid/newsGrid";
import InfiniteLoaderButton from "../components/loaderButton";
import useSearchStore from "../store/newsStore";

const Home = () => {
  const { searchQuery, isSearching } = useSearchStore();

  const homeQuery = useInfiniteQuery({
    queryKey: ["news", "home"],
    queryFn: ({ pageParam = 0 }) => fetchNews({ page: pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.docs.length === 0) return undefined;
      return allPages.length;
    },
    initialPageParam: 0,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000, 
    enabled: !isSearching, 
  });

  // Query untuk search
  const searchQueryResult = useInfiniteQuery({
    queryKey: ["news", "search", searchQuery],
    queryFn: ({ pageParam = 0 }) =>
      fetchNews({ page: pageParam, query: searchQuery }),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.docs.length === 0) return undefined;
      return allPages.length;
    },
    initialPageParam: 0,
    enabled: isSearching && !!searchQuery,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  const activeQuery = isSearching ? searchQueryResult : homeQuery;
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = activeQuery;

  if (isLoading) return <SkeletonGrid />;

  const articles = data?.pages.flatMap((page) => page.docs) || [];

  return (
    <div className="container mx-auto px-4 pb-8 pt-16">
      {isSearching && searchQuery && (
        <h1 className="text-white font-bold text-3xl mt-6 mb-8">
          Showing results for "{searchQuery}"
        </h1>
      )}
      
      <NewsGrid
        items={articles}
        renderItem={(article) => <NewsCard news={article} />}
      />

      {hasNextPage && (
        <InfiniteLoaderButton
          onClick={() => fetchNextPage()}
          isLoading={isFetchingNextPage}
          label={isSearching ? "Load More Results" : "Load More News"}
        />
      )}
    </div>
  );
};

export default Home;