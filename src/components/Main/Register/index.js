import React, { useState } from "react";
import './index.sass';
import calendar from '../../../assets/icons/calendar-icon.svg';
import clock from '../../../assets/icons/clock-icon.svg';
import location from '../../../assets/icons/location-icon.svg';
import SuccessMessage from "./SuccessMessage";

const Registration = () => {

    const [emailValidated, setEmailValidated] = useState(false);
    const [lengthValidated, setLengthValidated] = useState(false);
    const [numberValidated, setNumberValidated] = useState(false);
    const [lowerValidated, setLowerValidated] = useState(false);
    const [upperValidated, setUpperValidated] = useState(false);
    const [specialValidated, setSpecialValidated] = useState(false);

    const handleChangeEmail = (value) => {
        const email = new RegExp('(?=.+@.+\..+.{1,4})');
        if(email.test(value)) setEmailValidated(true);
        else setEmailValidated(false);
    }
    
    const handleChangePassword = (value) => {
        const length = new RegExp('(?=.{8,15})'); 
        const number = new RegExp('(?=.*[0-9])');
        const lower = new RegExp('(?=.*[a-z])');
        const upper = new RegExp('(?=.*[A-Z])');
        const special = new RegExp('(?=.*[!@#$%^&*-+])');

        if(length.test(value)) setLengthValidated(true);
        else setLengthValidated(false);

        if(number.test(value)) setNumberValidated(true);
        else setNumberValidated(false);

        if(lower.test(value)) setLowerValidated(true);
        else setLowerValidated(false);

        if(upper.test(value)) setUpperValidated(true);
        else setUpperValidated(false);

        if(special.test(value)) setSpecialValidated(true);
        else setSpecialValidated(false);
    }
    const [focused, setFocused] = useState(false);
    const handleFocus = (e) => {
        setFocused(true);
    }
    const [visible, setVisible] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setVisible(!visible);
    }
    
    return <> 
        <section className="reg" id="registration">
            <div className="container">
                <div className="reg__inner">
                    <div className="reg__title">
                        <h3>- Register Here -</h3>
                        <p>Join us to celebrate our biggest night of&nbsp;the&nbsp;year.</p>
                    </div>
                    <div className="reg__info">
                        <div className="reg__info--date">
                            <img src={calendar} alt="icon" />
                            <time dateTime="2022-11-19">19 NOVEMBER 2022</time>
                        </div>
                        <div className="reg__info--time">
                            <img src={clock} alt="icon" />
                            <time dateTime="17:00">17:00 – 23:00</time>
                        </div>
                        <div className="reg__info--address">
                            <img src={location} alt="icon" />
                            <address>Centara Grand & Bangkok Convention Centre, Bangkok</address>
                        </div>
                    </div>
                    <form id="registration-form" className="reg__form" onSubmit={handleSubmit}>
                        <div className="reg__form--field">
                            <label htmlFor='email'>Email:</label>
                            <input type="email" name="email" required
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,4}$"
                            onChange={(e) => handleChangeEmail(e.target.value)}
                            onBlur={handleFocus} focused={focused.toString()} />
                            <div className="form__validation form__validation--email">
                                <span className={emailValidated ? 'validated' : 'not-validated'}>Please Enter Valid Email</span>
                            </div>
                        </div>
                        <div className="reg__form--field">
                            <label htmlFor='password'>Password:</label>
                            <input type="password" name="password" required 
                            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!?@#$%^&*_=+-]).{8,15}$"
                            maxLength={15}
                            onChange={(e) => handleChangePassword(e.target.value)}
                            onBlur={handleFocus} focused={focused.toString()}
                             />
                            
                            <div className="form__validation">
                                <ul>
                                    <li><span className={lengthValidated ? 'validated' : 'not-validated'}>8 - 15 characters</span></li>
                                    <li><span className={numberValidated ? 'validated' : 'not-validated'}>1 or more numbers</span></li>
                                    <li><span className={lowerValidated ? 'validated' : 'not-validated'}>1 or more lower case letters</span></li>
                                    <li><span className={upperValidated ? 'validated' : 'not-validated'}>1 or more upper case letters</span></li>
                                    <li><span className={specialValidated ? 'validated' : 'not-validated'}>1 or more special characters (#[]()@$&*!?|,.^/\+_-)s</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className={visible ? 'display-block' : 'display-none'}><SuccessMessage /></div>
                        <input type="submit" value="Register now" className='btn' disabled={emailValidated && lengthValidated && numberValidated && lowerValidated && upperValidated && specialValidated ?  false : true} />
                    </form>
                    <div className="reg__links">
                        <p>Don’t have an account? <a className="red-text underline" href="#" title="Create account">Create one here</a> and register for the event</p>
                        <p className="small-text">Terms and Conditions apply<span className="red-text">*</span>. To read the full T&Cs, click <a className="red-text" href="#" title="Read T&C">here</a>.</p>
                    </div>
                </div> 
            </div>
        </section>
    </>
}
export default Registration;