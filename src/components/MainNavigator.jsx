import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

function MainNavigator() {
    return (
        <>
            <List>
                <ul>
                    <li>
                        <StyledNavLink to='/'>Home</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to='/counter'>Counter</StyledNavLink>
                    </li>
                </ul>
            </List>
        </>
    )
}

export default MainNavigator

const List = styled.div`
    & ul {
        display: flex;
        gap: 6rem;
        flex-direction: row;
    }

    & li {
        list-style: none;
    }

    & a {
        font-size: 2rem;
        font-weight: 600;
        text-decoration: none;
        padding-bottom: 10px;
    }

    & a:hover {
        border-bottom: #4949ff5c solid 4px;
    }
`;

const StyledNavLink = styled(NavLink)`
    &.hover {
        border-bottom: #4949ff solid 4px;
    }

    &.active {
        font-weight: 700;
        border-bottom: #4949ff solid 4px;
    }
`