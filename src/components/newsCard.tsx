import { motion } from "motion/react"
import Title from "./card/title"
import TimePublsih from "./card/timePublish"
import ImageCustom from "./card/imageCustom"

const NewsCard: React.FC<{ news: NewsDefault}> = ({ news}) => {
    console.log(news)

    return (
        <motion.div
            className="bg-zinc-800 rounded-lg group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{duration: 0.1 }}
        >
            <div className="justify-between items-center flex flex-col">
                <ImageCustom caption={news.title} url={news.imageUrl} />
                <div className="p-6">
                    <Title url={news.url} title={news.title} />
                    <TimePublsih pub_date={news.publishedAt} />
                </div>
            </div>
        </motion.div>

    )
}

export default NewsCard