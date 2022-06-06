import { styled, Input } from '@mui/material'

export const InputContainer = styled(Input)(() => ({
  minWidth: '25vw',
  background: '#28314E',
  padding: '10px 20px 10px 20px',
  borderRadius: '5px',
  '&:before': {
    border: 'none'
  },
  '&:after': {
    border: 'none'
  }
}))

export const styles: SxMap = {
  headerStyle: {
    fontSize: '30px',
    fontWeight: '700'
  },
  stickyHeader: ({ custom }) => ({
    position: 'fixed',
    background: custom.backgrounds.dark,
    width: '100%',
    zIndex: '5'
  }),
  subheaderStyle: {
    fontWeight: '600',
    letterSpacing: '2px',
    fontSize: '14px',
    marginBottom: '5px'
  },
  cardContainer: ({ custom }) => ({
    width: '100%',
    minHeight: '213px',
    background: custom.backgrounds.light,
    marginBottom: '20px',
    boxShadow: 'none'
  }),
  cardEnumeration: {
    fontWeight: '600',
    fontSize: '16px'
  },
  cardTitle: {
    fontWeight: '600',
    fontSize: '18px',
    marginLeft: '18px'
  },
  cardActionButton: {
    width: '163px',
    height: '50px',
    zIndex: '1'
  },
  proposalContent: {
    display: 'flex',
    marginLeft: '50px',
    marginTop: '10px',
    width: '50%',
    fontWeight: '400'
  },
  statusBox: ({ palette }) => ({
    marginTop: '5px',
    borderRadius: '10px',
    background: palette.primary.main,
    color: 'white',
    padding: '6px 17px 6px 17px',
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '2px',
    maxWidth: '255px',
    overflowWrap: 'anywhere'
  }),
  proposerAddress: {
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px'
  },
  timeStyle: {
    marginTop: '10px',
    fontWeight: '500',
    fontSize: '14px'
  },
  avatarStyle: {
    width: '20px',
    height: '20px',
    marginRight: '7px'
  },
  tableContainer: {
    width: '100%',
    height: '100%',
    padding: '0rem 1.2rem 1.2rem 1.2rem',
    marginTop: '90px',
    overflow: 'scroll'
  },
  tableHeader: ({ custom }) => ({
    display: 'flex',
    background: custom.backgrounds.primary,
    paddingTop: '1.2rem',
    paddingBottom: '1.2rem',
    position: 'sticky',
    top: '0',
    zIndex: '4'
  }),
  chipStyle: {
    borderRadius: '10px',
    color: 'white',
    fontWeight: 600,
    marginLeft: '10px'
  },
  createProposalBtnContainer: {
    position: 'absolute',
    right: '0'
  },
  crateProposalBtn: () => ({
    height: '50px',
    width: '199px',
    boxShadow: 'none',
    fontWeight: '600'
  })
} as const
