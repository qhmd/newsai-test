
const Title = ({ url, title }: Title) => (
    <a href={url}
        target="_blank"
        rel="noopener noreferrer"
    >
        <p className="text-lg font-semibold leading-tight mb-3 text-white line-clamp-2 hover:text-blue-700 transition-colors duration-250">
            {title}
        </p>
    </a>
)

export default Title