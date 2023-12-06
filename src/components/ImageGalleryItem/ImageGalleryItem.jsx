import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({imgWeb, name, onImageClick}) => {
    return (
      <GalleryItem onClick={onImageClick}>
        <GalleryImg src={imgWeb} alt={name} />
      </GalleryItem>
    );
  }
