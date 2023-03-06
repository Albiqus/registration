import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../../store/redux-store';
import { StepOne } from './StepOne/StepOne';
import classes from './StepsSlider.module.css';
import { StepThree } from './StepThree/StepThree';
import { StepTwo } from './StepTwo/StepTwo';


export const StepsSlider = () => {

    const dispatch = useDispatch()
    const currentStep: number = useSelector((state: RootState) => state.steps.currentStep)
    const validSteps: any = useSelector((state: RootState) => state.steps.validSteps)
    

    const onNextSlideClick = () => {
        if (currentStep !== 3) {
            dispatch({ type: 'SET_CURRENT_STEP', payload: { currentStep: currentStep + 1 } })
            return
        }
        dispatch({ type: 'SET_IS_SUBMIT_DATA' })
    }

    const onPrevSlideClick = () => {
        if (currentStep !== 1) {
            dispatch({ type: 'SET_CURRENT_STEP', payload: { currentStep: currentStep - 1 } })
        }
    }


    const nextButtonClassName = validSteps.includes(currentStep) ? classes.bar : `${classes.bar} ${classes.hidden}`

    return (
        <div className={classes.sliderMiddle}>
            <div className={classes.slides}>
                <input className={classes.stepOne} type='radio' name='r' id='r1' defaultChecked></input>
                <input className={classes.stepTwo} type='radio' name='r' id='r2'></input>
                <input className={classes.stepThree} type='radio' name='r' id='r3'></input>

                <div className={`${classes.slide} ${classes.s1}`}>
                    <StepOne />
                </div>

                <div className={classes.slide}>
                    <StepTwo />
                </div>

                <div className={classes.slide}>
                    <StepThree />
                </div>
                
            </div>
            <div className={classes.navigation}>
                <div className={currentStep !== 1 ? classes.wrapperPrev : `${classes.wrapperPrev} ${classes.hidden}`}>
                    <label onClick={onPrevSlideClick} className={classes.bar} htmlFor={`r${currentStep}`}>назад</label>
                </div>
                <div className={classes.wrapperNext}>
                    <label onClick={onNextSlideClick} className={nextButtonClassName} htmlFor={`r${currentStep}`}>далее</label>
                </div>
            </div>
        </div>

    )
}