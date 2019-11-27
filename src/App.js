import React, { Component } from 'react';
import './App.css';
import Navigation from './component/Navigation/Navigation';
import Logo from './component/Logo/Logo';
import ImageLinkForm from './component/ImageLinkForm/ImageLinkForm';
import Rank from './component/Rank/Rank';
import FaceRecognition from './component/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '045c9f06ee5947fda74a8579b25f2fe0'
});

const particlesOption = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: ''
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onSubmit = () => {
    this.setState({ imageURL: this.state.input })
    console.log('click');
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(
        function (response) {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
          // do something with response
        },
        function (err) {
          // there was an error
        }
      );
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particlesOption} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
        <FaceRecognition imageURL={this.state.imageURL} />
      </div>
    );
  }
}

export default App;
