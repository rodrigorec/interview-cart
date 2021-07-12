import { hasNumbers } from 'utils/helpers'

export default function validatePaymentForm(values) {
  let errors = {}

  if (!values.name || values?.name?.length === 0) {
    errors.name = 'Name is required.'
  } else if (values?.name?.length < 2) {
    errors.name = 'At least two characters.'
  } else if (hasNumbers(values.name)) {
    errors.name = "Don't use numbers."
  }

  if (!values.card || values?.card?.length === 0) {
    errors.card = 'Address is required.'
  } else if (isNaN(values.card)) {
    errors.card = 'Must be a number'
  } else if (values?.card?.length < 6) {
    errors.card = 'At least six numbers.'
  }

  return errors
}
