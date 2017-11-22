import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axois from 'axios';
import ImageList from './components/image_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };
  }

  componentWillMount() {
    axois.get('https://api.imgur.com/3/gallery/hot/viral/0')
      .then(({data: {data: data}}) => this.setState({ images: data }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        React App #2
        <ImageList images={this.state.images} />
      </div>
    );
  };
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});