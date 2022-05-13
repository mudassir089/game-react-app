const initialstate = {
   xbox:[],
   ps:[],
   pc:[],
   isLoaded:false
}

export const Platformsreducer = (state=initialstate,action) => {
    switch(action.type){
        case "FETCH_ANOTHERGAMES":
            return {...state,xbox:action.payload.xbox,ps:action.payload.ps,pc:action.payload.pc,isLoaded:false};
        case "LOAD_GAMES":
            return {...state,isLoaded:true}
        default:
            return {...state}
    }
}

