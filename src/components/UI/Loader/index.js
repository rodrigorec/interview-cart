import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'
import './styles.scss'

const Loader = ({ className }) => (
    <div className={cn('loader', className)}>
        <CircularProgress />
    </div>
)

Loader.propTypes = {
    className: PropTypes.string,
}

Loader.defaultProps = {
    className: '',
}

export default Loader
