import React, { ChangeEvent, FC, FormEvent } from 'react';
import './SearchForm.css';

interface Props {
  handleSubmit?: (evt: FormEvent) => void;
  onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onCheckboxChange?: (evt: any) => void;
  checked?: boolean;
  isValid?: boolean;
  error?: string;
}

export const SearchForm: FC<Props> = ({
  handleSubmit, onChange, value, onCheckboxChange, checked, isValid, error,
}) => (
  <div className="search">
    <div className="search__container">
      <form className="search__input-block" onSubmit={handleSubmit} noValidate>
        <span className="search__icon" />
        <input className="search__input" placeholder="Фильм" onChange={onChange} value={value} name="search" required />
        <button className="search__button" aria-label="Поиск" type="submit" id="submit-button" disabled={!isValid} />
      </form>
      <span className="search__input-error">{error}</span>
      <div className="search__toggle">
        <label className="toggle" htmlFor="toggle-checkbox">
          <input type="checkbox" id="toggle-checkbox" name="checkbox" onChange={onCheckboxChange} checked={checked} />
          <span className="toggle-switch" />
        </label>
        <span className="search__toggle-title">Короткометражки</span>
      </div>
    </div>
  </div>
);
