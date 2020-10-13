import { Checkbox, IconButton, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText } from '@material-ui/core'
import CommentIcon from '@material-ui/icons/Comment'
import React, { useState } from 'react'
import './List.css'

interface ItemProps {
    value: number | string,
    title: string,
    description: string;
    timestamp: number,
    completed: boolean 
}

const Item: React.FC<ItemProps> = ({value, title, description, completed}) => {

    const [completion, setCompletion] = useState(completed)

    return (
        <ListItem key={value} role={undefined} dense button onClick={() => setCompletion(!completion)}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={completion}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText primary={title} secondary={description}/>
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="comments">
            <CommentIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

    )
}

export default Item