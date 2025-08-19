import { Loader2 } from "lucide-react";
import { motion } from "motion/react";

interface InfiniteLoaderButtonProps {
  onClick: () => void;
  isLoading: boolean;
  disabled?: boolean;
  label?: string;
}

const InfiniteLoaderButton = ({
  onClick,
  isLoading,
  disabled,
  label = "Load More",
}: InfiniteLoaderButtonProps) => {
  return (
    <motion.div
      className="flex justify-center mt-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <button
        onClick={onClick}
        disabled={isLoading || disabled}
        className="bg-blue-900 hover:bg-blue-800 disabled:bg-gray-500 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 flex items-center space-x-2"
      >
        {isLoading && <Loader2 className="animate-spin" size={20} />}
        <span>{label}</span>
      </button>
    </motion.div>
  );
};

export default InfiniteLoaderButton;
