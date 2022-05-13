import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadgames } from "../actions/action";
import Gamelist from "../componenets/gamelist";
import { Spinner } from "../componenets/gamedetailrender";
import { smallImage } from "../util";
import { Carousel } from "react-bootstrap";
import { Image } from "./home";
import { Heading } from "./home";

const Newgames = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadgames());
  }, [dispatch]);

  const { newgames, isLoaded } = useSelector((state) => state.games);

  return (
    <>
      {isLoaded && (
        <Spinner>
          <div className="loader"></div>
        </Spinner>
      )}

      {!isLoaded && (
        <>
          <Carousel style={{ height: "55vh" }}>
            {newgames &&
              newgames.map((game) => {
                return (
                  <Carousel.Item style={{ height: "55vh" }}>
                    <Image
                      src={smallImage(game.background_image, 1280)}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>{game.name}</h3>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
          </Carousel>
          <Heading>
            <h1 className="heading">New Games</h1>
            <Gamelist games={newgames} />
          </Heading>
        </>
      )}
    </>
  );
};

export default Newgames;
