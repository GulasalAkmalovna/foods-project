import './App.css'
import Icons1 from "./icons/olov.svg"
import Icons2 from "./icons/home.svg"
import Icons3 from "./icons/Notification Unread Lines.svg"
import Icons4 from "./icons/Like.svg"
import Icons5 from "./icons/Bag.svg"
import Icons6 from "./icons/Money.svg"
import Icons7 from "./icons/Settings.svg"
// import Icons8 from "./icons/Mask group.svg"
import Icons12 from "./icons/Mask group (1).svg"
import Image1 from "./images/Waving Hand Emoji.png"
import Image2 from "./images/Group 1000002334.png"
import Image3 from "./images/lag'mon.png"
import Image4 from "./images/Hamburger.png"
import Image5 from "./images/Tropical Drink.png"
import Image6 from "./images/Shortcake.png"
import { NavLink  } from 'react-router-dom' 
import RouteController from './index'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
      <div className='container'>
        <div className='card'>
          <div className='card-wrapper'>
            <div className='card-dashboard'>
                  <div className='card-icon'>
                    <img src={Icons1} alt="" />
                  </div>
                  <div className='card-icons'>
                      <div className='cardIcons active'>
                          <img className='icon' src={Icons2} alt="" />
                      </div>
                      <div className='cardIcons'>
                          <img src={Icons3} alt="" />
                      </div>
                      <div className='cardIcons'>
                          <img src={Icons4} alt="" />
                      </div>
                      <div className='cardIcons'>
                          <img src={Icons5} alt="" />
                      </div>
                      <div className='cardIcons'>
                          <img src={Icons6} alt="" />
                      </div>
                      <div className='cardIcons'>
                          <img src={Icons7} alt="" />
                      </div>
                  </div>
            </div>  
            <div className="main">
            <div className='card-content2'>
              <div className='card-content'>
                <div className="content">
                <h1>Welcome, Ali <img src={Image1} alt="" /></h1>
                <p>Discover whatever you need</p>
                </div>
              <div className='card-input'>
                <img src={Icons12} alt="" />
                <input type="text" placeholder='Search'/>
              </div>
              </div>
            </div>
            <div className='hero-container'>
              <div className='hero-content'>
                <div className='hero'>
                  <h2>It’s not just Food, it’s an Experience </h2>
                  <span>Order Your Favourite food & enjoy your day</span>
                </div>
                  <div className='hero-img'>
                      <img src={Image2} alt="" />
                  </div>
              </div>
            </div>
            <div className='item-container'>
              <div className='item-wrapper'>
                <NavLink to="/" className='item'>
                    <img src={Image3} alt="" />
                    <div className='item-p'>
                      <p>Noodles</p>
                    </div>
                </NavLink>
                <NavLink to={"/burger"} className='item'>
                    <img src={Image4} alt="" />
                    <div className='item-p'>
                      <p>Burger</p>
                    </div>
                </NavLink>
                <NavLink to={"/drink"} className='item'>
                    <img src={Image5} alt="" />
                    <div className='item-p'>
                      <p>Drink</p>
                    </div>
                </NavLink>
                <NavLink to={"/desert"} className='item'>
                    <img src={Image6} alt="" />
                    <div className='item-p'>
                      <p>Desert</p>
                    </div>
                </NavLink>
              </div>
            </div>
            <div className='footer-container'>
             <Outlet/>
             <RouteController/>
            </div>
            </div>
          </div>
        </div>
      </div>      
    </>
  )
}

export default App
