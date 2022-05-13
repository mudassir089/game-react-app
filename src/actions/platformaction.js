import axios from "axios";
import { popularpcgames,popularpsgames,popularxboxgames } from "../componenets/api";

export const loadedgames = () => async (dispatch) => {

    dispatch({
        type:"LOAD_GAMES",
        payload:{
            isLoaded:true
        }
    })

    const pcgames = await axios.get(popularpcgames)
    const psgames = await axios.get(popularpsgames)
    const xboxgames = await axios.get(popularxboxgames)

    dispatch({
        type:"FETCH_ANOTHERGAMES",
        payload:{
            pc:pcgames.data.results,
            ps:psgames.data.results,
            xbox:xboxgames.data.results,
            isLoaded:false
        }
    })
}