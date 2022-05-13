import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Gamelist from '../componenets/gamelist';
import { Spinner } from '../componenets/gamedetailrender';
import { Carousel } from 'react-bootstrap';
import { smallImage } from '../util';
import { Heading } from './home';
import { Image } from './home';
import { loadedgames } from '../actions/platformaction';

const Pcgames = () => {

    const dispatch = useDispatch()
    useEffect(() => {
    dispatch(loadedgames())
  },[dispatch])

  const {pc,isLoaded} = useSelector(state => state.Platformgames)

    return(
        <>
        {isLoaded && (
            <Spinner>
                <div className="loader"></div>
            </Spinner>
        )}

        {!isLoaded && (
<>
<Carousel style={{height:'55vh'}} pause="hover">
    {pc && pc.map(game => {
        return <Carousel.Item style={{height:'55vh'}}>
        <Image
          src={smallImage(game.background_image,1280)}
          alt="First slide"
        
        />
        <Carousel.Caption>
          <h3>{game.name}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    })
    
}
  
  </Carousel>
  
        <Heading>

            <h1 className="heading">Top Pc Games</h1>
            <Gamelist games={pc}/>
        </Heading>

        </>
        )}
        </>
    )
}

export default Pcgames