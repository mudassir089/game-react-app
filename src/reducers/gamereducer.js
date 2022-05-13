const initialstate = {
    newgames:[],
    popular:[],
    upcoming:[],
    searched:[],
    isLoaded:true
}

const gamereducer = (state=initialstate,action) => {
    switch(action.type){
        case "FETCH_GAMES":
            return {...state,
                popular:action.payload.popular
               ,upcoming:action.payload.upcoming,
                newgames:action.payload.newgames,
            isLoaded:false};

        case "FETCH_SEARCH":
            return {...state,searched:action.payload.searched}

        case "CLEAR_GAMES":
            return {...state,searched:[]}

        case "LOAD_GAMES":
            return {...state,isLoaded:true}
        default:
            return {...state}
    }
}

export default gamereducer