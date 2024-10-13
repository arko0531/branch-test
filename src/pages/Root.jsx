import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Outlet } from 'react-router-dom'
import MainNavigator from '../components/MainNavigator'

import { useSelector } from 'react-redux'
import { darkTheme, lightTheme } from '../style/themes'
import GlobalStyle from '../style/GlobalStyle'

function RootLayout() {
  const themes = useSelector((state) => state.themes.light);
  const currentThemes = themes ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentThemes}>
      <GlobalStyle />
      
      <StyledRootLayout>
        <MainNavigator />

        <OutletWrapper>
          <Outlet/>
        </OutletWrapper>
      </StyledRootLayout> 
    </ThemeProvider>   
  )
}

export default RootLayout

const StyledRootLayout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 3rem;
  gap: 5rem;
`

const OutletWrapper = styled.div`
  width: 70%;
`