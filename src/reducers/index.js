import { combineReducers } from "redux";
import gamereducer from "./gamereducer";
import Gamedetailreducer from "./gamedetailreducer";
import { Platformsreducer } from "./platformsreducer";

const allreducers = combineReducers({
    games:gamereducer,
    gamedetails:Gamedetailreducer,
    Platformgames:Platformsreducer
})


export default allreducers