import { ChangeEvent, useState } from 'react';

type initialObject = Record<string, string>;

export function useFormValidation(initValues: initialObject) {
  const [values, setValues] = useState<initialObject>(initValues);
  const [errors, setErrors] = useState<initialObject>({});
  const [isValid, setIsValid] = useState(false);
  const [isValidInputs, setIsValidInputs] = useState<Record<string, boolean>>({});

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: evt.target.validationMessage });
    setIsValid(evt.target!.closest('form')!.checkValidity());
    setIsValidInputs({ ...isValidInputs, [name]: evt.target.checkValidity() });
  };

  return {
    values, handleChange, errors, isValid, isValidInputs, setValues,
  };
}
