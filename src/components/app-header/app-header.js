import React from 'react';

import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'black'}; //styled-comp позволяет использовать условия и пропсы прямо в стилях внутри js
        :hover {
            color: blue;
        }
    }

    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`;

const AppHeader = () => {
    return (//можно превратить в другой компонент, например ссылку через as="a"
         <Header> 
            <h1>Natalya</h1>
            <h2>5 записей, понравилось 0</h2>
        </Header>
    )
}


export default AppHeader;