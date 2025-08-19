import { motion } from "motion/react"

const NewsSkeleton = () => (
  <motion.div 
    className="bg-zinc-600 rounded-lg shadow-md p-6 border animate-pulse"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <div className="flex items-start flex-col-reverse">
      <div className="w-full">
        <div className="h-6 bg-zinc-800 rounded mb-3 w-3/4"></div>
        <div className="flex items-center space-x-2 mb-2">
          <div className="h-4 bg-zinc-700 rounded w-1/2"></div>
        </div>
      </div>
      <div className="w-full h-60 bg-zinc-800 rounded mb-2"></div>
    </div>
  </motion.div>
);

export default NewsSkeleton