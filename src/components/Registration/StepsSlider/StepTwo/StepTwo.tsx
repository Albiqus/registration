import { PhoneInput } from "./PhoneInput/PhoneInput"
import { Div, Input, Label, Span } from "./StepTwo-styles"


export const StepTwo = () => {


    return (
        <Div>
            <Label>Почта<Span title='обязательное поле'>*</Span></Label>
            <Input placeholder='ivanoff@mail.ru' required></Input>

            <Label>Телефон<Span title='обязательное поле'>*</Span></Label>
            <PhoneInput />

            <Label>Страна</Label>
            <Input placeholder='Россия'></Input>

            <Label>Город</Label>
            <Input placeholder='Санкт-Петербург' ></Input>

            <Label>Веб сайт</Label>
            <Input placeholder='www.mysite.ru'></Input>
        </Div>
    )
}