import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { loadgames } from '../actions/action';
import Gamelist from '../componenets/gamelist';
import { Spinner } from '../componenets/gamedetailrender';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import { smallImage } from '../util';

const Home = () => {

    const dispatch = useDispatch()
    useEffect(() => {
    dispatch(loadgames())
  },[dispatch])

  const {popular,isLoaded} = useSelector(state => state.games)

    return(
        <>
        {isLoaded && (
            <Spinner>
                <div className="loader"></div>
            </Spinner>
        )}

        {!isLoaded && (
<>
<Carousel style={{height:'55vh'}} pause="hover" fade={true}>
    {popular && popular.map((game,i) => {
        return <Carousel.Item style={{height:'55vh'}} key={i}>
        <Image
          src={smallImage(game.background_image,1280)}
          alt="First slide"
        
        />
        <Carousel.Caption>
          <h3>{game.name}</h3>
          <p>{game.released}</p>
        </Carousel.Caption>
      </Carousel.Item>
    })
    
}
  
  </Carousel>
  
        <Heading>

            <h1 className="heading">Popular Games</h1>
            <Gamelist games={popular}/>
        </Heading>

        </>
        )}
        </>
    )
}


export const Heading = styled.div`

.heading{
    
     font-size: 3rem;
     color: #fff;
     text-transform: capitalize;
     padding: 1rem;
}
 
`
export const Image = styled.img`
object-fit: cover;
    width: 100% ;
    height: 100% ;
    -webkit-mask-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 1)),
      to(rgba(0, 0, 0, 0))
    );
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

`

export default Home

