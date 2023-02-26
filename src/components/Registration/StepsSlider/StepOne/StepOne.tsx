import { DateInput, Div, Input, Label, RadioInput, RadioLabel, RadioWrapper, Span } from "./StepOne-styles"
import { useState } from 'react';

export const StepOne = () => {

    const [currentGender, setCurrentGender] = useState('male')

    const onMaleClick = () => {
        setCurrentGender('male')
    }

    const onFemaleClick = () => {
        setCurrentGender('female')
    }

    return (
        <Div>
            <Label>Имя<Span title='обязательное поле'>*</Span></Label>
            <Input placeholder='Иван' required></Input>

            <Label>Фамилия<Span title='обязательное поле'>*</Span></Label>
            <Input placeholder='Иванов' required></Input>

            <Label>Пол</Label>
            <RadioWrapper>
                <RadioInput onClick={onMaleClick} type='radio' name='gender' id='male' checked={currentGender === 'male' && true}></RadioInput>
                <RadioLabel htmlFor='male'>муж</RadioLabel>
                <RadioInput onClick={onFemaleClick} type='radio' name='gender' id='female' checked={currentGender === 'female' && true}></RadioInput>
                <RadioLabel htmlFor='female'>жен</RadioLabel>
            </RadioWrapper>
            
            <Label>Дата рождения</Label>
            <DateInput type='date'></DateInput>

        </Div>
    )
}