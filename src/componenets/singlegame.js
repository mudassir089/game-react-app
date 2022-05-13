import React,{useState} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Gamedetails } from "../actions/gamedetailsaction";
import { smallImage } from "../util";
import { Link } from "react-router-dom";
import { scaling } from "../animation";
import { gamename } from "../util";
import { gamerating } from "../util";
import { Button } from "react-bootstrap";

const Singlegame = ({game}) => {

    const dispatch = useDispatch()
    const clicking = () => {
        dispatch(Gamedetails(game.id))
    }
    
    return(
        
        <Game onClick={clicking} variants={scaling} initial="hidden" animate="show">
            <Link to="/gamedetails" className="link">
            <div className="gameimg">
                <img src={game.background_image ? smallImage(game.background_image,420) : ""} alt="image" />
            </div>
        </Link>

            <Platforms>
                <div className='iconsdiv'>
                {game.platforms ? game.platforms.map(plt => <img src={gamename(plt.platform.name)}></img>) : ""}
                </div>
                <div className="rating">
                    <h2 style={gamerating(game.rating)}>{game.rating}</h2>
                </div>
            </Platforms>

            <Gamename>
                <h1>{game.name}</h1>
                <h1>{game.released}</h1>
            </Gamename>

            <Ratingbtn>
                <Button variant="light" size="lg">{game.added}</Button>
            </Ratingbtn>

        </Game>
    )
}

const Game = styled(motion.div)`
 /* width: 35rem; */
 border-radius: 1rem;
 background-color: #161616;
 box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
 text-decoration: none;

 .link{
     text-decoration: none !important;
 }

 .gameimg{
     width: 100%;
     height: 15rem;

     img{
         width: 100%;
         height: 100%;
         object-fit: cover;
     }
 }


`
const Platforms = styled.div`
width: 100%;
padding:.3rem;
display: flex;
align-items: center;
justify-content:space-between;

.iconsdiv{
    padding:1rem;
    display: flex;
    align-items: center;

    img{
        width: 25px;
        height: 25px;
    }

    .rating{
        align-self: flex-end;
        padding:.3rem;
        border: 2px solid white;
        border-radius: .5rem;

        h2{
            font-size: 2rem;
            
            
        }
    }
}

`

const Gamename = styled.div`
  padding:1rem;

  h1{
      font-size: 1.5rem;
      color: #fff;
      text-transform: capitalize;
  }
`

const Ratingbtn = styled.div`
   padding: 1rem;
   margin:.5rem 0;

   /* button{
       padding:.5rem;
       font-size: 1rem;
       
       border-radius:.3rem;
       width: 6rem;
   } */
`


export default Singlegame