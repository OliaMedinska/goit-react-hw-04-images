import { Component } from 'react';
import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  render() {
    const { imgWeb, name, onImageClick } = this.props;

    return (
      <GalleryItem onClick={onImageClick}>
        <GalleryImg src={imgWeb} alt={name} />
      </GalleryItem>
    );
  }
}
