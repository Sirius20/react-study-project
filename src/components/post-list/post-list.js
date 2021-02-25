import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import {ListGroup} from 'reactstrap';

import './post-list.css';

const PosList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
    const elements = posts.map(elem => {
        const {id, ...elemProps} = elem;
        return (
            <li key={id} className="list-group-item">
                <PostListItem {...elemProps}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleLiked={() => onToggleLiked(id)}
                onDelete={() => onDelete(id)} />
            </li>
        )
    });

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PosList;