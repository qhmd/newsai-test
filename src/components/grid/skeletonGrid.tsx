import NewsSkeleton from "../newsSkeleton";

const SkeletonGrid = ({ count = 5 }: { count?: number }) => {
  return (
    <div className="container mx-auto px-4 py-22">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {Array.from({ length: count }, (_, idx) => (
          <NewsSkeleton key={idx} />
        ))}
      </div>
    </div>
  );
};

export default SkeletonGrid;
