import styled, { keyframes } from 'styled-components'


const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Div = styled.div`
display: flex;
flex-wrap: wrap;
align-content: flex-start;
animation: 1s ${fadeIn} ease-out;
`

export const TitlesWrapper = styled.div`
display: flex;
flex-wrap: wrap;
margin-left: 50px;
height: auto;
width: 160px;
`

export const DataWrapper = styled.div`
display: flex;
flex-wrap: wrap;
margin-left: 20px;
height: auto;
width: 400px;
overflow: hidden;
`

export const H1 = styled.h1`
 margin: 0;
 font-family: 'custom', sans-serif;
 font-weight: bold;
 font-size: 26px;
 margin-top: 50px;
 margin-left: 40px;
 padding-bottom: 30px;
 height: 40px;
`

export const Title = styled.p`
 font-family: 'custom', sans-serif;
 text-align: end;
 margin: 0;
 margin-top: 5px;
 font-size: 20px;
 width: 100%;
 
`

export const Value = styled.p`
color: brown;
 font-family: 'custom', sans-serif;
 text-align: start;
 margin: 0;
 margin-top: 5px;
 font-size: 20px;
width: 400px;
overflow: hidden;
`

export const Img = styled.img`
position: absolute;
bottom: 70px;
right: 100px;
`

