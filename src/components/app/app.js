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
                {label: 'Going to learn react', important: false, id: '1'},
                {label: 'Good', important: false, id: '2'},
                {label: 'You can!', important: false, id: '3'}
            ]
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
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
            id: nextId(),
        }
        
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render() {
        return (
            <AppBlock>
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <div>
                    <PosList posts={this.state.data}
                    onDelete={this.deleteItem} />
                </div>
                <div>
                    <PostAddForm
                    onAdd={this.addItem} />
                </div>
            </AppBlock>
        )
    }
}
