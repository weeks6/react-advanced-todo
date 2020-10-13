import { BottomNavigationAction, makeStyles } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation/BottomNavigation';
import AccountCircle from '@material-ui/icons/AccountCircleOutlined'
import BookIcon from '@material-ui/icons/BookTwoTone'
import ListIcon from '@material-ui/icons/ViewListOutlined'
import React from 'react';
import './App.css';
import Item from './Components/TodoList/Item';
import List from './Components/TodoList/TodoList';

const MOCK_ITEMS: Array<any> = []

for (let i = 0; i < 100; i++) {
  MOCK_ITEMS.push(<Item value={i} title={"title"+i} description="random text" completed={false} timestamp={Date.now()}></Item>)
}

const App: React.FC = () => {

  const useStyles = makeStyles({
    stickToBottom: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
    }
  })
  
  const classes = useStyles()

  const [value, setValue] = React.useState(0);

  return (
    <>
      <List items={MOCK_ITEMS}></List>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.stickToBottom}
      >
        <BottomNavigationAction label="Today" icon={<ListIcon />} />
        <BottomNavigationAction label="Projects" icon={<BookIcon />} />
        <BottomNavigationAction label="Profile" icon={<AccountCircle />} />
      </BottomNavigation>
    </>
  )
}

export default App;
