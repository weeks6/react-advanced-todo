import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { BottomNav } from './Components/BottomNavigation/BottomNav';
import { NavLink } from './Components/BottomNavigation/NavLink';
import TodayIconSvg from "Images/Icons/today-24px.svg"
import ProjectIconSvg from "Images/Icons/receipt_long-24px.svg"
import ProifleIconSvg from "Images/Icons/account_circle-24px.svg"
import Item from 'Components/TodoList/Item';

const App: React.FC = () => {
  return (
    <>
    
    <BrowserRouter>
      <BottomNav>
        <NavLink ripple to="/today" icon={TodayIconSvg}> 
          Today
        </NavLink>
        <NavLink ripple to="/projects" icon={ProjectIconSvg}> 
          Projects
        </NavLink>
        <NavLink ripple to="/profile" icon={ProifleIconSvg}> 
          You
        </NavLink>
      </BottomNav>
    </BrowserRouter>
    </>
  )
}

export default App;
