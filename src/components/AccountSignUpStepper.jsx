import { useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IconClose } from "../assets/Index";

export default function AccountSignUpStepper({
  setUserSignUp,
  setApplyOverlay,
  mobileNavMenu,
  setMobileNavMenu,
  setCollapseMobileNav,
}) {
  /* stepper states made of of 3 parts */

  const [isCheckToggled, setisCheckToggled] = useState(false);

  const [signUpStepperPartOne, setSignUpStepperPartOne] = useState(true);
  const [signUpStepperParTwo, setSignUpStepperPartTwo] = useState(false);

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
  ];

  // form validation with React-Hook-Form and Yup

  const signUPSchema = yup.object().shape({
    userName: yup
      .string()

      .min(4)
      .max(20)
      .required("- Dont for get to add a user name"),

    userSignupEmail: yup
      .string()
      .email()
      .required("- Make sure to add an emaill adress"),
    userSignupConfirmEmail: yup
      .string()
      .oneOf(
        [yup.ref("userSignupEmail"), null],
        "- Sorry, email adresses dont match"
      )
      .required("- Please confirm your emaill adress"),

    genreIsChecked: yup
      .array()
      .nullable()
      .required("- Dont forget to add a genre"),
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
    console.log(data, `axios.post("/api/addNewFilmFan", data)`);
    // alert(JSON.stringify(data));
    // return axios.post("/api/register", data);
    setSignUpStepperPartOne(false);
    setSignUpStepperPartTwo(true);
  };

  const handleCheckboxIsChecked = (e) => {
    //  setisCheckToggled((prevValue) => !prevValue);
    // alert(`${e.target.value}, ${e.target.checked}`);
  };

  const handleSignUpClose = () => {
    setUserSignUp(false);
    setApplyOverlay(false);
    setMobileNavMenu(false);
    setCollapseMobileNav("");
  };

  return (
    <div>
      {signUpStepperPartOne ? (
        <>
          <div className="UI__signup-form__header">
            <button
              className="UI__utility__button-reset UI__utility__default-close-position"
              onClick={handleSignUpClose}
            >
              <IconClose className="UI__utility__icon__l" />
            </button>

            <h2 className="UI__signup-form__header__title">
              Lets set up your account
            </h2>

            <div className="UI__stepper">
              <div className="UI__stepper__item UI__stepper__complete">
                <i className="UI__stepper-icon-background">1</i>
                <span className="UI__stepper__label">sign up</span>
              </div>

              <div className="stepper-connector" aria-hidden="true">
                <hr />
              </div>

              <div className="UI__stepper__item UI__stepper__complete UI__stepper__complete-last UI__stepper__faded">
                <i className="UI__stepper-icon-background">2</i>
                <span className="UI__stepper__label">completed</span>
              </div>
            </div>

            {/* close header */}
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
            <form
              className="UI__form__content"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="UI__form__content__input-row">
                <label
                  htmlFor="signup__userName"
                  className="UI__utility__screen-reader"
                >
                  User Name
                </label>

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
                <label
                  htmlFor="signup__userEmail"
                  className="UI__utility__screen-reader"
                >
                  Email
                </label>

                <input
                  type="text"
                  aria-label={inputPlaceholderUserName}
                  aria-required="true"
                  className="UI__form__content__input-text UI__utility__copy__transform--off"
                  placeholder={inputPlaceholderEmail}
                  name="signup__userEmail"
                  {...register("userSignupEmail")}
                />
              </div>

              <div className="UI__form__content__input-row">
                <label
                  htmlFor="signup__userEmailConfirm"
                  className="UI__utility__screen-reader"
                >
                  Confirm Email
                </label>

                <input
                  type="text"
                  aria-label={inputPlaceholderConfirmEmail}
                  placeholder={inputPlaceholderConfirmEmail}
                  aria-required="true"
                  className="UI__form__content__input-text UI__utility__copy__transform--off"
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
                        value={item.name}
                        className="UI__checkbox__input "
                        onChange={handleCheckboxIsChecked}
                        {...register("genreIsChecked")}
                      />
                      <label
                        htmlFor={item.label}
                        data-content={item.label}
                        className="UI__checkbox__input-label"
                      >
                        {item.name}
                      </label>
                    </div>
                  );
                })}
              </div>
              <div className="UI__form__content__input-row">
                <button type="submit" className="UI__button-primary">
                  confirm and signup
                </button>
              </div>
            </form>
          </div>
        </>
      ) : null}

      {signUpStepperParTwo ? (
        <>
          <div className="UI__signup-form__header">
            <h2 className="UI__signup-form__header__title UI__utility__subtitle-copy">
              registration complete{" "}
            </h2>

            <p className="UI__utility__body-copy UI__utility__text-align-center">
              🎉🥳
            </p>
            <p className="UI__utility__body-copy UI__utility__text-align-center">
              Your're all set!{" "}
            </p>
            <p className="UI__utility__body-copy UI__utility__text-align-center">
              Check your email inbox to confirm your accout with us.
            </p>
          </div>
          <div className="UI__signup-form__footer">
            <button
              className="UI__button-primary"
              type="button"
              onClick={handleSignUpClose}
            >
              back to login
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}
