import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { LIMIT_DESKTOP_SIZE } from 'utils/constants'

const isMobileSize = () => {
    const {
        body: { clientWidth },
    } = document
    return clientWidth < LIMIT_DESKTOP_SIZE
}

const CheckProps = props => {
    const [isMobile, setIsMobile] = useState(isMobileSize())

    useEffect(() => {
        const updateSize = () => setIsMobile(isMobileSize())
        window.addEventListener('resize', updateSize)
        return () => window.removeEventListener('resize', updateSize)
    })

    return { ...props, isMobile }
}

const ScreenSize = WrappedComponent => args => {
    const processedProps = CheckProps(args)
    return <WrappedComponent {...processedProps} />
}

ScreenSize.propTypes = {
    WrappedComponent: PropTypes.elementType.isRequired,
}

ScreenSize.defaultProps = {}

export default ScreenSize
