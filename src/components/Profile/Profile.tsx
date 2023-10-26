import React, {
  FC, FormEvent, useEffect, useState,
} from 'react';
import './Profile.css';
import { currentUserType, userData } from '../../types/userTypes';
import { useFormValidation } from '../../hooks/useFormValidation';
import { PATTERN_USERNAME } from '../../utils/constants';

interface Props {
  onLogout: () => Promise<void>;
  onSubmit: (values: Partial<userData>) => Promise<userData>;
  errorMessage: string;
  userData: currentUserType;
}

export const Profile: FC<Props> = ({
  onLogout, onSubmit, errorMessage, userData,
}) => {
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const [isEditModeOn, setIsEditModeOn] = useState<boolean>(false);

  const {
    values, handleChange, isValid, errors, setValues,
  } = useFormValidation({
    name: userData?.name || '',
    email: userData?.email || '',
  });

  const enableButton = isChanged && isValid && JSON.stringify({
    name: userData?.name,
    email: userData?.email,
  }) !== JSON.stringify(values);

  const handleSubmit = (evt: FormEvent, values: Partial<userData>) => {
    evt.preventDefault();
    onSubmit(values).then(() => {
      setIsChanged(false);
    });
  };

  useEffect(() => {
    setValues({
      name: userData?.name || '',
      email: userData?.email || '',
    });
  }, [userData]);

  const handleSwitchMode = () => {
    setIsEditModeOn(true);
    setIsChanged(true);
  };

  useEffect(() => {
    setIsChanged(true);
  }, [values.email]);

  return (
    <section className="profile">
      <div className="profile__content">
        <h1 className="profile__title">
          Привет,&nbsp;
          {userData?.name}
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
                  className="edit-form__input"
                  id="profile-email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  disabled={!isEditModeOn}
                  value={values.email}
                  required
                />
              </label>
              <span className="edit-form__error">{errors.email}</span>
            </div>
          </div>
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
