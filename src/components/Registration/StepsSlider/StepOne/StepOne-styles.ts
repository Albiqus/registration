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
`

export const Span = styled.span`
   color: red;
`

export const RadioWrapper = styled.div`
    width: 240px;
    margin-top: 10px;
    margin-left: 230px;
    display: flex;
    justify-content: space-between;;
`

export const RadioLabel = styled.label`
    width: 110px;
    box-sizing: border-box;
    position: relative;
    color: rgb(0, 191, 255);
    font-family: 'custom', sans-serif;
    font-size: 22px;
    border: 2px solid rgb(0, 191, 255);
    border-radius: 5px;
    padding: 10px 20px 15px 40px;
    cursor: pointer;
    &::before {
        margin-top: 8px;
        position: absolute;
        left: 10px;
        content: '';
        height: 16px;
        width: 16px;
        outline: 3px solid rgb(0, 191, 255);
        border-radius: 50%;
    }
`

export const RadioInput = styled.input`
    display: none;
    &:checked {
    + ${RadioLabel} {
        background-color: rgb(0, 191, 255);
        color: white;
        &::before{

            height: 16px;
            width: 16px;
            outline: 6px solid white;
            outline-offset:-3px;
            background-color: rgb(0, 191, 255);;
            }
        }
    }
`

export const DateInput = styled.input`
    margin: 0 auto;
    margin-top: 10px;
    border-radius: 5px;
    display: block;
    box-sizing: border-box;
    background-color: rgb(0, 191, 255);
    padding: 15px;
    width: 220px;
    font-family: 'custom', sans-serif;
    color: white;
    font-size: 22px;
    border: none;
    outline: none;
    &::-webkit-calendar-picker-indicator  {
        background-color:  rgb(176, 224, 230);
        padding: 5px;
        cursor: pointer;
        border-radius: 3px;
        &:hover{
            transform: scale(1.1)
        }
    }
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
    left: 0px;
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
    right: 300px;
    top: 6px;
    &:hover{
        cursor: pointer;
}
`