export const apikey = '2218d48656834b48b18093565aafda20'
const apiurl = `https://api.rawg.io/api/games`

const getMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10){
        return `0${month}`
    }else{
        return month
    }
}

const getDay = () => {
    const day = new Date().getDate()
    if(day < 10){
        return `0${day}`
    }else{
        return day
    }
}

const getCurrentYear = new Date().getFullYear()
const getCurrentMonth = getMonth()
const getCurrentDay = getDay()
const currentDate = `${getCurrentYear}-${getCurrentMonth}-${getCurrentDay}`
const Lastyear = `${getCurrentYear - 1}-${getCurrentMonth}-${getCurrentDay}`
const nextYear = `${getCurrentYear + 1}-${getCurrentMonth}-${getCurrentDay}`

export const populargames = `${apiurl}?key=${apikey}&dates=2019-01-01,2021-12-31&ordering=-added&page_size=40`
export const upcominggames = `${apiurl}?key=${apikey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=40`
export const newgames = `${apiurl}?key=${apikey}&dates=${Lastyear},${currentDate}&ordering=-rating&page_size=20`
export const gamedetails = (gameid) => `${apiurl}/${gameid}?key=${apikey}`
export const gamescreens = (gameid) => `${apiurl}/${gameid}/screenshots?key=${apikey}`
export const gamemovies = (gameid) => `${apiurl}/${gameid}/movies?key=${apikey}`
export const gamesearch = (search) => `${apiurl}?key=${apikey}&search=${search}&page_size=40`
export const popularpcgames = `${apiurl}?key=${apikey}&dates=2019-01-01,2021-12-31&platforms=4&page_size=40`
export const popularpsgames = `${apiurl}?key=${apikey}&dates=2019-01-01,2021-12-31&platforms=18,1,7&page_size=40`
export const popularxboxgames = `${apiurl}?key=${apikey}&dates=2019-01-01,2021-12-31&platforms=1&page_size=40`



