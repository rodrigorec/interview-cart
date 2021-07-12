import { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import RegistrationForm from 'components/RegistrationForm'
import PaymentForm from 'components/PaymentForm'
import OrderConfirmation from 'components/OrderConfirmation'
import { usePurchase } from 'hooks/UsePurchase'
import Error from 'components/UI/Error'
import Loader from 'components/UI/Loader'
import ScreenSize from 'hocs/ScreenSize'
import './styles.scss'

const PurchaseStepper = ({
  className,
  isMobile,
  closeModal,
  purchaseProducts,
}) => {
  const getSteps = useCallback(() => {
    return ['Registration', 'Payment info', 'Order confirmation']
  }, [])
  const [activeStep, setActiveStep] = useState(0)
  const steps = getSteps()
  const [isStepValid, setIsStepValid] = useState(false)
  const { purchase, purchaseLoader, purchaseError } = usePurchase()
  const [clientInfo, setClientInfo] = useState(null)
  const [paymentInfo, setPaymentInfo] = useState(null)

  useEffect(() => {
    if (clientInfo) {
      setIsStepValid(true)
    } else {
      setIsStepValid(false)
    }
  }, [clientInfo])

  useEffect(() => {
    if (paymentInfo) {
      setIsStepValid(true)
    } else {
      setIsStepValid(false)
    }
  }, [paymentInfo])

  useEffect(() => {
    if (activeStep === steps.length - 1) {
      purchase({
        products: purchaseProducts,
        client: clientInfo,
        payment: paymentInfo,
      })
    }
  }, [activeStep])

  const FinalStep = useCallback(() => {
    if (purchaseLoader) {
      return <Loader />
    }
    if (purchaseError) {
      return <Error />
    } else {
      return <OrderConfirmation setIsStepValid={setIsStepValid} />
    }
  }, [purchaseLoader, purchaseError])

  const getStepContent = step => {
    switch (step) {
      case 0:
        return (
          <RegistrationForm
            clientInfo={clientInfo}
            setClientInfo={setClientInfo}
          />
        )
      case 1:
        return (
          <PaymentForm
            paymentInfo={paymentInfo}
            setPaymentInfo={setPaymentInfo}
          />
        )
      case 2:
        return <FinalStep />
      default:
        return 'Unknown step'
    }
  }

  const handleNext = useCallback(() => {
    if (activeStep === steps.length - 1) {
      closeModal()
    }
    setIsStepValid(false)
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }, [activeStep, steps])

  const handleBack = useCallback(() => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }, [])

  return (
    <div
      className={cn(
        'purchase-stepper',
        { 'purchase-stepper--mobile': isMobile },
        className
      )}
    >
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {}
          const labelProps = {}
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      <div>
        <div>
          <Typography component={'span'} variant={'body2'}>
            {getStepContent(activeStep)}
          </Typography>
          <div>
            {activeStep !== steps.length - 1 && (
              <Button
                className={cn('purchase-stepper__back', className)}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
            )}
            <Button
              className={cn('purchase-stepper__confirm', className)}
              variant="contained"
              color="primary"
              onClick={handleNext}
              disabled={!isStepValid && activeStep !== steps.length - 1}
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

PurchaseStepper.propTypes = {
  className: PropTypes.string,
  isMobile: PropTypes.bool,
  purchaseProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
  closeModal: PropTypes.func.isRequired,
}

PurchaseStepper.defaultProps = {
  className: '',
}

export default ScreenSize(PurchaseStepper)
