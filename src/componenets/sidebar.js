import styled from 'styled-components'
import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

export default function Sidebar({toggle}) {
    const {pathname} = useLocation()
    return (
        <Sidenav className={toggle ? "added" : ""}>
            <div className="listing">
                <ul>
                    <li>
                        <Link to="/" className="link">Home</Link>
                    <Line transition={{duration:0.75}} initial={{width:"0%"}} animate={{width: pathname === "/" ? "50%" : "0%"}}></Line>
                        
                        </li>
                    <li>
                        <Link to="/upcoming" className="link">Upcoming</Link>
                        
                    <Line transition={{duration:0.75}} initial={{width:"0%"}} animate={{width: pathname === "/upcoming" ? "50%" : "0%"}}></Line>
                        </li>
                    <li>
                        <Link to="/newgames" className="link">New Games</Link>
                        
                    <Line transition={{duration:0.75}} initial={{width:"0%"}} animate={{width: pathname === "/newgames" ? "50%" : "0%"}}></Line>
                        </li>
                    <li>
                        <Link to="/searchgames" className="link">Search Games</Link>
                        
                    <Line transition={{duration:0.75}} initial={{width:"0%"}} animate={{width: pathname === "/searchgames" ? "50%" : "0%"}}></Line>
                        </li>
                <h2>Platforms</h2>
                    <li><Link to="/pc" className="link">Top Pc Games</Link></li>
                    <li><Link to="/playstation" className="link">Top Play Station Games</Link></li>
                    <li><Link to="/xbox" className="link">Top Xbox Games</Link></li>
                </ul>
                
            </div>
        </Sidenav>
    )
}

const Sidenav = styled(motion.div)`

  height: 100%; /* 100% Full-height */
  width: 0%; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  left: 0;
  background-color: #0c0c0c; /* Black*/
  overflow: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  opacity: 0;
  /* transform: translateX(-100%); */
  z-index: 10;

  

  .listing{
      padding: 2rem;

      h2{
          color: #fff;
          font-size: 3rem;
          margin: 2rem 0;
          font-weight: 600;
      }

      ul{
          list-style: none;
          padding: .5rem;

          li{
              
              margin:.5rem 0;
              position: relative;

              .link{
                font-size: 2rem;
              text-transform: capitalize;
              color: #fff;
              text-decoration:none
              }
          }

          
      }
  }

  /* @media (max-width:768px){
      width: 100%;
  } */

 

`

const Line = styled(motion.div)`
  height: 0.3rem;
  background-color: pink;
  position: absolute;
  bottom: 5%;
  
`
