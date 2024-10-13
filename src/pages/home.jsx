import React from 'react'
import styled from 'styled-components'

import { useDispatch,  useSelector } from 'react-redux'
import { themesActions } from '../store/themes'

function HomePage() {
  const dispatch = useDispatch();
  const themes = useSelector((state) => state.themes.light);

  const themesChange = () => {
    dispatch(themesActions.themesChange());
  }

  return (
    <>
        <List>
          <ul>
            <li>
                <ThemesButton
                  onClick={themesChange}
                >
                  {
                    themes ? '🌝' : '🌚'
                  }
                </ThemesButton>
            </li>
          </ul>
        </List>
    </>
  )
}

export default HomePage

const List = styled.div`
     & ul {
        display: flex;
        justify-content: center;
    }

    & li {
        list-style: none;
    }
`;

const ThemesButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  width: 4rem;
  height: 3rem;
  border-radius: 18px;
  border: 0.5px solid #d6d6d6;
  background-color: #f1f1f1;
  color: #030303;
  cursor: pointer;

  &:hover {
    
  }
`;