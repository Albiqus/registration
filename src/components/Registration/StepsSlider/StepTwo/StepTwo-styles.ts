import styled from 'styled-components'

export const Div = styled.div`
    height: 475px;
    width: 100%;
    background-color: rgb(176, 224, 230);
    `

export const Label = styled.label`
    text-align: center;
    display: block;
    font-size: 22px;
    margin-bottom: 3px;
    margin-top: 40px;
    font-family: 'custom', sans-serif;
`

export const Input = styled.input`
    margin: 0 auto;
    font-size: 22px;
    width: 200px;
    height: 30px;
    display: block;
    box-sizing: border-box;
    outline: none;
    border: none;
    font-family: 'custom', sans-serif;
    &::placeholder{
        opacity: 0.5;
    }
`

export const Span = styled.span`
   color: red;
`