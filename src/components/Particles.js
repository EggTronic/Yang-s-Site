import React, { Component } from 'react';
import Particles from 'react-particles-js'
import '../css/particles.css';

const particlesOptions = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

class ParticlesWrapper extends Component {
    render() {
        return <Particles className='particles' params={particlesOptions} />
    }
}

export default ParticlesWrapper;