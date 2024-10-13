import React from 'react'

import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';
import { useState } from 'react';

function CounterPage() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const [number, setNumber] = useState('');

  const incrementHandler = () => {
    dispatch(counterActions.increment());
    console.log('+');
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
    console.log('-');
  }

  const numberChange = (e) => {
    setNumber(e.target.value);
  }

  const numberChnageHandler = () => {
    if (number === '') {
      alert('숫자를 입력해주세요.');
      return;
    }
      
    dispatch(counterActions.inputCounter(Number(number)));
  }

  return (
    <>
      <StyledCounter>
          <CounterButton onClick={incrementHandler}>+</CounterButton>
          <h1>{counter}</h1>
          <CounterButton onClick={decrementHandler}>-</CounterButton>
      </StyledCounter>

      <InputWrapper>
        <CounterInput onChange={numberChange} type='number'/>
        <ChangeButton onClick={numberChnageHandler}>변경</ChangeButton>
      </InputWrapper>
    </>
  )
}

export default CounterPage;

const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

const CounterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  width: 4rem;
  height: 3rem;
  border-radius: 12px;
  border: none;
  background-color: #4949ff;
  color: white;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #5332d8;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 1rem;
`

const CounterInput = styled.input`
  width: 6rem;
  height: 2.5rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  text-align: center;
  border-radius: 12px;
  border: 1px solid #ccc;
`;

const ChangeButton = styled.button`
  border-radius: 12px;
  font-size: 1rem;
  width: 4rem;
  cursor: pointer;
  border: none;
  background-color: #ff7f50; 
  color: #fdfff9; 
  
  &:hover,
  &:active {
    background-color: #e06d3c; 
  }
`;