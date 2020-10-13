import React from 'react'
import Item from './Item'
import {List} from '@material-ui/core'

interface ListProps {
    items: Array<typeof Item>
}

const TodoList: React.FC<ListProps> = ({items}) => {
    return (
        <List style={{marginBottom: "60px"}}>
            {items}
        </List>
    )
}

export default TodoList