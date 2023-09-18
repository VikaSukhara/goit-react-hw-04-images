export const ImageGalleryItem = ({
  largePhotoFunction,
  largePhoto,
  smallImg,
  tags,
}) => {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => largePhotoFunction(largePhoto)}
    >
      <img src={smallImg} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
};
