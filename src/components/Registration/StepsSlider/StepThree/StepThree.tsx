import { Div, Img, Input, Label, Li, Paragraph, PassWrapper, Span, Ul } from "./StepThree-styles"
import seenIcon from '../../../../images/icons/seen.png'
import hideIcon from '../../../../images/icons/hide.png'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/redux-store";


export const StepThree = () => {
    const dispatch = useDispatch()
    const password: any = useSelector((state: RootState) => state.main.password)
    const secondPassword: any = useSelector((state: RootState) => state.main.secondPassword)


    const onPasswordChange = (e) => {
        dispatch({ type: 'SET_PASSWORD', payload: { password: e.target.value } })
    }

    const onSecondPasswordChange = (e) => {
        dispatch({ type: 'SET_SECOND_PASSWORD', payload: { secondPassword: e.target.value } })
    }


    const [firPassVisibility, setFirPassVisibility] = useState(false)
    const [secPassVisibility, setSecPassVisibility] = useState(false)

    const onFirPassVisibilityClick = () => {
        setFirPassVisibility(!firPassVisibility)
    }
    const onSecPassVisibilityClick = () => {
        setSecPassVisibility(!secPassVisibility)
    }

    return (
        <Div>
            <Paragraph>Придумайте пароль</Paragraph>

            <PassWrapper>
                <Label>Пароль<Span title='обязательное поле'>*</Span></Label>
                <Input onChange={onPasswordChange} value={password} type={firPassVisibility ? 'default' : 'password'} required></Input>
                <Img onClick={onFirPassVisibilityClick} src={firPassVisibility ? seenIcon : hideIcon} alt="" />
            </PassWrapper>

            <PassWrapper>
                <Label>Повтор пароля<Span title='обязательное поле'>*</Span></Label>
                <Input onChange={onSecondPasswordChange} value={secondPassword} type={secPassVisibility ? 'default' : 'password'} required></Input>
                <Img onClick={onSecPassVisibilityClick} src={secPassVisibility ? seenIcon : hideIcon} alt="" />
            </PassWrapper>

            <Ul>
                <Li>минимум 8 символов</Li>
                <Li>заглавные и строчные буквы</Li>
                <Li>хотя бы одна цифра</Li>
                <Li>хотя бы один спецсимвол (@, #, $ и т.д.)</Li>
            </Ul>
        </Div>
    )
}