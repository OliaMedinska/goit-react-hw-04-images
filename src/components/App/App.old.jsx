import React, { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { Loader } from 'components/Loader/Loader';
import { LoaderButton } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { fetchImages } from 'api';

export class App extends Component {
  state = {
    galleryItems: [],
    namePhoto: '',
    page: 1,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { namePhoto, page } = this.state;

    const updatedImages = async () => {
      if (prevState.page !== page || prevState.namePhoto !== namePhoto) {
        const newImages = await fetchImages(namePhoto, page);
        this.setState(prevState => ({
          galleryItems: [...prevState.galleryItems, ...newImages],
        }));
      }
    };

    updatedImages();
  }

  increasePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onSubmitPhoto = e => {
    e.preventDefault();

    this.setState(prevState => ({
      galleryItems: [],
      namePhoto: e.target.search.value.trim(),
      page: 1,
    }));
  };

  render() {
    const { galleryItems, isLoading } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onSubmitPhoto} />
        <ImageGallery items={galleryItems} />
        {isLoading && <Loader></Loader>}
        {galleryItems.length >= 12 && (
          <LoaderButton onClick={this.increasePage} />
        )}
      </>
    );
  }
}
