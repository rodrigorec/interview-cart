import PropTypes from 'prop-types'

export const PurchaseType = {
    product: {
        id: PropTypes.number,
        name: PropTypes.stringm,
    },
    client: {
        name: PropTypes.string,
        address: PropTypes.string,
    },
    payment: {
        name: PropTypes.string,
        card: PropTypes.string,
    },
}

export const ProductType = {
    id: PropTypes.number,
    name: PropTypes.string,
}
