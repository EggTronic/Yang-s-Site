import React, { Component } from 'react';

class Header extends Component {
  render() {

    if (this.props.data) {
      var header = this.props.data.header;
      var home = header.home;
      var about = header.about;
      var resume = header.resume;
      var work = header.work;
      var testimonial = header.testimonial;
      var contact = header.contact;
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

        <nav id="nav-wrap">

          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">{home}</a></li>
            <li><a className="smoothscroll" href="#about">{about}</a></li>
            <li><a className="smoothscroll" href="#resume">{resume}</a></li>
            <li><a className="smoothscroll" href="#portfolio">{work}</a></li>
            <li><a className="smoothscroll" href="#testimonials">{testimonial}</a></li>
            <li><a className="smoothscroll" href="#contact">{contact}</a></li>
          </ul>

        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
            <hr />
            <ul className="social">
              {networks}
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>

      </header>
    );
  }
}

export default Header;