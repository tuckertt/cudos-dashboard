import { Box, Typography, Button } from '@mui/material'
import { initialModalState, ModalProps } from 'store/depositModal'

import FailureIcon from 'assets/vectors/failure.svg'
import { ModalContainer, CancelRoundedIcon } from './styles'

type FailureProps = {
  modalProps: ModalProps
  handleModal: (modalProps: ModalProps) => void
}

const Failure: React.FC<FailureProps> = ({ modalProps, handleModal }) => {
  const handleClose = () => {
    handleModal({
      ...initialModalState
    })
  }

  const handleTryAgain = () => {
    handleModal({ ...initialModalState })
  }

  return (
    <ModalContainer sx={{ padding: '4rem' }}>
      <img src={FailureIcon} alt="failure-icon" />
      <CancelRoundedIcon onClick={handleClose} />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        gap={1}
      >
        <Typography variant="h4" fontWeight={900} letterSpacing={2}>
          Voting for Proposal Failed!
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Seems like something went wrong with voting for the proposal. Try
          again or check your wallet balance.
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        sx={(theme) => ({
          width: '50%',
          fontWeight: 700
        })}
        onClick={handleTryAgain}
      >
        Try again
      </Button>
    </ModalContainer>
  )
}

export default Failure