import { RootState } from "../../../store/redux-store"
import { Heading, Paragraph, Wrapper } from "./Header-styles"
import { useSelector } from 'react-redux/es/hooks/useSelector';


export const Header = () => {
    const currentStep: any = useSelector((state: RootState) => state.steps.currentStep)

    return (
        <Wrapper>
            <Heading>Регистрация</Heading>
            <Paragraph>шаг {currentStep} из 3</Paragraph>
        </Wrapper>
    )
}