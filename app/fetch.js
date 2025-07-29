import axios from "axios";


const MAXIMA_URL = "https://www.maxima.ee/en/pakkumised"

axios.get(MAXIMA_URL)
.then(response => console.log(response))
.catch(error => console.log(error))
