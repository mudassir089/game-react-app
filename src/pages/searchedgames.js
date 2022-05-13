import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Gamelist from "../componenets/gamelist";
import { Spinner } from "../componenets/gamedetailrender";
import { Heading } from "./home";
import { searchaction } from "../actions/action";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const Searchpage = () => {
  const [textinput, settextinput] = useState("");
  const dispatch = useDispatch();

  const searchvalue = (e) => {
    settextinput(e.target.value);
  };

  const Submitsearch = (e) => {
    e.preventDefault();
    dispatch(searchaction(textinput));
    settextinput("");
    e.target.blur();
  };

  const games = useSelector((state) => state.games.searched);

  return (
    <>
      <Search>
          <form onSubmit={Submitsearch}>
            <input type="text" value={textinput} onChange={searchvalue} />
            <div className="button">
            <Button type="submit" variant="secondary" size="lg">search
            </Button>
            </div>
          </form>
      </Search>

      {games.length ? (
        <Heading>
          <h1 className="heading">Searched games</h1>
          <Gamelist games={games} />
        </Heading>
      ) : (
        <Styleddiv><h1>search for your fav games</h1></Styleddiv>
      )}
    </>
  );
};

const Search = styled.div`
    padding: 0 1rem;
    width: 100%;
    margin: 0 1rem;
    display: inline-block;

    input {
      width: 90%;
      margin: auto;
      border-radius: 1rem;
      padding: 1rem;
      font-size: 1.5rem;
      color: #fff;
      border: none;
      outline: transparent;
      backdrop-filter: blur(16px) saturate(180%);
      background: rgba(255, 255, 255, 0.25);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      border-radius: 10px;
    }

   .button{
       width: 10%;
       padding: 1rem;
       display: inline-block;
   }

   @media (max-width:768px){
       width: 100%;
       display: block;
       margin: auto;

       .button{
           /* display: block; */
           margin: auto;
       }

       .input{
           width: 100%;
           margin: auto;
           display: block;
       }
   }
  
`;

const Styleddiv = styled.div`
  margin: auto;
  padding: 1rem;


  h1{
      padding: .5rem;
      text-align:center;
      font-size: 3rem;
      color: #fff;
  }
`







export default Searchpage;
