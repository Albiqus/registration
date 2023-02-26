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


// export const Input = styled.input`
//     margin: 0 auto;
//     font-size: 22px;
//     width: 200px;
//     height: 30px;
    // display: block;
    // box-sizing: border-box;
//     outline: none;
//     border: none;
//     font-family: 'custom', sans-serif;
// `