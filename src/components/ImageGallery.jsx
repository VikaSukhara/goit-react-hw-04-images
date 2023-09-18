import { ImageGalleryItem } from './ImageGalleryItem';
export const ImageGallery = ({ photos, largePhotoFunction }) => {
  return (
    <ul className="ImageGallery">
      {photos.map(photo => {
        return (
          <ImageGalleryItem
            key={photo.id}
            largePhotoFunction={largePhotoFunction}
            photo={photo}
            smallImg={photo.webformatURL}
            largePhoto={photo.largeImageURL}
            tag={photo.tags}
          />
        );
      })}
    </ul>
  );
};
