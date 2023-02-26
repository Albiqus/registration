import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../store/redux-store"
import { PhoneInput } from "./PhoneInput/PhoneInput"
import { Div, Input, Label, Span } from "./StepTwo-styles"


export const StepTwo = () => {
    const dispatch = useDispatch()
    const email: any = useSelector((state: RootState) => state.main.email)
    const phone: any = useSelector((state: RootState) => state.main.phone)
    const country: any = useSelector((state: RootState) => state.main.country)
    const city: any = useSelector((state: RootState) => state.main.city)
    const website: any = useSelector((state: RootState) => state.main.website)

    const onEmailChange = (e) => {
        dispatch({ type: 'SET_EMAIL', payload: { email: e.target.value } })
    }

    const onPhoneChange = (e) => {
        dispatch({ type: 'SET_PHONE', payload: { phone: e.target.value } })
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

    return (
        <Div>
            <Label>Почта<Span title='обязательное поле'>*</Span></Label>
            <Input onChange={onEmailChange} value={email} placeholder='ivanoff@mail.ru' required></Input>

            <Label>Телефон<Span title='обязательное поле'>*</Span></Label>
            <PhoneInput onChange={onPhoneChange} value={phone} />

            <Label>Страна</Label>
            <Input onChange={onCountryChange} value={country} placeholder='Россия'></Input>

            <Label>Город</Label>
            <Input onChange={onCityChange} value={city} placeholder='Санкт-Петербург' ></Input>

            <Label>Веб сайт</Label>
            <Input onChange={onWebsiteChange} value={website} placeholder='www.mysite.ru'></Input>
        </Div>
    )
}