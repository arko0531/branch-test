import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import MainNavigator from '../components/MainNavigator'

function RootLayout() {
  return (
    <StyledRootLayout>
      <MainNavigator />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </StyledRootLayout>    
  )
}

export default RootLayout

const StyledRootLayout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
  gap: 5rem;
`

const OutletWrapper = styled.div`
  
`