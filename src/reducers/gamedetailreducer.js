const initialstate = {gameinfo:{},screen:{},isLoaded:true,movies:{}}

const Gamedetailreducer = (state=initialstate,action) => {
   switch(action.type){
       case "GAME_DETAILS":
           return {...state,gameinfo:action.payload.gameinfo,screen:action.payload.screen,isLoaded:false,movies:action.payload.movie};
        case "LOAD_DETAILS":
            return {...state,isLoaded:true}
        default:
            return {...state}
   }
}

export default Gamedetailreducer