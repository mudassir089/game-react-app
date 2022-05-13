import axios from "axios";
import { populargames } from "../componenets/api";
import { upcominggames } from "../componenets/api";
import { newgames } from "../componenets/api";
import { gamesearch } from "../componenets/api";

//creating action creators

export const loadgames = () => async (dispatch) => {


  //fetchinggames

  dispatch({
    type:"LOAD_GAMES",
    isLoaded:true
  })

  const populargamesdata = await axios.get(populargames)
  const upcominggamesdata = await axios.get(upcominggames)
  const newgamesdata = await axios.get(newgames)


  dispatch({
      type:"FETCH_GAMES",
      payload:{
          popular:populargamesdata.data.results,
          upcoming:upcominggamesdata.data.results,
          newgames:newgamesdata.data.results,
          isLoaded:false
      },
      
      
  })
}

export const searchaction = (gamename) => async (dispatch) => {

  dispatch({
    type:"LOAD_GAMES",
    payload:{
      isLoaded:true
    }
  })

  const searchgame = await axios.get(gamesearch(gamename))

  dispatch({
    type:"FETCH_SEARCH",
    payload:{
      searched:searchgame.data.results,
      isLoaded:false
    }
  })
}