import React, {
  Dispatch,
  FC, FormEvent, SetStateAction, useContext, useEffect, useState,
} from 'react';
import './Profile.css';
import { userData } from '../../types/userTypes';
import { useFormValidation } from '../../hooks/useFormValidation';
import { PATTERN_EMAIL, PATTERN_USERNAME, SUCCESS_TEXT } from '../../utils/constants';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

interface Props {
  onLogout: () => Promise<void>;
  onSubmit: (values: Partial<userData>) => Promise<userData>;
  error: string;
  success: boolean;
  onErrorChange: Dispatch<SetStateAction<string>>;
  onSetSuccess: Dispatch<SetStateAction<boolean>>;
}

export const Profile: FC<Props> = ({
  onLogout, onSubmit, error, success, onErrorChange, onSetSuccess,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const [isEditModeOn, setIsEditModeOn] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const {
    values, handleChange, isValid, errors, setValues,
  } = useFormValidation({
    name: currentUser?.name || '',
    email: currentUser?.email || '',
  });

  const hasNoError = (errorMessage.length === 0);

  const enableButton = hasNoError && isEditModeOn && isValid && JSON.stringify({
    name: currentUser?.name,
    email: currentUser?.email,
  }) !== JSON.stringify(values);

  const handleSubmit = (evt: FormEvent, values: Partial<userData>) => {
    evt.preventDefault();
    onSubmit(values);
  };

  const handleSwitchMode = () => {
    setIsEditModeOn(true);
    onSetSuccess(false);
  };

  useEffect(() => {
    setValues({
      name: currentUser?.name || '',
      email: currentUser?.email || '',
    });
  }, [currentUser]);

  useEffect(() => {
    setErrorMessage(error);
  }, [error]);

  useEffect(() => {
    onErrorChange('');
  }, [values]);

  useEffect(() => {
    setIsSuccess(success);
    if (success) {
      setIsEditModeOn(false);
    }
  }, [success]);

  return (
    <section className="profile">
      <div className="profile__content">
        <h1 className="profile__title">
          Привет,&nbsp;
          {currentUser?.name}
          &#33;
        </h1>
        <form
          className="profile__edit-form edit-form"
          onSubmit={(evt) => handleSubmit(evt, values)}
        >
          <div className="edit-form__items">
            <div className="edit-form__item">
              <label className="edit-form__label">
                Имя
                <input
                  className="edit-form__input"
                  type="text"
                  name="name"
                  id="profile-name"
                  onChange={handleChange}
                  pattern={PATTERN_USERNAME}
                  disabled={!isEditModeOn}
                  value={values.name}
                  required
                />
              </label>
              <span className="edit-form__error">{errors.name}</span>
            </div>
            <div className="edit-form__item">
              <label className="edit-form__label">
                E-mail
                <input
                  className={`edit-form__input ${hasNoError ? '' : 'edit-form__input_incorrect'}`}
                  id="profile-email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  disabled={!isEditModeOn}
                  pattern={PATTERN_EMAIL}
                  value={values.email}
                  required
                />
              </label>
              <span className="edit-form__error">{errors.email}</span>
            </div>
          </div>
          {isSuccess && <span className="edit-form__success-message">{SUCCESS_TEXT.editProfile}</span>}
          <div className="edit-form__submit-container">
            {isEditModeOn
              ? (
                <>
                  <span className="edit-form__submit-error">{errorMessage}</span>
                  <button className="edit-form__submit-button" type="submit" disabled={!enableButton}>Сохранить</button>
                </>
              )
              : (
                <>
                  <button className="edit-form__edit-button" type="button" onClick={handleSwitchMode}>Редактировать</button>
                  <button className="profile__link" type="button" onClick={onLogout}>Выйти из аккаунта</button>
                </>
              )}
          </div>
        </form>
      </div>
    </section>
  );
};
