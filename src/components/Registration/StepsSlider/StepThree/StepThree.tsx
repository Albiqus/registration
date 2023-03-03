import { Div, Error, Img, Input, Label, Li, Paragraph, PassWrapper, Span, Ul } from "./StepThree-styles"
import seenIcon from '../../../../images/icons/seen.png'
import hideIcon from '../../../../images/icons/hide.png'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/redux-store";
import { isValid } from "../../../../utils/isValid";
import { isSamePasswords } from "../../../../utils/isSamePasswords";


export const StepThree = () => {
    const dispatch = useDispatch()
    const password: any = useSelector((state: RootState) => state.inputData.password)
    const secondPassword: any = useSelector((state: RootState) => state.inputData.secondPassword)

    const [passError, setPassError] = useState(false)
    const [diffPassError, setDiffPassError] = useState(true)
    const [firPassVisibility, setFirPassVisibility] = useState(false)
    const [secPassVisibility, setSecPassVisibility] = useState(false)


    const onPasswordChange = (e) => {
        dispatch({ type: 'SET_PASSWORD', payload: { password: e.target.value } })
        setPassError(!isValid(e.target.value, 'PASSWORD'))
    }
        
    const onSecondPasswordChange = (e) => {
        dispatch({ type: 'SET_SECOND_PASSWORD', payload: { secondPassword: e.target.value } })
    }

    const onFirPassVisibilityClick = () => {
        setFirPassVisibility(!firPassVisibility)
    }
    const onSecPassVisibilityClick = () => {
        setSecPassVisibility(!secPassVisibility)
    }

    useEffect(() => { 
        setDiffPassError(!isSamePasswords(password, secondPassword)) 
    }, [password, secondPassword])

    useEffect(() => {
        if (
            Boolean(password) &&
            Boolean(secondPassword) &&
            !passError &&
            !diffPassError
        ) {
            dispatch({ type: 'ADD_VALID_STEP', payload: { step: 3 } })
        } else {
            dispatch({ type: 'DELETE_VALID_STEP', payload: { step: 3 } })
        }
    }, [password, secondPassword, passError, diffPassError])

    return (
        <Div>
            <Paragraph>Придумайте пароль</Paragraph>

            <PassWrapper>
                <Label>Пароль<Span title='обязательное поле'>*</Span></Label>
                <Input onChange={onPasswordChange} value={password} type={firPassVisibility ? 'default' : 'password'} required></Input>
                <Img onClick={onFirPassVisibilityClick} src={firPassVisibility ? seenIcon : hideIcon} alt="" />
                {passError &&
                    <Error>некорректный формат</Error>}
            </PassWrapper>

            <PassWrapper>
                <Label>Повтор пароля<Span title='обязательное поле'>*</Span></Label>
                <Input onChange={onSecondPasswordChange} value={secondPassword} type={secPassVisibility ? 'default' : 'password'} required></Input>
                <Img onClick={onSecPassVisibilityClick} src={secPassVisibility ? seenIcon : hideIcon} alt="" />
                {diffPassError &&
                    <Error>пароли не совпадают</Error>}
            </PassWrapper>

            <Ul>
                <Li>минимум 8 символов</Li>
                <Li>максимум 50 символов</Li>
                <Li>заглавные и строчные буквы</Li>
                <Li>хотя бы одна цифра</Li>
                <Li>хотя бы один спецсимвол (@, #, $ и т.д.)</Li>
            </Ul>
        </Div>
    )
}