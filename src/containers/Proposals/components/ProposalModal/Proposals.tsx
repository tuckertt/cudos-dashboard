import { Box, Button, InputAdornment, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import {
  initialModalState,
  ModalProps,
  ProposalStatus,
  ProposalTypes
} from 'store/proposalsModal'
import { AccountBalanceWalletRounded as AccountBalanceWalletRoundedIcon } from '@mui/icons-material'

import Dropdown from 'components/Dropdown'
import {
  CancelRoundedIcon,
  InputContainer,
  ModalContainer,
  StyledTextField
} from './styles'
import { typeSwitch } from './ProposalTypes/types'

type ProposalProps = {
  handleModal: (modalProps: ModalProps) => void
}

const Proposals: React.FC<ProposalProps> = ({ handleModal }) => {
  const { address } = useSelector(({ profile }: RootState) => profile)
  const [proposal, setProposal] = useState<string>('1')

  const handleClose = () => {
    handleModal({
      ...initialModalState
    })
  }

  const handleProposalType = (proposalValue: string) => {
    setProposal(proposalValue)
  }

  return (
    <ModalContainer>
      <Typography variant="h5" fontWeight={900} textAlign="center">
        Create Proposal
      </Typography>
      <CancelRoundedIcon onClick={handleClose} />
      <Box display="flex" flexDirection="column" gap={1}>
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            gap={6}
          >
            <Typography variant="body2" fontWeight={700}>
              Connected account address
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              gap={1}
            >
              <Typography
                variant="body2"
                fontWeight={700}
                color="text.secondary"
              >
                Network
              </Typography>
              <Typography variant="body2" fontWeight={700} color="primary.main">
                {import.meta.env.VITE_APP_CHAIN_NAME}
              </Typography>
            </Box>
          </Box>
          <StyledTextField
            variant="standard"
            margin="dense"
            fullWidth
            disabled
            value={address}
            InputProps={{
              disableUnderline: true,
              sx: {
                fontSize: '12px'
              },
              inputProps: {
                style: {
                  padding: 0
                }
              },
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBalanceWalletRoundedIcon
                    sx={({ palette }) => ({
                      color: palette.primary.main
                    })}
                  />
                </InputAdornment>
              )
            }}
            size="small"
          />
        </Box>
        <Box>
          <Typography
            sx={{ marginBottom: '10px' }}
            variant="body2"
            fontWeight={700}
          >
            Title
          </Typography>
          <Box gap={1} display="flex">
            <InputContainer
              placeholder="e.g. Voting guides update"
              disableUnderline
              fullWidth
            />
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{ marginBottom: '10px' }}
            variant="body2"
            fontWeight={700}
          >
            Type
          </Typography>
          <Dropdown selectedValue={handleProposalType} data={ProposalTypes} />
        </Box>
        <Box display="flex" flexDirection="column" gap={1}>
          {typeSwitch(proposal)}
        </Box>
      </Box>
      <Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            handleModal({ open: true, status: ProposalStatus.SUCCESS })
          }
          sx={({ palette }) => ({
            width: '225px',
            height: '50px',
            '&:hover': {
              background: palette.primary.main
            }
          })}
        >
          Submit
        </Button>
      </Box>
    </ModalContainer>
  )
}

export default Proposals
