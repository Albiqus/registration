import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../store/redux-store"
import { PhoneInput } from "./PhoneInput/PhoneInput"
import { Div, Error, Img, Input, Label, P, Span, Tooltip, Wrapper } from "./StepTwo-styles"
import { useEffect, useState } from 'react';
import { isValid } from "../../../../utils/isValid";
import placeholder from '../../../../images/icons/placeholder.png'
import { format } from "../../../../utils/format";


export const StepTwo = () => {

    const dispatch = useDispatch()
    const { email, phone, country, city, website } = useSelector((state: RootState) => state.inputData)


    const [emailError, setEmailError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [countryError, setCountryError] = useState(false)
    const [cityError, setCityError] = useState(false)

    const [emailTooltip, setEmailTooltip] = useState(false)
    const [phoneTooltip, setPhoneTooltip] = useState(false)
    const [countryTooltip, setCountryTooltip] = useState(false)
    const [cityTooltip, setCityTooltip] = useState(false)

    const onEmailChange = (e) => {
        setEmailTooltip(false)
        const formatedValue = format(e.target.value, 'EMAIL')
        dispatch({ type: 'SET_EMAIL', payload: { email: formatedValue } })
        setEmailError(!isValid(e.target.value, 'EMAIL'))
    }

    const onPhoneChange = (e) => {
        setPhoneTooltip(false)
        dispatch({ type: 'SET_PHONE', payload: { phone: e.target.value } })
        setPhoneError(!isValid(e.target.value, 'PHONE'))
    }

    const onCountryChange = (e) => {
        setCountryTooltip(false)
        const formatedValue = format(e.target.value, 'COUNTRY')
        dispatch({ type: 'SET_COUNTRY', payload: { country: formatedValue } })
        setCountryError(!isValid(e.target.value, 'COUNTRY'))
    }

    const onCityChange = (e) => {
        setCityTooltip(false)
        const formatedValue = format(e.target.value, 'CITY')
        dispatch({ type: 'SET_CITY', payload: { city: formatedValue } })
        setCityError(!isValid(e.target.value, 'CITY'))
    }

    const onWebsiteChange = (e) => {
        const formatedValue = format(e.target.value, 'WEBSITE')
        dispatch({ type: 'SET_WEBSITE', payload: { website: formatedValue } })
    }

    const onEmailMouseEnter = () => setEmailTooltip(true)
    const onEmailMouseLeave = () => setEmailTooltip(false)

    const onPhoneMouseEnter = () => setPhoneTooltip(true)
    const onPhoneMouseLeave = () => setPhoneTooltip(false)

    const onCountryMouseEnter = () => setCountryTooltip(true)
    const onCountryMouseLeave = () => setCountryTooltip(false)

    const onCityMouseEnter = () => setCityTooltip(true)
    const onCityMouseLeave = () => setCityTooltip(false)
        
    useEffect(() => {
        if (
            !!email &&
            !!phone &&
            !cityError &&
            !countryError &&
            !emailError &&
            !phoneError
        ) {
            dispatch({ type: 'ADD_VALID_STEP', payload: { step: 2 } })
        } else {
            dispatch({ type: 'DELETE_VALID_STEP', payload: { step: 2 } })
        }
    }, [email, phone, emailError, phoneError, countryError, cityError])


    return (
        <Div>
            <Wrapper>
                <Label>Почта<Span title='обязательное поле'>*</Span></Label>
                <Img onMouseEnter={onEmailMouseEnter} onMouseLeave={onEmailMouseLeave} src={placeholder}></Img>
                <Input onChange={onEmailChange} value={email} placeholder='ivanoff@mail.ru'
                    style={{ backgroundColor: emailError ? 'rgba(255, 173, 173, 0.63)' : 'white' }} required></Input>
                {emailError &&
                    <Error onMouseEnter={onEmailMouseEnter} onMouseLeave={onEmailMouseLeave}>некорректный формат</Error>}
                {emailTooltip &&
                    <Tooltip>
                        <P>- обязательное поле</P>
                    </Tooltip>}
            </Wrapper>

            <Wrapper>
                <Label>Телефон<Span title='обязательное поле'>*</Span></Label>
                <Img onMouseEnter={onPhoneMouseEnter} onMouseLeave={onPhoneMouseLeave} style={{ right: '270px' }} src={placeholder}></Img>
                <PhoneInput onChange={onPhoneChange} value={phone} phoneError={phoneError} />
                {phoneError &&
                    <Error onMouseEnter={onPhoneMouseEnter} onMouseLeave={onPhoneMouseLeave}>некорректный формат</Error>}
                {phoneTooltip &&
                    <Tooltip >
                        <P>- обязательное поле</P>
                        <P>- только цифры</P>
                        <P>- миниум 10 символов</P>
                    </Tooltip>}
            </Wrapper>

            <Wrapper>
                <Label>Страна</Label>
                <Img onMouseEnter={onCountryMouseEnter} onMouseLeave={onCountryMouseLeave} style={{ right: '280px' }} src={placeholder}></Img>
                <Input onChange={onCountryChange} value={country} placeholder='Россия'></Input>
                {countryError &&
                    <Error onMouseEnter={onCountryMouseEnter} onMouseLeave={onCountryMouseLeave}>некорректный формат</Error>}
                {countryTooltip &&
                    <Tooltip style={{ left: '10px' }}>
                        <P>- только буквы</P>
                        <P>- минимум 2 символа</P>
                        <P>- максимум 20 символа</P>
                        <P>- только первая буква в верхнем регистре</P>
                    </Tooltip>}
            </Wrapper>

            <Wrapper>
                <Label>Город</Label>
                <Img onMouseEnter={onCityMouseEnter} onMouseLeave={onCityMouseLeave} style={{ right: '280px' }} src={placeholder}></Img>
                <Input onChange={onCityChange} value={city} placeholder='Санкт-Петербург' ></Input>
                {cityError &&
                    <Error onMouseEnter={onCityMouseEnter} onMouseLeave={onCityMouseLeave}>некорректный формат</Error>}
                {cityTooltip &&
                    <Tooltip style={{ left: '10px' }}>
                        <P>- только буквы</P>
                        <P>- минимум 2 символа</P>
                        <P>- максимум 30 символов</P>
                        <P>- только первая буква в верхнем регистре</P>
                    </Tooltip>}
            </Wrapper>

            <Label>Веб сайт</Label>
            <Input onChange={onWebsiteChange} value={website} placeholder='www.mysite.ru'></Input>
        </Div>
    )
}