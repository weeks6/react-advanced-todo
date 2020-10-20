import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { BottomNav } from './Components/BottomNavigation/BottomNav';
import { NavLink } from './Components/BottomNavigation/NavLink';
import {ReactComponent as TodayIconSvg} from "Images/Icons/today-24px.svg"
import {ReactComponent as ProjectIconSvg} from "Images/Icons/receipt_long-24px.svg"
import {ReactComponent as ProfileIconSvg} from "Images/Icons/account_circle-24px.svg"
import Item from 'Components/TodoList/Item';

const App: React.FC = () => {
  return (
    <>
    
    <BrowserRouter>
      <BottomNav>
        <NavLink ripple to="/today">
          <TodayIconSvg /> 
          Today
        </NavLink>
        <NavLink ripple to="/projects">
          <ProjectIconSvg /> 
          Projects
        </NavLink>
        <NavLink ripple to="/profile">
          <ProfileIconSvg /> 
          You
        </NavLink>
      </BottomNav>
    </BrowserRouter>
    </>
  )
}

export default App;
