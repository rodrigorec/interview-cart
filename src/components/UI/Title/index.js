import cn from 'classnames'
import PropTypes from 'prop-types'
import './styles.scss'

const Title = ({ className, text, hElement }) => {
    const Tag = `h${hElement}`
    return <Tag className={cn('title', className)}>{text}</Tag>
}

Title.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    hElement: PropTypes.number,
}

Title.defaultProps = {
    className: '',
    hElement: 1,
}

export default Title
