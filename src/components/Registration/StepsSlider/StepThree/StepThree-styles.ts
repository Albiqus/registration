import styled from 'styled-components'

export const Div = styled.div`
    position: relative;
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

export const Ul = styled.ul`
    margin-top: 40px;
    margin-left: 225px;
`

export const Li = styled.li`
    margin: 10px 0;
`

export const Paragraph = styled.p`
    text-align: center;
    font-family: 'custom', sans-serif;
    font-size: 20px;
`

export const PassWrapper = styled.div`
position: relative;
`

export const Img = styled.img`
    position: absolute;
    right: 210px;
    top: 32px;
    &:hover{
        cursor: pointer;
}
`

export const Error = styled.p`
    margin: 0;
    bottom: 6px;
    right: 10px;
    position: absolute;
    color: red;
    font-family: 'custom', sans-serif;
    &:hover{
        cursor: default;
            }
`
