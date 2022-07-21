import { ModalStatus, initialModalState } from 'store/validator'
import Dialog from 'components/Dialog'
import Delegation from './Delegation'
import Success from './Success'
import Loading from '../Loading'
import Failure from '../Failure'
import useModal from './hooks'

const DelegationModal: React.FC = () => {
  const { modal, handleModal } = useModal()
  const { open, status } = modal

  const handleClose = () => {
    handleModal({
      ...initialModalState
    })
  }

  const renderComponent = () => {
    switch (status) {
      case ModalStatus.LOADING:
        return <Loading />
      case ModalStatus.SUCCESS:
        return <Success modalProps={modal} handleModal={handleModal} />
      case ModalStatus.FAILURE:
        return <Failure modalProps={modal} handleModal={handleModal} />
      default:
        return <Delegation modalProps={modal} handleModal={handleModal} />
    }
  }

  return (
    <Dialog open={open} handleClose={handleClose}>
      {renderComponent()}
    </Dialog>
  )
}

export default DelegationModal
