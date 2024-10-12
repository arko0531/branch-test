import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

function MainNavigator() {
  return (
    <>
        <List>
            <li>
                <StyledNavLink to='/'>Home</StyledNavLink>
            </li>
            <li>
                <StyledNavLink to='/counter'>Counter</StyledNavLink>
            </li>
        </List>
    </>
  )
}

export default MainNavigator

const List = styled.div`
    display: flex;
    gap: 6rem;

    & li {
        list-style: none;
    }

    & a {
        color: black;
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