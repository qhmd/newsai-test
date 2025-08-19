import { AnimatePresence, motion } from "motion/react";

interface NewsGridProps {
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
}

const NewsGrid = ({ items, renderItem }: NewsGridProps) => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <AnimatePresence>
        {items.map((item, idx) => (
          <motion.div
            key={item._id || idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {renderItem(item, idx)}
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default NewsGrid;
