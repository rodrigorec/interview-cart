import Modal from '@material-ui/core/Modal'
import PropTypes from 'prop-types'

const SimpleModal = ({ showModal, setShowModal, children }) => (
  <Modal
    open={showModal}
    onClose={setShowModal}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {children}
  </Modal>
)

SimpleModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
}

export default SimpleModal
