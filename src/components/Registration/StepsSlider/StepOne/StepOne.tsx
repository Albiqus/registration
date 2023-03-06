import { DateInput, Div, Error, Img, Input, Label, P, RadioInput, RadioLabel, RadioWrapper, Span, Tooltip, Wrapper } from "./StepOne-styles"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/redux-store";
import { isValid } from "../../../../utils/isValid";
import { useEffect, useState } from 'react';
import placeholder from '../../../../images/icons/placeholder.png'
import { format } from "../../../../utils/format";


export const StepOne = () => {

    const dispatch = useDispatch()
    const { gender, firstName, lastName, birthday } = useSelector((state: RootState) => state.inputData);

    const [firNameError, setFirNameError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)

    const [firNameTooltip, setFirNameTooltip] = useState(false)
    const [lastNameTooltip, setLastNameTooltip] = useState(false)

    const onFirstNameChange = (e) => {
        setFirNameTooltip(false)
        const formatedValue = format(e.target.value, 'FIRST_NAME')
        dispatch({ type: 'SET_FIRST_NAME', payload: { firstName: formatedValue } })
        setFirNameError(!isValid(e.target.value, 'FIRST_NAME'))
    }

    const onLastNameChange = (e) => {
        setLastNameTooltip(false)
        const formatedValue = format(e.target.value, 'LAST_NAME')
        dispatch({ type: 'SET_LAST_NAME', payload: { lastName: formatedValue } })
        setLastNameError(!isValid(e.target.value, 'LAST_NAME'))
    }

    const onMaleChange = () => {
        dispatch({ type: 'SET_GENDER', payload: { gender: 'male' } })
    }

    const onFemaleChange = () => {
        dispatch({ type: 'SET_GENDER', payload: { gender: 'female' } })
    }

    const onBirthdayChange = (e) => {
        dispatch({ type: 'SET_BIRTHDAY', payload: { birthday: e.target.value } })
    }


    const onFirNameMouseEnter = () => setFirNameTooltip(true)
    const onFirNameMouseLeave = () => setFirNameTooltip(false)

    const onLastNameMouseEnter = () => setLastNameTooltip(true)
    const onLastNameMouseLeave = () => setLastNameTooltip(false)

    useEffect(() => {
        if (
            !!firstName &&
            !!lastName &&
            !firNameError &&
            !lastNameError
        ) {
            dispatch({ type: 'ADD_VALID_STEP', payload: { step: 1 } })
        } else {
            dispatch({ type: 'DELETE_VALID_STEP', payload: { step: 1 } })
        }
    }, [firstName, lastName, firNameError, lastNameError])

    return (
        <Div>
            <Wrapper>
                <Label>Имя<Span title='обязательное поле'>*</Span></Label>
                <Img onMouseEnter={onFirNameMouseEnter} onMouseLeave={onFirNameMouseLeave} src={placeholder}></Img>
                <Input onChange={onFirstNameChange} value={firstName} placeholder='Иван'
                    style={{ backgroundColor: firNameError ? 'rgba(255, 173, 173, 0.63)' : 'white' }} required></Input>
                {firNameError &&
                    <Error onMouseEnter={onFirNameMouseEnter} onMouseLeave={onFirNameMouseLeave}>некорректный формат</Error>}
                {firNameTooltip &&
                    <Tooltip>
                        <P>- обязательное поле</P>
                        <P>- минимум 2 символа</P>
                        <P>- максимум 15 символов</P>
                        <P>- только буквы</P>
                        <P>- только первая буква в верхнем регистре</P>
                    </Tooltip>}
            </Wrapper>

            <Wrapper>
                <Label>Фамилия<Span title='обязательное поле'>*</Span></Label>
                <Img onMouseEnter={onLastNameMouseEnter} onMouseLeave={onLastNameMouseLeave} src={placeholder} style={{ right: '270px' }}></Img>
                <Input onChange={onLastNameChange} value={lastName} placeholder='Иванов'
                    style={{ backgroundColor: lastNameError ? 'rgba(255, 173, 173, 0.63)' : 'white' }} required></Input>
                {lastNameError && <Error onMouseEnter={onLastNameMouseEnter} onMouseLeave={onLastNameMouseLeave}>некорректный формат</Error>}
                {lastNameTooltip &&
                    <Tooltip>
                        <P>- обязательное поле</P>
                        <P>- минимум 2 символа</P>
                        <P>- максимум 20 символов</P>
                        <P>- только буквы</P>
                        <P>- первая буква в верхнем регистре</P>
                        <P>- только первая буква в верхнем регистре</P>
                    </Tooltip>}
            </Wrapper>

            <Label>Пол</Label>
            <RadioWrapper>
                <RadioInput onChange={onMaleChange} type='radio' name='gender' id='male' checked={gender === 'male' && true}></RadioInput>
                <RadioLabel htmlFor='male'>муж</RadioLabel>
                <RadioInput onChange={onFemaleChange} type='radio' name='gender' id='female' checked={gender === 'female' && true}></RadioInput>
                <RadioLabel htmlFor='female'>жен</RadioLabel>
            </RadioWrapper>

            <Label>Дата рождения</Label>
            <DateInput onChange={onBirthdayChange} value={birthday} type='date'></DateInput>
        </Div>
    )
}