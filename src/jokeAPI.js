import axios from 'axios'

const getJoke = () => {
    const config = {
        headers: {
            Accept: "application/json",
        },
    }

    const jokeAPI = 'https://icanhazdadjoke.com'

    const joke = document.getElementById('joke')

    axios.get(jokeAPI, config).then( result => {
        joke.innerHTML = result.data.joke
    }).catch( error => {
        console.log("FAILED: ", error)
    })
}

export default getJoke