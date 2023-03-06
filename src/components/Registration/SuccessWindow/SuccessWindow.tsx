import { DataWrapper, Div, H1, Img, Title, TitlesWrapper, Value, } from "./SuccessWindow-styles"
import rocket from '../../../images/rocket.png'
import { useSelector } from "react-redux";
import { RootState } from "../../../store/redux-store";


export const SuccessWindow = () => {

    const { gender, firstName, lastName, birthday, email, phone, country, city, website } = useSelector((state: RootState) => state.inputData);

    return (
        <Div>
            <H1>На этом моментe данные полетели на сервер..    </H1>
            <TitlesWrapper>
                <Title>Имя</Title>
                <Title>Фамилия</Title>
                <Title>Пол</Title>
                <Title>Дата рождения</Title>
                <Title>Почта</Title>
                <Title>Телефон</Title>
                <Title>Страна</Title>
                <Title>Город</Title>
                <Title>Сайт</Title>
            </TitlesWrapper>
            <DataWrapper>
                <Value>{firstName}</Value>
                <Value>{lastName}</Value>
                <Value>{gender === 'male' ? 'мужской' : 'женский'}</Value>
                <Value>{!!birthday ? birthday.split('-').join('.') : '-'}</Value>
                <Value>{email}</Value>
                <Value>{phone}</Value>
                <Value>{!!country ? country : '-'}</Value>
                <Value>{!!city ? city : '-'}</Value>
                <Value>{!!website ? website : '-'}</Value>
            </DataWrapper>
            <Img src={rocket} alt="" />
        </Div>
    )
}