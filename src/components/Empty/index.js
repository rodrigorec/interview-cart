import cn from 'classnames'
import PropTypes from 'prop-types'
import Card from 'components/UI/Card'
import Title from 'components/UI/Title'
import './styles.scss'

const Empty = ({ className, text }) => (
  <div className={cn('empty', className)}>
    <Card>
      <Title text={text} hElement={3} />
    </Card>
  </div>
)

Empty.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
}

Empty.defaultProps = {
  className: '',
  text: 'Empty',
}

export default Empty
