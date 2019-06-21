import React, { Component } from 'react';
import MediaPlayer from '../components/MediaPlayer';
import ParticlesWrapper from '../components/Particles';
import { Header, Footer } from '../components/Producer/index.js';
import '../css/myStyle/producer.css';

export class Producer extends Component {
    render() {
        return (
            <div className='producer'>
                <section className='background'>
                    <ParticlesWrapper />
                </section>
                <MediaPlayer />
                <section className='intro'>
                    <h1>Welcome EggTronic's Music Center</h1>
                </section>
            </div>
        )
    }
}

export default Producer
