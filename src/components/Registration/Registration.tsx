
import { useSelector } from "react-redux/es/exports"
import { RootState } from "../../store/redux-store"

import { Div, Header, HeaderWrapper, Paragraph } from "./Registration-styles"
import { StepsSlider } from "./StepsSlider/StepsSlider"

export const Registration = () => {

 
    const currentStep: any = useSelector((state: RootState) => state.main.currentStep)

    return (
        <Div>
            <HeaderWrapper>
                <Header>Регистрация</Header>
                <Paragraph>шаг {currentStep} из 3</Paragraph>
            </HeaderWrapper>
            <StepsSlider />
        </Div>
    )
}