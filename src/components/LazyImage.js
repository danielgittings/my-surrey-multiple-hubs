import React, { Component } from 'react'
import LazyLoad from 'react-lazy-load';
import BlurImageLoader from 'react-blur-image-loader';

class LazyImage extends Component {
  state = {
    loaded: false
  }

  loaded = () => {
    console.log('function called')
    this.setState({
      loaded: true
    });
  }

  render() {
    return (
      <div style={{ height: '191px', display: 'block', width: '100%', backgroundColor: '#eeeeee'}}>
        {/* <LazyLoad height={191} offsetTop={10}>
          <img style={{ width: '100%' }} src={this.props.src} alt={this.props.alt} onLoad={this.loaded}/>
        </LazyLoad> */}

        <BlurImageLoader src={this.props.src}
          preview={this.props.preview}
          fullCover={true}
          maxBlurLevel={10}
          transitionTime={400}/>
      </div>
    );
  }
}

export default LazyImage;
