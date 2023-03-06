import { useSelector } from "react-redux"
import { RootState } from "../../store/redux-store"
import { Header } from "./Header/Header"
import { Div } from "./Registration-styles"
import { StepsSlider } from "./StepsSlider/StepsSlider"
import { SuccessWindow } from "./SuccessWindow/SuccessWindow"

export const Registration = () => {

    const isSubmitData: boolean = useSelector((state: RootState) => state.steps.isSubmitData)

    return (
        <Div>
            {!isSubmitData && <Header />}
            {!isSubmitData && <StepsSlider />}
            {isSubmitData && <SuccessWindow />}

        </Div>
    )
}