import { useState, useEffect, useCallback } from 'react'

const useValidate = (initialState, validate, fn, secondFn = () => {}) => {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitForm, setSubmitForm] = useState(false)

  useEffect(() => {
    if (submitForm) {
      const noErrores = Object.keys(errors).length === 0
      if (noErrores) {
        fn()
      } else {
        secondFn()
      }
      setSubmitForm(false)
    }
  }, [submitForm])

  const handleChange = useCallback(
    e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      })
    },
    [values]
  )

  useEffect(() => {
    const validateErrors = validate(values)
    setErrors(validateErrors)
    setSubmitForm(true)
  }, [values])

  return {
    values,
    errors,
    handleChange,
  }
}

export default useValidate
