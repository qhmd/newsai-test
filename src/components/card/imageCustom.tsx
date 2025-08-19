const ImageCustom = ({ caption, url }: { caption?: string; url?: string }) => {
  const fallback = "/picture_empty.svg";

  return (
    <div className="flex-shrink-0 w-full overflow-hidden">
      <img
        src={url || fallback}
        alt={caption || "No image available"}
        className="w-full h-60 object-cover bg-white rounded duration-500 ease-in-out group-hover:scale-110"
        loading="lazy"
      />
    </div>
  );
};

export default ImageCustom;
