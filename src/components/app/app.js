import React, {Component} from 'react';
import nextId from "react-id-generator";

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

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Going to learn react', important: false, like: false, id: '1'},
                {label: 'Good', important: false, like: false, id: '2'},
                {label: 'You can!', important: false, like: false, id: '3'}
            ],
            term: '',
            filter: 'all',
        }

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.changeStateItem = this.changeStateItem.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after];
            
            //Менять напрямую стейт нельзя!
            return{
                data: newArr
            }
        });
    }

    addItem(text) {
        const newItem = {
            label: text,
            important: false,
            like: false,
            id: nextId(),
        }
        
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }
    
    changeStateItem(id, status) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old};
            newItem[status] = !old[status];
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        });
    }

    onToggleImportant(id) {
        this.changeStateItem(id, 'important');
    }

    onToggleLiked(id) {
        this.changeStateItem(id, 'like');
    }

    searchPost(items, term) {
        if(term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        });
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like);
        } else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({term});
    }

    onFilterSelect(filter) {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <AppBlock>
                <AppHeader 
                    liked={liked}
                    allPosts={allPosts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <div>
                    <PosList 
                        posts={visiblePosts}
                        onDelete={this.deleteItem} 
                        onToggleImportant={this.onToggleImportant}
                        onToggleLiked={this.onToggleLiked} />
                </div>
                <div>
                    <PostAddForm
                    onAdd={this.addItem} />
                </div>
            </AppBlock>
        )
    }
}
