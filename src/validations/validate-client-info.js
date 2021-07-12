import { hasNumbers } from 'utils/helpers'

export default function validateClientInfo(values) {
    let errors = {}

    if (values.name.length === 0) {
        errors.name = 'Name is required.'
    } else if (values.name?.length < 2) {
        errors.name = 'At least two characters.'
    } else if (hasNumbers(values.name)) {
        errors.name = "Don't use numbers."
    }

    if (values?.address?.length === 0) {
        errors.address = 'Address is required.'
    } else if (values?.address?.length < 5) {
        errors.address = 'At least five characters.'
    }

    return errors
}
