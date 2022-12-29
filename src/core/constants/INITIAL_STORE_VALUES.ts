import { playerroles } from '../../const/Players';
import Details from '../../interfaces/PlayerInterface'

export const initialState: Details [] = [{
id: 6,
name: 'Dhoni', 
gender: 'Male',
country: 'India',
roles: [playerroles.BATSMAN,playerroles.BOWLING],
runs: 7098,
matches: 358,
wickets: 21,
centuries: 34,
fifties: 28,
fours : 12,
sixes: 10,
imgURL: "https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/07/07/dhoni-1124573-1657185380.jpg?itok=aWYXXCw_"
}]

export const editinital = {
    id: null,
    name: '',
    gender: '',
    country: '',
    roles: [],
    runs: null,
    matches: null,
    wickets: null,
    centuries: null,
    fifties: null,
    fours : null,
    sixes: null,
    imgURL:""
}

