import { useState } from 'react';
import { GalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import Modal from 'react-modal';
import { ImageModal } from './ImageGallery.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    marginTop: '50px',
  },
};

Modal.setAppElement('#root');

export const ImageGallery = ({ items }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = img => {
    setSelectedImage(img);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <GalleryList>
        {items.map(({ id, largeImageURL, webformatURL, tags }) => (
          <ImageGalleryItem
            key={id}
            imgWeb={webformatURL}
            name={tags}
            onImageClick={() => handleImageClick(largeImageURL)}
          />
        ))}
      </GalleryList>
      {selectedImage && (
        <Modal
          isOpen={true}
          onRequestClose={handleModalClose}
          style={customStyles}
          contentLabel="Image Modal"
        >
          <ImageModal src={selectedImage} alt={selectedImage}></ImageModal>
        </Modal>
      )}
    </>
  );
};
