import { Button } from './Button';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Searchbar } from './Searchbar';
import { Modal } from './Modal';
import { useEffect, useState } from 'react';
import { fetchImages } from './Api';
import toast, { Toaster } from 'react-hot-toast';

export const App = () => {
  const [quary, setQuary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [image, setImage] = useState([]);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [totalHits, setTotalHits] = useState(0);


  const handlerSubmit = event => {
    event.preventDefault();
    setQuary(`${Date.now()}/${event.target.elements.quary.value}`);
    setImage([]);
    setPage(1);
  };

  const handlerNewPage = () => {
    setPage(prevItems => prevItems + 1);
  };

  const findLargePhotoInfo = largeImageURL => {
    setModalImage(largeImageURL);
    setShowModal(true);
  };

  const closeModalEscape = event => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      setShowModal(false);
      setModalImage(' ');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', closeModalEscape)
    return () => {
      document.removeEventListener('keydown', closeModalEscape)
    }
  }, [])

  useEffect(() => {
    async function getQuaryPhotos() {
      try {
        setLoading(true);
        const imagesSearch = await fetchImages(quary, page);
        if (page > 1) {
          setImage(prevItems => [...prevItems, ...imagesSearch.hits]);
          setTotalHits(Math.round(imagesSearch.totalHits / 12));
        } else if (imagesSearch.hits.length === 0) {
          setImage([]);
          toast.error('Nothing was found!');
          return;
        } else {
          toast.success(`${imagesSearch.totalHits} were found`);
          setImage(imagesSearch.hits);
          setTotalHits(Math.round(imagesSearch.totalHits / 12));
        }
      } catch (error) {
        setError(true);
        toast.error('Something was wrong!');
      } finally {
        setLoading(false);
        setError(false);
      }
    }

    if (quary) {
      getQuaryPhotos();
    }
  }, [quary, page]);

  return (
    <div>
      <Searchbar onSubmit={handlerSubmit} />
      {image.length > 0 && (
        <ImageGallery photos={image} largePhotoFunction={findLargePhotoInfo} />
      )}
      {loading && <Loader />}
      {error && <h1>Something was wrong!</h1>}
      {image.length > 0 && totalHits > 0 && page !== totalHits && (
        <Button newPage={handlerNewPage} />
      )}
      {showModal > 0 && (
        <Modal bigImage={modalImage} closeModal={closeModalEscape} />
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
