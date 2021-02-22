import React from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PosList from '../post-list/post-list';
import PostAddForm from "../post-add-form/post-add-form";

import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

const StyledAppBlock = styled(AppBlock)`
    background-color: gray;
` // можно создать новый блок на основе старого

const App = () => {
    const data = [
        {label: 'Going to kern react', important: false, id: 'dfd'},
        {label: 'Good', important: false, id: 'dfgsd'},
        {label: 'You can!', important: false, id: 'dsdfs'}
    ];

    return (
        <AppBlock>
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <div>
                <PosList posts={data}/>
            </div>
            <div>
                <PostAddForm/>
            </div>
        </AppBlock>
    )
}

export default App;