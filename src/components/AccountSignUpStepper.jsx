import { useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function AccountSignUpStepper() {
  /* stepper states made of of 3 parts */

  const [isCheckToggled, setisCheckToggled] = useState(false);

  const [signUpStepperPartOne, setSignUpStepperPartOne] = useState(true);
  const [signUpStepperParTwo, setSignUpStepperPartTwo] = useState(false);
  const [signUpStepperPartTwo, setSignUpStepperPartThree] = useState(false);

  const labelText = "enter first name";

  const [genreIsChecked, setgenreIsChecked] = useState([]);

  const selectGenre = [
    {
      name: "Comedy",
      id: "checkBox1",
      label: "Comedy",
      check: false,
    },
    {
      name: "FilmNoire",
      id: "checkBox2",
      label: "FilmNoire",
      check: false,
    },
    {
      name: "Sci-Fi",
      id: "checkBox3",
      label: "Sci-Fi",
      check: false,
    },
    {
      name: "Horror",
      id: "checkBox4",
      label: "Horror",
      check: false,
    },

  ]

  // form validation with React-Hook-Form and Yup

  const signUPSchema = yup.object().shape({
    userName: yup
      .string()
      .min(4)
      .max(20)
      .required("dont for get to add a user name"),
    userSignupEmail: yup
      .string()
      .email()
      .required("make sure to add an emaill adress"),
    userSignupConfirmEmail: yup
      .string()
      .oneOf(
        [yup.ref("userSignupEmail"), null],
        "sorry, email adresses dont match"
      ).required("please confirm your emaill adress"),

      genreIsChecked: yup.array().nullable().required("dont forget to add a genre"),
  });
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUPSchema),
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log(data)
    alert(JSON.stringify(data));
  };


  const handleCheckboxIsChecked = (e) => {
    //  setisCheckToggled((prevValue) => !prevValue);
    // alert(`${e.target.value}, ${e.target.checked}`);
  };


  return (
    <>
      <div className="UI__signup-form__header">
        <h2 className="UI__signup-form__header__title">
          Lets set up your account
        </h2>

        <span>add progress stepper here</span>
      </div>
      <div className="UI__signup-form__body">
        <div className="UI__signup-form__body__errors">
          <p className="UI__form__content__validation-error">
            {errors.userName?.message}
          </p>
          <p className="UI__form__content__validation-error">
            {errors.userSignupEmail?.message}
          </p>
          <p className="UI__form__content__validation-error">
            {errors.userSignupConfirmEmail?.message}
          </p>
          <p className="UI__form__content__validation-error">
            {errors.genreIsChecked?.message}
          </p>
        </div>
        <form className="UI__form__content" onSubmit={handleSubmit(onSubmit)}>
          <div className="UI__form__content__input-row">
            <label htmlFor="signup__userName">User Name</label>

            <input
              type="text"
              aria-label={labelText}
              aria-required="true"
              placeholder={labelText}
              name="signup__userName"
              {...register("userName")}
            />
          </div>

          <div className="UI__form__content__input-row">
            <label htmlFor="signup__userEmail">Email</label>

            <input
              type="text"
              aria-label={labelText}
              aria-required="true"
              name="signup__userEmail"
              {...register("userSignupEmail")}
            />
          </div>

          <div className="UI__form__content__input-row">
            <label htmlFor="signup__userEmailConfirm">Confirm Email</label>

            <input
              type="text"
              aria-label={labelText}
              aria-required="true"
              name="signup__userEmailConfirm"
              {...register("userSignupConfirmEmail")}
            />
          </div>

          <div className="UI__form__content__checkbox-row">
            {selectGenre.map((item, index) => {
              return (
                <label key={item.id} htmlFor={item.label}>
                  <input
                    type="checkbox"
                    value={item.name}
                    {...register("genreIsChecked")}
                    onChange={handleCheckboxIsChecked}
                  />
                  <span>{item.name}</span>
                </label>
              );
            })}
          </div>
          <div className="UI__form__content__input-row">
            <button type="submit">submit form</button>
          </div>
        </form>
      </div>
    </>
  );
}
