import { useState, useEffect } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { Loader } from 'components/Loader/Loader';
import { LoaderButton } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { fetchImages } from 'api';

export const App = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [namePhoto, setNamePhoto] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function updatedImages() {
      try {
        const newImages = await fetchImages(namePhoto, page);
        setIsLoading(true);
        setGalleryItems(prevItems => [...prevItems, ...newImages]);
      } catch (error) {
        console.log('Something wrong...');
      } finally {
        setIsLoading(false);
      }
    }

    updatedImages();
  }, [namePhoto, page]);

  const increasePage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const onSubmitPhoto = e => {
    e.preventDefault();

    setGalleryItems([]);
    setNamePhoto(e.target.search.value.trim());
    setPage(1);
  };

  return (
    <>
      <Searchbar onSubmit={onSubmitPhoto} />
      <ImageGallery items={galleryItems} />
      {isLoading && <Loader></Loader>}
      {galleryItems.length >= 12 && <LoaderButton onClick={increasePage} />}
    </>
  );
};
