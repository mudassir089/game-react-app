import React from "react";
import styled from "styled-components";
import Singlegame from "./singlegame";
import { motion } from "framer-motion";
import { Simplefade } from "../animation";


export default function Gamelist({games}) {
    return (
        <Gameliststyle variants={Simplefade} initial="hidden" animate="show" exit="exit">
            {games && (
                games.map((game,index) => {
                    return <Singlegame key={index} game={game}/>
                })
            )}
        </Gameliststyle>
    )
}

const Gameliststyle = styled(motion.div)`
width: 100%;
padding: 1rem;
display: grid;
grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
gap: 2rem;
margin: auto;
`

