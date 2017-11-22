import React, { Component } from 'react';
import ImageDetail from './image_detail';

// const IMAGES = [
//   { title: 'Pen', link: 'https://dummyimage.com/600x400' },
//   { title: 'Pine Tree', link: 'https://dummyimage.com/600x400' },
//   { title: 'Mug', link: 'https://dummyimage.com/600x400' }
// ];

class ImageList extends Component {
  constructor(props) {
    super(props);
  }

  validImages() {
    return this.props.images.filter(image => !image.is_album);
  }

  render() {
    const RenderedImages = this.validImages().map(image => {
      return <ImageDetail key={image.title} image={image} />
    });

    return (
      <ul className="media-list list-group">
        { RenderedImages }
      </ul>
    );
  }
}

export default ImageList;