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

export const Wrapper = styled.div`
position: relative;
`

export const Error = styled.p`
    margin: 0;
    bottom: 6px;
    right: 40px;
    position: absolute;
    color: red;
    font-family: 'custom', sans-serif;
    &:hover{
        cursor: default;
            }
`

export const Tooltip = styled.div`
    position: absolute;
    height: auto;
    width: auto;
    top: 12px;
    left: 120px;
    padding: 10px 10px 10px 10px;
    background-color: rgb(0, 0, 0);
    border-radius: 10px 0px 10px 10px;
`

export const P = styled.p`
    text-align: center;
    margin: 0 auto;
    color: white;
    font-family: 'custom', sans-serif;
    font-size: 13px;
`

export const Img = styled.img`
    position: absolute;
    right: 290px;
    top: 6px;
    &:hover{
        cursor: pointer;
}
`