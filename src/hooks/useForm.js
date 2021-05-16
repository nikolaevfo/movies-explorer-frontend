import React, { useCallback } from 'react';

export function useFormWithValidation() {
  const [values, setValues] = React.useState({})
  const [errors, setErrors] = React.useState({})
  const [isValid, setIsValid] = React.useState(false)

  const handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsValid(input.closest('form').checkValidity());
  }

  // мемоизация, не триггерит useEffect
  const resetForm = useCallback(
    () => {
      setValues({});
      setErrors({});
      setIsValid(false);
    }, [setValues, setErrors, setIsValid]
  );

  return {values, errors, isValid, handleChange, setValues, resetForm, setIsValid}
}