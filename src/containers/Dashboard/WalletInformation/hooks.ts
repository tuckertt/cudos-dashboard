/* eslint-disable import/prefer-default-export */
import { useDispatch, useSelector } from 'react-redux'
import BigNumber from 'bignumber.js'
import { formatBigNum } from 'utils/projectUtils'
import { useAccountDelegationRewardsQuery } from 'graphql/types'
import { RootState } from 'store'
import { updateUser } from 'store/profile'
import { ModalProps } from 'store/validator'
import * as R from 'ramda'
import { useState } from 'react'

export const useDelegationRewards = () => {
  const dispatch = useDispatch()
  const state = useSelector((state: RootState) => state.profile)
  const [modalState, setModalState] = useState<ModalProps>({
    open: false,
    validator: null,
    amount: '',
    status: null,
    txHash: '',
    gasUsed: 0,
    fee: ''
  })

  const handleModalState = (stateChange: any) => {
    setModalState((prevState) => R.mergeDeepLeft(stateChange, prevState))
  }

  const rewardArray: Array<BigNumber> = []

  const handleSetState = (stateChange: any) => {
    dispatch(updateUser({ ...stateChange }))
  }

  const formatDelegationRewards = (data: any) => {
    data.delegationRewards.map((value: any) => {
      rewardArray.push(value.coins[0].amount)
      return value
    })

    const totalRewards = formatBigNum(
      rewardArray.reduce((a: BigNumber, b: BigNumber) => BigNumber.sum(a, b))
    )

    return new BigNumber(totalRewards)
  }

  useAccountDelegationRewardsQuery({
    variables: {
      address: state.address
    },
    onCompleted: (data) => {
      handleSetState({ availableRewards: formatDelegationRewards(data) })
    }
  })

  return {
    state,
    modalState,
    handleModal: handleModalState
  }
}
