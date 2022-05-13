import apple from './images/apple.svg'
import ps from './images/ps-color.svg'
import xbox from './images/xbox-color.svg'
import steam from "./images/steam.svg"
import win from "./images/win10.svg"

export const smallImage = (imagepath,size) => {
    const image = imagepath.match(/media\/screenshots/) 
    ? imagepath.replace("media/screenshots",`media/resize/${size}/-/screenshots`)
    : imagepath.replace("/media/games/",`/media/resize/${size}/-/games/`)

    return image
}

export const iconchange = (platformname) => {
    switch(platformname){
      case "PC":
        return steam;
       case "PlayStation 4":
         return ps;
         case "PlayStation 5":
            return ps;
       case "macOS":
         return apple;
       case "Xbox One":
         return xbox;
         case "Xbox Series X/S":
         return xbox;
       default:
         return null
    }
 }

export function gamename(platformname) {
    if (platformname === 'PlayStation 4') {
        return ps
    }
    if (platformname === "Xbox One") {
        return xbox
    } 
    if (platformname === "PC") {
        return steam
    }
    if (platformname === "macOS") {
        return apple
    } else {
        return win
    }
}

export const gamerating = (rating) => {
  if(rating >= 4){
    return {color:"#00ff00"}
  }
  if(rating >= 3){
      return {color:"yellow"}
  }
  if(rating < 3){
      return {color:"red"}
  }
}