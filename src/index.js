/**
 * Example Webpack Application
 */

import getJoke from "./jokeAPI"
import './styles/main.scss'
import smile from './assets/smile.svg'

const smileImg = document.getElementById('smileImg')
smileImg.src = smile

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', getJoke)

getJoke()