import React,{useState} from "react";
import styled from 'styled-components'
import menu from '../images/menu.svg'
import cross from '../images/crosswhite.svg'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchaction } from "../actions/action";

const Navbar = ({toggle,settoggle}) => {

    const toggling = () => {
        settoggle(!toggle)
    }


   

    return(
        <Mainnav>
            <Link to="/" className="link">
            <div className="logoname">
                <h1><span>game zone</span></h1>
            </div>
            </Link>
            
            <div className="icon" onClick={toggling}>
                <img src={menu} alt="" />
            </div>
        </Mainnav>
    )
}

const Mainnav = styled.div`
 min-height: 8vh;
 padding: .7rem;
 display: flex;
 align-items: center;
 justify-content: space-around;
 width: 100%;

 .link{
     text-decoration: none;
     
 }

 .logoname{
     padding: .5rem;
     width: 20rem;

     h1{
         font-size: 1.7rem;
         color: #fff;
         text-transform: uppercase;
         text-decoration: none;
     }
 }

 
 .icon{
     padding: .5rem 1rem;
     cursor: pointer;
     z-index:10;
     transition:0.5s
     
     img{
         width: 25px;
         height: 25px;
         object-fit: cover;
     }
 }



`

export default Navbar