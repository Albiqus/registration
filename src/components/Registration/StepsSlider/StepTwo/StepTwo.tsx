import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../store/redux-store"
import { PhoneInput } from "./PhoneInput/PhoneInput"
import { Div, Error, Input, Label, P, Span, Tooltip, Wrapper } from "./StepTwo-styles"
import { useEffect, useState } from 'react';
import { isValid } from "../../../../utils/isValid";


export const StepTwo = () => {

    const dispatch = useDispatch()
    const email: any = useSelector((state: RootState) => state.inputData.email)
    const phone: any = useSelector((state: RootState) => state.inputData.phone)
    const country: any = useSelector((state: RootState) => state.inputData.country)
    const city: any = useSelector((state: RootState) => state.inputData.city)
    const website: any = useSelector((state: RootState) => state.inputData.website)

    const [emailError, setEmailError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)

    const [emailTooltip, setEmailTooltip] = useState(false)
    const [phoneTooltip, setPhoneTooltip] = useState(false)


    const onEmailChange = (e) => {
        dispatch({ type: 'SET_EMAIL', payload: { email: e.target.value } })
        setEmailError(!isValid(e.target.value, 'EMAIL'))
    }

    const onPhoneChange = (e) => {
        dispatch({ type: 'SET_PHONE', payload: { phone: e.target.value } })
        setPhoneError(!isValid(e.target.value, 'PHONE'))
    }

    const onCountryChange = (e) => {
        dispatch({ type: 'SET_COUNTRY', payload: { country: e.target.value } })
    }

    const onCityChange = (e) => {
        dispatch({ type: 'SET_CITY', payload: { city: e.target.value } })
    }

    const onWebsiteChange = (e) => {
        dispatch({ type: 'SET_WEBSITE', payload: { website: e.target.value } })
    }


    const onEmailMouseEnter = () => setEmailTooltip(true)


    const onEmailMouseLeave = () => setEmailTooltip(false)


    const onPhoneMouseEnter = () => setPhoneTooltip(true)


    const onPhoneMouseLeave = () => setPhoneTooltip(false)

    useEffect(() => {
        if (
            Boolean(email) &&
            Boolean(phone) &&
            !emailError &&
            !phoneError
        ) {
            dispatch({ type: 'ADD_VALID_STEP', payload: { step: 2 } })
        } else {
            dispatch({ type: 'DELETE_VALID_STEP', payload: { step: 2 } })
        } 
    }, [email, phone, emailError, phoneError])


    return (
        <Div>
            <Wrapper>
                <Label onMouseEnter={onEmailMouseEnter} onMouseLeave={onEmailMouseLeave}>Почта<Span title='обязательное поле'>*</Span></Label>
                <Input onChange={onEmailChange} value={email} placeholder='ivanoff@mail.ru'
                    style={{ backgroundColor: emailError ? 'rgba(255, 173, 173, 0.63)' : 'white' }} required></Input>
                {emailError &&
                    <Error onMouseEnter={onEmailMouseEnter} onMouseLeave={onEmailMouseLeave}>некорректный формат</Error>}
                {emailTooltip &&
                    <Tooltip onMouseEnter={onEmailMouseEnter} onMouseLeave={onEmailMouseLeave}>
                        <P>- обязательное поле</P>
                    </Tooltip>}
            </Wrapper>

            <Wrapper>
                <Label onMouseEnter={onPhoneMouseEnter} onMouseLeave={onPhoneMouseLeave}>Телефон<Span title='обязательное поле'>*</Span></Label>
                <PhoneInput onChange={onPhoneChange} value={phone} phoneError={phoneError} />
                {phoneError &&
                    <Error onMouseEnter={onPhoneMouseEnter} onMouseLeave={onPhoneMouseLeave}>некорректный формат</Error>}
                {phoneTooltip &&
                    <Tooltip onMouseEnter={onPhoneMouseEnter} onMouseLeave={onPhoneMouseLeave}>
                        <P>- обязательное поле</P>
                        <P>- только цифры</P>
                        <P>- миниум 10 символов</P>
                    </Tooltip>}
            </Wrapper>

            <Label>Страна</Label>
            <Input onChange={onCountryChange} value={country} placeholder='Россия'></Input>

            <Label>Город</Label>
            <Input onChange={onCityChange} value={city} placeholder='Санкт-Петербург' ></Input>

            <Label>Веб сайт</Label>
            <Input onChange={onWebsiteChange} value={website} placeholder='www.mysite.ru'></Input>
        </Div>
    )
}