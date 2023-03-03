import InputMask from "react-input-mask";


export const PhoneInput = (props) => {
    return (
        <InputMask
            style={{
                margin: "0 auto", fontSize: "22px", width: "200px",
                height: "30px", display: "block", boxSizing: "border-box",
                outline: "none", border: "none", fontFamily: "custom, sans-serif",
                backgroundColor: props.phoneError ? 'rgba(255, 173, 173, 0.63)' : 'white'
            }
            }
            mask='(+7) 999 999 9999'
            value={props.value}
            onChange={props.onChange}
            placeholder='(+7)123 456 7890'
        >
        </InputMask>
    );
}