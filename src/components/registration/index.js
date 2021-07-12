import { useState } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import useValidate from 'hooks/use-validate'
import validateClientInfo from 'validations/validate-client-info'
import './styles.scss'

const INITIAL_STATE = {
    name: '',
    address: '',
}

const RegistrationForm = ({ className, clientInfo, setClientInfo }) => {
    const [nameTouched, setNameTouched] = useState(false)
    const [addressTouched, setAddressTouched] = useState(false)
    const { values, errors, handleChange } = useValidate(
        clientInfo || INITIAL_STATE,
        validateClientInfo,
        () => setClientInfo({ name, address }),
        () => setClientInfo(null)
    )
    const { name, address } = values
    const { name: nameError, address: addressError } = errors

    return (
        <form className={cn('registration-form', className)}>
            <div>
                <label className="registration-form__label" htmlFor="name">
                    Name
                </label>
                <br />
                <input
                    type="text"
                    name="name"
                    value={name}
                    placeholder="name"
                    onChange={handleChange}
                    onBlur={() => setNameTouched(true)}
                />
                {nameTouched && nameError && (
                    <span className="registration-form__error">
                        {nameError}
                    </span>
                )}
            </div>
            <div>
                <label className="registration-form__label" htmlFor="name">
                    Street Address
                </label>
                <br />
                <textarea
                    type="text"
                    name="address"
                    value={address}
                    placeholder="address"
                    onChange={handleChange}
                    onBlur={() => setAddressTouched(true)}
                />
                {addressTouched && addressError && (
                    <span className="registration-form__error">
                        {addressError}
                    </span>
                )}
            </div>
        </form>
    )
}

RegistrationForm.propTypes = {
    className: PropTypes.string,
    clientInfo: PropTypes.shape({
        name: PropTypes.string,
        address: PropTypes.string,
    }),
    setClientInfo: PropTypes.func.isRequired,
}

RegistrationForm.defaultProps = {
    className: '',
    clientInfo: null,
}

export default RegistrationForm
