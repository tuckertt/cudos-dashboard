import { ValidatorType } from 'store/validator'
import numeral from 'numeral'
import { Box, Typography, Button } from '@mui/material'
import { getValidatorConditionClass } from '../../../../../../utils/get_validator_condition'
import columns from '../../../../utils'
import Condition from '../../../../../../components/Condition'
import AvatarName from '../../../../../../components/AvatarName'
import Table from '../../../../../../components/Table'

type ValidatorsTableProps = {
  sortDirection: 'desc' | 'asc'
  sortKey: string
  handleSort: (key: string) => void
  items: ValidatorType[]
}

const ValidatorsTable: React.FC<ValidatorsTableProps> = ({
  items,
  sortKey,
  sortDirection,
  handleSort
}) => {
  const formattedItems = items.map((x: ValidatorType, i: number) => {
    const condition =
      x.status === 3 ? getValidatorConditionClass(x.condition) : undefined
    const percentDisplay =
      x.status === 3
        ? `${numeral(x.votingPowerPercent).format('0.[00]')}%`
        : '0%'
    const votingPower = numeral(x.votingPower).format('0,0')
    return {
      idx: `${i + 1}`,
      delegators: numeral(x.delegators).format('0,0'),
      validator: (
        <AvatarName
          name={x.moniker}
          imageUrl={x.avatarUrl}
          address={x.validator}
        />
      ),
      commission: `${numeral(x.commission).format('0.[00]')}%`,
      self: `${numeral(x.selfPercent).format('0.[00]')}%`,
      condition: <Condition color={condition} />,
      votingPower: (
        <Box display="flex" alignItems="center" gap={2}>
          <Typography variant="body2" color="text.primary" fontWeight={600}>
            {votingPower}
          </Typography>
          <Typography
            variant="body2"
            fontSize={12}
            color="text.secondary"
            fontWeight={600}
          >
            {percentDisplay}
          </Typography>
        </Box>
      ),
      action: (
        <Button
          sx={(theme) => ({
            height: '34px',
            fontSize: '12px',
            fontWeight: 600,
            '&:hover': {
              background: theme.palette.primary.main
            }
          })}
        >
          Delegate
        </Button>
      )
    }
  })

  return (
    <Table
      items={formattedItems}
      columns={columns}
      sortKey={sortKey}
      handleSort={handleSort}
      sortDirection={sortDirection}
    />
  )
}

export default ValidatorsTable