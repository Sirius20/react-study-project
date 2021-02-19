import React from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PosList from '../post-list/post-list';
import PostAddForm from "../post-add-form/post-add-form";

import './app.css';

const App = () => {
    const data = [
        {label: 'Going to kern react', important: true, id: 'dfd'},
        {label: 'Good', important: false, id: 'dfgsd'},
        {label: 'You can!', important: false, id: 'dsdfs'}
    ];

    return (
        <div className="app">
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
        </div>
    )
}

export default App;