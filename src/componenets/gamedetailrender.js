import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Simplefade } from "../animation";
import {smallImage} from '../util'
import { iconchange } from "../util";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



// import 'swiper/css'

import React from "react";

export default function Gamedetailrender() {
  const { gameinfo, screen , isLoaded } = useSelector((state) => state.gamedetails);
  

  

  return (
      <>
      {isLoaded && (
          <Spinner>
         <div className="loader"> <h1>Loading </h1></div>
         </Spinner>
      )}
      {!isLoaded && (
        <Maindiv variants={Simplefade} initial="hidden" animate="show" exit="exit">
      {gameinfo && (
        <>
          <img src={smallImage(gameinfo.background_image,1280)} alt="image" className="img" />
          <div className="heading">
            <h1>{gameinfo.name}</h1>
          </div>
          <div className="para">
            <div className="platformsdiv">
              <div className="head">
              <h2>description</h2>
             </div>
             <div className="icons">
              {gameinfo.platforms.map(plt => {
        return <img src={iconchange(plt.platform.name)} alt="image" />
      })}
       </div>
            </div>
            <div className="descrip">
                <p>{gameinfo.description_raw}</p>
            </div>
          </div>

          <Carousel className="height" infiniteLoop="true" interval="3000" autoPlay="true" >
              {screen.results.map((image,i) => {
                  return(
                       <img src={smallImage(image.image,1280)} alt="image" key={i} />
                  )
              })}
          </Carousel>

        </>
      )}
    </Maindiv>
      )}
    
    </>
  );
}

const Maindiv = styled(motion.div)`
  min-height: 90vh;
  width: 100%;

  .img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
    -webkit-mask-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 1)),
      to(rgba(0, 0, 0, 0))
    );
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }

  .heading {
    padding: 1rem;
    margin: auto;

    h1 {
      text-align: center;
      font-size: 2.5rem;
      color: #fff;
      text-transform: capitalize;
    }
  
  }

  .para{
      padding: .5rem;

      .platformsdiv{
          display: flex;
          align-items: center;
          justify-content: space-around;
          width: 100%;
          padding: .8rem;

          .head{
            width: 50%;
            padding: .5rem;
          }

          h2{
              font-size: 2.5rem;
              color: #fff;

          }

          .icons{
            width: 50%;
            img{
            width: 30px;
            height: 30px;
            object-fit: cover;
          }
          }

          

      }

      .descrip{
          padding: .8rem;

          p{
              text-align:justify;
              font-size: 1.8rem;
              color: #fff;
          }
      }

      
  }

  
`;

const Screendiv = styled.div`
    width: 100%;
    /* height: 40vh; */
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    column-gap: .5rem;
    row-gap: 1rem;
    margin: 2rem auto;
    text-align:center;

    img{
    border-radius: 1rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

        display: block;
        width: 320px;
        height: 60vh;
        object-fit: cover;
        overflow-y: hidden;
       
    }
`

export const Spinner = styled.div`
    margin: auto;
    text-align: center;
    padding: 1rem;
    

    .loader {
  color: #ffffff;
  font-size: 50px;
  text-indent: -9999em;
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  margin: 72px auto;
  position: relative;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;
  animation: load6 1.7s infinite ease, round 1.7s infinite ease;
}
@-webkit-keyframes load6 {
  0% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
}
@keyframes load6 {
  0% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
}
@-webkit-keyframes round {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes round {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

`