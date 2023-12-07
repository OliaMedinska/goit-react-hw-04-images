import { Component } from 'react';
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

export class ImageGallery extends Component {
  state = {
    selectedImage: null,
  };

  handleImageClick = img => {
    this.setState({
      selectedImage: img,
    });
  };

  handleModalClose = () => {
    this.setState({
      selectedImage: null,
    });
  };

  render() {
    const { items } = this.props;
    const { selectedImage } = this.state;

    return (
      <>
        <GalleryList>
          {items.map(({ id, largeImageURL, webformatURL, tags }) => (
            <ImageGalleryItem
              key={id}
              imgWeb={webformatURL}
              name={tags}
              onImageClick={() => this.handleImageClick(largeImageURL)}
            />
          ))}
        </GalleryList>
        {selectedImage && (
          <Modal
            isOpen={true}
            onRequestClose={this.handleModalClose}
            style={customStyles}
            contentLabel="Image Modal"
          >
            <ImageModal
              src={selectedImage}
              alt={selectedImage}
              onClick={this.handleModalClose}
            ></ImageModal>
          </Modal>
        )}
      </>
    );
  }
}
