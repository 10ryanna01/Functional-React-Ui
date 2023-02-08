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
  const inputPlaceholderEmail = "add an emaill address";
  const inputPlaceholderConfirmEmail = "confirm email address";
  const inputPlaceholderUserName = "add a user name";
  const inputPlaceholderEnterGenre = "select a genre";

  const [genreIsChecked, setgenreIsChecked] = useState([]);

  const selectGenre = [
    {
      name: "Comedy",
      id: "checkBox1",
      label: "Comedy",
      check: false,
    },
    {
      name: "Film Noire",
      id: "checkBox2",
      label: "Film Noire",
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
    {
      name: "Action",
      id: "checkBox5",
      label: "Action",
      check: false,
    },
    {
      name: "Fantasy",
      id: "checkBox6",
      label: "Fantasy",
      check: false,
    },
    {
      name: "Thriller",
      id: "checkBox7",
      label: "Thriller",
      check: false,
    },
    {
      name: "Drama",
      id: "checkBox8",
      label: "Drama",
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
    console.log(data, `axios.post("/api/addNewFilmFan", data)` )
    // alert(JSON.stringify(data));
  // return axios.post("/api/register", data);
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
            <label htmlFor="signup__userName"  className="UI__utility__screen-reader" >User Name</label>

            <input
              type="text"
              aria-label={labelText}
              aria-required="true"
              className="UI__form__content__input-text"
              placeholder={inputPlaceholderUserName}
              name="signup__userName"
              {...register("userName")}
              autoFocus
            />
          </div>

          <div className="UI__form__content__input-row">
            <label htmlFor="signup__userEmail"  className="UI__utility__screen-reader" >Email</label>

            <input
              type="text"
              aria-label={inputPlaceholderUserName}
              aria-required="true"
              className="UI__form__content__input-text"
              placeholder={inputPlaceholderEmail}
              name="signup__userEmail"
              {...register("userSignupEmail")}
            />
          </div>

          <div className="UI__form__content__input-row">
            <label htmlFor="signup__userEmailConfirm"  className="UI__utility__screen-reader" >Confirm Email</label>

            <input
              type="text"
              aria-label={inputPlaceholderConfirmEmail}
              placeholder={inputPlaceholderConfirmEmail}
              aria-required="true"
              className="UI__form__content__input-text"
              name="signup__userEmailConfirm"
              {...register("userSignupConfirmEmail")}

            />
          </div>

          <div className="UI__form__content__checkbox-row">
            {selectGenre.map((item) => {
              return (
               <div key={item.id} className="UI__checkbox__input-wrapper">
                  <input
                    type="checkbox"
                    id={item.label}
                    aria-label={inputPlaceholderEnterGenre}
                    aria-required="true"
                    value={item.name} className="UI__checkbox__input"
                    {...register("genreIsChecked")}  
                    onChange={handleCheckboxIsChecked}
                  />
                   <label htmlFor={item.label}  data-content={item.label} className="UI__checkbox__input-label">
                  {item.name} 

                </label>
                </div>
              );
            })}
          </div>
          <div className="UI__form__content__input-row">
            <button type="submit" className="UI__button-submit">confirm and signup</button>
         
      
         
          </div>
        </form>
      </div>
       
    </>
  );
}

