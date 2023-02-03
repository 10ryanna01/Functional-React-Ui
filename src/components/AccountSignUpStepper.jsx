import { useState } from "react";

export default function AccountSignUpStepper() {
  /* stepper states made of of 3 parts */

  const [signUpStepperPartOne, setSignUpStepperPartOne] = useState(true);
  const [signUpStepperParTwo, setSignUpStepperPartTwo] = useState(false);
  const [signUpStepperPartTwo, setSignUpStepperPartThree] = useState(false);

  const labelText = "enter first name";

  const handleFirstNameInput = () => {
    /* TODO add validation */
  };

  return (
    <div className="UI__signup-form">
    <div className="UI__signup-form__header">
    <h2 className="UI__signup-form__header__title">Lets set up your account</h2>

        <span>add progress stepper here</span>
      
      </div>
    <div className="UI__signup-form__body"> 

      <form className="UI__form__content">
        <div className="UI__form__content__input-row">
          <label htmlFor="signup__userName">User Name</label>

          <input
            type="text"
            aria-label={labelText}
            aria-required="true"
            onChange={handleFirstNameInput}
            value={labelText}
            placeholder={labelText}
            name="signup__userName"
          />
        </div>

        <div className="UI__form__content__input-row">
          <label htmlFor="signup__userEmail">Email</label>

          <input
            type="text"
            aria-label={labelText}
            aria-required="true"
            /*  onChange={onchangeHandler}
            value={inputValue} */
            name="signup__userEmail"
          />
        </div>

        <div className="UI__form__content__input-row">
          <label htmlFor="signup__userEmailConfirm">Confirm Email</label>

          <input
            type="text"
            aria-label={labelText}
            aria-required="true"
            /*    onChange={onchangeHandler}
            value={inputValue} */
            name="signup__userEmailConfirm"
          />
        </div>
      </form>
    </div>
    </div>
  );
}
