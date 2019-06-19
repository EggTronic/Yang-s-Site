import React, { Component } from 'react';
import { Header, About, Resume, Portfolio, Testimonials, Contact, Footer } from '../components/Home/index.js';
import resumeData from '../statics/resumeData.json';
import './../css/default.css';
import './../css/fonts.css';
import './../css/layout.css';
import './../css/magnific-popup.css';
import './../css/media-queries.css';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };
  }

  getResumeData() {
    this.setState({ resumeData: resumeData });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div>
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Testimonials data={this.state.resumeData.testimonials} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    )
  }
}

export default Home
