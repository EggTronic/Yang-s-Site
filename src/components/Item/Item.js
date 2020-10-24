import React, { useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';
import { fadeIn, fadeOut } from '../../utils';


const PriceSection = styled.div`
  line-height: 15px;
  padding: 4px 10px;
  text-align: right;
  position: relative;
  background: linear-gradient( 135deg, rgba(37,49,63,1) 5%,rgba(54,97,125,1) 95%);
`;

const Preview = styled.img`
  height: calc(100% - 127.81px);
  width: 100%;
  object-fit: cover;
  display: block;
  opacity: 0.8;
  cursor: pointer;
`;

const Modal = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 10000; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
  /* Modal Content (Image) */
  .modal-content {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
  }

  /* Caption of Modal Image (Image Text) - Same Width as the Image */
  #caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    height: 150px;
  }

  /* Add Animation - Zoom in the Modal */
  .modal-content, #caption {
    animation-name: zoom;
    animation-duration: 0.6s;
  }

  @keyframes zoom {
    from {transform:scale(0)}
    to {transform:scale(1)}
  }

  /* The Close Button */
  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
  }

  .close:hover,
  .close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  } 

  /* 100% Image Width on Smaller Screens */
  @media only screen and (max-width: 700px){
    .modal-content {
      width: 100%;
    }
  }
`;

const Wrapper = styled.div`
  height: 400px;
  width: 300px;
  font-family: Tahoma, Arial, Helvetica, sans-serif;
  box-shadow: 0 0 5px #000;
  margin: 20px;
  :hover ${PriceSection}{
    background: rgba(54,97,125,1);
  }
  :hover ${Preview} {
    opacity: 1;
  }
`;

const Discount = styled.div`
  color: #a4d007;
  background: #4c6b22;
  display: inline-block;
  padding: 0 3px;
  line-height: 34px;
  padding: 0 5px;
  font-size: 26px;
`;

const PriceWrapper = styled.div`
  background-color: rgba(0,0,0,0.6);
  display: inline-block;
  vertical-align: bottom;
  text-align: center;
  line-height: 13px;
  padding: 4px 10px 4px 7px;
`;

const OriginalPrice = styled.div`
  color: #7193a6;
  text-decoration: line-through;
  font-size: 11px;
`;

const NewPrice = styled.div`
  color: #acdbf5;
  padding-left: 4px;
  font-size: 11px;
`;

const Content = styled.div`
  text-align: left;
  p {
    font-family: "Motiva Sans", Sans-serif;
    font-weight: 300;
    color: #acdbf5;
  }
  h2 {
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px; 
  }
`;

function Item({ name, image, price, discount }) {
  const wrapper = useRef(null);
  const preview = useRef(null);
  
  const discountText = '-' + discount * 100 + '%';
  const newPrice = (price * (1 - discount)).toFixed(2);

  const handleOpen = () => {
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modalImg");
    let captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = preview.current.src;
    captionText.innerHTML = preview.current.alt;
  };

  const handlClose = () => {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
  };

  const intersection = useIntersection(wrapper, {
    root: null,
    rootMargin: '10px',
    threshold: 0.4
  });

  intersection && intersection.intersectionRatio < 0.4
    ? fadeOut(wrapper.current)
    : fadeIn(wrapper.current);

  return (
    <>
      <Modal
        id="modal"
        onClick={handlClose}
      >
        <span
          className="close"
          onClick={handlClose}
        >&times;
        </span>
        <img
          className="modal-content"
          id="modalImg"
          alt={name}
          onClick={e => e.stopPropagation()}
        />
        <div id="caption"></div>
      </Modal>
      <Wrapper ref={wrapper}>
        <Preview
          src={image}
          ref={preview}
          alt={name}
          onClick={handleOpen}
        />

        <PriceSection>
          <Content>
            <h2>{name}</h2>
            <p>Offer ends 20 Nov @ 20:00pm.</p>
          </Content>
          <Discount>
            {discountText}
          </Discount>
          <PriceWrapper>
            <OriginalPrice>A$ {price}</OriginalPrice>
            <NewPrice>A$ {newPrice}</NewPrice>
          </PriceWrapper>
        </PriceSection>
      </Wrapper>
    </>
  )
}

export default Item;
