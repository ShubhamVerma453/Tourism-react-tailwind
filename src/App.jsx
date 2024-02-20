import './App.css'
import First from './components/First'
import {tajMahal} from './assets/images.json'

function App() {
  return (
    <>
    <First />
    <img src={tajMahal} alt="new1" />
    </>
  )
}

export default App
