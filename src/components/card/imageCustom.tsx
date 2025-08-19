const ImageCustom = ({ caption, url }: { caption?: string; url?: string }) => (
    <div className="flex-shrink-0 w-full overflow-hidden">
        <img
            src={url}
            alt={caption}
            className="w-full h-60 object-cover rounded duration-500 ease-in-out group-hover:scale-110"
            loading="lazy"
        />
    </div>
);

export default ImageCustom;