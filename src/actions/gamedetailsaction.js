import axios from "axios";
import { gamedetails } from "../componenets/api";
import { gamescreens } from "../componenets/api";
import { gamemovies } from "../componenets/api";


export const Gamedetails = (id) => async (dispatch) => {

    dispatch({
        type:"LOAD_DETAILS",
        isLoaded:true
    })

   const gameinfo = await axios.get(gamedetails(id))
   const gamescreenshots = await axios.get(gamescreens(id))
   const gamemov = await axios.get(gamemovies(id))

    dispatch({
        type:"GAME_DETAILS",
        payload:{
            gameinfo:gameinfo.data,
            screen:gamescreenshots.data,
            movie:gamemov.data,
            isLoaded:false
        }
    })
}