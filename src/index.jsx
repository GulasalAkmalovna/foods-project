import { Route, Routes } from 'react-router-dom'
import Nodles from "./routes/Nodles/Nodles"
import Burger from "./routes/Burger/Burger"
import Drink from "./routes/Drink/Drink"
import Desert from "./routes/Desert/Desert"
const RouteController = () => {
  return (
    <Routes>
    <Route path="/" element={<Nodles />}/>
    <Route path='/burger' element={<Burger />}/>
    <Route path='drink' element={<Drink />}/>
    <Route path='desert' element={<Desert />}/>
    </Routes>
  )
}

export default RouteController