import { useState } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import useValidate from 'hooks/UseValidate'
import validatePaymentForm from 'validations/ValidatePaymentForm'
import './styles.scss'

const INITIAL_STATE = {
  name: '',
  card: '',
}

const PaymentForm = ({ className, paymentInfo, setPaymentInfo }) => {
  const [nameTouched, setNameTouched] = useState(false)
  const [cardTouched, setCardTouched] = useState(false)
  const { values, errors, handleChange } = useValidate(
    paymentInfo || INITIAL_STATE,
    validatePaymentForm,
    () => setPaymentInfo({ name, card }),
    () => setPaymentInfo(null)
  )
  const { name, card } = values
  const { name: nameError, card: cardError } = errors

  return (
    <form className={cn('payment-form', className)}>
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          name="name"
          value={name}
          placeholder="cardholder's name"
          onChange={handleChange}
          onBlur={() => setNameTouched(true)}
        />
        {nameTouched && nameError && (
          <span className="payment-form__error">{nameError}</span>
        )}
      </div>

      <div>
        <label htmlFor="name">Credit Card</label>
        <br />
        <input
          type="text"
          name="card"
          value={card}
          placeholder="credit card number"
          onBlur={() => setCardTouched(true)}
          onChange={handleChange}
        />
        {cardTouched && cardError && (
          <span className="payment-form__error">{cardError}</span>
        )}
      </div>
    </form>
  )
}

PaymentForm.propTypes = {
  className: PropTypes.string,
  paymentInfo: PropTypes.shape({
    name: PropTypes.string,
    card: PropTypes.string,
  }),
  setPaymentInfo: PropTypes.func.isRequired,
}

PaymentForm.defaultProps = {
  className: '',
  paymentInfo: null,
}

export default PaymentForm
