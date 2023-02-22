import styled from 'styled-components'


export const Div = styled.div`
    width: 700px;
    height: 740px;
    border-radius: 10px 10px 10px 10px;
    display: flex;
    flex-wrap: wrap;
    background-color: rgb(176, 224, 230);
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    `

export const HeaderWrapper = styled.div`
    width: 700px;
    height: 100px;
    padding-top: 20px;
    padding-bottom: 20px;
    `

export const Header = styled.h1`
    text-align: center;
    font-size: 35px;
    `

export const Paragraph = styled.p`
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    margin-top: 10px;
    `
