import './index.sass';
import checkmark from "../../../../assets/icons/checkmark.svg";
const SuccessMessage = () => {
    return <>
        <div className="success-message">
            <div className="success-message__title">
                <img className="success-message__title--icon" src={checkmark} alt="icon" />
                <p className="success-message__title--text">Registration Successful</p>
            </div>
            <p className="success-message--text">Thank you for registering for our event with XM. You will receive an email shortly with confirmation of your registration.</p>
        </div>
    </>
}
export default SuccessMessage;