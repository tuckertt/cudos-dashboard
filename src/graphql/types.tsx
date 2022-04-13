/* eslint-disable camelcase */
import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  _coin: any
  _dec_coin: any
  _text: any
  bigint: any
  coin: any
  json: any
  jsonb: any
  numeric: any
  smallint: any
  timestamp: any
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>
  _gt?: InputMaybe<Scalars['Boolean']>
  _gte?: InputMaybe<Scalars['Boolean']>
  _in?: InputMaybe<Array<Scalars['Boolean']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['Boolean']>
  _lte?: InputMaybe<Scalars['Boolean']>
  _neq?: InputMaybe<Scalars['Boolean']>
  _nin?: InputMaybe<Array<Scalars['Boolean']>>
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>
  _gt?: InputMaybe<Scalars['Int']>
  _gte?: InputMaybe<Scalars['Int']>
  _in?: InputMaybe<Array<Scalars['Int']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['Int']>
  _lte?: InputMaybe<Scalars['Int']>
  _neq?: InputMaybe<Scalars['Int']>
  _nin?: InputMaybe<Array<Scalars['Int']>>
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>
  _gt?: InputMaybe<Scalars['String']>
  _gte?: InputMaybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>
  _in?: InputMaybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>
  _is_null?: InputMaybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>
  _lt?: InputMaybe<Scalars['String']>
  _lte?: InputMaybe<Scalars['String']>
  _neq?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>
  _nin?: InputMaybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>
}

/** Boolean expression to compare columns of type "_coin". All fields are combined with logical 'AND'. */
export type _Coin_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_coin']>
  _gt?: InputMaybe<Scalars['_coin']>
  _gte?: InputMaybe<Scalars['_coin']>
  _in?: InputMaybe<Array<Scalars['_coin']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['_coin']>
  _lte?: InputMaybe<Scalars['_coin']>
  _neq?: InputMaybe<Scalars['_coin']>
  _nin?: InputMaybe<Array<Scalars['_coin']>>
}

/** Boolean expression to compare columns of type "_dec_coin". All fields are combined with logical 'AND'. */
export type _Dec_Coin_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_dec_coin']>
  _gt?: InputMaybe<Scalars['_dec_coin']>
  _gte?: InputMaybe<Scalars['_dec_coin']>
  _in?: InputMaybe<Array<Scalars['_dec_coin']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['_dec_coin']>
  _lte?: InputMaybe<Scalars['_dec_coin']>
  _neq?: InputMaybe<Scalars['_dec_coin']>
  _nin?: InputMaybe<Array<Scalars['_dec_coin']>>
}

/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export type _Text_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_text']>
  _gt?: InputMaybe<Scalars['_text']>
  _gte?: InputMaybe<Scalars['_text']>
  _in?: InputMaybe<Array<Scalars['_text']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['_text']>
  _lte?: InputMaybe<Scalars['_text']>
  _neq?: InputMaybe<Scalars['_text']>
  _nin?: InputMaybe<Array<Scalars['_text']>>
}

/** columns and relationships of "account" */
export type Account = {
  __typename?: 'account'
  /** An array relationship */
  account_balance_histories: Array<Account_Balance_History>
  /** An aggregate relationship */
  account_balance_histories_aggregate: Account_Balance_History_Aggregate
  /** An array relationship */
  account_balances: Array<Account_Balance>
  /** An aggregate relationship */
  account_balances_aggregate: Account_Balance_Aggregate
  address: Scalars['String']
  /** An array relationship */
  delegation_rewards: Array<Delegation_Reward>
  /** An aggregate relationship */
  delegation_rewards_aggregate: Delegation_Reward_Aggregate
  /** An array relationship */
  delegations: Array<Delegation>
  /** An aggregate relationship */
  delegations_aggregate: Delegation_Aggregate
  /** An array relationship */
  proposal_deposits: Array<Proposal_Deposit>
  /** An aggregate relationship */
  proposal_deposits_aggregate: Proposal_Deposit_Aggregate
  /** An array relationship */
  proposal_votes: Array<Proposal_Vote>
  /** An aggregate relationship */
  proposal_votes_aggregate: Proposal_Vote_Aggregate
  /** An array relationship */
  proposals: Array<Proposal>
  /** An aggregate relationship */
  proposals_aggregate: Proposal_Aggregate
  /** An array relationship */
  redelegations: Array<Redelegation>
  /** An aggregate relationship */
  redelegations_aggregate: Redelegation_Aggregate
  /** An array relationship */
  unbonding_delegations: Array<Unbonding_Delegation>
  /** An aggregate relationship */
  unbonding_delegations_aggregate: Unbonding_Delegation_Aggregate
  /** An array relationship */
  validator_infos: Array<Validator_Info>
  /** An aggregate relationship */
  validator_infos_aggregate: Validator_Info_Aggregate
  /** An object relationship */
  vesting_account?: Maybe<Vesting_Account>
}

/** columns and relationships of "account" */
export type AccountAccount_Balance_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Account_Balance_History_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Balance_History_Order_By>>
  where?: InputMaybe<Account_Balance_History_Bool_Exp>
}

/** columns and relationships of "account" */
export type AccountAccount_Balance_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Balance_History_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Balance_History_Order_By>>
  where?: InputMaybe<Account_Balance_History_Bool_Exp>
}

/** columns and relationships of "account" */
export type AccountAccount_BalancesArgs = {
  distinct_on?: InputMaybe<Array<Account_Balance_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Balance_Order_By>>
  where?: InputMaybe<Account_Balance_Bool_Exp>
}

/** columns and relationships of "account" */
export type AccountAccount_Balances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Balance_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Balance_Order_By>>
  where?: InputMaybe<Account_Balance_Bool_Exp>
}

/** columns and relationships of "account" */
export type AccountDelegation_RewardsArgs = {
  distinct_on?: InputMaybe<Array<Delegation_Reward_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Delegation_Reward_Order_By>>
  where?: InputMaybe<Delegation_Reward_Bool_Exp>
}

/** columns and relationships of "account" */
export type AccountDelegation_Rewards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delegation_Reward_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Delegation_Reward_Order_By>>
  where?: InputMaybe<Delegation_Reward_Bool_Exp>
}

/** columns and relationships of "account" */
export type AccountDelegationsArgs = {
  distinct_on?: InputMaybe<Array<Delegation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Delegation_Order_By>>
  where?: InputMaybe<Delegation_Bool_Exp>
}

/** columns and relationships of "account" */
export type AccountDelegations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delegation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Delegation_Order_By>>
  where?: InputMaybe<Delegation_Bool_Exp>
}

/** columns and relationships of "account" */
export type AccountProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>
}

/** columns and relationships of "account" */
export type AccountProposal_Deposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>
}

/** columns and relationships of "account" */
export type AccountProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>
  where?: InputMaybe<Proposal_Vote_Bool_Exp>
}

/** columns and relationships of "account" */
export type AccountProposal_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>
  where?: InputMaybe<Proposal_Vote_Bool_Exp>
}

/** columns and relationships of "account" */
export type AccountProposalsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Order_By>>
  where?: InputMaybe<Proposal_Bool_Exp>
}

/** columns and relationships of "account" */
export type AccountProposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Order_By>>
  where?: InputMaybe<Proposal_Bool_Exp>
}

/** columns and relationships of "account" */
export type AccountRedelegationsArgs = {
  distinct_on?: InputMaybe<Array<Redelegation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Redelegation_Order_By>>
  where?: InputMaybe<Redelegation_Bool_Exp>
}

/** columns and relationships of "account" */
export type AccountRedelegations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Redelegation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Redelegation_Order_By>>
  where?: InputMaybe<Redelegation_Bool_Exp>
}

/** columns and relationships of "account" */
export type AccountUnbonding_DelegationsArgs = {
  distinct_on?: InputMaybe<Array<Unbonding_Delegation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Unbonding_Delegation_Order_By>>
  where?: InputMaybe<Unbonding_Delegation_Bool_Exp>
}

/** columns and relationships of "account" */
export type AccountUnbonding_Delegations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Unbonding_Delegation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Unbonding_Delegation_Order_By>>
  where?: InputMaybe<Unbonding_Delegation_Bool_Exp>
}

/** columns and relationships of "account" */
export type AccountValidator_InfosArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>
  where?: InputMaybe<Validator_Info_Bool_Exp>
}

/** columns and relationships of "account" */
export type AccountValidator_Infos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>
  where?: InputMaybe<Validator_Info_Bool_Exp>
}

/** aggregated selection of "account" */
export type Account_Aggregate = {
  __typename?: 'account_aggregate'
  aggregate?: Maybe<Account_Aggregate_Fields>
  nodes: Array<Account>
}

/** aggregate fields of "account" */
export type Account_Aggregate_Fields = {
  __typename?: 'account_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Account_Max_Fields>
  min?: Maybe<Account_Min_Fields>
}

/** aggregate fields of "account" */
export type Account_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Account_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** columns and relationships of "account_balance" */
export type Account_Balance = {
  __typename?: 'account_balance'
  /** An object relationship */
  account: Account
  address: Scalars['String']
  /** An object relationship */
  block?: Maybe<Block>
  coins: Scalars['_coin']
  height: Scalars['bigint']
  /** A computed field, executes function "account_balance_tokens_prices" */
  tokens_prices?: Maybe<Array<Token_Price>>
}

/** columns and relationships of "account_balance" */
export type Account_BalanceTokens_PricesArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Token_Price_Order_By>>
  where?: InputMaybe<Token_Price_Bool_Exp>
}

/** aggregated selection of "account_balance" */
export type Account_Balance_Aggregate = {
  __typename?: 'account_balance_aggregate'
  aggregate?: Maybe<Account_Balance_Aggregate_Fields>
  nodes: Array<Account_Balance>
}

/** aggregate fields of "account_balance" */
export type Account_Balance_Aggregate_Fields = {
  __typename?: 'account_balance_aggregate_fields'
  avg?: Maybe<Account_Balance_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Account_Balance_Max_Fields>
  min?: Maybe<Account_Balance_Min_Fields>
  stddev?: Maybe<Account_Balance_Stddev_Fields>
  stddev_pop?: Maybe<Account_Balance_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Account_Balance_Stddev_Samp_Fields>
  sum?: Maybe<Account_Balance_Sum_Fields>
  var_pop?: Maybe<Account_Balance_Var_Pop_Fields>
  var_samp?: Maybe<Account_Balance_Var_Samp_Fields>
  variance?: Maybe<Account_Balance_Variance_Fields>
}

/** aggregate fields of "account_balance" */
export type Account_Balance_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Account_Balance_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "account_balance" */
export type Account_Balance_Aggregate_Order_By = {
  avg?: InputMaybe<Account_Balance_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Account_Balance_Max_Order_By>
  min?: InputMaybe<Account_Balance_Min_Order_By>
  stddev?: InputMaybe<Account_Balance_Stddev_Order_By>
  stddev_pop?: InputMaybe<Account_Balance_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Account_Balance_Stddev_Samp_Order_By>
  sum?: InputMaybe<Account_Balance_Sum_Order_By>
  var_pop?: InputMaybe<Account_Balance_Var_Pop_Order_By>
  var_samp?: InputMaybe<Account_Balance_Var_Samp_Order_By>
  variance?: InputMaybe<Account_Balance_Variance_Order_By>
}

/** aggregate avg on columns */
export type Account_Balance_Avg_Fields = {
  __typename?: 'account_balance_avg_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "account_balance" */
export type Account_Balance_Avg_Order_By = {
  height?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "account_balance". All fields are combined with a logical 'AND'. */
export type Account_Balance_Bool_Exp = {
  _and?: InputMaybe<Array<Account_Balance_Bool_Exp>>
  _not?: InputMaybe<Account_Balance_Bool_Exp>
  _or?: InputMaybe<Array<Account_Balance_Bool_Exp>>
  account?: InputMaybe<Account_Bool_Exp>
  address?: InputMaybe<String_Comparison_Exp>
  block?: InputMaybe<Block_Bool_Exp>
  coins?: InputMaybe<_Coin_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  tokens_prices?: InputMaybe<Token_Price_Bool_Exp>
}

/** columns and relationships of "account_balance_history" */
export type Account_Balance_History = {
  __typename?: 'account_balance_history'
  /** An object relationship */
  account: Account
  address: Scalars['String']
  balance: Scalars['_coin']
  commission: Scalars['_dec_coin']
  delegated: Scalars['_coin']
  redelegating: Scalars['_coin']
  reward: Scalars['_dec_coin']
  timestamp?: Maybe<Scalars['timestamp']>
  /** A computed field, executes function "account_balance_history_tokens_prices" */
  token_prices_history?: Maybe<Array<Token_Price_History>>
  unbonding: Scalars['_coin']
}

/** columns and relationships of "account_balance_history" */
export type Account_Balance_HistoryToken_Prices_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>
  where?: InputMaybe<Token_Price_History_Bool_Exp>
}

/** aggregated selection of "account_balance_history" */
export type Account_Balance_History_Aggregate = {
  __typename?: 'account_balance_history_aggregate'
  aggregate?: Maybe<Account_Balance_History_Aggregate_Fields>
  nodes: Array<Account_Balance_History>
}

/** aggregate fields of "account_balance_history" */
export type Account_Balance_History_Aggregate_Fields = {
  __typename?: 'account_balance_history_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Account_Balance_History_Max_Fields>
  min?: Maybe<Account_Balance_History_Min_Fields>
}

/** aggregate fields of "account_balance_history" */
export type Account_Balance_History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Account_Balance_History_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "account_balance_history" */
export type Account_Balance_History_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Account_Balance_History_Max_Order_By>
  min?: InputMaybe<Account_Balance_History_Min_Order_By>
}

/** Boolean expression to filter rows from the table "account_balance_history". All fields are combined with a logical 'AND'. */
export type Account_Balance_History_Bool_Exp = {
  _and?: InputMaybe<Array<Account_Balance_History_Bool_Exp>>
  _not?: InputMaybe<Account_Balance_History_Bool_Exp>
  _or?: InputMaybe<Array<Account_Balance_History_Bool_Exp>>
  account?: InputMaybe<Account_Bool_Exp>
  address?: InputMaybe<String_Comparison_Exp>
  balance?: InputMaybe<_Coin_Comparison_Exp>
  commission?: InputMaybe<_Dec_Coin_Comparison_Exp>
  delegated?: InputMaybe<_Coin_Comparison_Exp>
  redelegating?: InputMaybe<_Coin_Comparison_Exp>
  reward?: InputMaybe<_Dec_Coin_Comparison_Exp>
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>
  token_prices_history?: InputMaybe<Token_Price_History_Bool_Exp>
  unbonding?: InputMaybe<_Coin_Comparison_Exp>
}

/** aggregate max on columns */
export type Account_Balance_History_Max_Fields = {
  __typename?: 'account_balance_history_max_fields'
  address?: Maybe<Scalars['String']>
  timestamp?: Maybe<Scalars['timestamp']>
}

/** order by max() on columns of table "account_balance_history" */
export type Account_Balance_History_Max_Order_By = {
  address?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Account_Balance_History_Min_Fields = {
  __typename?: 'account_balance_history_min_fields'
  address?: Maybe<Scalars['String']>
  timestamp?: Maybe<Scalars['timestamp']>
}

/** order by min() on columns of table "account_balance_history" */
export type Account_Balance_History_Min_Order_By = {
  address?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "account_balance_history". */
export type Account_Balance_History_Order_By = {
  account?: InputMaybe<Account_Order_By>
  address?: InputMaybe<Order_By>
  balance?: InputMaybe<Order_By>
  commission?: InputMaybe<Order_By>
  delegated?: InputMaybe<Order_By>
  redelegating?: InputMaybe<Order_By>
  reward?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  token_prices_history_aggregate?: InputMaybe<Token_Price_History_Aggregate_Order_By>
  unbonding?: InputMaybe<Order_By>
}

/** select columns of table "account_balance_history" */
export enum Account_Balance_History_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Balance = 'balance',
  /** column name */
  Commission = 'commission',
  /** column name */
  Delegated = 'delegated',
  /** column name */
  Redelegating = 'redelegating',
  /** column name */
  Reward = 'reward',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Unbonding = 'unbonding'
}

/** aggregate max on columns */
export type Account_Balance_Max_Fields = {
  __typename?: 'account_balance_max_fields'
  address?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "account_balance" */
export type Account_Balance_Max_Order_By = {
  address?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Account_Balance_Min_Fields = {
  __typename?: 'account_balance_min_fields'
  address?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "account_balance" */
export type Account_Balance_Min_Order_By = {
  address?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "account_balance". */
export type Account_Balance_Order_By = {
  account?: InputMaybe<Account_Order_By>
  address?: InputMaybe<Order_By>
  block?: InputMaybe<Block_Order_By>
  coins?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  tokens_prices_aggregate?: InputMaybe<Token_Price_Aggregate_Order_By>
}

/** select columns of table "account_balance" */
export enum Account_Balance_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Coins = 'coins',
  /** column name */
  Height = 'height'
}

/** aggregate stddev on columns */
export type Account_Balance_Stddev_Fields = {
  __typename?: 'account_balance_stddev_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "account_balance" */
export type Account_Balance_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Account_Balance_Stddev_Pop_Fields = {
  __typename?: 'account_balance_stddev_pop_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "account_balance" */
export type Account_Balance_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Account_Balance_Stddev_Samp_Fields = {
  __typename?: 'account_balance_stddev_samp_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "account_balance" */
export type Account_Balance_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Account_Balance_Sum_Fields = {
  __typename?: 'account_balance_sum_fields'
  height?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "account_balance" */
export type Account_Balance_Sum_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Account_Balance_Var_Pop_Fields = {
  __typename?: 'account_balance_var_pop_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "account_balance" */
export type Account_Balance_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Account_Balance_Var_Samp_Fields = {
  __typename?: 'account_balance_var_samp_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "account_balance" */
export type Account_Balance_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Account_Balance_Variance_Fields = {
  __typename?: 'account_balance_variance_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "account_balance" */
export type Account_Balance_Variance_Order_By = {
  height?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export type Account_Bool_Exp = {
  _and?: InputMaybe<Array<Account_Bool_Exp>>
  _not?: InputMaybe<Account_Bool_Exp>
  _or?: InputMaybe<Array<Account_Bool_Exp>>
  account_balance_histories?: InputMaybe<Account_Balance_History_Bool_Exp>
  account_balances?: InputMaybe<Account_Balance_Bool_Exp>
  address?: InputMaybe<String_Comparison_Exp>
  delegation_rewards?: InputMaybe<Delegation_Reward_Bool_Exp>
  delegations?: InputMaybe<Delegation_Bool_Exp>
  proposal_deposits?: InputMaybe<Proposal_Deposit_Bool_Exp>
  proposal_votes?: InputMaybe<Proposal_Vote_Bool_Exp>
  proposals?: InputMaybe<Proposal_Bool_Exp>
  redelegations?: InputMaybe<Redelegation_Bool_Exp>
  unbonding_delegations?: InputMaybe<Unbonding_Delegation_Bool_Exp>
  validator_infos?: InputMaybe<Validator_Info_Bool_Exp>
  vesting_account?: InputMaybe<Vesting_Account_Bool_Exp>
}

/** aggregate max on columns */
export type Account_Max_Fields = {
  __typename?: 'account_max_fields'
  address?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Account_Min_Fields = {
  __typename?: 'account_min_fields'
  address?: Maybe<Scalars['String']>
}

/** Ordering options when selecting data from "account". */
export type Account_Order_By = {
  account_balance_histories_aggregate?: InputMaybe<Account_Balance_History_Aggregate_Order_By>
  account_balances_aggregate?: InputMaybe<Account_Balance_Aggregate_Order_By>
  address?: InputMaybe<Order_By>
  delegation_rewards_aggregate?: InputMaybe<Delegation_Reward_Aggregate_Order_By>
  delegations_aggregate?: InputMaybe<Delegation_Aggregate_Order_By>
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposit_Aggregate_Order_By>
  proposal_votes_aggregate?: InputMaybe<Proposal_Vote_Aggregate_Order_By>
  proposals_aggregate?: InputMaybe<Proposal_Aggregate_Order_By>
  redelegations_aggregate?: InputMaybe<Redelegation_Aggregate_Order_By>
  unbonding_delegations_aggregate?: InputMaybe<Unbonding_Delegation_Aggregate_Order_By>
  validator_infos_aggregate?: InputMaybe<Validator_Info_Aggregate_Order_By>
  vesting_account?: InputMaybe<Vesting_Account_Order_By>
}

/** select columns of table "account" */
export enum Account_Select_Column {
  /** column name */
  Address = 'address'
}

/** columns and relationships of "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis = {
  __typename?: 'average_block_time_from_genesis'
  average_time: Scalars['numeric']
  height: Scalars['bigint']
}

/** aggregated selection of "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Aggregate = {
  __typename?: 'average_block_time_from_genesis_aggregate'
  aggregate?: Maybe<Average_Block_Time_From_Genesis_Aggregate_Fields>
  nodes: Array<Average_Block_Time_From_Genesis>
}

/** aggregate fields of "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Aggregate_Fields = {
  __typename?: 'average_block_time_from_genesis_aggregate_fields'
  avg?: Maybe<Average_Block_Time_From_Genesis_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Average_Block_Time_From_Genesis_Max_Fields>
  min?: Maybe<Average_Block_Time_From_Genesis_Min_Fields>
  stddev?: Maybe<Average_Block_Time_From_Genesis_Stddev_Fields>
  stddev_pop?: Maybe<Average_Block_Time_From_Genesis_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Average_Block_Time_From_Genesis_Stddev_Samp_Fields>
  sum?: Maybe<Average_Block_Time_From_Genesis_Sum_Fields>
  var_pop?: Maybe<Average_Block_Time_From_Genesis_Var_Pop_Fields>
  var_samp?: Maybe<Average_Block_Time_From_Genesis_Var_Samp_Fields>
  variance?: Maybe<Average_Block_Time_From_Genesis_Variance_Fields>
}

/** aggregate fields of "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Average_Block_Time_From_Genesis_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Average_Block_Time_From_Genesis_Avg_Fields = {
  __typename?: 'average_block_time_from_genesis_avg_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "average_block_time_from_genesis". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_From_Genesis_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_From_Genesis_Bool_Exp>>
  _not?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>
  _or?: InputMaybe<Array<Average_Block_Time_From_Genesis_Bool_Exp>>
  average_time?: InputMaybe<Numeric_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
}

/** aggregate max on columns */
export type Average_Block_Time_From_Genesis_Max_Fields = {
  __typename?: 'average_block_time_from_genesis_max_fields'
  average_time?: Maybe<Scalars['numeric']>
  height?: Maybe<Scalars['bigint']>
}

/** aggregate min on columns */
export type Average_Block_Time_From_Genesis_Min_Fields = {
  __typename?: 'average_block_time_from_genesis_min_fields'
  average_time?: Maybe<Scalars['numeric']>
  height?: Maybe<Scalars['bigint']>
}

/** Ordering options when selecting data from "average_block_time_from_genesis". */
export type Average_Block_Time_From_Genesis_Order_By = {
  average_time?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** select columns of table "average_block_time_from_genesis" */
export enum Average_Block_Time_From_Genesis_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height'
}

/** aggregate stddev on columns */
export type Average_Block_Time_From_Genesis_Stddev_Fields = {
  __typename?: 'average_block_time_from_genesis_stddev_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Average_Block_Time_From_Genesis_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_from_genesis_stddev_pop_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Average_Block_Time_From_Genesis_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_from_genesis_stddev_samp_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Average_Block_Time_From_Genesis_Sum_Fields = {
  __typename?: 'average_block_time_from_genesis_sum_fields'
  average_time?: Maybe<Scalars['numeric']>
  height?: Maybe<Scalars['bigint']>
}

/** aggregate var_pop on columns */
export type Average_Block_Time_From_Genesis_Var_Pop_Fields = {
  __typename?: 'average_block_time_from_genesis_var_pop_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Average_Block_Time_From_Genesis_Var_Samp_Fields = {
  __typename?: 'average_block_time_from_genesis_var_samp_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Average_Block_Time_From_Genesis_Variance_Fields = {
  __typename?: 'average_block_time_from_genesis_variance_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** columns and relationships of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day = {
  __typename?: 'average_block_time_per_day'
  average_time: Scalars['numeric']
  height: Scalars['bigint']
}

/** aggregated selection of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Aggregate = {
  __typename?: 'average_block_time_per_day_aggregate'
  aggregate?: Maybe<Average_Block_Time_Per_Day_Aggregate_Fields>
  nodes: Array<Average_Block_Time_Per_Day>
}

/** aggregate fields of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Aggregate_Fields = {
  __typename?: 'average_block_time_per_day_aggregate_fields'
  avg?: Maybe<Average_Block_Time_Per_Day_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Average_Block_Time_Per_Day_Max_Fields>
  min?: Maybe<Average_Block_Time_Per_Day_Min_Fields>
  stddev?: Maybe<Average_Block_Time_Per_Day_Stddev_Fields>
  stddev_pop?: Maybe<Average_Block_Time_Per_Day_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Average_Block_Time_Per_Day_Stddev_Samp_Fields>
  sum?: Maybe<Average_Block_Time_Per_Day_Sum_Fields>
  var_pop?: Maybe<Average_Block_Time_Per_Day_Var_Pop_Fields>
  var_samp?: Maybe<Average_Block_Time_Per_Day_Var_Samp_Fields>
  variance?: Maybe<Average_Block_Time_Per_Day_Variance_Fields>
}

/** aggregate fields of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Average_Block_Time_Per_Day_Avg_Fields = {
  __typename?: 'average_block_time_per_day_avg_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "average_block_time_per_day". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Day_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_Per_Day_Bool_Exp>>
  _not?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>
  _or?: InputMaybe<Array<Average_Block_Time_Per_Day_Bool_Exp>>
  average_time?: InputMaybe<Numeric_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
}

/** aggregate max on columns */
export type Average_Block_Time_Per_Day_Max_Fields = {
  __typename?: 'average_block_time_per_day_max_fields'
  average_time?: Maybe<Scalars['numeric']>
  height?: Maybe<Scalars['bigint']>
}

/** aggregate min on columns */
export type Average_Block_Time_Per_Day_Min_Fields = {
  __typename?: 'average_block_time_per_day_min_fields'
  average_time?: Maybe<Scalars['numeric']>
  height?: Maybe<Scalars['bigint']>
}

/** Ordering options when selecting data from "average_block_time_per_day". */
export type Average_Block_Time_Per_Day_Order_By = {
  average_time?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** select columns of table "average_block_time_per_day" */
export enum Average_Block_Time_Per_Day_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height'
}

/** aggregate stddev on columns */
export type Average_Block_Time_Per_Day_Stddev_Fields = {
  __typename?: 'average_block_time_per_day_stddev_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Average_Block_Time_Per_Day_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_per_day_stddev_pop_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Average_Block_Time_Per_Day_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_per_day_stddev_samp_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Average_Block_Time_Per_Day_Sum_Fields = {
  __typename?: 'average_block_time_per_day_sum_fields'
  average_time?: Maybe<Scalars['numeric']>
  height?: Maybe<Scalars['bigint']>
}

/** aggregate var_pop on columns */
export type Average_Block_Time_Per_Day_Var_Pop_Fields = {
  __typename?: 'average_block_time_per_day_var_pop_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Average_Block_Time_Per_Day_Var_Samp_Fields = {
  __typename?: 'average_block_time_per_day_var_samp_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Average_Block_Time_Per_Day_Variance_Fields = {
  __typename?: 'average_block_time_per_day_variance_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** columns and relationships of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour = {
  __typename?: 'average_block_time_per_hour'
  average_time: Scalars['numeric']
  height: Scalars['bigint']
}

/** aggregated selection of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Aggregate = {
  __typename?: 'average_block_time_per_hour_aggregate'
  aggregate?: Maybe<Average_Block_Time_Per_Hour_Aggregate_Fields>
  nodes: Array<Average_Block_Time_Per_Hour>
}

/** aggregate fields of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Aggregate_Fields = {
  __typename?: 'average_block_time_per_hour_aggregate_fields'
  avg?: Maybe<Average_Block_Time_Per_Hour_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Average_Block_Time_Per_Hour_Max_Fields>
  min?: Maybe<Average_Block_Time_Per_Hour_Min_Fields>
  stddev?: Maybe<Average_Block_Time_Per_Hour_Stddev_Fields>
  stddev_pop?: Maybe<Average_Block_Time_Per_Hour_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Average_Block_Time_Per_Hour_Stddev_Samp_Fields>
  sum?: Maybe<Average_Block_Time_Per_Hour_Sum_Fields>
  var_pop?: Maybe<Average_Block_Time_Per_Hour_Var_Pop_Fields>
  var_samp?: Maybe<Average_Block_Time_Per_Hour_Var_Samp_Fields>
  variance?: Maybe<Average_Block_Time_Per_Hour_Variance_Fields>
}

/** aggregate fields of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Average_Block_Time_Per_Hour_Avg_Fields = {
  __typename?: 'average_block_time_per_hour_avg_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "average_block_time_per_hour". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Hour_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_Per_Hour_Bool_Exp>>
  _not?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>
  _or?: InputMaybe<Array<Average_Block_Time_Per_Hour_Bool_Exp>>
  average_time?: InputMaybe<Numeric_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
}

/** aggregate max on columns */
export type Average_Block_Time_Per_Hour_Max_Fields = {
  __typename?: 'average_block_time_per_hour_max_fields'
  average_time?: Maybe<Scalars['numeric']>
  height?: Maybe<Scalars['bigint']>
}

/** aggregate min on columns */
export type Average_Block_Time_Per_Hour_Min_Fields = {
  __typename?: 'average_block_time_per_hour_min_fields'
  average_time?: Maybe<Scalars['numeric']>
  height?: Maybe<Scalars['bigint']>
}

/** Ordering options when selecting data from "average_block_time_per_hour". */
export type Average_Block_Time_Per_Hour_Order_By = {
  average_time?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** select columns of table "average_block_time_per_hour" */
export enum Average_Block_Time_Per_Hour_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height'
}

/** aggregate stddev on columns */
export type Average_Block_Time_Per_Hour_Stddev_Fields = {
  __typename?: 'average_block_time_per_hour_stddev_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Average_Block_Time_Per_Hour_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_per_hour_stddev_pop_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Average_Block_Time_Per_Hour_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_per_hour_stddev_samp_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Average_Block_Time_Per_Hour_Sum_Fields = {
  __typename?: 'average_block_time_per_hour_sum_fields'
  average_time?: Maybe<Scalars['numeric']>
  height?: Maybe<Scalars['bigint']>
}

/** aggregate var_pop on columns */
export type Average_Block_Time_Per_Hour_Var_Pop_Fields = {
  __typename?: 'average_block_time_per_hour_var_pop_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Average_Block_Time_Per_Hour_Var_Samp_Fields = {
  __typename?: 'average_block_time_per_hour_var_samp_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Average_Block_Time_Per_Hour_Variance_Fields = {
  __typename?: 'average_block_time_per_hour_variance_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** columns and relationships of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute = {
  __typename?: 'average_block_time_per_minute'
  average_time: Scalars['numeric']
  height: Scalars['bigint']
}

/** aggregated selection of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Aggregate = {
  __typename?: 'average_block_time_per_minute_aggregate'
  aggregate?: Maybe<Average_Block_Time_Per_Minute_Aggregate_Fields>
  nodes: Array<Average_Block_Time_Per_Minute>
}

/** aggregate fields of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Aggregate_Fields = {
  __typename?: 'average_block_time_per_minute_aggregate_fields'
  avg?: Maybe<Average_Block_Time_Per_Minute_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Average_Block_Time_Per_Minute_Max_Fields>
  min?: Maybe<Average_Block_Time_Per_Minute_Min_Fields>
  stddev?: Maybe<Average_Block_Time_Per_Minute_Stddev_Fields>
  stddev_pop?: Maybe<Average_Block_Time_Per_Minute_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Average_Block_Time_Per_Minute_Stddev_Samp_Fields>
  sum?: Maybe<Average_Block_Time_Per_Minute_Sum_Fields>
  var_pop?: Maybe<Average_Block_Time_Per_Minute_Var_Pop_Fields>
  var_samp?: Maybe<Average_Block_Time_Per_Minute_Var_Samp_Fields>
  variance?: Maybe<Average_Block_Time_Per_Minute_Variance_Fields>
}

/** aggregate fields of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Average_Block_Time_Per_Minute_Avg_Fields = {
  __typename?: 'average_block_time_per_minute_avg_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "average_block_time_per_minute". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Minute_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_Per_Minute_Bool_Exp>>
  _not?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>
  _or?: InputMaybe<Array<Average_Block_Time_Per_Minute_Bool_Exp>>
  average_time?: InputMaybe<Numeric_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
}

/** aggregate max on columns */
export type Average_Block_Time_Per_Minute_Max_Fields = {
  __typename?: 'average_block_time_per_minute_max_fields'
  average_time?: Maybe<Scalars['numeric']>
  height?: Maybe<Scalars['bigint']>
}

/** aggregate min on columns */
export type Average_Block_Time_Per_Minute_Min_Fields = {
  __typename?: 'average_block_time_per_minute_min_fields'
  average_time?: Maybe<Scalars['numeric']>
  height?: Maybe<Scalars['bigint']>
}

/** Ordering options when selecting data from "average_block_time_per_minute". */
export type Average_Block_Time_Per_Minute_Order_By = {
  average_time?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** select columns of table "average_block_time_per_minute" */
export enum Average_Block_Time_Per_Minute_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height'
}

/** aggregate stddev on columns */
export type Average_Block_Time_Per_Minute_Stddev_Fields = {
  __typename?: 'average_block_time_per_minute_stddev_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Average_Block_Time_Per_Minute_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_per_minute_stddev_pop_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Average_Block_Time_Per_Minute_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_per_minute_stddev_samp_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Average_Block_Time_Per_Minute_Sum_Fields = {
  __typename?: 'average_block_time_per_minute_sum_fields'
  average_time?: Maybe<Scalars['numeric']>
  height?: Maybe<Scalars['bigint']>
}

/** aggregate var_pop on columns */
export type Average_Block_Time_Per_Minute_Var_Pop_Fields = {
  __typename?: 'average_block_time_per_minute_var_pop_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Average_Block_Time_Per_Minute_Var_Samp_Fields = {
  __typename?: 'average_block_time_per_minute_var_samp_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Average_Block_Time_Per_Minute_Variance_Fields = {
  __typename?: 'average_block_time_per_minute_variance_fields'
  average_time?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>
  _gt?: InputMaybe<Scalars['bigint']>
  _gte?: InputMaybe<Scalars['bigint']>
  _in?: InputMaybe<Array<Scalars['bigint']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['bigint']>
  _lte?: InputMaybe<Scalars['bigint']>
  _neq?: InputMaybe<Scalars['bigint']>
  _nin?: InputMaybe<Array<Scalars['bigint']>>
}

/** columns and relationships of "block" */
export type Block = {
  __typename?: 'block'
  hash: Scalars['String']
  height: Scalars['bigint']
  num_txs?: Maybe<Scalars['Int']>
  /** An array relationship */
  pre_commits: Array<Pre_Commit>
  /** An aggregate relationship */
  pre_commits_aggregate: Pre_Commit_Aggregate
  proposer_address?: Maybe<Scalars['String']>
  timestamp: Scalars['timestamp']
  total_gas?: Maybe<Scalars['bigint']>
  /** An array relationship */
  transactions: Array<Transaction>
  /** An aggregate relationship */
  transactions_aggregate: Transaction_Aggregate
  /** An object relationship */
  validator?: Maybe<Validator>
  /** An array relationship */
  validator_voting_powers: Array<Validator_Voting_Power>
  /** An aggregate relationship */
  validator_voting_powers_aggregate: Validator_Voting_Power_Aggregate
}

/** columns and relationships of "block" */
export type BlockPre_CommitsArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>
  where?: InputMaybe<Pre_Commit_Bool_Exp>
}

/** columns and relationships of "block" */
export type BlockPre_Commits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>
  where?: InputMaybe<Pre_Commit_Bool_Exp>
}

/** columns and relationships of "block" */
export type BlockTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Transaction_Order_By>>
  where?: InputMaybe<Transaction_Bool_Exp>
}

/** columns and relationships of "block" */
export type BlockTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Transaction_Order_By>>
  where?: InputMaybe<Transaction_Bool_Exp>
}

/** columns and relationships of "block" */
export type BlockValidator_Voting_PowersArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>
}

/** columns and relationships of "block" */
export type BlockValidator_Voting_Powers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>
}

/** aggregated selection of "block" */
export type Block_Aggregate = {
  __typename?: 'block_aggregate'
  aggregate?: Maybe<Block_Aggregate_Fields>
  nodes: Array<Block>
}

/** aggregate fields of "block" */
export type Block_Aggregate_Fields = {
  __typename?: 'block_aggregate_fields'
  avg?: Maybe<Block_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Block_Max_Fields>
  min?: Maybe<Block_Min_Fields>
  stddev?: Maybe<Block_Stddev_Fields>
  stddev_pop?: Maybe<Block_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Block_Stddev_Samp_Fields>
  sum?: Maybe<Block_Sum_Fields>
  var_pop?: Maybe<Block_Var_Pop_Fields>
  var_samp?: Maybe<Block_Var_Samp_Fields>
  variance?: Maybe<Block_Variance_Fields>
}

/** aggregate fields of "block" */
export type Block_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Block_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "block" */
export type Block_Aggregate_Order_By = {
  avg?: InputMaybe<Block_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Block_Max_Order_By>
  min?: InputMaybe<Block_Min_Order_By>
  stddev?: InputMaybe<Block_Stddev_Order_By>
  stddev_pop?: InputMaybe<Block_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Block_Stddev_Samp_Order_By>
  sum?: InputMaybe<Block_Sum_Order_By>
  var_pop?: InputMaybe<Block_Var_Pop_Order_By>
  var_samp?: InputMaybe<Block_Var_Samp_Order_By>
  variance?: InputMaybe<Block_Variance_Order_By>
}

/** aggregate avg on columns */
export type Block_Avg_Fields = {
  __typename?: 'block_avg_fields'
  height?: Maybe<Scalars['Float']>
  num_txs?: Maybe<Scalars['Float']>
  total_gas?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "block" */
export type Block_Avg_Order_By = {
  height?: InputMaybe<Order_By>
  num_txs?: InputMaybe<Order_By>
  total_gas?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "block". All fields are combined with a logical 'AND'. */
export type Block_Bool_Exp = {
  _and?: InputMaybe<Array<Block_Bool_Exp>>
  _not?: InputMaybe<Block_Bool_Exp>
  _or?: InputMaybe<Array<Block_Bool_Exp>>
  hash?: InputMaybe<String_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  num_txs?: InputMaybe<Int_Comparison_Exp>
  pre_commits?: InputMaybe<Pre_Commit_Bool_Exp>
  proposer_address?: InputMaybe<String_Comparison_Exp>
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>
  total_gas?: InputMaybe<Bigint_Comparison_Exp>
  transactions?: InputMaybe<Transaction_Bool_Exp>
  validator?: InputMaybe<Validator_Bool_Exp>
  validator_voting_powers?: InputMaybe<Validator_Voting_Power_Bool_Exp>
}

/** aggregate max on columns */
export type Block_Max_Fields = {
  __typename?: 'block_max_fields'
  hash?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['bigint']>
  num_txs?: Maybe<Scalars['Int']>
  proposer_address?: Maybe<Scalars['String']>
  timestamp?: Maybe<Scalars['timestamp']>
  total_gas?: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "block" */
export type Block_Max_Order_By = {
  hash?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  num_txs?: InputMaybe<Order_By>
  proposer_address?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  total_gas?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Block_Min_Fields = {
  __typename?: 'block_min_fields'
  hash?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['bigint']>
  num_txs?: Maybe<Scalars['Int']>
  proposer_address?: Maybe<Scalars['String']>
  timestamp?: Maybe<Scalars['timestamp']>
  total_gas?: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "block" */
export type Block_Min_Order_By = {
  hash?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  num_txs?: InputMaybe<Order_By>
  proposer_address?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  total_gas?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "block". */
export type Block_Order_By = {
  hash?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  num_txs?: InputMaybe<Order_By>
  pre_commits_aggregate?: InputMaybe<Pre_Commit_Aggregate_Order_By>
  proposer_address?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  total_gas?: InputMaybe<Order_By>
  transactions_aggregate?: InputMaybe<Transaction_Aggregate_Order_By>
  validator?: InputMaybe<Validator_Order_By>
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Power_Aggregate_Order_By>
}

/** select columns of table "block" */
export enum Block_Select_Column {
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  NumTxs = 'num_txs',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalGas = 'total_gas'
}

/** aggregate stddev on columns */
export type Block_Stddev_Fields = {
  __typename?: 'block_stddev_fields'
  height?: Maybe<Scalars['Float']>
  num_txs?: Maybe<Scalars['Float']>
  total_gas?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "block" */
export type Block_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
  num_txs?: InputMaybe<Order_By>
  total_gas?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Block_Stddev_Pop_Fields = {
  __typename?: 'block_stddev_pop_fields'
  height?: Maybe<Scalars['Float']>
  num_txs?: Maybe<Scalars['Float']>
  total_gas?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "block" */
export type Block_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  num_txs?: InputMaybe<Order_By>
  total_gas?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Block_Stddev_Samp_Fields = {
  __typename?: 'block_stddev_samp_fields'
  height?: Maybe<Scalars['Float']>
  num_txs?: Maybe<Scalars['Float']>
  total_gas?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "block" */
export type Block_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  num_txs?: InputMaybe<Order_By>
  total_gas?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Block_Sum_Fields = {
  __typename?: 'block_sum_fields'
  height?: Maybe<Scalars['bigint']>
  num_txs?: Maybe<Scalars['Int']>
  total_gas?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "block" */
export type Block_Sum_Order_By = {
  height?: InputMaybe<Order_By>
  num_txs?: InputMaybe<Order_By>
  total_gas?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Block_Var_Pop_Fields = {
  __typename?: 'block_var_pop_fields'
  height?: Maybe<Scalars['Float']>
  num_txs?: Maybe<Scalars['Float']>
  total_gas?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "block" */
export type Block_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  num_txs?: InputMaybe<Order_By>
  total_gas?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Block_Var_Samp_Fields = {
  __typename?: 'block_var_samp_fields'
  height?: Maybe<Scalars['Float']>
  num_txs?: Maybe<Scalars['Float']>
  total_gas?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "block" */
export type Block_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  num_txs?: InputMaybe<Order_By>
  total_gas?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Block_Variance_Fields = {
  __typename?: 'block_variance_fields'
  height?: Maybe<Scalars['Float']>
  num_txs?: Maybe<Scalars['Float']>
  total_gas?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "block" */
export type Block_Variance_Order_By = {
  height?: InputMaybe<Order_By>
  num_txs?: InputMaybe<Order_By>
  total_gas?: InputMaybe<Order_By>
}

/** Boolean expression to compare columns of type "coin". All fields are combined with logical 'AND'. */
export type Coin_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['coin']>
  _gt?: InputMaybe<Scalars['coin']>
  _gte?: InputMaybe<Scalars['coin']>
  _in?: InputMaybe<Array<Scalars['coin']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['coin']>
  _lte?: InputMaybe<Scalars['coin']>
  _neq?: InputMaybe<Scalars['coin']>
  _nin?: InputMaybe<Array<Scalars['coin']>>
}

/** columns and relationships of "community_pool" */
export type Community_Pool = {
  __typename?: 'community_pool'
  coins: Scalars['_dec_coin']
  height: Scalars['bigint']
}

/** aggregated selection of "community_pool" */
export type Community_Pool_Aggregate = {
  __typename?: 'community_pool_aggregate'
  aggregate?: Maybe<Community_Pool_Aggregate_Fields>
  nodes: Array<Community_Pool>
}

/** aggregate fields of "community_pool" */
export type Community_Pool_Aggregate_Fields = {
  __typename?: 'community_pool_aggregate_fields'
  avg?: Maybe<Community_Pool_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Community_Pool_Max_Fields>
  min?: Maybe<Community_Pool_Min_Fields>
  stddev?: Maybe<Community_Pool_Stddev_Fields>
  stddev_pop?: Maybe<Community_Pool_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Community_Pool_Stddev_Samp_Fields>
  sum?: Maybe<Community_Pool_Sum_Fields>
  var_pop?: Maybe<Community_Pool_Var_Pop_Fields>
  var_samp?: Maybe<Community_Pool_Var_Samp_Fields>
  variance?: Maybe<Community_Pool_Variance_Fields>
}

/** aggregate fields of "community_pool" */
export type Community_Pool_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Community_Pool_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Community_Pool_Avg_Fields = {
  __typename?: 'community_pool_avg_fields'
  height?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "community_pool". All fields are combined with a logical 'AND'. */
export type Community_Pool_Bool_Exp = {
  _and?: InputMaybe<Array<Community_Pool_Bool_Exp>>
  _not?: InputMaybe<Community_Pool_Bool_Exp>
  _or?: InputMaybe<Array<Community_Pool_Bool_Exp>>
  coins?: InputMaybe<_Dec_Coin_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
}

/** aggregate max on columns */
export type Community_Pool_Max_Fields = {
  __typename?: 'community_pool_max_fields'
  height?: Maybe<Scalars['bigint']>
}

/** aggregate min on columns */
export type Community_Pool_Min_Fields = {
  __typename?: 'community_pool_min_fields'
  height?: Maybe<Scalars['bigint']>
}

/** Ordering options when selecting data from "community_pool". */
export type Community_Pool_Order_By = {
  coins?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** select columns of table "community_pool" */
export enum Community_Pool_Select_Column {
  /** column name */
  Coins = 'coins',
  /** column name */
  Height = 'height'
}

/** aggregate stddev on columns */
export type Community_Pool_Stddev_Fields = {
  __typename?: 'community_pool_stddev_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Community_Pool_Stddev_Pop_Fields = {
  __typename?: 'community_pool_stddev_pop_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Community_Pool_Stddev_Samp_Fields = {
  __typename?: 'community_pool_stddev_samp_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Community_Pool_Sum_Fields = {
  __typename?: 'community_pool_sum_fields'
  height?: Maybe<Scalars['bigint']>
}

/** aggregate var_pop on columns */
export type Community_Pool_Var_Pop_Fields = {
  __typename?: 'community_pool_var_pop_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Community_Pool_Var_Samp_Fields = {
  __typename?: 'community_pool_var_samp_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Community_Pool_Variance_Fields = {
  __typename?: 'community_pool_variance_fields'
  height?: Maybe<Scalars['Float']>
}

/** columns and relationships of "delegation" */
export type Delegation = {
  __typename?: 'delegation'
  /** An object relationship */
  account: Account
  amount: Scalars['coin']
  delegator_address: Scalars['String']
  height: Scalars['bigint']
  id: Scalars['Int']
  /** A computed field, executes function "is_delegation_self_delegate" */
  is_self_delegate?: Maybe<Scalars['Boolean']>
  /** An object relationship */
  validator: Validator
  validator_address: Scalars['String']
}

/** aggregated selection of "delegation" */
export type Delegation_Aggregate = {
  __typename?: 'delegation_aggregate'
  aggregate?: Maybe<Delegation_Aggregate_Fields>
  nodes: Array<Delegation>
}

/** aggregate fields of "delegation" */
export type Delegation_Aggregate_Fields = {
  __typename?: 'delegation_aggregate_fields'
  avg?: Maybe<Delegation_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Delegation_Max_Fields>
  min?: Maybe<Delegation_Min_Fields>
  stddev?: Maybe<Delegation_Stddev_Fields>
  stddev_pop?: Maybe<Delegation_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Delegation_Stddev_Samp_Fields>
  sum?: Maybe<Delegation_Sum_Fields>
  var_pop?: Maybe<Delegation_Var_Pop_Fields>
  var_samp?: Maybe<Delegation_Var_Samp_Fields>
  variance?: Maybe<Delegation_Variance_Fields>
}

/** aggregate fields of "delegation" */
export type Delegation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Delegation_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "delegation" */
export type Delegation_Aggregate_Order_By = {
  avg?: InputMaybe<Delegation_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Delegation_Max_Order_By>
  min?: InputMaybe<Delegation_Min_Order_By>
  stddev?: InputMaybe<Delegation_Stddev_Order_By>
  stddev_pop?: InputMaybe<Delegation_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Delegation_Stddev_Samp_Order_By>
  sum?: InputMaybe<Delegation_Sum_Order_By>
  var_pop?: InputMaybe<Delegation_Var_Pop_Order_By>
  var_samp?: InputMaybe<Delegation_Var_Samp_Order_By>
  variance?: InputMaybe<Delegation_Variance_Order_By>
}

/** aggregate avg on columns */
export type Delegation_Avg_Fields = {
  __typename?: 'delegation_avg_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "delegation" */
export type Delegation_Avg_Order_By = {
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "delegation". All fields are combined with a logical 'AND'. */
export type Delegation_Bool_Exp = {
  _and?: InputMaybe<Array<Delegation_Bool_Exp>>
  _not?: InputMaybe<Delegation_Bool_Exp>
  _or?: InputMaybe<Array<Delegation_Bool_Exp>>
  account?: InputMaybe<Account_Bool_Exp>
  amount?: InputMaybe<Coin_Comparison_Exp>
  delegator_address?: InputMaybe<String_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  is_self_delegate?: InputMaybe<Boolean_Comparison_Exp>
  validator?: InputMaybe<Validator_Bool_Exp>
  validator_address?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Delegation_Max_Fields = {
  __typename?: 'delegation_max_fields'
  delegator_address?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['Int']>
  validator_address?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "delegation" */
export type Delegation_Max_Order_By = {
  delegator_address?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Delegation_Min_Fields = {
  __typename?: 'delegation_min_fields'
  delegator_address?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['Int']>
  validator_address?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "delegation" */
export type Delegation_Min_Order_By = {
  delegator_address?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "delegation". */
export type Delegation_Order_By = {
  account?: InputMaybe<Account_Order_By>
  amount?: InputMaybe<Order_By>
  delegator_address?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  is_self_delegate?: InputMaybe<Order_By>
  validator?: InputMaybe<Validator_Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** columns and relationships of "delegation_reward" */
export type Delegation_Reward = {
  __typename?: 'delegation_reward'
  /** An object relationship */
  account: Account
  amount: Scalars['_dec_coin']
  delegator_address: Scalars['String']
  height: Scalars['bigint']
  /** An object relationship */
  validator: Validator
  validator_address: Scalars['String']
  withdraw_address: Scalars['String']
}

/** aggregated selection of "delegation_reward" */
export type Delegation_Reward_Aggregate = {
  __typename?: 'delegation_reward_aggregate'
  aggregate?: Maybe<Delegation_Reward_Aggregate_Fields>
  nodes: Array<Delegation_Reward>
}

/** aggregate fields of "delegation_reward" */
export type Delegation_Reward_Aggregate_Fields = {
  __typename?: 'delegation_reward_aggregate_fields'
  avg?: Maybe<Delegation_Reward_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Delegation_Reward_Max_Fields>
  min?: Maybe<Delegation_Reward_Min_Fields>
  stddev?: Maybe<Delegation_Reward_Stddev_Fields>
  stddev_pop?: Maybe<Delegation_Reward_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Delegation_Reward_Stddev_Samp_Fields>
  sum?: Maybe<Delegation_Reward_Sum_Fields>
  var_pop?: Maybe<Delegation_Reward_Var_Pop_Fields>
  var_samp?: Maybe<Delegation_Reward_Var_Samp_Fields>
  variance?: Maybe<Delegation_Reward_Variance_Fields>
}

/** aggregate fields of "delegation_reward" */
export type Delegation_Reward_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Delegation_Reward_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "delegation_reward" */
export type Delegation_Reward_Aggregate_Order_By = {
  avg?: InputMaybe<Delegation_Reward_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Delegation_Reward_Max_Order_By>
  min?: InputMaybe<Delegation_Reward_Min_Order_By>
  stddev?: InputMaybe<Delegation_Reward_Stddev_Order_By>
  stddev_pop?: InputMaybe<Delegation_Reward_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Delegation_Reward_Stddev_Samp_Order_By>
  sum?: InputMaybe<Delegation_Reward_Sum_Order_By>
  var_pop?: InputMaybe<Delegation_Reward_Var_Pop_Order_By>
  var_samp?: InputMaybe<Delegation_Reward_Var_Samp_Order_By>
  variance?: InputMaybe<Delegation_Reward_Variance_Order_By>
}

/** aggregate avg on columns */
export type Delegation_Reward_Avg_Fields = {
  __typename?: 'delegation_reward_avg_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "delegation_reward" */
export type Delegation_Reward_Avg_Order_By = {
  height?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "delegation_reward". All fields are combined with a logical 'AND'. */
export type Delegation_Reward_Bool_Exp = {
  _and?: InputMaybe<Array<Delegation_Reward_Bool_Exp>>
  _not?: InputMaybe<Delegation_Reward_Bool_Exp>
  _or?: InputMaybe<Array<Delegation_Reward_Bool_Exp>>
  account?: InputMaybe<Account_Bool_Exp>
  amount?: InputMaybe<_Dec_Coin_Comparison_Exp>
  delegator_address?: InputMaybe<String_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  validator?: InputMaybe<Validator_Bool_Exp>
  validator_address?: InputMaybe<String_Comparison_Exp>
  withdraw_address?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Delegation_Reward_Max_Fields = {
  __typename?: 'delegation_reward_max_fields'
  delegator_address?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['bigint']>
  validator_address?: Maybe<Scalars['String']>
  withdraw_address?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "delegation_reward" */
export type Delegation_Reward_Max_Order_By = {
  delegator_address?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
  withdraw_address?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Delegation_Reward_Min_Fields = {
  __typename?: 'delegation_reward_min_fields'
  delegator_address?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['bigint']>
  validator_address?: Maybe<Scalars['String']>
  withdraw_address?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "delegation_reward" */
export type Delegation_Reward_Min_Order_By = {
  delegator_address?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
  withdraw_address?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "delegation_reward". */
export type Delegation_Reward_Order_By = {
  account?: InputMaybe<Account_Order_By>
  amount?: InputMaybe<Order_By>
  delegator_address?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  validator?: InputMaybe<Validator_Order_By>
  validator_address?: InputMaybe<Order_By>
  withdraw_address?: InputMaybe<Order_By>
}

/** select columns of table "delegation_reward" */
export enum Delegation_Reward_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  DelegatorAddress = 'delegator_address',
  /** column name */
  Height = 'height',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  WithdrawAddress = 'withdraw_address'
}

/** aggregate stddev on columns */
export type Delegation_Reward_Stddev_Fields = {
  __typename?: 'delegation_reward_stddev_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "delegation_reward" */
export type Delegation_Reward_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Delegation_Reward_Stddev_Pop_Fields = {
  __typename?: 'delegation_reward_stddev_pop_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "delegation_reward" */
export type Delegation_Reward_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Delegation_Reward_Stddev_Samp_Fields = {
  __typename?: 'delegation_reward_stddev_samp_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "delegation_reward" */
export type Delegation_Reward_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Delegation_Reward_Sum_Fields = {
  __typename?: 'delegation_reward_sum_fields'
  height?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "delegation_reward" */
export type Delegation_Reward_Sum_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Delegation_Reward_Var_Pop_Fields = {
  __typename?: 'delegation_reward_var_pop_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "delegation_reward" */
export type Delegation_Reward_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Delegation_Reward_Var_Samp_Fields = {
  __typename?: 'delegation_reward_var_samp_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "delegation_reward" */
export type Delegation_Reward_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Delegation_Reward_Variance_Fields = {
  __typename?: 'delegation_reward_variance_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "delegation_reward" */
export type Delegation_Reward_Variance_Order_By = {
  height?: InputMaybe<Order_By>
}

/** select columns of table "delegation" */
export enum Delegation_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  DelegatorAddress = 'delegator_address',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** aggregate stddev on columns */
export type Delegation_Stddev_Fields = {
  __typename?: 'delegation_stddev_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "delegation" */
export type Delegation_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Delegation_Stddev_Pop_Fields = {
  __typename?: 'delegation_stddev_pop_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "delegation" */
export type Delegation_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Delegation_Stddev_Samp_Fields = {
  __typename?: 'delegation_stddev_samp_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "delegation" */
export type Delegation_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Delegation_Sum_Fields = {
  __typename?: 'delegation_sum_fields'
  height?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "delegation" */
export type Delegation_Sum_Order_By = {
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Delegation_Var_Pop_Fields = {
  __typename?: 'delegation_var_pop_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "delegation" */
export type Delegation_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Delegation_Var_Samp_Fields = {
  __typename?: 'delegation_var_samp_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "delegation" */
export type Delegation_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Delegation_Variance_Fields = {
  __typename?: 'delegation_variance_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "delegation" */
export type Delegation_Variance_Order_By = {
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** columns and relationships of "distribution_params" */
export type Distribution_Params = {
  __typename?: 'distribution_params'
  height: Scalars['bigint']
  one_row_id: Scalars['Boolean']
  params: Scalars['jsonb']
}

/** columns and relationships of "distribution_params" */
export type Distribution_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "distribution_params" */
export type Distribution_Params_Aggregate = {
  __typename?: 'distribution_params_aggregate'
  aggregate?: Maybe<Distribution_Params_Aggregate_Fields>
  nodes: Array<Distribution_Params>
}

/** aggregate fields of "distribution_params" */
export type Distribution_Params_Aggregate_Fields = {
  __typename?: 'distribution_params_aggregate_fields'
  avg?: Maybe<Distribution_Params_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Distribution_Params_Max_Fields>
  min?: Maybe<Distribution_Params_Min_Fields>
  stddev?: Maybe<Distribution_Params_Stddev_Fields>
  stddev_pop?: Maybe<Distribution_Params_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Distribution_Params_Stddev_Samp_Fields>
  sum?: Maybe<Distribution_Params_Sum_Fields>
  var_pop?: Maybe<Distribution_Params_Var_Pop_Fields>
  var_samp?: Maybe<Distribution_Params_Var_Samp_Fields>
  variance?: Maybe<Distribution_Params_Variance_Fields>
}

/** aggregate fields of "distribution_params" */
export type Distribution_Params_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Distribution_Params_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Distribution_Params_Avg_Fields = {
  __typename?: 'distribution_params_avg_fields'
  height?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "distribution_params". All fields are combined with a logical 'AND'. */
export type Distribution_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Distribution_Params_Bool_Exp>>
  _not?: InputMaybe<Distribution_Params_Bool_Exp>
  _or?: InputMaybe<Array<Distribution_Params_Bool_Exp>>
  height?: InputMaybe<Bigint_Comparison_Exp>
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>
  params?: InputMaybe<Jsonb_Comparison_Exp>
}

/** aggregate max on columns */
export type Distribution_Params_Max_Fields = {
  __typename?: 'distribution_params_max_fields'
  height?: Maybe<Scalars['bigint']>
}

/** aggregate min on columns */
export type Distribution_Params_Min_Fields = {
  __typename?: 'distribution_params_min_fields'
  height?: Maybe<Scalars['bigint']>
}

/** Ordering options when selecting data from "distribution_params". */
export type Distribution_Params_Order_By = {
  height?: InputMaybe<Order_By>
  one_row_id?: InputMaybe<Order_By>
  params?: InputMaybe<Order_By>
}

/** select columns of table "distribution_params" */
export enum Distribution_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params'
}

/** aggregate stddev on columns */
export type Distribution_Params_Stddev_Fields = {
  __typename?: 'distribution_params_stddev_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Distribution_Params_Stddev_Pop_Fields = {
  __typename?: 'distribution_params_stddev_pop_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Distribution_Params_Stddev_Samp_Fields = {
  __typename?: 'distribution_params_stddev_samp_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Distribution_Params_Sum_Fields = {
  __typename?: 'distribution_params_sum_fields'
  height?: Maybe<Scalars['bigint']>
}

/** aggregate var_pop on columns */
export type Distribution_Params_Var_Pop_Fields = {
  __typename?: 'distribution_params_var_pop_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Distribution_Params_Var_Samp_Fields = {
  __typename?: 'distribution_params_var_samp_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Distribution_Params_Variance_Fields = {
  __typename?: 'distribution_params_variance_fields'
  height?: Maybe<Scalars['Float']>
}

/** columns and relationships of "double_sign_evidence" */
export type Double_Sign_Evidence = {
  __typename?: 'double_sign_evidence'
  /** An object relationship */
  doubleSignVoteByVoteAId: Double_Sign_Vote
  /** An object relationship */
  double_sign_vote: Double_Sign_Vote
  height: Scalars['bigint']
  vote_a_id: Scalars['bigint']
  vote_b_id: Scalars['bigint']
}

/** aggregated selection of "double_sign_evidence" */
export type Double_Sign_Evidence_Aggregate = {
  __typename?: 'double_sign_evidence_aggregate'
  aggregate?: Maybe<Double_Sign_Evidence_Aggregate_Fields>
  nodes: Array<Double_Sign_Evidence>
}

/** aggregate fields of "double_sign_evidence" */
export type Double_Sign_Evidence_Aggregate_Fields = {
  __typename?: 'double_sign_evidence_aggregate_fields'
  avg?: Maybe<Double_Sign_Evidence_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Double_Sign_Evidence_Max_Fields>
  min?: Maybe<Double_Sign_Evidence_Min_Fields>
  stddev?: Maybe<Double_Sign_Evidence_Stddev_Fields>
  stddev_pop?: Maybe<Double_Sign_Evidence_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Double_Sign_Evidence_Stddev_Samp_Fields>
  sum?: Maybe<Double_Sign_Evidence_Sum_Fields>
  var_pop?: Maybe<Double_Sign_Evidence_Var_Pop_Fields>
  var_samp?: Maybe<Double_Sign_Evidence_Var_Samp_Fields>
  variance?: Maybe<Double_Sign_Evidence_Variance_Fields>
}

/** aggregate fields of "double_sign_evidence" */
export type Double_Sign_Evidence_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "double_sign_evidence" */
export type Double_Sign_Evidence_Aggregate_Order_By = {
  avg?: InputMaybe<Double_Sign_Evidence_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Double_Sign_Evidence_Max_Order_By>
  min?: InputMaybe<Double_Sign_Evidence_Min_Order_By>
  stddev?: InputMaybe<Double_Sign_Evidence_Stddev_Order_By>
  stddev_pop?: InputMaybe<Double_Sign_Evidence_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Double_Sign_Evidence_Stddev_Samp_Order_By>
  sum?: InputMaybe<Double_Sign_Evidence_Sum_Order_By>
  var_pop?: InputMaybe<Double_Sign_Evidence_Var_Pop_Order_By>
  var_samp?: InputMaybe<Double_Sign_Evidence_Var_Samp_Order_By>
  variance?: InputMaybe<Double_Sign_Evidence_Variance_Order_By>
}

/** aggregate avg on columns */
export type Double_Sign_Evidence_Avg_Fields = {
  __typename?: 'double_sign_evidence_avg_fields'
  height?: Maybe<Scalars['Float']>
  vote_a_id?: Maybe<Scalars['Float']>
  vote_b_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Avg_Order_By = {
  height?: InputMaybe<Order_By>
  vote_a_id?: InputMaybe<Order_By>
  vote_b_id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "double_sign_evidence". All fields are combined with a logical 'AND'. */
export type Double_Sign_Evidence_Bool_Exp = {
  _and?: InputMaybe<Array<Double_Sign_Evidence_Bool_Exp>>
  _not?: InputMaybe<Double_Sign_Evidence_Bool_Exp>
  _or?: InputMaybe<Array<Double_Sign_Evidence_Bool_Exp>>
  doubleSignVoteByVoteAId?: InputMaybe<Double_Sign_Vote_Bool_Exp>
  double_sign_vote?: InputMaybe<Double_Sign_Vote_Bool_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  vote_a_id?: InputMaybe<Bigint_Comparison_Exp>
  vote_b_id?: InputMaybe<Bigint_Comparison_Exp>
}

/** aggregate max on columns */
export type Double_Sign_Evidence_Max_Fields = {
  __typename?: 'double_sign_evidence_max_fields'
  height?: Maybe<Scalars['bigint']>
  vote_a_id?: Maybe<Scalars['bigint']>
  vote_b_id?: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Max_Order_By = {
  height?: InputMaybe<Order_By>
  vote_a_id?: InputMaybe<Order_By>
  vote_b_id?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Double_Sign_Evidence_Min_Fields = {
  __typename?: 'double_sign_evidence_min_fields'
  height?: Maybe<Scalars['bigint']>
  vote_a_id?: Maybe<Scalars['bigint']>
  vote_b_id?: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Min_Order_By = {
  height?: InputMaybe<Order_By>
  vote_a_id?: InputMaybe<Order_By>
  vote_b_id?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "double_sign_evidence". */
export type Double_Sign_Evidence_Order_By = {
  doubleSignVoteByVoteAId?: InputMaybe<Double_Sign_Vote_Order_By>
  double_sign_vote?: InputMaybe<Double_Sign_Vote_Order_By>
  height?: InputMaybe<Order_By>
  vote_a_id?: InputMaybe<Order_By>
  vote_b_id?: InputMaybe<Order_By>
}

/** select columns of table "double_sign_evidence" */
export enum Double_Sign_Evidence_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  VoteAId = 'vote_a_id',
  /** column name */
  VoteBId = 'vote_b_id'
}

/** aggregate stddev on columns */
export type Double_Sign_Evidence_Stddev_Fields = {
  __typename?: 'double_sign_evidence_stddev_fields'
  height?: Maybe<Scalars['Float']>
  vote_a_id?: Maybe<Scalars['Float']>
  vote_b_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
  vote_a_id?: InputMaybe<Order_By>
  vote_b_id?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Double_Sign_Evidence_Stddev_Pop_Fields = {
  __typename?: 'double_sign_evidence_stddev_pop_fields'
  height?: Maybe<Scalars['Float']>
  vote_a_id?: Maybe<Scalars['Float']>
  vote_b_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  vote_a_id?: InputMaybe<Order_By>
  vote_b_id?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Double_Sign_Evidence_Stddev_Samp_Fields = {
  __typename?: 'double_sign_evidence_stddev_samp_fields'
  height?: Maybe<Scalars['Float']>
  vote_a_id?: Maybe<Scalars['Float']>
  vote_b_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  vote_a_id?: InputMaybe<Order_By>
  vote_b_id?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Double_Sign_Evidence_Sum_Fields = {
  __typename?: 'double_sign_evidence_sum_fields'
  height?: Maybe<Scalars['bigint']>
  vote_a_id?: Maybe<Scalars['bigint']>
  vote_b_id?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Sum_Order_By = {
  height?: InputMaybe<Order_By>
  vote_a_id?: InputMaybe<Order_By>
  vote_b_id?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Double_Sign_Evidence_Var_Pop_Fields = {
  __typename?: 'double_sign_evidence_var_pop_fields'
  height?: Maybe<Scalars['Float']>
  vote_a_id?: Maybe<Scalars['Float']>
  vote_b_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  vote_a_id?: InputMaybe<Order_By>
  vote_b_id?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Double_Sign_Evidence_Var_Samp_Fields = {
  __typename?: 'double_sign_evidence_var_samp_fields'
  height?: Maybe<Scalars['Float']>
  vote_a_id?: Maybe<Scalars['Float']>
  vote_b_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  vote_a_id?: InputMaybe<Order_By>
  vote_b_id?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Double_Sign_Evidence_Variance_Fields = {
  __typename?: 'double_sign_evidence_variance_fields'
  height?: Maybe<Scalars['Float']>
  vote_a_id?: Maybe<Scalars['Float']>
  vote_b_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Variance_Order_By = {
  height?: InputMaybe<Order_By>
  vote_a_id?: InputMaybe<Order_By>
  vote_b_id?: InputMaybe<Order_By>
}

/** columns and relationships of "double_sign_vote" */
export type Double_Sign_Vote = {
  __typename?: 'double_sign_vote'
  block_id: Scalars['String']
  /** An array relationship */
  doubleSignEvidencesByVoteBId: Array<Double_Sign_Evidence>
  /** An aggregate relationship */
  doubleSignEvidencesByVoteBId_aggregate: Double_Sign_Evidence_Aggregate
  /** An array relationship */
  double_sign_evidences: Array<Double_Sign_Evidence>
  /** An aggregate relationship */
  double_sign_evidences_aggregate: Double_Sign_Evidence_Aggregate
  height: Scalars['bigint']
  id: Scalars['Int']
  round: Scalars['Int']
  signature: Scalars['String']
  type: Scalars['smallint']
  /** An object relationship */
  validator: Validator
  validator_address: Scalars['String']
  validator_index: Scalars['Int']
}

/** columns and relationships of "double_sign_vote" */
export type Double_Sign_VoteDoubleSignEvidencesByVoteBIdArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>
}

/** columns and relationships of "double_sign_vote" */
export type Double_Sign_VoteDoubleSignEvidencesByVoteBId_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>
}

/** columns and relationships of "double_sign_vote" */
export type Double_Sign_VoteDouble_Sign_EvidencesArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>
}

/** columns and relationships of "double_sign_vote" */
export type Double_Sign_VoteDouble_Sign_Evidences_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>
}

/** aggregated selection of "double_sign_vote" */
export type Double_Sign_Vote_Aggregate = {
  __typename?: 'double_sign_vote_aggregate'
  aggregate?: Maybe<Double_Sign_Vote_Aggregate_Fields>
  nodes: Array<Double_Sign_Vote>
}

/** aggregate fields of "double_sign_vote" */
export type Double_Sign_Vote_Aggregate_Fields = {
  __typename?: 'double_sign_vote_aggregate_fields'
  avg?: Maybe<Double_Sign_Vote_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Double_Sign_Vote_Max_Fields>
  min?: Maybe<Double_Sign_Vote_Min_Fields>
  stddev?: Maybe<Double_Sign_Vote_Stddev_Fields>
  stddev_pop?: Maybe<Double_Sign_Vote_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Double_Sign_Vote_Stddev_Samp_Fields>
  sum?: Maybe<Double_Sign_Vote_Sum_Fields>
  var_pop?: Maybe<Double_Sign_Vote_Var_Pop_Fields>
  var_samp?: Maybe<Double_Sign_Vote_Var_Samp_Fields>
  variance?: Maybe<Double_Sign_Vote_Variance_Fields>
}

/** aggregate fields of "double_sign_vote" */
export type Double_Sign_Vote_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "double_sign_vote" */
export type Double_Sign_Vote_Aggregate_Order_By = {
  avg?: InputMaybe<Double_Sign_Vote_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Double_Sign_Vote_Max_Order_By>
  min?: InputMaybe<Double_Sign_Vote_Min_Order_By>
  stddev?: InputMaybe<Double_Sign_Vote_Stddev_Order_By>
  stddev_pop?: InputMaybe<Double_Sign_Vote_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Double_Sign_Vote_Stddev_Samp_Order_By>
  sum?: InputMaybe<Double_Sign_Vote_Sum_Order_By>
  var_pop?: InputMaybe<Double_Sign_Vote_Var_Pop_Order_By>
  var_samp?: InputMaybe<Double_Sign_Vote_Var_Samp_Order_By>
  variance?: InputMaybe<Double_Sign_Vote_Variance_Order_By>
}

/** aggregate avg on columns */
export type Double_Sign_Vote_Avg_Fields = {
  __typename?: 'double_sign_vote_avg_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  round?: Maybe<Scalars['Float']>
  type?: Maybe<Scalars['Float']>
  validator_index?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Avg_Order_By = {
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  validator_index?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "double_sign_vote". All fields are combined with a logical 'AND'. */
export type Double_Sign_Vote_Bool_Exp = {
  _and?: InputMaybe<Array<Double_Sign_Vote_Bool_Exp>>
  _not?: InputMaybe<Double_Sign_Vote_Bool_Exp>
  _or?: InputMaybe<Array<Double_Sign_Vote_Bool_Exp>>
  block_id?: InputMaybe<String_Comparison_Exp>
  doubleSignEvidencesByVoteBId?: InputMaybe<Double_Sign_Evidence_Bool_Exp>
  double_sign_evidences?: InputMaybe<Double_Sign_Evidence_Bool_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  round?: InputMaybe<Int_Comparison_Exp>
  signature?: InputMaybe<String_Comparison_Exp>
  type?: InputMaybe<Smallint_Comparison_Exp>
  validator?: InputMaybe<Validator_Bool_Exp>
  validator_address?: InputMaybe<String_Comparison_Exp>
  validator_index?: InputMaybe<Int_Comparison_Exp>
}

/** aggregate max on columns */
export type Double_Sign_Vote_Max_Fields = {
  __typename?: 'double_sign_vote_max_fields'
  block_id?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['Int']>
  round?: Maybe<Scalars['Int']>
  signature?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['smallint']>
  validator_address?: Maybe<Scalars['String']>
  validator_index?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Max_Order_By = {
  block_id?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
  signature?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
  validator_index?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Double_Sign_Vote_Min_Fields = {
  __typename?: 'double_sign_vote_min_fields'
  block_id?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['Int']>
  round?: Maybe<Scalars['Int']>
  signature?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['smallint']>
  validator_address?: Maybe<Scalars['String']>
  validator_index?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Min_Order_By = {
  block_id?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
  signature?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
  validator_index?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "double_sign_vote". */
export type Double_Sign_Vote_Order_By = {
  block_id?: InputMaybe<Order_By>
  doubleSignEvidencesByVoteBId_aggregate?: InputMaybe<Double_Sign_Evidence_Aggregate_Order_By>
  double_sign_evidences_aggregate?: InputMaybe<Double_Sign_Evidence_Aggregate_Order_By>
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
  signature?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  validator?: InputMaybe<Validator_Order_By>
  validator_address?: InputMaybe<Order_By>
  validator_index?: InputMaybe<Order_By>
}

/** select columns of table "double_sign_vote" */
export enum Double_Sign_Vote_Select_Column {
  /** column name */
  BlockId = 'block_id',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Round = 'round',
  /** column name */
  Signature = 'signature',
  /** column name */
  Type = 'type',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  ValidatorIndex = 'validator_index'
}

/** aggregate stddev on columns */
export type Double_Sign_Vote_Stddev_Fields = {
  __typename?: 'double_sign_vote_stddev_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  round?: Maybe<Scalars['Float']>
  type?: Maybe<Scalars['Float']>
  validator_index?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  validator_index?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Double_Sign_Vote_Stddev_Pop_Fields = {
  __typename?: 'double_sign_vote_stddev_pop_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  round?: Maybe<Scalars['Float']>
  type?: Maybe<Scalars['Float']>
  validator_index?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  validator_index?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Double_Sign_Vote_Stddev_Samp_Fields = {
  __typename?: 'double_sign_vote_stddev_samp_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  round?: Maybe<Scalars['Float']>
  type?: Maybe<Scalars['Float']>
  validator_index?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  validator_index?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Double_Sign_Vote_Sum_Fields = {
  __typename?: 'double_sign_vote_sum_fields'
  height?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['Int']>
  round?: Maybe<Scalars['Int']>
  type?: Maybe<Scalars['smallint']>
  validator_index?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Sum_Order_By = {
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  validator_index?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Double_Sign_Vote_Var_Pop_Fields = {
  __typename?: 'double_sign_vote_var_pop_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  round?: Maybe<Scalars['Float']>
  type?: Maybe<Scalars['Float']>
  validator_index?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  validator_index?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Double_Sign_Vote_Var_Samp_Fields = {
  __typename?: 'double_sign_vote_var_samp_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  round?: Maybe<Scalars['Float']>
  type?: Maybe<Scalars['Float']>
  validator_index?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  validator_index?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Double_Sign_Vote_Variance_Fields = {
  __typename?: 'double_sign_vote_variance_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  round?: Maybe<Scalars['Float']>
  type?: Maybe<Scalars['Float']>
  validator_index?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Variance_Order_By = {
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  validator_index?: InputMaybe<Order_By>
}

/** columns and relationships of "fee_grant_allowance" */
export type Fee_Grant_Allowance = {
  __typename?: 'fee_grant_allowance'
  allowance: Scalars['jsonb']
  grantee_address: Scalars['String']
  granter_address: Scalars['String']
  height: Scalars['bigint']
  id: Scalars['Int']
}

/** columns and relationships of "fee_grant_allowance" */
export type Fee_Grant_AllowanceAllowanceArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "fee_grant_allowance" */
export type Fee_Grant_Allowance_Aggregate = {
  __typename?: 'fee_grant_allowance_aggregate'
  aggregate?: Maybe<Fee_Grant_Allowance_Aggregate_Fields>
  nodes: Array<Fee_Grant_Allowance>
}

/** aggregate fields of "fee_grant_allowance" */
export type Fee_Grant_Allowance_Aggregate_Fields = {
  __typename?: 'fee_grant_allowance_aggregate_fields'
  avg?: Maybe<Fee_Grant_Allowance_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Fee_Grant_Allowance_Max_Fields>
  min?: Maybe<Fee_Grant_Allowance_Min_Fields>
  stddev?: Maybe<Fee_Grant_Allowance_Stddev_Fields>
  stddev_pop?: Maybe<Fee_Grant_Allowance_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Fee_Grant_Allowance_Stddev_Samp_Fields>
  sum?: Maybe<Fee_Grant_Allowance_Sum_Fields>
  var_pop?: Maybe<Fee_Grant_Allowance_Var_Pop_Fields>
  var_samp?: Maybe<Fee_Grant_Allowance_Var_Samp_Fields>
  variance?: Maybe<Fee_Grant_Allowance_Variance_Fields>
}

/** aggregate fields of "fee_grant_allowance" */
export type Fee_Grant_Allowance_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Fee_Grant_Allowance_Avg_Fields = {
  __typename?: 'fee_grant_allowance_avg_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "fee_grant_allowance". All fields are combined with a logical 'AND'. */
export type Fee_Grant_Allowance_Bool_Exp = {
  _and?: InputMaybe<Array<Fee_Grant_Allowance_Bool_Exp>>
  _not?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>
  _or?: InputMaybe<Array<Fee_Grant_Allowance_Bool_Exp>>
  allowance?: InputMaybe<Jsonb_Comparison_Exp>
  grantee_address?: InputMaybe<String_Comparison_Exp>
  granter_address?: InputMaybe<String_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
}

/** aggregate max on columns */
export type Fee_Grant_Allowance_Max_Fields = {
  __typename?: 'fee_grant_allowance_max_fields'
  grantee_address?: Maybe<Scalars['String']>
  granter_address?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['Int']>
}

/** aggregate min on columns */
export type Fee_Grant_Allowance_Min_Fields = {
  __typename?: 'fee_grant_allowance_min_fields'
  grantee_address?: Maybe<Scalars['String']>
  granter_address?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['Int']>
}

/** Ordering options when selecting data from "fee_grant_allowance". */
export type Fee_Grant_Allowance_Order_By = {
  allowance?: InputMaybe<Order_By>
  grantee_address?: InputMaybe<Order_By>
  granter_address?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** select columns of table "fee_grant_allowance" */
export enum Fee_Grant_Allowance_Select_Column {
  /** column name */
  Allowance = 'allowance',
  /** column name */
  GranteeAddress = 'grantee_address',
  /** column name */
  GranterAddress = 'granter_address',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id'
}

/** aggregate stddev on columns */
export type Fee_Grant_Allowance_Stddev_Fields = {
  __typename?: 'fee_grant_allowance_stddev_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Fee_Grant_Allowance_Stddev_Pop_Fields = {
  __typename?: 'fee_grant_allowance_stddev_pop_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Fee_Grant_Allowance_Stddev_Samp_Fields = {
  __typename?: 'fee_grant_allowance_stddev_samp_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Fee_Grant_Allowance_Sum_Fields = {
  __typename?: 'fee_grant_allowance_sum_fields'
  height?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['Int']>
}

/** aggregate var_pop on columns */
export type Fee_Grant_Allowance_Var_Pop_Fields = {
  __typename?: 'fee_grant_allowance_var_pop_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Fee_Grant_Allowance_Var_Samp_Fields = {
  __typename?: 'fee_grant_allowance_var_samp_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Fee_Grant_Allowance_Variance_Fields = {
  __typename?: 'fee_grant_allowance_variance_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "genesis" */
export type Genesis = {
  __typename?: 'genesis'
  chain_id: Scalars['String']
  initial_height: Scalars['bigint']
  time: Scalars['timestamp']
}

/** aggregated selection of "genesis" */
export type Genesis_Aggregate = {
  __typename?: 'genesis_aggregate'
  aggregate?: Maybe<Genesis_Aggregate_Fields>
  nodes: Array<Genesis>
}

/** aggregate fields of "genesis" */
export type Genesis_Aggregate_Fields = {
  __typename?: 'genesis_aggregate_fields'
  avg?: Maybe<Genesis_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Genesis_Max_Fields>
  min?: Maybe<Genesis_Min_Fields>
  stddev?: Maybe<Genesis_Stddev_Fields>
  stddev_pop?: Maybe<Genesis_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Genesis_Stddev_Samp_Fields>
  sum?: Maybe<Genesis_Sum_Fields>
  var_pop?: Maybe<Genesis_Var_Pop_Fields>
  var_samp?: Maybe<Genesis_Var_Samp_Fields>
  variance?: Maybe<Genesis_Variance_Fields>
}

/** aggregate fields of "genesis" */
export type Genesis_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Genesis_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Genesis_Avg_Fields = {
  __typename?: 'genesis_avg_fields'
  initial_height?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "genesis". All fields are combined with a logical 'AND'. */
export type Genesis_Bool_Exp = {
  _and?: InputMaybe<Array<Genesis_Bool_Exp>>
  _not?: InputMaybe<Genesis_Bool_Exp>
  _or?: InputMaybe<Array<Genesis_Bool_Exp>>
  chain_id?: InputMaybe<String_Comparison_Exp>
  initial_height?: InputMaybe<Bigint_Comparison_Exp>
  time?: InputMaybe<Timestamp_Comparison_Exp>
}

/** aggregate max on columns */
export type Genesis_Max_Fields = {
  __typename?: 'genesis_max_fields'
  chain_id?: Maybe<Scalars['String']>
  initial_height?: Maybe<Scalars['bigint']>
  time?: Maybe<Scalars['timestamp']>
}

/** aggregate min on columns */
export type Genesis_Min_Fields = {
  __typename?: 'genesis_min_fields'
  chain_id?: Maybe<Scalars['String']>
  initial_height?: Maybe<Scalars['bigint']>
  time?: Maybe<Scalars['timestamp']>
}

/** Ordering options when selecting data from "genesis". */
export type Genesis_Order_By = {
  chain_id?: InputMaybe<Order_By>
  initial_height?: InputMaybe<Order_By>
  time?: InputMaybe<Order_By>
}

/** select columns of table "genesis" */
export enum Genesis_Select_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  InitialHeight = 'initial_height',
  /** column name */
  Time = 'time'
}

/** aggregate stddev on columns */
export type Genesis_Stddev_Fields = {
  __typename?: 'genesis_stddev_fields'
  initial_height?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Genesis_Stddev_Pop_Fields = {
  __typename?: 'genesis_stddev_pop_fields'
  initial_height?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Genesis_Stddev_Samp_Fields = {
  __typename?: 'genesis_stddev_samp_fields'
  initial_height?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Genesis_Sum_Fields = {
  __typename?: 'genesis_sum_fields'
  initial_height?: Maybe<Scalars['bigint']>
}

/** aggregate var_pop on columns */
export type Genesis_Var_Pop_Fields = {
  __typename?: 'genesis_var_pop_fields'
  initial_height?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Genesis_Var_Samp_Fields = {
  __typename?: 'genesis_var_samp_fields'
  initial_height?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Genesis_Variance_Fields = {
  __typename?: 'genesis_variance_fields'
  initial_height?: Maybe<Scalars['Float']>
}

/** columns and relationships of "gov_params" */
export type Gov_Params = {
  __typename?: 'gov_params'
  deposit_params: Scalars['jsonb']
  height: Scalars['bigint']
  one_row_id: Scalars['Boolean']
  tally_params: Scalars['jsonb']
  voting_params: Scalars['jsonb']
}

/** columns and relationships of "gov_params" */
export type Gov_ParamsDeposit_ParamsArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "gov_params" */
export type Gov_ParamsTally_ParamsArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "gov_params" */
export type Gov_ParamsVoting_ParamsArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "gov_params" */
export type Gov_Params_Aggregate = {
  __typename?: 'gov_params_aggregate'
  aggregate?: Maybe<Gov_Params_Aggregate_Fields>
  nodes: Array<Gov_Params>
}

/** aggregate fields of "gov_params" */
export type Gov_Params_Aggregate_Fields = {
  __typename?: 'gov_params_aggregate_fields'
  avg?: Maybe<Gov_Params_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Gov_Params_Max_Fields>
  min?: Maybe<Gov_Params_Min_Fields>
  stddev?: Maybe<Gov_Params_Stddev_Fields>
  stddev_pop?: Maybe<Gov_Params_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Gov_Params_Stddev_Samp_Fields>
  sum?: Maybe<Gov_Params_Sum_Fields>
  var_pop?: Maybe<Gov_Params_Var_Pop_Fields>
  var_samp?: Maybe<Gov_Params_Var_Samp_Fields>
  variance?: Maybe<Gov_Params_Variance_Fields>
}

/** aggregate fields of "gov_params" */
export type Gov_Params_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Gov_Params_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Gov_Params_Avg_Fields = {
  __typename?: 'gov_params_avg_fields'
  height?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "gov_params". All fields are combined with a logical 'AND'. */
export type Gov_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Gov_Params_Bool_Exp>>
  _not?: InputMaybe<Gov_Params_Bool_Exp>
  _or?: InputMaybe<Array<Gov_Params_Bool_Exp>>
  deposit_params?: InputMaybe<Jsonb_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>
  tally_params?: InputMaybe<Jsonb_Comparison_Exp>
  voting_params?: InputMaybe<Jsonb_Comparison_Exp>
}

/** aggregate max on columns */
export type Gov_Params_Max_Fields = {
  __typename?: 'gov_params_max_fields'
  height?: Maybe<Scalars['bigint']>
}

/** aggregate min on columns */
export type Gov_Params_Min_Fields = {
  __typename?: 'gov_params_min_fields'
  height?: Maybe<Scalars['bigint']>
}

/** Ordering options when selecting data from "gov_params". */
export type Gov_Params_Order_By = {
  deposit_params?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  one_row_id?: InputMaybe<Order_By>
  tally_params?: InputMaybe<Order_By>
  voting_params?: InputMaybe<Order_By>
}

/** select columns of table "gov_params" */
export enum Gov_Params_Select_Column {
  /** column name */
  DepositParams = 'deposit_params',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  TallyParams = 'tally_params',
  /** column name */
  VotingParams = 'voting_params'
}

/** aggregate stddev on columns */
export type Gov_Params_Stddev_Fields = {
  __typename?: 'gov_params_stddev_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Gov_Params_Stddev_Pop_Fields = {
  __typename?: 'gov_params_stddev_pop_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Gov_Params_Stddev_Samp_Fields = {
  __typename?: 'gov_params_stddev_samp_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Gov_Params_Sum_Fields = {
  __typename?: 'gov_params_sum_fields'
  height?: Maybe<Scalars['bigint']>
}

/** aggregate var_pop on columns */
export type Gov_Params_Var_Pop_Fields = {
  __typename?: 'gov_params_var_pop_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Gov_Params_Var_Samp_Fields = {
  __typename?: 'gov_params_var_samp_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Gov_Params_Variance_Fields = {
  __typename?: 'gov_params_variance_fields'
  height?: Maybe<Scalars['Float']>
}

/** columns and relationships of "inflation" */
export type Inflation = {
  __typename?: 'inflation'
  height: Scalars['bigint']
  value: Scalars['numeric']
}

/** aggregated selection of "inflation" */
export type Inflation_Aggregate = {
  __typename?: 'inflation_aggregate'
  aggregate?: Maybe<Inflation_Aggregate_Fields>
  nodes: Array<Inflation>
}

/** aggregate fields of "inflation" */
export type Inflation_Aggregate_Fields = {
  __typename?: 'inflation_aggregate_fields'
  avg?: Maybe<Inflation_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Inflation_Max_Fields>
  min?: Maybe<Inflation_Min_Fields>
  stddev?: Maybe<Inflation_Stddev_Fields>
  stddev_pop?: Maybe<Inflation_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Inflation_Stddev_Samp_Fields>
  sum?: Maybe<Inflation_Sum_Fields>
  var_pop?: Maybe<Inflation_Var_Pop_Fields>
  var_samp?: Maybe<Inflation_Var_Samp_Fields>
  variance?: Maybe<Inflation_Variance_Fields>
}

/** aggregate fields of "inflation" */
export type Inflation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Inflation_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Inflation_Avg_Fields = {
  __typename?: 'inflation_avg_fields'
  height?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "inflation". All fields are combined with a logical 'AND'. */
export type Inflation_Bool_Exp = {
  _and?: InputMaybe<Array<Inflation_Bool_Exp>>
  _not?: InputMaybe<Inflation_Bool_Exp>
  _or?: InputMaybe<Array<Inflation_Bool_Exp>>
  height?: InputMaybe<Bigint_Comparison_Exp>
  value?: InputMaybe<Numeric_Comparison_Exp>
}

/** aggregate max on columns */
export type Inflation_Max_Fields = {
  __typename?: 'inflation_max_fields'
  height?: Maybe<Scalars['bigint']>
  value?: Maybe<Scalars['numeric']>
}

/** aggregate min on columns */
export type Inflation_Min_Fields = {
  __typename?: 'inflation_min_fields'
  height?: Maybe<Scalars['bigint']>
  value?: Maybe<Scalars['numeric']>
}

/** Ordering options when selecting data from "inflation". */
export type Inflation_Order_By = {
  height?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

/** select columns of table "inflation" */
export enum Inflation_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type Inflation_Stddev_Fields = {
  __typename?: 'inflation_stddev_fields'
  height?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Inflation_Stddev_Pop_Fields = {
  __typename?: 'inflation_stddev_pop_fields'
  height?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Inflation_Stddev_Samp_Fields = {
  __typename?: 'inflation_stddev_samp_fields'
  height?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Inflation_Sum_Fields = {
  __typename?: 'inflation_sum_fields'
  height?: Maybe<Scalars['bigint']>
  value?: Maybe<Scalars['numeric']>
}

/** aggregate var_pop on columns */
export type Inflation_Var_Pop_Fields = {
  __typename?: 'inflation_var_pop_fields'
  height?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Inflation_Var_Samp_Fields = {
  __typename?: 'inflation_var_samp_fields'
  height?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Inflation_Variance_Fields = {
  __typename?: 'inflation_variance_fields'
  height?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']>
  _gt?: InputMaybe<Scalars['json']>
  _gte?: InputMaybe<Scalars['json']>
  _in?: InputMaybe<Array<Scalars['json']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['json']>
  _lte?: InputMaybe<Scalars['json']>
  _neq?: InputMaybe<Scalars['json']>
  _nin?: InputMaybe<Array<Scalars['json']>>
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>
  _eq?: InputMaybe<Scalars['jsonb']>
  _gt?: InputMaybe<Scalars['jsonb']>
  _gte?: InputMaybe<Scalars['jsonb']>
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>
  _in?: InputMaybe<Array<Scalars['jsonb']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['jsonb']>
  _lte?: InputMaybe<Scalars['jsonb']>
  _neq?: InputMaybe<Scalars['jsonb']>
  _nin?: InputMaybe<Array<Scalars['jsonb']>>
}

/** columns and relationships of "message" */
export type Message = {
  __typename?: 'message'
  index: Scalars['bigint']
  involved_accounts_addresses?: Maybe<Scalars['_text']>
  /** An object relationship */
  transaction: Transaction
  transaction_hash: Scalars['String']
  type: Scalars['String']
  value: Scalars['jsonb']
}

/** columns and relationships of "message" */
export type MessageValueArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "message" */
export type Message_Aggregate = {
  __typename?: 'message_aggregate'
  aggregate?: Maybe<Message_Aggregate_Fields>
  nodes: Array<Message>
}

/** aggregate fields of "message" */
export type Message_Aggregate_Fields = {
  __typename?: 'message_aggregate_fields'
  avg?: Maybe<Message_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Message_Max_Fields>
  min?: Maybe<Message_Min_Fields>
  stddev?: Maybe<Message_Stddev_Fields>
  stddev_pop?: Maybe<Message_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Message_Stddev_Samp_Fields>
  sum?: Maybe<Message_Sum_Fields>
  var_pop?: Maybe<Message_Var_Pop_Fields>
  var_samp?: Maybe<Message_Var_Samp_Fields>
  variance?: Maybe<Message_Variance_Fields>
}

/** aggregate fields of "message" */
export type Message_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Message_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "message" */
export type Message_Aggregate_Order_By = {
  avg?: InputMaybe<Message_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Message_Max_Order_By>
  min?: InputMaybe<Message_Min_Order_By>
  stddev?: InputMaybe<Message_Stddev_Order_By>
  stddev_pop?: InputMaybe<Message_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Message_Stddev_Samp_Order_By>
  sum?: InputMaybe<Message_Sum_Order_By>
  var_pop?: InputMaybe<Message_Var_Pop_Order_By>
  var_samp?: InputMaybe<Message_Var_Samp_Order_By>
  variance?: InputMaybe<Message_Variance_Order_By>
}

/** aggregate avg on columns */
export type Message_Avg_Fields = {
  __typename?: 'message_avg_fields'
  index?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "message" */
export type Message_Avg_Order_By = {
  index?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "message". All fields are combined with a logical 'AND'. */
export type Message_Bool_Exp = {
  _and?: InputMaybe<Array<Message_Bool_Exp>>
  _not?: InputMaybe<Message_Bool_Exp>
  _or?: InputMaybe<Array<Message_Bool_Exp>>
  index?: InputMaybe<Bigint_Comparison_Exp>
  involved_accounts_addresses?: InputMaybe<_Text_Comparison_Exp>
  transaction?: InputMaybe<Transaction_Bool_Exp>
  transaction_hash?: InputMaybe<String_Comparison_Exp>
  type?: InputMaybe<String_Comparison_Exp>
  value?: InputMaybe<Jsonb_Comparison_Exp>
}

/** aggregate max on columns */
export type Message_Max_Fields = {
  __typename?: 'message_max_fields'
  index?: Maybe<Scalars['bigint']>
  transaction_hash?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "message" */
export type Message_Max_Order_By = {
  index?: InputMaybe<Order_By>
  transaction_hash?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Message_Min_Fields = {
  __typename?: 'message_min_fields'
  index?: Maybe<Scalars['bigint']>
  transaction_hash?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "message" */
export type Message_Min_Order_By = {
  index?: InputMaybe<Order_By>
  transaction_hash?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "message". */
export type Message_Order_By = {
  index?: InputMaybe<Order_By>
  involved_accounts_addresses?: InputMaybe<Order_By>
  transaction?: InputMaybe<Transaction_Order_By>
  transaction_hash?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

/** select columns of table "message" */
export enum Message_Select_Column {
  /** column name */
  Index = 'index',
  /** column name */
  InvolvedAccountsAddresses = 'involved_accounts_addresses',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  Type = 'type',
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type Message_Stddev_Fields = {
  __typename?: 'message_stddev_fields'
  index?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "message" */
export type Message_Stddev_Order_By = {
  index?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Message_Stddev_Pop_Fields = {
  __typename?: 'message_stddev_pop_fields'
  index?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "message" */
export type Message_Stddev_Pop_Order_By = {
  index?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Message_Stddev_Samp_Fields = {
  __typename?: 'message_stddev_samp_fields'
  index?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "message" */
export type Message_Stddev_Samp_Order_By = {
  index?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Message_Sum_Fields = {
  __typename?: 'message_sum_fields'
  index?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "message" */
export type Message_Sum_Order_By = {
  index?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Message_Var_Pop_Fields = {
  __typename?: 'message_var_pop_fields'
  index?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "message" */
export type Message_Var_Pop_Order_By = {
  index?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Message_Var_Samp_Fields = {
  __typename?: 'message_var_samp_fields'
  index?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "message" */
export type Message_Var_Samp_Order_By = {
  index?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Message_Variance_Fields = {
  __typename?: 'message_variance_fields'
  index?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "message" */
export type Message_Variance_Order_By = {
  index?: InputMaybe<Order_By>
}

export type Messages_By_Address_Args = {
  addresses?: InputMaybe<Scalars['_text']>
  limit?: InputMaybe<Scalars['bigint']>
  offset?: InputMaybe<Scalars['bigint']>
  types?: InputMaybe<Scalars['_text']>
}

/** columns and relationships of "mint_params" */
export type Mint_Params = {
  __typename?: 'mint_params'
  height: Scalars['bigint']
  one_row_id: Scalars['Boolean']
  params: Scalars['jsonb']
}

/** columns and relationships of "mint_params" */
export type Mint_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "mint_params" */
export type Mint_Params_Aggregate = {
  __typename?: 'mint_params_aggregate'
  aggregate?: Maybe<Mint_Params_Aggregate_Fields>
  nodes: Array<Mint_Params>
}

/** aggregate fields of "mint_params" */
export type Mint_Params_Aggregate_Fields = {
  __typename?: 'mint_params_aggregate_fields'
  avg?: Maybe<Mint_Params_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Mint_Params_Max_Fields>
  min?: Maybe<Mint_Params_Min_Fields>
  stddev?: Maybe<Mint_Params_Stddev_Fields>
  stddev_pop?: Maybe<Mint_Params_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Mint_Params_Stddev_Samp_Fields>
  sum?: Maybe<Mint_Params_Sum_Fields>
  var_pop?: Maybe<Mint_Params_Var_Pop_Fields>
  var_samp?: Maybe<Mint_Params_Var_Samp_Fields>
  variance?: Maybe<Mint_Params_Variance_Fields>
}

/** aggregate fields of "mint_params" */
export type Mint_Params_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Mint_Params_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Mint_Params_Avg_Fields = {
  __typename?: 'mint_params_avg_fields'
  height?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "mint_params". All fields are combined with a logical 'AND'. */
export type Mint_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Mint_Params_Bool_Exp>>
  _not?: InputMaybe<Mint_Params_Bool_Exp>
  _or?: InputMaybe<Array<Mint_Params_Bool_Exp>>
  height?: InputMaybe<Bigint_Comparison_Exp>
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>
  params?: InputMaybe<Jsonb_Comparison_Exp>
}

/** aggregate max on columns */
export type Mint_Params_Max_Fields = {
  __typename?: 'mint_params_max_fields'
  height?: Maybe<Scalars['bigint']>
}

/** aggregate min on columns */
export type Mint_Params_Min_Fields = {
  __typename?: 'mint_params_min_fields'
  height?: Maybe<Scalars['bigint']>
}

/** Ordering options when selecting data from "mint_params". */
export type Mint_Params_Order_By = {
  height?: InputMaybe<Order_By>
  one_row_id?: InputMaybe<Order_By>
  params?: InputMaybe<Order_By>
}

/** select columns of table "mint_params" */
export enum Mint_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params'
}

/** aggregate stddev on columns */
export type Mint_Params_Stddev_Fields = {
  __typename?: 'mint_params_stddev_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Mint_Params_Stddev_Pop_Fields = {
  __typename?: 'mint_params_stddev_pop_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Mint_Params_Stddev_Samp_Fields = {
  __typename?: 'mint_params_stddev_samp_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Mint_Params_Sum_Fields = {
  __typename?: 'mint_params_sum_fields'
  height?: Maybe<Scalars['bigint']>
}

/** aggregate var_pop on columns */
export type Mint_Params_Var_Pop_Fields = {
  __typename?: 'mint_params_var_pop_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Mint_Params_Var_Samp_Fields = {
  __typename?: 'mint_params_var_samp_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Mint_Params_Variance_Fields = {
  __typename?: 'mint_params_variance_fields'
  height?: Maybe<Scalars['Float']>
}

/** columns and relationships of "modules" */
export type Modules = {
  __typename?: 'modules'
  module_name: Scalars['String']
}

/** aggregated selection of "modules" */
export type Modules_Aggregate = {
  __typename?: 'modules_aggregate'
  aggregate?: Maybe<Modules_Aggregate_Fields>
  nodes: Array<Modules>
}

/** aggregate fields of "modules" */
export type Modules_Aggregate_Fields = {
  __typename?: 'modules_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Modules_Max_Fields>
  min?: Maybe<Modules_Min_Fields>
}

/** aggregate fields of "modules" */
export type Modules_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Modules_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "modules". All fields are combined with a logical 'AND'. */
export type Modules_Bool_Exp = {
  _and?: InputMaybe<Array<Modules_Bool_Exp>>
  _not?: InputMaybe<Modules_Bool_Exp>
  _or?: InputMaybe<Array<Modules_Bool_Exp>>
  module_name?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Modules_Max_Fields = {
  __typename?: 'modules_max_fields'
  module_name?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Modules_Min_Fields = {
  __typename?: 'modules_min_fields'
  module_name?: Maybe<Scalars['String']>
}

/** Ordering options when selecting data from "modules". */
export type Modules_Order_By = {
  module_name?: InputMaybe<Order_By>
}

/** select columns of table "modules" */
export enum Modules_Select_Column {
  /** column name */
  ModuleName = 'module_name'
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>
  _gt?: InputMaybe<Scalars['numeric']>
  _gte?: InputMaybe<Scalars['numeric']>
  _in?: InputMaybe<Array<Scalars['numeric']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['numeric']>
  _lte?: InputMaybe<Scalars['numeric']>
  _neq?: InputMaybe<Scalars['numeric']>
  _nin?: InputMaybe<Array<Scalars['numeric']>>
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "pre_commit" */
export type Pre_Commit = {
  __typename?: 'pre_commit'
  height: Scalars['bigint']
  proposer_priority: Scalars['bigint']
  timestamp: Scalars['timestamp']
  /** An object relationship */
  validator: Validator
  validator_address: Scalars['String']
  voting_power: Scalars['bigint']
}

/** aggregated selection of "pre_commit" */
export type Pre_Commit_Aggregate = {
  __typename?: 'pre_commit_aggregate'
  aggregate?: Maybe<Pre_Commit_Aggregate_Fields>
  nodes: Array<Pre_Commit>
}

/** aggregate fields of "pre_commit" */
export type Pre_Commit_Aggregate_Fields = {
  __typename?: 'pre_commit_aggregate_fields'
  avg?: Maybe<Pre_Commit_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Pre_Commit_Max_Fields>
  min?: Maybe<Pre_Commit_Min_Fields>
  stddev?: Maybe<Pre_Commit_Stddev_Fields>
  stddev_pop?: Maybe<Pre_Commit_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Pre_Commit_Stddev_Samp_Fields>
  sum?: Maybe<Pre_Commit_Sum_Fields>
  var_pop?: Maybe<Pre_Commit_Var_Pop_Fields>
  var_samp?: Maybe<Pre_Commit_Var_Samp_Fields>
  variance?: Maybe<Pre_Commit_Variance_Fields>
}

/** aggregate fields of "pre_commit" */
export type Pre_Commit_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pre_Commit_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "pre_commit" */
export type Pre_Commit_Aggregate_Order_By = {
  avg?: InputMaybe<Pre_Commit_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Pre_Commit_Max_Order_By>
  min?: InputMaybe<Pre_Commit_Min_Order_By>
  stddev?: InputMaybe<Pre_Commit_Stddev_Order_By>
  stddev_pop?: InputMaybe<Pre_Commit_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Pre_Commit_Stddev_Samp_Order_By>
  sum?: InputMaybe<Pre_Commit_Sum_Order_By>
  var_pop?: InputMaybe<Pre_Commit_Var_Pop_Order_By>
  var_samp?: InputMaybe<Pre_Commit_Var_Samp_Order_By>
  variance?: InputMaybe<Pre_Commit_Variance_Order_By>
}

/** aggregate avg on columns */
export type Pre_Commit_Avg_Fields = {
  __typename?: 'pre_commit_avg_fields'
  height?: Maybe<Scalars['Float']>
  proposer_priority?: Maybe<Scalars['Float']>
  voting_power?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "pre_commit" */
export type Pre_Commit_Avg_Order_By = {
  height?: InputMaybe<Order_By>
  proposer_priority?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "pre_commit". All fields are combined with a logical 'AND'. */
export type Pre_Commit_Bool_Exp = {
  _and?: InputMaybe<Array<Pre_Commit_Bool_Exp>>
  _not?: InputMaybe<Pre_Commit_Bool_Exp>
  _or?: InputMaybe<Array<Pre_Commit_Bool_Exp>>
  height?: InputMaybe<Bigint_Comparison_Exp>
  proposer_priority?: InputMaybe<Bigint_Comparison_Exp>
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>
  validator?: InputMaybe<Validator_Bool_Exp>
  validator_address?: InputMaybe<String_Comparison_Exp>
  voting_power?: InputMaybe<Bigint_Comparison_Exp>
}

/** aggregate max on columns */
export type Pre_Commit_Max_Fields = {
  __typename?: 'pre_commit_max_fields'
  height?: Maybe<Scalars['bigint']>
  proposer_priority?: Maybe<Scalars['bigint']>
  timestamp?: Maybe<Scalars['timestamp']>
  validator_address?: Maybe<Scalars['String']>
  voting_power?: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "pre_commit" */
export type Pre_Commit_Max_Order_By = {
  height?: InputMaybe<Order_By>
  proposer_priority?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Pre_Commit_Min_Fields = {
  __typename?: 'pre_commit_min_fields'
  height?: Maybe<Scalars['bigint']>
  proposer_priority?: Maybe<Scalars['bigint']>
  timestamp?: Maybe<Scalars['timestamp']>
  validator_address?: Maybe<Scalars['String']>
  voting_power?: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "pre_commit" */
export type Pre_Commit_Min_Order_By = {
  height?: InputMaybe<Order_By>
  proposer_priority?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "pre_commit". */
export type Pre_Commit_Order_By = {
  height?: InputMaybe<Order_By>
  proposer_priority?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  validator?: InputMaybe<Validator_Order_By>
  validator_address?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** select columns of table "pre_commit" */
export enum Pre_Commit_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  ProposerPriority = 'proposer_priority',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

/** aggregate stddev on columns */
export type Pre_Commit_Stddev_Fields = {
  __typename?: 'pre_commit_stddev_fields'
  height?: Maybe<Scalars['Float']>
  proposer_priority?: Maybe<Scalars['Float']>
  voting_power?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "pre_commit" */
export type Pre_Commit_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
  proposer_priority?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Pre_Commit_Stddev_Pop_Fields = {
  __typename?: 'pre_commit_stddev_pop_fields'
  height?: Maybe<Scalars['Float']>
  proposer_priority?: Maybe<Scalars['Float']>
  voting_power?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "pre_commit" */
export type Pre_Commit_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  proposer_priority?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Pre_Commit_Stddev_Samp_Fields = {
  __typename?: 'pre_commit_stddev_samp_fields'
  height?: Maybe<Scalars['Float']>
  proposer_priority?: Maybe<Scalars['Float']>
  voting_power?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "pre_commit" */
export type Pre_Commit_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  proposer_priority?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Pre_Commit_Sum_Fields = {
  __typename?: 'pre_commit_sum_fields'
  height?: Maybe<Scalars['bigint']>
  proposer_priority?: Maybe<Scalars['bigint']>
  voting_power?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "pre_commit" */
export type Pre_Commit_Sum_Order_By = {
  height?: InputMaybe<Order_By>
  proposer_priority?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Pre_Commit_Var_Pop_Fields = {
  __typename?: 'pre_commit_var_pop_fields'
  height?: Maybe<Scalars['Float']>
  proposer_priority?: Maybe<Scalars['Float']>
  voting_power?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "pre_commit" */
export type Pre_Commit_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  proposer_priority?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Pre_Commit_Var_Samp_Fields = {
  __typename?: 'pre_commit_var_samp_fields'
  height?: Maybe<Scalars['Float']>
  proposer_priority?: Maybe<Scalars['Float']>
  voting_power?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "pre_commit" */
export type Pre_Commit_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  proposer_priority?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Pre_Commit_Variance_Fields = {
  __typename?: 'pre_commit_variance_fields'
  height?: Maybe<Scalars['Float']>
  proposer_priority?: Maybe<Scalars['Float']>
  voting_power?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "pre_commit" */
export type Pre_Commit_Variance_Order_By = {
  height?: InputMaybe<Order_By>
  proposer_priority?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** columns and relationships of "proposal" */
export type Proposal = {
  __typename?: 'proposal'
  content: Scalars['jsonb']
  deposit_end_time?: Maybe<Scalars['timestamp']>
  description: Scalars['String']
  id: Scalars['Int']
  /** An array relationship */
  proposal_deposits: Array<Proposal_Deposit>
  /** An aggregate relationship */
  proposal_deposits_aggregate: Proposal_Deposit_Aggregate
  proposal_route: Scalars['String']
  /** An object relationship */
  proposal_tally_result?: Maybe<Proposal_Tally_Result>
  /** An array relationship */
  proposal_tally_results: Array<Proposal_Tally_Result>
  /** An aggregate relationship */
  proposal_tally_results_aggregate: Proposal_Tally_Result_Aggregate
  proposal_type: Scalars['String']
  /** An array relationship */
  proposal_votes: Array<Proposal_Vote>
  /** An aggregate relationship */
  proposal_votes_aggregate: Proposal_Vote_Aggregate
  /** An object relationship */
  proposer: Account
  proposer_address: Scalars['String']
  /** An object relationship */
  staking_pool_snapshot?: Maybe<Proposal_Staking_Pool_Snapshot>
  status?: Maybe<Scalars['String']>
  submit_time: Scalars['timestamp']
  title: Scalars['String']
  /** An array relationship */
  validator_status_snapshots: Array<Proposal_Validator_Status_Snapshot>
  /** An aggregate relationship */
  validator_status_snapshots_aggregate: Proposal_Validator_Status_Snapshot_Aggregate
  voting_end_time?: Maybe<Scalars['timestamp']>
  voting_start_time?: Maybe<Scalars['timestamp']>
}

/** columns and relationships of "proposal" */
export type ProposalContentArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "proposal" */
export type ProposalProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>
}

/** columns and relationships of "proposal" */
export type ProposalProposal_Deposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>
}

/** columns and relationships of "proposal" */
export type ProposalProposal_Tally_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>
}

/** columns and relationships of "proposal" */
export type ProposalProposal_Tally_Results_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>
}

/** columns and relationships of "proposal" */
export type ProposalProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>
  where?: InputMaybe<Proposal_Vote_Bool_Exp>
}

/** columns and relationships of "proposal" */
export type ProposalProposal_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>
  where?: InputMaybe<Proposal_Vote_Bool_Exp>
}

/** columns and relationships of "proposal" */
export type ProposalValidator_Status_SnapshotsArgs = {
  distinct_on?: InputMaybe<
    Array<Proposal_Validator_Status_Snapshot_Select_Column>
  >
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>
}

/** columns and relationships of "proposal" */
export type ProposalValidator_Status_Snapshots_AggregateArgs = {
  distinct_on?: InputMaybe<
    Array<Proposal_Validator_Status_Snapshot_Select_Column>
  >
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>
}

/** aggregated selection of "proposal" */
export type Proposal_Aggregate = {
  __typename?: 'proposal_aggregate'
  aggregate?: Maybe<Proposal_Aggregate_Fields>
  nodes: Array<Proposal>
}

/** aggregate fields of "proposal" */
export type Proposal_Aggregate_Fields = {
  __typename?: 'proposal_aggregate_fields'
  avg?: Maybe<Proposal_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Proposal_Max_Fields>
  min?: Maybe<Proposal_Min_Fields>
  stddev?: Maybe<Proposal_Stddev_Fields>
  stddev_pop?: Maybe<Proposal_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Proposal_Stddev_Samp_Fields>
  sum?: Maybe<Proposal_Sum_Fields>
  var_pop?: Maybe<Proposal_Var_Pop_Fields>
  var_samp?: Maybe<Proposal_Var_Samp_Fields>
  variance?: Maybe<Proposal_Variance_Fields>
}

/** aggregate fields of "proposal" */
export type Proposal_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "proposal" */
export type Proposal_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Proposal_Max_Order_By>
  min?: InputMaybe<Proposal_Min_Order_By>
  stddev?: InputMaybe<Proposal_Stddev_Order_By>
  stddev_pop?: InputMaybe<Proposal_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Proposal_Stddev_Samp_Order_By>
  sum?: InputMaybe<Proposal_Sum_Order_By>
  var_pop?: InputMaybe<Proposal_Var_Pop_Order_By>
  var_samp?: InputMaybe<Proposal_Var_Samp_Order_By>
  variance?: InputMaybe<Proposal_Variance_Order_By>
}

/** aggregate avg on columns */
export type Proposal_Avg_Fields = {
  __typename?: 'proposal_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "proposal" */
export type Proposal_Avg_Order_By = {
  id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "proposal". All fields are combined with a logical 'AND'. */
export type Proposal_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Bool_Exp>>
  _not?: InputMaybe<Proposal_Bool_Exp>
  _or?: InputMaybe<Array<Proposal_Bool_Exp>>
  content?: InputMaybe<Jsonb_Comparison_Exp>
  deposit_end_time?: InputMaybe<Timestamp_Comparison_Exp>
  description?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  proposal_deposits?: InputMaybe<Proposal_Deposit_Bool_Exp>
  proposal_route?: InputMaybe<String_Comparison_Exp>
  proposal_tally_result?: InputMaybe<Proposal_Tally_Result_Bool_Exp>
  proposal_tally_results?: InputMaybe<Proposal_Tally_Result_Bool_Exp>
  proposal_type?: InputMaybe<String_Comparison_Exp>
  proposal_votes?: InputMaybe<Proposal_Vote_Bool_Exp>
  proposer?: InputMaybe<Account_Bool_Exp>
  proposer_address?: InputMaybe<String_Comparison_Exp>
  staking_pool_snapshot?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>
  status?: InputMaybe<String_Comparison_Exp>
  submit_time?: InputMaybe<Timestamp_Comparison_Exp>
  title?: InputMaybe<String_Comparison_Exp>
  validator_status_snapshots?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>
  voting_end_time?: InputMaybe<Timestamp_Comparison_Exp>
  voting_start_time?: InputMaybe<Timestamp_Comparison_Exp>
}

/** columns and relationships of "proposal_deposit" */
export type Proposal_Deposit = {
  __typename?: 'proposal_deposit'
  amount?: Maybe<Scalars['_coin']>
  /** An object relationship */
  block?: Maybe<Block>
  /** An object relationship */
  depositor?: Maybe<Account>
  depositor_address?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['bigint']>
  /** An object relationship */
  proposal: Proposal
  proposal_id: Scalars['Int']
}

/** aggregated selection of "proposal_deposit" */
export type Proposal_Deposit_Aggregate = {
  __typename?: 'proposal_deposit_aggregate'
  aggregate?: Maybe<Proposal_Deposit_Aggregate_Fields>
  nodes: Array<Proposal_Deposit>
}

/** aggregate fields of "proposal_deposit" */
export type Proposal_Deposit_Aggregate_Fields = {
  __typename?: 'proposal_deposit_aggregate_fields'
  avg?: Maybe<Proposal_Deposit_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Proposal_Deposit_Max_Fields>
  min?: Maybe<Proposal_Deposit_Min_Fields>
  stddev?: Maybe<Proposal_Deposit_Stddev_Fields>
  stddev_pop?: Maybe<Proposal_Deposit_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Proposal_Deposit_Stddev_Samp_Fields>
  sum?: Maybe<Proposal_Deposit_Sum_Fields>
  var_pop?: Maybe<Proposal_Deposit_Var_Pop_Fields>
  var_samp?: Maybe<Proposal_Deposit_Var_Samp_Fields>
  variance?: Maybe<Proposal_Deposit_Variance_Fields>
}

/** aggregate fields of "proposal_deposit" */
export type Proposal_Deposit_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Deposit_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "proposal_deposit" */
export type Proposal_Deposit_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Deposit_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Proposal_Deposit_Max_Order_By>
  min?: InputMaybe<Proposal_Deposit_Min_Order_By>
  stddev?: InputMaybe<Proposal_Deposit_Stddev_Order_By>
  stddev_pop?: InputMaybe<Proposal_Deposit_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Proposal_Deposit_Stddev_Samp_Order_By>
  sum?: InputMaybe<Proposal_Deposit_Sum_Order_By>
  var_pop?: InputMaybe<Proposal_Deposit_Var_Pop_Order_By>
  var_samp?: InputMaybe<Proposal_Deposit_Var_Samp_Order_By>
  variance?: InputMaybe<Proposal_Deposit_Variance_Order_By>
}

/** aggregate avg on columns */
export type Proposal_Deposit_Avg_Fields = {
  __typename?: 'proposal_deposit_avg_fields'
  height?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Avg_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "proposal_deposit". All fields are combined with a logical 'AND'. */
export type Proposal_Deposit_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Deposit_Bool_Exp>>
  _not?: InputMaybe<Proposal_Deposit_Bool_Exp>
  _or?: InputMaybe<Array<Proposal_Deposit_Bool_Exp>>
  amount?: InputMaybe<_Coin_Comparison_Exp>
  block?: InputMaybe<Block_Bool_Exp>
  depositor?: InputMaybe<Account_Bool_Exp>
  depositor_address?: InputMaybe<String_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  proposal?: InputMaybe<Proposal_Bool_Exp>
  proposal_id?: InputMaybe<Int_Comparison_Exp>
}

/** aggregate max on columns */
export type Proposal_Deposit_Max_Fields = {
  __typename?: 'proposal_deposit_max_fields'
  depositor_address?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['bigint']>
  proposal_id?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Max_Order_By = {
  depositor_address?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Proposal_Deposit_Min_Fields = {
  __typename?: 'proposal_deposit_min_fields'
  depositor_address?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['bigint']>
  proposal_id?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Min_Order_By = {
  depositor_address?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "proposal_deposit". */
export type Proposal_Deposit_Order_By = {
  amount?: InputMaybe<Order_By>
  block?: InputMaybe<Block_Order_By>
  depositor?: InputMaybe<Account_Order_By>
  depositor_address?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  proposal?: InputMaybe<Proposal_Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** select columns of table "proposal_deposit" */
export enum Proposal_Deposit_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  DepositorAddress = 'depositor_address',
  /** column name */
  Height = 'height',
  /** column name */
  ProposalId = 'proposal_id'
}

/** aggregate stddev on columns */
export type Proposal_Deposit_Stddev_Fields = {
  __typename?: 'proposal_deposit_stddev_fields'
  height?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Proposal_Deposit_Stddev_Pop_Fields = {
  __typename?: 'proposal_deposit_stddev_pop_fields'
  height?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Proposal_Deposit_Stddev_Samp_Fields = {
  __typename?: 'proposal_deposit_stddev_samp_fields'
  height?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Proposal_Deposit_Sum_Fields = {
  __typename?: 'proposal_deposit_sum_fields'
  height?: Maybe<Scalars['bigint']>
  proposal_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Sum_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Proposal_Deposit_Var_Pop_Fields = {
  __typename?: 'proposal_deposit_var_pop_fields'
  height?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Proposal_Deposit_Var_Samp_Fields = {
  __typename?: 'proposal_deposit_var_samp_fields'
  height?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Proposal_Deposit_Variance_Fields = {
  __typename?: 'proposal_deposit_variance_fields'
  height?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Variance_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** aggregate max on columns */
export type Proposal_Max_Fields = {
  __typename?: 'proposal_max_fields'
  deposit_end_time?: Maybe<Scalars['timestamp']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  proposal_route?: Maybe<Scalars['String']>
  proposal_type?: Maybe<Scalars['String']>
  proposer_address?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  submit_time?: Maybe<Scalars['timestamp']>
  title?: Maybe<Scalars['String']>
  voting_end_time?: Maybe<Scalars['timestamp']>
  voting_start_time?: Maybe<Scalars['timestamp']>
}

/** order by max() on columns of table "proposal" */
export type Proposal_Max_Order_By = {
  deposit_end_time?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  proposal_route?: InputMaybe<Order_By>
  proposal_type?: InputMaybe<Order_By>
  proposer_address?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  submit_time?: InputMaybe<Order_By>
  title?: InputMaybe<Order_By>
  voting_end_time?: InputMaybe<Order_By>
  voting_start_time?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Proposal_Min_Fields = {
  __typename?: 'proposal_min_fields'
  deposit_end_time?: Maybe<Scalars['timestamp']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  proposal_route?: Maybe<Scalars['String']>
  proposal_type?: Maybe<Scalars['String']>
  proposer_address?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  submit_time?: Maybe<Scalars['timestamp']>
  title?: Maybe<Scalars['String']>
  voting_end_time?: Maybe<Scalars['timestamp']>
  voting_start_time?: Maybe<Scalars['timestamp']>
}

/** order by min() on columns of table "proposal" */
export type Proposal_Min_Order_By = {
  deposit_end_time?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  proposal_route?: InputMaybe<Order_By>
  proposal_type?: InputMaybe<Order_By>
  proposer_address?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  submit_time?: InputMaybe<Order_By>
  title?: InputMaybe<Order_By>
  voting_end_time?: InputMaybe<Order_By>
  voting_start_time?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "proposal". */
export type Proposal_Order_By = {
  content?: InputMaybe<Order_By>
  deposit_end_time?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposit_Aggregate_Order_By>
  proposal_route?: InputMaybe<Order_By>
  proposal_tally_result?: InputMaybe<Proposal_Tally_Result_Order_By>
  proposal_tally_results_aggregate?: InputMaybe<Proposal_Tally_Result_Aggregate_Order_By>
  proposal_type?: InputMaybe<Order_By>
  proposal_votes_aggregate?: InputMaybe<Proposal_Vote_Aggregate_Order_By>
  proposer?: InputMaybe<Account_Order_By>
  proposer_address?: InputMaybe<Order_By>
  staking_pool_snapshot?: InputMaybe<Proposal_Staking_Pool_Snapshot_Order_By>
  status?: InputMaybe<Order_By>
  submit_time?: InputMaybe<Order_By>
  title?: InputMaybe<Order_By>
  validator_status_snapshots_aggregate?: InputMaybe<Proposal_Validator_Status_Snapshot_Aggregate_Order_By>
  voting_end_time?: InputMaybe<Order_By>
  voting_start_time?: InputMaybe<Order_By>
}

/** select columns of table "proposal" */
export enum Proposal_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  DepositEndTime = 'deposit_end_time',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ProposalRoute = 'proposal_route',
  /** column name */
  ProposalType = 'proposal_type',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Status = 'status',
  /** column name */
  SubmitTime = 'submit_time',
  /** column name */
  Title = 'title',
  /** column name */
  VotingEndTime = 'voting_end_time',
  /** column name */
  VotingStartTime = 'voting_start_time'
}

/** columns and relationships of "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot = {
  __typename?: 'proposal_staking_pool_snapshot'
  bonded_tokens: Scalars['numeric']
  height: Scalars['bigint']
  not_bonded_tokens: Scalars['numeric']
  /** An object relationship */
  proposal: Proposal
  proposal_id: Scalars['Int']
}

/** aggregated selection of "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Aggregate = {
  __typename?: 'proposal_staking_pool_snapshot_aggregate'
  aggregate?: Maybe<Proposal_Staking_Pool_Snapshot_Aggregate_Fields>
  nodes: Array<Proposal_Staking_Pool_Snapshot>
}

/** aggregate fields of "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Aggregate_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_aggregate_fields'
  avg?: Maybe<Proposal_Staking_Pool_Snapshot_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Proposal_Staking_Pool_Snapshot_Max_Fields>
  min?: Maybe<Proposal_Staking_Pool_Snapshot_Min_Fields>
  stddev?: Maybe<Proposal_Staking_Pool_Snapshot_Stddev_Fields>
  stddev_pop?: Maybe<Proposal_Staking_Pool_Snapshot_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Proposal_Staking_Pool_Snapshot_Stddev_Samp_Fields>
  sum?: Maybe<Proposal_Staking_Pool_Snapshot_Sum_Fields>
  var_pop?: Maybe<Proposal_Staking_Pool_Snapshot_Var_Pop_Fields>
  var_samp?: Maybe<Proposal_Staking_Pool_Snapshot_Var_Samp_Fields>
  variance?: Maybe<Proposal_Staking_Pool_Snapshot_Variance_Fields>
}

/** aggregate fields of "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Proposal_Staking_Pool_Snapshot_Avg_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_avg_fields'
  bonded_tokens?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  not_bonded_tokens?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "proposal_staking_pool_snapshot". All fields are combined with a logical 'AND'. */
export type Proposal_Staking_Pool_Snapshot_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Bool_Exp>>
  _not?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>
  _or?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Bool_Exp>>
  bonded_tokens?: InputMaybe<Numeric_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  not_bonded_tokens?: InputMaybe<Numeric_Comparison_Exp>
  proposal?: InputMaybe<Proposal_Bool_Exp>
  proposal_id?: InputMaybe<Int_Comparison_Exp>
}

/** aggregate max on columns */
export type Proposal_Staking_Pool_Snapshot_Max_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_max_fields'
  bonded_tokens?: Maybe<Scalars['numeric']>
  height?: Maybe<Scalars['bigint']>
  not_bonded_tokens?: Maybe<Scalars['numeric']>
  proposal_id?: Maybe<Scalars['Int']>
}

/** aggregate min on columns */
export type Proposal_Staking_Pool_Snapshot_Min_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_min_fields'
  bonded_tokens?: Maybe<Scalars['numeric']>
  height?: Maybe<Scalars['bigint']>
  not_bonded_tokens?: Maybe<Scalars['numeric']>
  proposal_id?: Maybe<Scalars['Int']>
}

/** Ordering options when selecting data from "proposal_staking_pool_snapshot". */
export type Proposal_Staking_Pool_Snapshot_Order_By = {
  bonded_tokens?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  not_bonded_tokens?: InputMaybe<Order_By>
  proposal?: InputMaybe<Proposal_Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** select columns of table "proposal_staking_pool_snapshot" */
export enum Proposal_Staking_Pool_Snapshot_Select_Column {
  /** column name */
  BondedTokens = 'bonded_tokens',
  /** column name */
  Height = 'height',
  /** column name */
  NotBondedTokens = 'not_bonded_tokens',
  /** column name */
  ProposalId = 'proposal_id'
}

/** aggregate stddev on columns */
export type Proposal_Staking_Pool_Snapshot_Stddev_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_stddev_fields'
  bonded_tokens?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  not_bonded_tokens?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Proposal_Staking_Pool_Snapshot_Stddev_Pop_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_stddev_pop_fields'
  bonded_tokens?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  not_bonded_tokens?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Proposal_Staking_Pool_Snapshot_Stddev_Samp_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_stddev_samp_fields'
  bonded_tokens?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  not_bonded_tokens?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Proposal_Staking_Pool_Snapshot_Sum_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_sum_fields'
  bonded_tokens?: Maybe<Scalars['numeric']>
  height?: Maybe<Scalars['bigint']>
  not_bonded_tokens?: Maybe<Scalars['numeric']>
  proposal_id?: Maybe<Scalars['Int']>
}

/** aggregate var_pop on columns */
export type Proposal_Staking_Pool_Snapshot_Var_Pop_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_var_pop_fields'
  bonded_tokens?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  not_bonded_tokens?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Proposal_Staking_Pool_Snapshot_Var_Samp_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_var_samp_fields'
  bonded_tokens?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  not_bonded_tokens?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Proposal_Staking_Pool_Snapshot_Variance_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_variance_fields'
  bonded_tokens?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  not_bonded_tokens?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** aggregate stddev on columns */
export type Proposal_Stddev_Fields = {
  __typename?: 'proposal_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "proposal" */
export type Proposal_Stddev_Order_By = {
  id?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Proposal_Stddev_Pop_Fields = {
  __typename?: 'proposal_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "proposal" */
export type Proposal_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Proposal_Stddev_Samp_Fields = {
  __typename?: 'proposal_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "proposal" */
export type Proposal_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Proposal_Sum_Fields = {
  __typename?: 'proposal_sum_fields'
  id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "proposal" */
export type Proposal_Sum_Order_By = {
  id?: InputMaybe<Order_By>
}

/** columns and relationships of "proposal_tally_result" */
export type Proposal_Tally_Result = {
  __typename?: 'proposal_tally_result'
  abstain: Scalars['String']
  height: Scalars['bigint']
  no: Scalars['String']
  no_with_veto: Scalars['String']
  /** An object relationship */
  proposal: Proposal
  proposal_id: Scalars['Int']
  yes: Scalars['String']
}

/** aggregated selection of "proposal_tally_result" */
export type Proposal_Tally_Result_Aggregate = {
  __typename?: 'proposal_tally_result_aggregate'
  aggregate?: Maybe<Proposal_Tally_Result_Aggregate_Fields>
  nodes: Array<Proposal_Tally_Result>
}

/** aggregate fields of "proposal_tally_result" */
export type Proposal_Tally_Result_Aggregate_Fields = {
  __typename?: 'proposal_tally_result_aggregate_fields'
  avg?: Maybe<Proposal_Tally_Result_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Proposal_Tally_Result_Max_Fields>
  min?: Maybe<Proposal_Tally_Result_Min_Fields>
  stddev?: Maybe<Proposal_Tally_Result_Stddev_Fields>
  stddev_pop?: Maybe<Proposal_Tally_Result_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Proposal_Tally_Result_Stddev_Samp_Fields>
  sum?: Maybe<Proposal_Tally_Result_Sum_Fields>
  var_pop?: Maybe<Proposal_Tally_Result_Var_Pop_Fields>
  var_samp?: Maybe<Proposal_Tally_Result_Var_Samp_Fields>
  variance?: Maybe<Proposal_Tally_Result_Variance_Fields>
}

/** aggregate fields of "proposal_tally_result" */
export type Proposal_Tally_Result_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "proposal_tally_result" */
export type Proposal_Tally_Result_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Tally_Result_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Proposal_Tally_Result_Max_Order_By>
  min?: InputMaybe<Proposal_Tally_Result_Min_Order_By>
  stddev?: InputMaybe<Proposal_Tally_Result_Stddev_Order_By>
  stddev_pop?: InputMaybe<Proposal_Tally_Result_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Proposal_Tally_Result_Stddev_Samp_Order_By>
  sum?: InputMaybe<Proposal_Tally_Result_Sum_Order_By>
  var_pop?: InputMaybe<Proposal_Tally_Result_Var_Pop_Order_By>
  var_samp?: InputMaybe<Proposal_Tally_Result_Var_Samp_Order_By>
  variance?: InputMaybe<Proposal_Tally_Result_Variance_Order_By>
}

/** aggregate avg on columns */
export type Proposal_Tally_Result_Avg_Fields = {
  __typename?: 'proposal_tally_result_avg_fields'
  height?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Avg_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "proposal_tally_result". All fields are combined with a logical 'AND'. */
export type Proposal_Tally_Result_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Tally_Result_Bool_Exp>>
  _not?: InputMaybe<Proposal_Tally_Result_Bool_Exp>
  _or?: InputMaybe<Array<Proposal_Tally_Result_Bool_Exp>>
  abstain?: InputMaybe<String_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  no?: InputMaybe<String_Comparison_Exp>
  no_with_veto?: InputMaybe<String_Comparison_Exp>
  proposal?: InputMaybe<Proposal_Bool_Exp>
  proposal_id?: InputMaybe<Int_Comparison_Exp>
  yes?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Proposal_Tally_Result_Max_Fields = {
  __typename?: 'proposal_tally_result_max_fields'
  abstain?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['bigint']>
  no?: Maybe<Scalars['String']>
  no_with_veto?: Maybe<Scalars['String']>
  proposal_id?: Maybe<Scalars['Int']>
  yes?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Max_Order_By = {
  abstain?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  no?: InputMaybe<Order_By>
  no_with_veto?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  yes?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Proposal_Tally_Result_Min_Fields = {
  __typename?: 'proposal_tally_result_min_fields'
  abstain?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['bigint']>
  no?: Maybe<Scalars['String']>
  no_with_veto?: Maybe<Scalars['String']>
  proposal_id?: Maybe<Scalars['Int']>
  yes?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Min_Order_By = {
  abstain?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  no?: InputMaybe<Order_By>
  no_with_veto?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  yes?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "proposal_tally_result". */
export type Proposal_Tally_Result_Order_By = {
  abstain?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  no?: InputMaybe<Order_By>
  no_with_veto?: InputMaybe<Order_By>
  proposal?: InputMaybe<Proposal_Order_By>
  proposal_id?: InputMaybe<Order_By>
  yes?: InputMaybe<Order_By>
}

/** select columns of table "proposal_tally_result" */
export enum Proposal_Tally_Result_Select_Column {
  /** column name */
  Abstain = 'abstain',
  /** column name */
  Height = 'height',
  /** column name */
  No = 'no',
  /** column name */
  NoWithVeto = 'no_with_veto',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Yes = 'yes'
}

/** aggregate stddev on columns */
export type Proposal_Tally_Result_Stddev_Fields = {
  __typename?: 'proposal_tally_result_stddev_fields'
  height?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Proposal_Tally_Result_Stddev_Pop_Fields = {
  __typename?: 'proposal_tally_result_stddev_pop_fields'
  height?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Proposal_Tally_Result_Stddev_Samp_Fields = {
  __typename?: 'proposal_tally_result_stddev_samp_fields'
  height?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Proposal_Tally_Result_Sum_Fields = {
  __typename?: 'proposal_tally_result_sum_fields'
  height?: Maybe<Scalars['bigint']>
  proposal_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Sum_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Proposal_Tally_Result_Var_Pop_Fields = {
  __typename?: 'proposal_tally_result_var_pop_fields'
  height?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Proposal_Tally_Result_Var_Samp_Fields = {
  __typename?: 'proposal_tally_result_var_samp_fields'
  height?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Proposal_Tally_Result_Variance_Fields = {
  __typename?: 'proposal_tally_result_variance_fields'
  height?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Variance_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** columns and relationships of "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot = {
  __typename?: 'proposal_validator_status_snapshot'
  height: Scalars['bigint']
  id: Scalars['Int']
  jailed: Scalars['Boolean']
  /** An object relationship */
  proposal?: Maybe<Proposal>
  proposal_id?: Maybe<Scalars['Int']>
  status: Scalars['Int']
  /** An object relationship */
  validator: Validator
  validator_address: Scalars['String']
  voting_power: Scalars['bigint']
}

/** aggregated selection of "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Aggregate = {
  __typename?: 'proposal_validator_status_snapshot_aggregate'
  aggregate?: Maybe<Proposal_Validator_Status_Snapshot_Aggregate_Fields>
  nodes: Array<Proposal_Validator_Status_Snapshot>
}

/** aggregate fields of "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Aggregate_Fields = {
  __typename?: 'proposal_validator_status_snapshot_aggregate_fields'
  avg?: Maybe<Proposal_Validator_Status_Snapshot_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Proposal_Validator_Status_Snapshot_Max_Fields>
  min?: Maybe<Proposal_Validator_Status_Snapshot_Min_Fields>
  stddev?: Maybe<Proposal_Validator_Status_Snapshot_Stddev_Fields>
  stddev_pop?: Maybe<Proposal_Validator_Status_Snapshot_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Proposal_Validator_Status_Snapshot_Stddev_Samp_Fields>
  sum?: Maybe<Proposal_Validator_Status_Snapshot_Sum_Fields>
  var_pop?: Maybe<Proposal_Validator_Status_Snapshot_Var_Pop_Fields>
  var_samp?: Maybe<Proposal_Validator_Status_Snapshot_Var_Samp_Fields>
  variance?: Maybe<Proposal_Validator_Status_Snapshot_Variance_Fields>
}

/** aggregate fields of "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Validator_Status_Snapshot_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Proposal_Validator_Status_Snapshot_Max_Order_By>
  min?: InputMaybe<Proposal_Validator_Status_Snapshot_Min_Order_By>
  stddev?: InputMaybe<Proposal_Validator_Status_Snapshot_Stddev_Order_By>
  stddev_pop?: InputMaybe<Proposal_Validator_Status_Snapshot_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Proposal_Validator_Status_Snapshot_Stddev_Samp_Order_By>
  sum?: InputMaybe<Proposal_Validator_Status_Snapshot_Sum_Order_By>
  var_pop?: InputMaybe<Proposal_Validator_Status_Snapshot_Var_Pop_Order_By>
  var_samp?: InputMaybe<Proposal_Validator_Status_Snapshot_Var_Samp_Order_By>
  variance?: InputMaybe<Proposal_Validator_Status_Snapshot_Variance_Order_By>
}

/** aggregate avg on columns */
export type Proposal_Validator_Status_Snapshot_Avg_Fields = {
  __typename?: 'proposal_validator_status_snapshot_avg_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
  status?: Maybe<Scalars['Float']>
  voting_power?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Avg_Order_By = {
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "proposal_validator_status_snapshot". All fields are combined with a logical 'AND'. */
export type Proposal_Validator_Status_Snapshot_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Bool_Exp>>
  _not?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>
  _or?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Bool_Exp>>
  height?: InputMaybe<Bigint_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  jailed?: InputMaybe<Boolean_Comparison_Exp>
  proposal?: InputMaybe<Proposal_Bool_Exp>
  proposal_id?: InputMaybe<Int_Comparison_Exp>
  status?: InputMaybe<Int_Comparison_Exp>
  validator?: InputMaybe<Validator_Bool_Exp>
  validator_address?: InputMaybe<String_Comparison_Exp>
  voting_power?: InputMaybe<Bigint_Comparison_Exp>
}

/** aggregate max on columns */
export type Proposal_Validator_Status_Snapshot_Max_Fields = {
  __typename?: 'proposal_validator_status_snapshot_max_fields'
  height?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['Int']>
  proposal_id?: Maybe<Scalars['Int']>
  status?: Maybe<Scalars['Int']>
  validator_address?: Maybe<Scalars['String']>
  voting_power?: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Max_Order_By = {
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Proposal_Validator_Status_Snapshot_Min_Fields = {
  __typename?: 'proposal_validator_status_snapshot_min_fields'
  height?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['Int']>
  proposal_id?: Maybe<Scalars['Int']>
  status?: Maybe<Scalars['Int']>
  validator_address?: Maybe<Scalars['String']>
  voting_power?: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Min_Order_By = {
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "proposal_validator_status_snapshot". */
export type Proposal_Validator_Status_Snapshot_Order_By = {
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  jailed?: InputMaybe<Order_By>
  proposal?: InputMaybe<Proposal_Order_By>
  proposal_id?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  validator?: InputMaybe<Validator_Order_By>
  validator_address?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** select columns of table "proposal_validator_status_snapshot" */
export enum Proposal_Validator_Status_Snapshot_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Status = 'status',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

/** aggregate stddev on columns */
export type Proposal_Validator_Status_Snapshot_Stddev_Fields = {
  __typename?: 'proposal_validator_status_snapshot_stddev_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
  status?: Maybe<Scalars['Float']>
  voting_power?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Proposal_Validator_Status_Snapshot_Stddev_Pop_Fields = {
  __typename?: 'proposal_validator_status_snapshot_stddev_pop_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
  status?: Maybe<Scalars['Float']>
  voting_power?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Proposal_Validator_Status_Snapshot_Stddev_Samp_Fields = {
  __typename?: 'proposal_validator_status_snapshot_stddev_samp_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
  status?: Maybe<Scalars['Float']>
  voting_power?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Proposal_Validator_Status_Snapshot_Sum_Fields = {
  __typename?: 'proposal_validator_status_snapshot_sum_fields'
  height?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['Int']>
  proposal_id?: Maybe<Scalars['Int']>
  status?: Maybe<Scalars['Int']>
  voting_power?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Sum_Order_By = {
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Proposal_Validator_Status_Snapshot_Var_Pop_Fields = {
  __typename?: 'proposal_validator_status_snapshot_var_pop_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
  status?: Maybe<Scalars['Float']>
  voting_power?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Proposal_Validator_Status_Snapshot_Var_Samp_Fields = {
  __typename?: 'proposal_validator_status_snapshot_var_samp_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
  status?: Maybe<Scalars['Float']>
  voting_power?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Proposal_Validator_Status_Snapshot_Variance_Fields = {
  __typename?: 'proposal_validator_status_snapshot_variance_fields'
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
  status?: Maybe<Scalars['Float']>
  voting_power?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Variance_Order_By = {
  height?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Proposal_Var_Pop_Fields = {
  __typename?: 'proposal_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "proposal" */
export type Proposal_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Proposal_Var_Samp_Fields = {
  __typename?: 'proposal_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "proposal" */
export type Proposal_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Proposal_Variance_Fields = {
  __typename?: 'proposal_variance_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "proposal" */
export type Proposal_Variance_Order_By = {
  id?: InputMaybe<Order_By>
}

/** columns and relationships of "proposal_vote" */
export type Proposal_Vote = {
  __typename?: 'proposal_vote'
  /** An object relationship */
  account: Account
  height: Scalars['bigint']
  option: Scalars['String']
  /** An object relationship */
  proposal: Proposal
  proposal_id: Scalars['Int']
  voter_address: Scalars['String']
}

/** aggregated selection of "proposal_vote" */
export type Proposal_Vote_Aggregate = {
  __typename?: 'proposal_vote_aggregate'
  aggregate?: Maybe<Proposal_Vote_Aggregate_Fields>
  nodes: Array<Proposal_Vote>
}

/** aggregate fields of "proposal_vote" */
export type Proposal_Vote_Aggregate_Fields = {
  __typename?: 'proposal_vote_aggregate_fields'
  avg?: Maybe<Proposal_Vote_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Proposal_Vote_Max_Fields>
  min?: Maybe<Proposal_Vote_Min_Fields>
  stddev?: Maybe<Proposal_Vote_Stddev_Fields>
  stddev_pop?: Maybe<Proposal_Vote_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Proposal_Vote_Stddev_Samp_Fields>
  sum?: Maybe<Proposal_Vote_Sum_Fields>
  var_pop?: Maybe<Proposal_Vote_Var_Pop_Fields>
  var_samp?: Maybe<Proposal_Vote_Var_Samp_Fields>
  variance?: Maybe<Proposal_Vote_Variance_Fields>
}

/** aggregate fields of "proposal_vote" */
export type Proposal_Vote_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Vote_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "proposal_vote" */
export type Proposal_Vote_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Vote_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Proposal_Vote_Max_Order_By>
  min?: InputMaybe<Proposal_Vote_Min_Order_By>
  stddev?: InputMaybe<Proposal_Vote_Stddev_Order_By>
  stddev_pop?: InputMaybe<Proposal_Vote_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Proposal_Vote_Stddev_Samp_Order_By>
  sum?: InputMaybe<Proposal_Vote_Sum_Order_By>
  var_pop?: InputMaybe<Proposal_Vote_Var_Pop_Order_By>
  var_samp?: InputMaybe<Proposal_Vote_Var_Samp_Order_By>
  variance?: InputMaybe<Proposal_Vote_Variance_Order_By>
}

/** aggregate avg on columns */
export type Proposal_Vote_Avg_Fields = {
  __typename?: 'proposal_vote_avg_fields'
  height?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "proposal_vote" */
export type Proposal_Vote_Avg_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "proposal_vote". All fields are combined with a logical 'AND'. */
export type Proposal_Vote_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Vote_Bool_Exp>>
  _not?: InputMaybe<Proposal_Vote_Bool_Exp>
  _or?: InputMaybe<Array<Proposal_Vote_Bool_Exp>>
  account?: InputMaybe<Account_Bool_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  option?: InputMaybe<String_Comparison_Exp>
  proposal?: InputMaybe<Proposal_Bool_Exp>
  proposal_id?: InputMaybe<Int_Comparison_Exp>
  voter_address?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Proposal_Vote_Max_Fields = {
  __typename?: 'proposal_vote_max_fields'
  height?: Maybe<Scalars['bigint']>
  option?: Maybe<Scalars['String']>
  proposal_id?: Maybe<Scalars['Int']>
  voter_address?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "proposal_vote" */
export type Proposal_Vote_Max_Order_By = {
  height?: InputMaybe<Order_By>
  option?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  voter_address?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Proposal_Vote_Min_Fields = {
  __typename?: 'proposal_vote_min_fields'
  height?: Maybe<Scalars['bigint']>
  option?: Maybe<Scalars['String']>
  proposal_id?: Maybe<Scalars['Int']>
  voter_address?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "proposal_vote" */
export type Proposal_Vote_Min_Order_By = {
  height?: InputMaybe<Order_By>
  option?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  voter_address?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "proposal_vote". */
export type Proposal_Vote_Order_By = {
  account?: InputMaybe<Account_Order_By>
  height?: InputMaybe<Order_By>
  option?: InputMaybe<Order_By>
  proposal?: InputMaybe<Proposal_Order_By>
  proposal_id?: InputMaybe<Order_By>
  voter_address?: InputMaybe<Order_By>
}

/** select columns of table "proposal_vote" */
export enum Proposal_Vote_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Option = 'option',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  VoterAddress = 'voter_address'
}

/** aggregate stddev on columns */
export type Proposal_Vote_Stddev_Fields = {
  __typename?: 'proposal_vote_stddev_fields'
  height?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "proposal_vote" */
export type Proposal_Vote_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Proposal_Vote_Stddev_Pop_Fields = {
  __typename?: 'proposal_vote_stddev_pop_fields'
  height?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "proposal_vote" */
export type Proposal_Vote_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Proposal_Vote_Stddev_Samp_Fields = {
  __typename?: 'proposal_vote_stddev_samp_fields'
  height?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "proposal_vote" */
export type Proposal_Vote_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Proposal_Vote_Sum_Fields = {
  __typename?: 'proposal_vote_sum_fields'
  height?: Maybe<Scalars['bigint']>
  proposal_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "proposal_vote" */
export type Proposal_Vote_Sum_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Proposal_Vote_Var_Pop_Fields = {
  __typename?: 'proposal_vote_var_pop_fields'
  height?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "proposal_vote" */
export type Proposal_Vote_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Proposal_Vote_Var_Samp_Fields = {
  __typename?: 'proposal_vote_var_samp_fields'
  height?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "proposal_vote" */
export type Proposal_Vote_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Proposal_Vote_Variance_Fields = {
  __typename?: 'proposal_vote_variance_fields'
  height?: Maybe<Scalars['Float']>
  proposal_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "proposal_vote" */
export type Proposal_Vote_Variance_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "account" */
  account: Array<Account>
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate
  /** fetch data from the table: "account_balance" */
  account_balance: Array<Account_Balance>
  /** fetch aggregated fields from the table: "account_balance" */
  account_balance_aggregate: Account_Balance_Aggregate
  /** fetch data from the table: "account_balance" using primary key columns */
  account_balance_by_pk?: Maybe<Account_Balance>
  /** fetch data from the table: "account_balance_history" */
  account_balance_history: Array<Account_Balance_History>
  /** fetch aggregated fields from the table: "account_balance_history" */
  account_balance_history_aggregate: Account_Balance_History_Aggregate
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>
  /** fetch data from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis: Array<Average_Block_Time_From_Genesis>
  /** fetch aggregated fields from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis_aggregate: Average_Block_Time_From_Genesis_Aggregate
  /** fetch data from the table: "average_block_time_per_day" */
  average_block_time_per_day: Array<Average_Block_Time_Per_Day>
  /** fetch aggregated fields from the table: "average_block_time_per_day" */
  average_block_time_per_day_aggregate: Average_Block_Time_Per_Day_Aggregate
  /** fetch data from the table: "average_block_time_per_hour" */
  average_block_time_per_hour: Array<Average_Block_Time_Per_Hour>
  /** fetch aggregated fields from the table: "average_block_time_per_hour" */
  average_block_time_per_hour_aggregate: Average_Block_Time_Per_Hour_Aggregate
  /** fetch data from the table: "average_block_time_per_minute" */
  average_block_time_per_minute: Array<Average_Block_Time_Per_Minute>
  /** fetch aggregated fields from the table: "average_block_time_per_minute" */
  average_block_time_per_minute_aggregate: Average_Block_Time_Per_Minute_Aggregate
  /** fetch data from the table: "block" */
  block: Array<Block>
  /** fetch aggregated fields from the table: "block" */
  block_aggregate: Block_Aggregate
  /** fetch data from the table: "block" using primary key columns */
  block_by_pk?: Maybe<Block>
  /** fetch data from the table: "community_pool" */
  community_pool: Array<Community_Pool>
  /** fetch aggregated fields from the table: "community_pool" */
  community_pool_aggregate: Community_Pool_Aggregate
  /** fetch data from the table: "delegation" */
  delegation: Array<Delegation>
  /** fetch aggregated fields from the table: "delegation" */
  delegation_aggregate: Delegation_Aggregate
  /** fetch data from the table: "delegation" using primary key columns */
  delegation_by_pk?: Maybe<Delegation>
  /** fetch data from the table: "delegation_reward" */
  delegation_reward: Array<Delegation_Reward>
  /** fetch aggregated fields from the table: "delegation_reward" */
  delegation_reward_aggregate: Delegation_Reward_Aggregate
  /** fetch data from the table: "distribution_params" */
  distribution_params: Array<Distribution_Params>
  /** fetch aggregated fields from the table: "distribution_params" */
  distribution_params_aggregate: Distribution_Params_Aggregate
  /** fetch data from the table: "distribution_params" using primary key columns */
  distribution_params_by_pk?: Maybe<Distribution_Params>
  /** fetch data from the table: "double_sign_evidence" */
  double_sign_evidence: Array<Double_Sign_Evidence>
  /** fetch aggregated fields from the table: "double_sign_evidence" */
  double_sign_evidence_aggregate: Double_Sign_Evidence_Aggregate
  /** fetch data from the table: "double_sign_vote" */
  double_sign_vote: Array<Double_Sign_Vote>
  /** fetch aggregated fields from the table: "double_sign_vote" */
  double_sign_vote_aggregate: Double_Sign_Vote_Aggregate
  /** fetch data from the table: "double_sign_vote" using primary key columns */
  double_sign_vote_by_pk?: Maybe<Double_Sign_Vote>
  /** fetch data from the table: "fee_grant_allowance" */
  fee_grant_allowance: Array<Fee_Grant_Allowance>
  /** fetch aggregated fields from the table: "fee_grant_allowance" */
  fee_grant_allowance_aggregate: Fee_Grant_Allowance_Aggregate
  /** fetch data from the table: "fee_grant_allowance" using primary key columns */
  fee_grant_allowance_by_pk?: Maybe<Fee_Grant_Allowance>
  /** fetch data from the table: "genesis" */
  genesis: Array<Genesis>
  /** fetch aggregated fields from the table: "genesis" */
  genesis_aggregate: Genesis_Aggregate
  /** fetch data from the table: "gov_params" */
  gov_params: Array<Gov_Params>
  /** fetch aggregated fields from the table: "gov_params" */
  gov_params_aggregate: Gov_Params_Aggregate
  /** fetch data from the table: "gov_params" using primary key columns */
  gov_params_by_pk?: Maybe<Gov_Params>
  /** fetch data from the table: "inflation" */
  inflation: Array<Inflation>
  /** fetch aggregated fields from the table: "inflation" */
  inflation_aggregate: Inflation_Aggregate
  /** fetch data from the table: "message" */
  message: Array<Message>
  /** fetch aggregated fields from the table: "message" */
  message_aggregate: Message_Aggregate
  /** execute function "messages_by_address" which returns "message" */
  messages_by_address: Array<Message>
  /** execute function "messages_by_address" and query aggregates on result of table type "message" */
  messages_by_address_aggregate: Message_Aggregate
  /** fetch data from the table: "mint_params" */
  mint_params: Array<Mint_Params>
  /** fetch aggregated fields from the table: "mint_params" */
  mint_params_aggregate: Mint_Params_Aggregate
  /** fetch data from the table: "mint_params" using primary key columns */
  mint_params_by_pk?: Maybe<Mint_Params>
  /** fetch data from the table: "modules" */
  modules: Array<Modules>
  /** fetch aggregated fields from the table: "modules" */
  modules_aggregate: Modules_Aggregate
  /** fetch data from the table: "modules" using primary key columns */
  modules_by_pk?: Maybe<Modules>
  /** fetch data from the table: "pre_commit" */
  pre_commit: Array<Pre_Commit>
  /** fetch aggregated fields from the table: "pre_commit" */
  pre_commit_aggregate: Pre_Commit_Aggregate
  /** fetch data from the table: "proposal" */
  proposal: Array<Proposal>
  /** fetch aggregated fields from the table: "proposal" */
  proposal_aggregate: Proposal_Aggregate
  /** fetch data from the table: "proposal" using primary key columns */
  proposal_by_pk?: Maybe<Proposal>
  /** fetch data from the table: "proposal_deposit" */
  proposal_deposit: Array<Proposal_Deposit>
  /** fetch aggregated fields from the table: "proposal_deposit" */
  proposal_deposit_aggregate: Proposal_Deposit_Aggregate
  /** fetch data from the table: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot: Array<Proposal_Staking_Pool_Snapshot>
  /** fetch aggregated fields from the table: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot_aggregate: Proposal_Staking_Pool_Snapshot_Aggregate
  /** fetch data from the table: "proposal_staking_pool_snapshot" using primary key columns */
  proposal_staking_pool_snapshot_by_pk?: Maybe<Proposal_Staking_Pool_Snapshot>
  /** fetch data from the table: "proposal_tally_result" */
  proposal_tally_result: Array<Proposal_Tally_Result>
  /** fetch aggregated fields from the table: "proposal_tally_result" */
  proposal_tally_result_aggregate: Proposal_Tally_Result_Aggregate
  /** fetch data from the table: "proposal_tally_result" using primary key columns */
  proposal_tally_result_by_pk?: Maybe<Proposal_Tally_Result>
  /** fetch data from the table: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot: Array<Proposal_Validator_Status_Snapshot>
  /** fetch aggregated fields from the table: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot_aggregate: Proposal_Validator_Status_Snapshot_Aggregate
  /** fetch data from the table: "proposal_validator_status_snapshot" using primary key columns */
  proposal_validator_status_snapshot_by_pk?: Maybe<Proposal_Validator_Status_Snapshot>
  /** fetch data from the table: "proposal_vote" */
  proposal_vote: Array<Proposal_Vote>
  /** fetch aggregated fields from the table: "proposal_vote" */
  proposal_vote_aggregate: Proposal_Vote_Aggregate
  /** fetch data from the table: "redelegation" */
  redelegation: Array<Redelegation>
  /** fetch aggregated fields from the table: "redelegation" */
  redelegation_aggregate: Redelegation_Aggregate
  /** fetch data from the table: "slashing_params" */
  slashing_params: Array<Slashing_Params>
  /** fetch aggregated fields from the table: "slashing_params" */
  slashing_params_aggregate: Slashing_Params_Aggregate
  /** fetch data from the table: "slashing_params" using primary key columns */
  slashing_params_by_pk?: Maybe<Slashing_Params>
  /** fetch data from the table: "staking_params" */
  staking_params: Array<Staking_Params>
  /** fetch aggregated fields from the table: "staking_params" */
  staking_params_aggregate: Staking_Params_Aggregate
  /** fetch data from the table: "staking_params" using primary key columns */
  staking_params_by_pk?: Maybe<Staking_Params>
  /** fetch data from the table: "staking_pool" */
  staking_pool: Array<Staking_Pool>
  /** fetch aggregated fields from the table: "staking_pool" */
  staking_pool_aggregate: Staking_Pool_Aggregate
  /** fetch data from the table: "supply" */
  supply: Array<Supply>
  /** fetch aggregated fields from the table: "supply" */
  supply_aggregate: Supply_Aggregate
  /** fetch data from the table: "token" */
  token: Array<Token>
  /** fetch aggregated fields from the table: "token" */
  token_aggregate: Token_Aggregate
  /** fetch data from the table: "token_price" */
  token_price: Array<Token_Price>
  /** fetch aggregated fields from the table: "token_price" */
  token_price_aggregate: Token_Price_Aggregate
  /** fetch data from the table: "token_price" using primary key columns */
  token_price_by_pk?: Maybe<Token_Price>
  /** fetch data from the table: "token_price_history" */
  token_price_history: Array<Token_Price_History>
  /** fetch aggregated fields from the table: "token_price_history" */
  token_price_history_aggregate: Token_Price_History_Aggregate
  /** fetch data from the table: "token_unit" */
  token_unit: Array<Token_Unit>
  /** fetch aggregated fields from the table: "token_unit" */
  token_unit_aggregate: Token_Unit_Aggregate
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate
  /** fetch data from the table: "transaction" using primary key columns */
  transaction_by_pk?: Maybe<Transaction>
  /** fetch data from the table: "unbonding_delegation" */
  unbonding_delegation: Array<Unbonding_Delegation>
  /** fetch aggregated fields from the table: "unbonding_delegation" */
  unbonding_delegation_aggregate: Unbonding_Delegation_Aggregate
  /** fetch data from the table: "validator" */
  validator: Array<Validator>
  /** fetch aggregated fields from the table: "validator" */
  validator_aggregate: Validator_Aggregate
  /** fetch data from the table: "validator" using primary key columns */
  validator_by_pk?: Maybe<Validator>
  /** fetch data from the table: "validator_commission" */
  validator_commission: Array<Validator_Commission>
  /** fetch aggregated fields from the table: "validator_commission" */
  validator_commission_aggregate: Validator_Commission_Aggregate
  /** fetch data from the table: "validator_commission_amount" */
  validator_commission_amount: Array<Validator_Commission_Amount>
  /** fetch aggregated fields from the table: "validator_commission_amount" */
  validator_commission_amount_aggregate: Validator_Commission_Amount_Aggregate
  /** fetch data from the table: "validator_commission_amount" using primary key columns */
  validator_commission_amount_by_pk?: Maybe<Validator_Commission_Amount>
  /** fetch data from the table: "validator_commission" using primary key columns */
  validator_commission_by_pk?: Maybe<Validator_Commission>
  /** fetch data from the table: "validator_description" */
  validator_description: Array<Validator_Description>
  /** fetch aggregated fields from the table: "validator_description" */
  validator_description_aggregate: Validator_Description_Aggregate
  /** fetch data from the table: "validator_description" using primary key columns */
  validator_description_by_pk?: Maybe<Validator_Description>
  /** fetch data from the table: "validator_info" */
  validator_info: Array<Validator_Info>
  /** fetch aggregated fields from the table: "validator_info" */
  validator_info_aggregate: Validator_Info_Aggregate
  /** fetch data from the table: "validator_info" using primary key columns */
  validator_info_by_pk?: Maybe<Validator_Info>
  /** fetch data from the table: "validator_signing_info" */
  validator_signing_info: Array<Validator_Signing_Info>
  /** fetch aggregated fields from the table: "validator_signing_info" */
  validator_signing_info_aggregate: Validator_Signing_Info_Aggregate
  /** fetch data from the table: "validator_signing_info" using primary key columns */
  validator_signing_info_by_pk?: Maybe<Validator_Signing_Info>
  /** fetch data from the table: "validator_status" */
  validator_status: Array<Validator_Status>
  /** fetch aggregated fields from the table: "validator_status" */
  validator_status_aggregate: Validator_Status_Aggregate
  /** fetch data from the table: "validator_status" using primary key columns */
  validator_status_by_pk?: Maybe<Validator_Status>
  /** fetch data from the table: "validator_voting_power" */
  validator_voting_power: Array<Validator_Voting_Power>
  /** fetch aggregated fields from the table: "validator_voting_power" */
  validator_voting_power_aggregate: Validator_Voting_Power_Aggregate
  /** fetch data from the table: "validator_voting_power" using primary key columns */
  validator_voting_power_by_pk?: Maybe<Validator_Voting_Power>
  /** fetch data from the table: "vesting_account" */
  vesting_account: Array<Vesting_Account>
  /** fetch aggregated fields from the table: "vesting_account" */
  vesting_account_aggregate: Vesting_Account_Aggregate
  /** fetch data from the table: "vesting_account" using primary key columns */
  vesting_account_by_pk?: Maybe<Vesting_Account>
  /** fetch data from the table: "vesting_period" */
  vesting_period: Array<Vesting_Period>
  /** fetch aggregated fields from the table: "vesting_period" */
  vesting_period_aggregate: Vesting_Period_Aggregate
}

export type Query_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Order_By>>
  where?: InputMaybe<Account_Bool_Exp>
}

export type Query_RootAccount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Order_By>>
  where?: InputMaybe<Account_Bool_Exp>
}

export type Query_RootAccount_BalanceArgs = {
  distinct_on?: InputMaybe<Array<Account_Balance_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Balance_Order_By>>
  where?: InputMaybe<Account_Balance_Bool_Exp>
}

export type Query_RootAccount_Balance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Balance_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Balance_Order_By>>
  where?: InputMaybe<Account_Balance_Bool_Exp>
}

export type Query_RootAccount_Balance_By_PkArgs = {
  address: Scalars['String']
}

export type Query_RootAccount_Balance_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Account_Balance_History_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Balance_History_Order_By>>
  where?: InputMaybe<Account_Balance_History_Bool_Exp>
}

export type Query_RootAccount_Balance_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Balance_History_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Balance_History_Order_By>>
  where?: InputMaybe<Account_Balance_History_Bool_Exp>
}

export type Query_RootAccount_By_PkArgs = {
  address: Scalars['String']
}

export type Query_RootAverage_Block_Time_From_GenesisArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_From_Genesis_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Average_Block_Time_From_Genesis_Order_By>>
  where?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>
}

export type Query_RootAverage_Block_Time_From_Genesis_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_From_Genesis_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Average_Block_Time_From_Genesis_Order_By>>
  where?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>
}

export type Query_RootAverage_Block_Time_Per_DayArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Day_Order_By>>
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>
}

export type Query_RootAverage_Block_Time_Per_Day_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Day_Order_By>>
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>
}

export type Query_RootAverage_Block_Time_Per_HourArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Hour_Order_By>>
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>
}

export type Query_RootAverage_Block_Time_Per_Hour_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Hour_Order_By>>
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>
}

export type Query_RootAverage_Block_Time_Per_MinuteArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Minute_Order_By>>
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>
}

export type Query_RootAverage_Block_Time_Per_Minute_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Minute_Order_By>>
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>
}

export type Query_RootBlockArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Block_Order_By>>
  where?: InputMaybe<Block_Bool_Exp>
}

export type Query_RootBlock_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Block_Order_By>>
  where?: InputMaybe<Block_Bool_Exp>
}

export type Query_RootBlock_By_PkArgs = {
  height: Scalars['bigint']
}

export type Query_RootCommunity_PoolArgs = {
  distinct_on?: InputMaybe<Array<Community_Pool_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Community_Pool_Order_By>>
  where?: InputMaybe<Community_Pool_Bool_Exp>
}

export type Query_RootCommunity_Pool_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Community_Pool_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Community_Pool_Order_By>>
  where?: InputMaybe<Community_Pool_Bool_Exp>
}

export type Query_RootDelegationArgs = {
  distinct_on?: InputMaybe<Array<Delegation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Delegation_Order_By>>
  where?: InputMaybe<Delegation_Bool_Exp>
}

export type Query_RootDelegation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delegation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Delegation_Order_By>>
  where?: InputMaybe<Delegation_Bool_Exp>
}

export type Query_RootDelegation_By_PkArgs = {
  id: Scalars['Int']
}

export type Query_RootDelegation_RewardArgs = {
  distinct_on?: InputMaybe<Array<Delegation_Reward_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Delegation_Reward_Order_By>>
  where?: InputMaybe<Delegation_Reward_Bool_Exp>
}

export type Query_RootDelegation_Reward_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delegation_Reward_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Delegation_Reward_Order_By>>
  where?: InputMaybe<Delegation_Reward_Bool_Exp>
}

export type Query_RootDistribution_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Distribution_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Distribution_Params_Order_By>>
  where?: InputMaybe<Distribution_Params_Bool_Exp>
}

export type Query_RootDistribution_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Distribution_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Distribution_Params_Order_By>>
  where?: InputMaybe<Distribution_Params_Bool_Exp>
}

export type Query_RootDistribution_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean']
}

export type Query_RootDouble_Sign_EvidenceArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>
}

export type Query_RootDouble_Sign_Evidence_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>
}

export type Query_RootDouble_Sign_VoteArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Double_Sign_Vote_Order_By>>
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>
}

export type Query_RootDouble_Sign_Vote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Double_Sign_Vote_Order_By>>
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>
}

export type Query_RootDouble_Sign_Vote_By_PkArgs = {
  id: Scalars['Int']
}

export type Query_RootFee_Grant_AllowanceArgs = {
  distinct_on?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Fee_Grant_Allowance_Order_By>>
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>
}

export type Query_RootFee_Grant_Allowance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Fee_Grant_Allowance_Order_By>>
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>
}

export type Query_RootFee_Grant_Allowance_By_PkArgs = {
  id: Scalars['Int']
}

export type Query_RootGenesisArgs = {
  distinct_on?: InputMaybe<Array<Genesis_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Genesis_Order_By>>
  where?: InputMaybe<Genesis_Bool_Exp>
}

export type Query_RootGenesis_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Genesis_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Genesis_Order_By>>
  where?: InputMaybe<Genesis_Bool_Exp>
}

export type Query_RootGov_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>
  where?: InputMaybe<Gov_Params_Bool_Exp>
}

export type Query_RootGov_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>
  where?: InputMaybe<Gov_Params_Bool_Exp>
}

export type Query_RootGov_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean']
}

export type Query_RootInflationArgs = {
  distinct_on?: InputMaybe<Array<Inflation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Inflation_Order_By>>
  where?: InputMaybe<Inflation_Bool_Exp>
}

export type Query_RootInflation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Inflation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Inflation_Order_By>>
  where?: InputMaybe<Inflation_Bool_Exp>
}

export type Query_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Message_Order_By>>
  where?: InputMaybe<Message_Bool_Exp>
}

export type Query_RootMessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Message_Order_By>>
  where?: InputMaybe<Message_Bool_Exp>
}

export type Query_RootMessages_By_AddressArgs = {
  args: Messages_By_Address_Args
  distinct_on?: InputMaybe<Array<Message_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Message_Order_By>>
  where?: InputMaybe<Message_Bool_Exp>
}

export type Query_RootMessages_By_Address_AggregateArgs = {
  args: Messages_By_Address_Args
  distinct_on?: InputMaybe<Array<Message_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Message_Order_By>>
  where?: InputMaybe<Message_Bool_Exp>
}

export type Query_RootMint_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Mint_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Mint_Params_Order_By>>
  where?: InputMaybe<Mint_Params_Bool_Exp>
}

export type Query_RootMint_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mint_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Mint_Params_Order_By>>
  where?: InputMaybe<Mint_Params_Bool_Exp>
}

export type Query_RootMint_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean']
}

export type Query_RootModulesArgs = {
  distinct_on?: InputMaybe<Array<Modules_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Modules_Order_By>>
  where?: InputMaybe<Modules_Bool_Exp>
}

export type Query_RootModules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Modules_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Modules_Order_By>>
  where?: InputMaybe<Modules_Bool_Exp>
}

export type Query_RootModules_By_PkArgs = {
  module_name: Scalars['String']
}

export type Query_RootPre_CommitArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>
  where?: InputMaybe<Pre_Commit_Bool_Exp>
}

export type Query_RootPre_Commit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>
  where?: InputMaybe<Pre_Commit_Bool_Exp>
}

export type Query_RootProposalArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Order_By>>
  where?: InputMaybe<Proposal_Bool_Exp>
}

export type Query_RootProposal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Order_By>>
  where?: InputMaybe<Proposal_Bool_Exp>
}

export type Query_RootProposal_By_PkArgs = {
  id: Scalars['Int']
}

export type Query_RootProposal_DepositArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>
}

export type Query_RootProposal_Deposit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>
}

export type Query_RootProposal_Staking_Pool_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>
}

export type Query_RootProposal_Staking_Pool_Snapshot_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>
}

export type Query_RootProposal_Staking_Pool_Snapshot_By_PkArgs = {
  proposal_id: Scalars['Int']
}

export type Query_RootProposal_Tally_ResultArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>
}

export type Query_RootProposal_Tally_Result_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>
}

export type Query_RootProposal_Tally_Result_By_PkArgs = {
  proposal_id: Scalars['Int']
}

export type Query_RootProposal_Validator_Status_SnapshotArgs = {
  distinct_on?: InputMaybe<
    Array<Proposal_Validator_Status_Snapshot_Select_Column>
  >
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>
}

export type Query_RootProposal_Validator_Status_Snapshot_AggregateArgs = {
  distinct_on?: InputMaybe<
    Array<Proposal_Validator_Status_Snapshot_Select_Column>
  >
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>
}

export type Query_RootProposal_Validator_Status_Snapshot_By_PkArgs = {
  id: Scalars['Int']
}

export type Query_RootProposal_VoteArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>
  where?: InputMaybe<Proposal_Vote_Bool_Exp>
}

export type Query_RootProposal_Vote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>
  where?: InputMaybe<Proposal_Vote_Bool_Exp>
}

export type Query_RootRedelegationArgs = {
  distinct_on?: InputMaybe<Array<Redelegation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Redelegation_Order_By>>
  where?: InputMaybe<Redelegation_Bool_Exp>
}

export type Query_RootRedelegation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Redelegation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Redelegation_Order_By>>
  where?: InputMaybe<Redelegation_Bool_Exp>
}

export type Query_RootSlashing_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Slashing_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Slashing_Params_Order_By>>
  where?: InputMaybe<Slashing_Params_Bool_Exp>
}

export type Query_RootSlashing_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Slashing_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Slashing_Params_Order_By>>
  where?: InputMaybe<Slashing_Params_Bool_Exp>
}

export type Query_RootSlashing_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean']
}

export type Query_RootStaking_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Staking_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Staking_Params_Order_By>>
  where?: InputMaybe<Staking_Params_Bool_Exp>
}

export type Query_RootStaking_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staking_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Staking_Params_Order_By>>
  where?: InputMaybe<Staking_Params_Bool_Exp>
}

export type Query_RootStaking_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean']
}

export type Query_RootStaking_PoolArgs = {
  distinct_on?: InputMaybe<Array<Staking_Pool_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Staking_Pool_Order_By>>
  where?: InputMaybe<Staking_Pool_Bool_Exp>
}

export type Query_RootStaking_Pool_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staking_Pool_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Staking_Pool_Order_By>>
  where?: InputMaybe<Staking_Pool_Bool_Exp>
}

export type Query_RootSupplyArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Supply_Order_By>>
  where?: InputMaybe<Supply_Bool_Exp>
}

export type Query_RootSupply_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Supply_Order_By>>
  where?: InputMaybe<Supply_Bool_Exp>
}

export type Query_RootTokenArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Token_Order_By>>
  where?: InputMaybe<Token_Bool_Exp>
}

export type Query_RootToken_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Token_Order_By>>
  where?: InputMaybe<Token_Bool_Exp>
}

export type Query_RootToken_PriceArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Token_Price_Order_By>>
  where?: InputMaybe<Token_Price_Bool_Exp>
}

export type Query_RootToken_Price_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Token_Price_Order_By>>
  where?: InputMaybe<Token_Price_Bool_Exp>
}

export type Query_RootToken_Price_By_PkArgs = {
  id: Scalars['Int']
}

export type Query_RootToken_Price_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>
  where?: InputMaybe<Token_Price_History_Bool_Exp>
}

export type Query_RootToken_Price_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>
  where?: InputMaybe<Token_Price_History_Bool_Exp>
}

export type Query_RootToken_UnitArgs = {
  distinct_on?: InputMaybe<Array<Token_Unit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Token_Unit_Order_By>>
  where?: InputMaybe<Token_Unit_Bool_Exp>
}

export type Query_RootToken_Unit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Unit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Token_Unit_Order_By>>
  where?: InputMaybe<Token_Unit_Bool_Exp>
}

export type Query_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Transaction_Order_By>>
  where?: InputMaybe<Transaction_Bool_Exp>
}

export type Query_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Transaction_Order_By>>
  where?: InputMaybe<Transaction_Bool_Exp>
}

export type Query_RootTransaction_By_PkArgs = {
  hash: Scalars['String']
}

export type Query_RootUnbonding_DelegationArgs = {
  distinct_on?: InputMaybe<Array<Unbonding_Delegation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Unbonding_Delegation_Order_By>>
  where?: InputMaybe<Unbonding_Delegation_Bool_Exp>
}

export type Query_RootUnbonding_Delegation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Unbonding_Delegation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Unbonding_Delegation_Order_By>>
  where?: InputMaybe<Unbonding_Delegation_Bool_Exp>
}

export type Query_RootValidatorArgs = {
  distinct_on?: InputMaybe<Array<Validator_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Order_By>>
  where?: InputMaybe<Validator_Bool_Exp>
}

export type Query_RootValidator_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Order_By>>
  where?: InputMaybe<Validator_Bool_Exp>
}

export type Query_RootValidator_By_PkArgs = {
  consensus_address: Scalars['String']
}

export type Query_RootValidator_CommissionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>
  where?: InputMaybe<Validator_Commission_Bool_Exp>
}

export type Query_RootValidator_Commission_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>
  where?: InputMaybe<Validator_Commission_Bool_Exp>
}

export type Query_RootValidator_Commission_AmountArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Amount_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Commission_Amount_Order_By>>
  where?: InputMaybe<Validator_Commission_Amount_Bool_Exp>
}

export type Query_RootValidator_Commission_Amount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Amount_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Commission_Amount_Order_By>>
  where?: InputMaybe<Validator_Commission_Amount_Bool_Exp>
}

export type Query_RootValidator_Commission_Amount_By_PkArgs = {
  validator_address: Scalars['String']
}

export type Query_RootValidator_Commission_By_PkArgs = {
  validator_address: Scalars['String']
}

export type Query_RootValidator_DescriptionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>
  where?: InputMaybe<Validator_Description_Bool_Exp>
}

export type Query_RootValidator_Description_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>
  where?: InputMaybe<Validator_Description_Bool_Exp>
}

export type Query_RootValidator_Description_By_PkArgs = {
  validator_address: Scalars['String']
}

export type Query_RootValidator_InfoArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>
  where?: InputMaybe<Validator_Info_Bool_Exp>
}

export type Query_RootValidator_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>
  where?: InputMaybe<Validator_Info_Bool_Exp>
}

export type Query_RootValidator_Info_By_PkArgs = {
  consensus_address: Scalars['String']
}

export type Query_RootValidator_Signing_InfoArgs = {
  distinct_on?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Signing_Info_Order_By>>
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>
}

export type Query_RootValidator_Signing_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Signing_Info_Order_By>>
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>
}

export type Query_RootValidator_Signing_Info_By_PkArgs = {
  validator_address: Scalars['String']
}

export type Query_RootValidator_StatusArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>
  where?: InputMaybe<Validator_Status_Bool_Exp>
}

export type Query_RootValidator_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>
  where?: InputMaybe<Validator_Status_Bool_Exp>
}

export type Query_RootValidator_Status_By_PkArgs = {
  validator_address: Scalars['String']
}

export type Query_RootValidator_Voting_PowerArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>
}

export type Query_RootValidator_Voting_Power_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>
}

export type Query_RootValidator_Voting_Power_By_PkArgs = {
  validator_address: Scalars['String']
}

export type Query_RootVesting_AccountArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Account_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Vesting_Account_Order_By>>
  where?: InputMaybe<Vesting_Account_Bool_Exp>
}

export type Query_RootVesting_Account_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Account_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Vesting_Account_Order_By>>
  where?: InputMaybe<Vesting_Account_Bool_Exp>
}

export type Query_RootVesting_Account_By_PkArgs = {
  id: Scalars['Int']
}

export type Query_RootVesting_PeriodArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Period_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Vesting_Period_Order_By>>
  where?: InputMaybe<Vesting_Period_Bool_Exp>
}

export type Query_RootVesting_Period_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Period_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Vesting_Period_Order_By>>
  where?: InputMaybe<Vesting_Period_Bool_Exp>
}

/** columns and relationships of "redelegation" */
export type Redelegation = {
  __typename?: 'redelegation'
  /** An object relationship */
  account: Account
  amount: Scalars['coin']
  completion_time: Scalars['timestamp']
  delegator_address: Scalars['String']
  dst_validator_address: Scalars['String']
  height: Scalars['bigint']
  src_validator_address: Scalars['String']
  /** An object relationship */
  validator: Validator
  /** An object relationship */
  validatorByDstValidatorAddress: Validator
}

/** aggregated selection of "redelegation" */
export type Redelegation_Aggregate = {
  __typename?: 'redelegation_aggregate'
  aggregate?: Maybe<Redelegation_Aggregate_Fields>
  nodes: Array<Redelegation>
}

/** aggregate fields of "redelegation" */
export type Redelegation_Aggregate_Fields = {
  __typename?: 'redelegation_aggregate_fields'
  avg?: Maybe<Redelegation_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Redelegation_Max_Fields>
  min?: Maybe<Redelegation_Min_Fields>
  stddev?: Maybe<Redelegation_Stddev_Fields>
  stddev_pop?: Maybe<Redelegation_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Redelegation_Stddev_Samp_Fields>
  sum?: Maybe<Redelegation_Sum_Fields>
  var_pop?: Maybe<Redelegation_Var_Pop_Fields>
  var_samp?: Maybe<Redelegation_Var_Samp_Fields>
  variance?: Maybe<Redelegation_Variance_Fields>
}

/** aggregate fields of "redelegation" */
export type Redelegation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Redelegation_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "redelegation" */
export type Redelegation_Aggregate_Order_By = {
  avg?: InputMaybe<Redelegation_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Redelegation_Max_Order_By>
  min?: InputMaybe<Redelegation_Min_Order_By>
  stddev?: InputMaybe<Redelegation_Stddev_Order_By>
  stddev_pop?: InputMaybe<Redelegation_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Redelegation_Stddev_Samp_Order_By>
  sum?: InputMaybe<Redelegation_Sum_Order_By>
  var_pop?: InputMaybe<Redelegation_Var_Pop_Order_By>
  var_samp?: InputMaybe<Redelegation_Var_Samp_Order_By>
  variance?: InputMaybe<Redelegation_Variance_Order_By>
}

/** aggregate avg on columns */
export type Redelegation_Avg_Fields = {
  __typename?: 'redelegation_avg_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "redelegation" */
export type Redelegation_Avg_Order_By = {
  height?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "redelegation". All fields are combined with a logical 'AND'. */
export type Redelegation_Bool_Exp = {
  _and?: InputMaybe<Array<Redelegation_Bool_Exp>>
  _not?: InputMaybe<Redelegation_Bool_Exp>
  _or?: InputMaybe<Array<Redelegation_Bool_Exp>>
  account?: InputMaybe<Account_Bool_Exp>
  amount?: InputMaybe<Coin_Comparison_Exp>
  completion_time?: InputMaybe<Timestamp_Comparison_Exp>
  delegator_address?: InputMaybe<String_Comparison_Exp>
  dst_validator_address?: InputMaybe<String_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  src_validator_address?: InputMaybe<String_Comparison_Exp>
  validator?: InputMaybe<Validator_Bool_Exp>
  validatorByDstValidatorAddress?: InputMaybe<Validator_Bool_Exp>
}

/** aggregate max on columns */
export type Redelegation_Max_Fields = {
  __typename?: 'redelegation_max_fields'
  completion_time?: Maybe<Scalars['timestamp']>
  delegator_address?: Maybe<Scalars['String']>
  dst_validator_address?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['bigint']>
  src_validator_address?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "redelegation" */
export type Redelegation_Max_Order_By = {
  completion_time?: InputMaybe<Order_By>
  delegator_address?: InputMaybe<Order_By>
  dst_validator_address?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  src_validator_address?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Redelegation_Min_Fields = {
  __typename?: 'redelegation_min_fields'
  completion_time?: Maybe<Scalars['timestamp']>
  delegator_address?: Maybe<Scalars['String']>
  dst_validator_address?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['bigint']>
  src_validator_address?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "redelegation" */
export type Redelegation_Min_Order_By = {
  completion_time?: InputMaybe<Order_By>
  delegator_address?: InputMaybe<Order_By>
  dst_validator_address?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  src_validator_address?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "redelegation". */
export type Redelegation_Order_By = {
  account?: InputMaybe<Account_Order_By>
  amount?: InputMaybe<Order_By>
  completion_time?: InputMaybe<Order_By>
  delegator_address?: InputMaybe<Order_By>
  dst_validator_address?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  src_validator_address?: InputMaybe<Order_By>
  validator?: InputMaybe<Validator_Order_By>
  validatorByDstValidatorAddress?: InputMaybe<Validator_Order_By>
}

/** select columns of table "redelegation" */
export enum Redelegation_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CompletionTime = 'completion_time',
  /** column name */
  DelegatorAddress = 'delegator_address',
  /** column name */
  DstValidatorAddress = 'dst_validator_address',
  /** column name */
  Height = 'height',
  /** column name */
  SrcValidatorAddress = 'src_validator_address'
}

/** aggregate stddev on columns */
export type Redelegation_Stddev_Fields = {
  __typename?: 'redelegation_stddev_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "redelegation" */
export type Redelegation_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Redelegation_Stddev_Pop_Fields = {
  __typename?: 'redelegation_stddev_pop_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "redelegation" */
export type Redelegation_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Redelegation_Stddev_Samp_Fields = {
  __typename?: 'redelegation_stddev_samp_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "redelegation" */
export type Redelegation_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Redelegation_Sum_Fields = {
  __typename?: 'redelegation_sum_fields'
  height?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "redelegation" */
export type Redelegation_Sum_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Redelegation_Var_Pop_Fields = {
  __typename?: 'redelegation_var_pop_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "redelegation" */
export type Redelegation_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Redelegation_Var_Samp_Fields = {
  __typename?: 'redelegation_var_samp_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "redelegation" */
export type Redelegation_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Redelegation_Variance_Fields = {
  __typename?: 'redelegation_variance_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "redelegation" */
export type Redelegation_Variance_Order_By = {
  height?: InputMaybe<Order_By>
}

/** columns and relationships of "slashing_params" */
export type Slashing_Params = {
  __typename?: 'slashing_params'
  height: Scalars['bigint']
  one_row_id: Scalars['Boolean']
  params: Scalars['jsonb']
}

/** columns and relationships of "slashing_params" */
export type Slashing_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "slashing_params" */
export type Slashing_Params_Aggregate = {
  __typename?: 'slashing_params_aggregate'
  aggregate?: Maybe<Slashing_Params_Aggregate_Fields>
  nodes: Array<Slashing_Params>
}

/** aggregate fields of "slashing_params" */
export type Slashing_Params_Aggregate_Fields = {
  __typename?: 'slashing_params_aggregate_fields'
  avg?: Maybe<Slashing_Params_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Slashing_Params_Max_Fields>
  min?: Maybe<Slashing_Params_Min_Fields>
  stddev?: Maybe<Slashing_Params_Stddev_Fields>
  stddev_pop?: Maybe<Slashing_Params_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Slashing_Params_Stddev_Samp_Fields>
  sum?: Maybe<Slashing_Params_Sum_Fields>
  var_pop?: Maybe<Slashing_Params_Var_Pop_Fields>
  var_samp?: Maybe<Slashing_Params_Var_Samp_Fields>
  variance?: Maybe<Slashing_Params_Variance_Fields>
}

/** aggregate fields of "slashing_params" */
export type Slashing_Params_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Slashing_Params_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Slashing_Params_Avg_Fields = {
  __typename?: 'slashing_params_avg_fields'
  height?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "slashing_params". All fields are combined with a logical 'AND'. */
export type Slashing_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Slashing_Params_Bool_Exp>>
  _not?: InputMaybe<Slashing_Params_Bool_Exp>
  _or?: InputMaybe<Array<Slashing_Params_Bool_Exp>>
  height?: InputMaybe<Bigint_Comparison_Exp>
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>
  params?: InputMaybe<Jsonb_Comparison_Exp>
}

/** aggregate max on columns */
export type Slashing_Params_Max_Fields = {
  __typename?: 'slashing_params_max_fields'
  height?: Maybe<Scalars['bigint']>
}

/** aggregate min on columns */
export type Slashing_Params_Min_Fields = {
  __typename?: 'slashing_params_min_fields'
  height?: Maybe<Scalars['bigint']>
}

/** Ordering options when selecting data from "slashing_params". */
export type Slashing_Params_Order_By = {
  height?: InputMaybe<Order_By>
  one_row_id?: InputMaybe<Order_By>
  params?: InputMaybe<Order_By>
}

/** select columns of table "slashing_params" */
export enum Slashing_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params'
}

/** aggregate stddev on columns */
export type Slashing_Params_Stddev_Fields = {
  __typename?: 'slashing_params_stddev_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Slashing_Params_Stddev_Pop_Fields = {
  __typename?: 'slashing_params_stddev_pop_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Slashing_Params_Stddev_Samp_Fields = {
  __typename?: 'slashing_params_stddev_samp_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Slashing_Params_Sum_Fields = {
  __typename?: 'slashing_params_sum_fields'
  height?: Maybe<Scalars['bigint']>
}

/** aggregate var_pop on columns */
export type Slashing_Params_Var_Pop_Fields = {
  __typename?: 'slashing_params_var_pop_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Slashing_Params_Var_Samp_Fields = {
  __typename?: 'slashing_params_var_samp_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Slashing_Params_Variance_Fields = {
  __typename?: 'slashing_params_variance_fields'
  height?: Maybe<Scalars['Float']>
}

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']>
  _gt?: InputMaybe<Scalars['smallint']>
  _gte?: InputMaybe<Scalars['smallint']>
  _in?: InputMaybe<Array<Scalars['smallint']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['smallint']>
  _lte?: InputMaybe<Scalars['smallint']>
  _neq?: InputMaybe<Scalars['smallint']>
  _nin?: InputMaybe<Array<Scalars['smallint']>>
}

/** columns and relationships of "staking_params" */
export type Staking_Params = {
  __typename?: 'staking_params'
  height: Scalars['bigint']
  one_row_id: Scalars['Boolean']
  params: Scalars['jsonb']
}

/** columns and relationships of "staking_params" */
export type Staking_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "staking_params" */
export type Staking_Params_Aggregate = {
  __typename?: 'staking_params_aggregate'
  aggregate?: Maybe<Staking_Params_Aggregate_Fields>
  nodes: Array<Staking_Params>
}

/** aggregate fields of "staking_params" */
export type Staking_Params_Aggregate_Fields = {
  __typename?: 'staking_params_aggregate_fields'
  avg?: Maybe<Staking_Params_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Staking_Params_Max_Fields>
  min?: Maybe<Staking_Params_Min_Fields>
  stddev?: Maybe<Staking_Params_Stddev_Fields>
  stddev_pop?: Maybe<Staking_Params_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Staking_Params_Stddev_Samp_Fields>
  sum?: Maybe<Staking_Params_Sum_Fields>
  var_pop?: Maybe<Staking_Params_Var_Pop_Fields>
  var_samp?: Maybe<Staking_Params_Var_Samp_Fields>
  variance?: Maybe<Staking_Params_Variance_Fields>
}

/** aggregate fields of "staking_params" */
export type Staking_Params_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Staking_Params_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Staking_Params_Avg_Fields = {
  __typename?: 'staking_params_avg_fields'
  height?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "staking_params". All fields are combined with a logical 'AND'. */
export type Staking_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Staking_Params_Bool_Exp>>
  _not?: InputMaybe<Staking_Params_Bool_Exp>
  _or?: InputMaybe<Array<Staking_Params_Bool_Exp>>
  height?: InputMaybe<Bigint_Comparison_Exp>
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>
  params?: InputMaybe<Jsonb_Comparison_Exp>
}

/** aggregate max on columns */
export type Staking_Params_Max_Fields = {
  __typename?: 'staking_params_max_fields'
  height?: Maybe<Scalars['bigint']>
}

/** aggregate min on columns */
export type Staking_Params_Min_Fields = {
  __typename?: 'staking_params_min_fields'
  height?: Maybe<Scalars['bigint']>
}

/** Ordering options when selecting data from "staking_params". */
export type Staking_Params_Order_By = {
  height?: InputMaybe<Order_By>
  one_row_id?: InputMaybe<Order_By>
  params?: InputMaybe<Order_By>
}

/** select columns of table "staking_params" */
export enum Staking_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params'
}

/** aggregate stddev on columns */
export type Staking_Params_Stddev_Fields = {
  __typename?: 'staking_params_stddev_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Staking_Params_Stddev_Pop_Fields = {
  __typename?: 'staking_params_stddev_pop_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Staking_Params_Stddev_Samp_Fields = {
  __typename?: 'staking_params_stddev_samp_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Staking_Params_Sum_Fields = {
  __typename?: 'staking_params_sum_fields'
  height?: Maybe<Scalars['bigint']>
}

/** aggregate var_pop on columns */
export type Staking_Params_Var_Pop_Fields = {
  __typename?: 'staking_params_var_pop_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Staking_Params_Var_Samp_Fields = {
  __typename?: 'staking_params_var_samp_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Staking_Params_Variance_Fields = {
  __typename?: 'staking_params_variance_fields'
  height?: Maybe<Scalars['Float']>
}

/** columns and relationships of "staking_pool" */
export type Staking_Pool = {
  __typename?: 'staking_pool'
  bonded_tokens: Scalars['numeric']
  height: Scalars['numeric']
  not_bonded_tokens: Scalars['numeric']
}

/** aggregated selection of "staking_pool" */
export type Staking_Pool_Aggregate = {
  __typename?: 'staking_pool_aggregate'
  aggregate?: Maybe<Staking_Pool_Aggregate_Fields>
  nodes: Array<Staking_Pool>
}

/** aggregate fields of "staking_pool" */
export type Staking_Pool_Aggregate_Fields = {
  __typename?: 'staking_pool_aggregate_fields'
  avg?: Maybe<Staking_Pool_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Staking_Pool_Max_Fields>
  min?: Maybe<Staking_Pool_Min_Fields>
  stddev?: Maybe<Staking_Pool_Stddev_Fields>
  stddev_pop?: Maybe<Staking_Pool_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Staking_Pool_Stddev_Samp_Fields>
  sum?: Maybe<Staking_Pool_Sum_Fields>
  var_pop?: Maybe<Staking_Pool_Var_Pop_Fields>
  var_samp?: Maybe<Staking_Pool_Var_Samp_Fields>
  variance?: Maybe<Staking_Pool_Variance_Fields>
}

/** aggregate fields of "staking_pool" */
export type Staking_Pool_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Staking_Pool_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Staking_Pool_Avg_Fields = {
  __typename?: 'staking_pool_avg_fields'
  bonded_tokens?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  not_bonded_tokens?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "staking_pool". All fields are combined with a logical 'AND'. */
export type Staking_Pool_Bool_Exp = {
  _and?: InputMaybe<Array<Staking_Pool_Bool_Exp>>
  _not?: InputMaybe<Staking_Pool_Bool_Exp>
  _or?: InputMaybe<Array<Staking_Pool_Bool_Exp>>
  bonded_tokens?: InputMaybe<Numeric_Comparison_Exp>
  height?: InputMaybe<Numeric_Comparison_Exp>
  not_bonded_tokens?: InputMaybe<Numeric_Comparison_Exp>
}

/** aggregate max on columns */
export type Staking_Pool_Max_Fields = {
  __typename?: 'staking_pool_max_fields'
  bonded_tokens?: Maybe<Scalars['numeric']>
  height?: Maybe<Scalars['numeric']>
  not_bonded_tokens?: Maybe<Scalars['numeric']>
}

/** aggregate min on columns */
export type Staking_Pool_Min_Fields = {
  __typename?: 'staking_pool_min_fields'
  bonded_tokens?: Maybe<Scalars['numeric']>
  height?: Maybe<Scalars['numeric']>
  not_bonded_tokens?: Maybe<Scalars['numeric']>
}

/** Ordering options when selecting data from "staking_pool". */
export type Staking_Pool_Order_By = {
  bonded_tokens?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  not_bonded_tokens?: InputMaybe<Order_By>
}

/** select columns of table "staking_pool" */
export enum Staking_Pool_Select_Column {
  /** column name */
  BondedTokens = 'bonded_tokens',
  /** column name */
  Height = 'height',
  /** column name */
  NotBondedTokens = 'not_bonded_tokens'
}

/** aggregate stddev on columns */
export type Staking_Pool_Stddev_Fields = {
  __typename?: 'staking_pool_stddev_fields'
  bonded_tokens?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  not_bonded_tokens?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Staking_Pool_Stddev_Pop_Fields = {
  __typename?: 'staking_pool_stddev_pop_fields'
  bonded_tokens?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  not_bonded_tokens?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Staking_Pool_Stddev_Samp_Fields = {
  __typename?: 'staking_pool_stddev_samp_fields'
  bonded_tokens?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  not_bonded_tokens?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Staking_Pool_Sum_Fields = {
  __typename?: 'staking_pool_sum_fields'
  bonded_tokens?: Maybe<Scalars['numeric']>
  height?: Maybe<Scalars['numeric']>
  not_bonded_tokens?: Maybe<Scalars['numeric']>
}

/** aggregate var_pop on columns */
export type Staking_Pool_Var_Pop_Fields = {
  __typename?: 'staking_pool_var_pop_fields'
  bonded_tokens?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  not_bonded_tokens?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Staking_Pool_Var_Samp_Fields = {
  __typename?: 'staking_pool_var_samp_fields'
  bonded_tokens?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  not_bonded_tokens?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Staking_Pool_Variance_Fields = {
  __typename?: 'staking_pool_variance_fields'
  bonded_tokens?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  not_bonded_tokens?: Maybe<Scalars['Float']>
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "account" */
  account: Array<Account>
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate
  /** fetch data from the table: "account_balance" */
  account_balance: Array<Account_Balance>
  /** fetch aggregated fields from the table: "account_balance" */
  account_balance_aggregate: Account_Balance_Aggregate
  /** fetch data from the table: "account_balance" using primary key columns */
  account_balance_by_pk?: Maybe<Account_Balance>
  /** fetch data from the table: "account_balance_history" */
  account_balance_history: Array<Account_Balance_History>
  /** fetch aggregated fields from the table: "account_balance_history" */
  account_balance_history_aggregate: Account_Balance_History_Aggregate
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>
  /** fetch data from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis: Array<Average_Block_Time_From_Genesis>
  /** fetch aggregated fields from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis_aggregate: Average_Block_Time_From_Genesis_Aggregate
  /** fetch data from the table: "average_block_time_per_day" */
  average_block_time_per_day: Array<Average_Block_Time_Per_Day>
  /** fetch aggregated fields from the table: "average_block_time_per_day" */
  average_block_time_per_day_aggregate: Average_Block_Time_Per_Day_Aggregate
  /** fetch data from the table: "average_block_time_per_hour" */
  average_block_time_per_hour: Array<Average_Block_Time_Per_Hour>
  /** fetch aggregated fields from the table: "average_block_time_per_hour" */
  average_block_time_per_hour_aggregate: Average_Block_Time_Per_Hour_Aggregate
  /** fetch data from the table: "average_block_time_per_minute" */
  average_block_time_per_minute: Array<Average_Block_Time_Per_Minute>
  /** fetch aggregated fields from the table: "average_block_time_per_minute" */
  average_block_time_per_minute_aggregate: Average_Block_Time_Per_Minute_Aggregate
  /** fetch data from the table: "block" */
  block: Array<Block>
  /** fetch aggregated fields from the table: "block" */
  block_aggregate: Block_Aggregate
  /** fetch data from the table: "block" using primary key columns */
  block_by_pk?: Maybe<Block>
  /** fetch data from the table: "community_pool" */
  community_pool: Array<Community_Pool>
  /** fetch aggregated fields from the table: "community_pool" */
  community_pool_aggregate: Community_Pool_Aggregate
  /** fetch data from the table: "delegation" */
  delegation: Array<Delegation>
  /** fetch aggregated fields from the table: "delegation" */
  delegation_aggregate: Delegation_Aggregate
  /** fetch data from the table: "delegation" using primary key columns */
  delegation_by_pk?: Maybe<Delegation>
  /** fetch data from the table: "delegation_reward" */
  delegation_reward: Array<Delegation_Reward>
  /** fetch aggregated fields from the table: "delegation_reward" */
  delegation_reward_aggregate: Delegation_Reward_Aggregate
  /** fetch data from the table: "distribution_params" */
  distribution_params: Array<Distribution_Params>
  /** fetch aggregated fields from the table: "distribution_params" */
  distribution_params_aggregate: Distribution_Params_Aggregate
  /** fetch data from the table: "distribution_params" using primary key columns */
  distribution_params_by_pk?: Maybe<Distribution_Params>
  /** fetch data from the table: "double_sign_evidence" */
  double_sign_evidence: Array<Double_Sign_Evidence>
  /** fetch aggregated fields from the table: "double_sign_evidence" */
  double_sign_evidence_aggregate: Double_Sign_Evidence_Aggregate
  /** fetch data from the table: "double_sign_vote" */
  double_sign_vote: Array<Double_Sign_Vote>
  /** fetch aggregated fields from the table: "double_sign_vote" */
  double_sign_vote_aggregate: Double_Sign_Vote_Aggregate
  /** fetch data from the table: "double_sign_vote" using primary key columns */
  double_sign_vote_by_pk?: Maybe<Double_Sign_Vote>
  /** fetch data from the table: "fee_grant_allowance" */
  fee_grant_allowance: Array<Fee_Grant_Allowance>
  /** fetch aggregated fields from the table: "fee_grant_allowance" */
  fee_grant_allowance_aggregate: Fee_Grant_Allowance_Aggregate
  /** fetch data from the table: "fee_grant_allowance" using primary key columns */
  fee_grant_allowance_by_pk?: Maybe<Fee_Grant_Allowance>
  /** fetch data from the table: "genesis" */
  genesis: Array<Genesis>
  /** fetch aggregated fields from the table: "genesis" */
  genesis_aggregate: Genesis_Aggregate
  /** fetch data from the table: "gov_params" */
  gov_params: Array<Gov_Params>
  /** fetch aggregated fields from the table: "gov_params" */
  gov_params_aggregate: Gov_Params_Aggregate
  /** fetch data from the table: "gov_params" using primary key columns */
  gov_params_by_pk?: Maybe<Gov_Params>
  /** fetch data from the table: "inflation" */
  inflation: Array<Inflation>
  /** fetch aggregated fields from the table: "inflation" */
  inflation_aggregate: Inflation_Aggregate
  /** fetch data from the table: "message" */
  message: Array<Message>
  /** fetch aggregated fields from the table: "message" */
  message_aggregate: Message_Aggregate
  /** execute function "messages_by_address" which returns "message" */
  messages_by_address: Array<Message>
  /** execute function "messages_by_address" and query aggregates on result of table type "message" */
  messages_by_address_aggregate: Message_Aggregate
  /** fetch data from the table: "mint_params" */
  mint_params: Array<Mint_Params>
  /** fetch aggregated fields from the table: "mint_params" */
  mint_params_aggregate: Mint_Params_Aggregate
  /** fetch data from the table: "mint_params" using primary key columns */
  mint_params_by_pk?: Maybe<Mint_Params>
  /** fetch data from the table: "modules" */
  modules: Array<Modules>
  /** fetch aggregated fields from the table: "modules" */
  modules_aggregate: Modules_Aggregate
  /** fetch data from the table: "modules" using primary key columns */
  modules_by_pk?: Maybe<Modules>
  /** fetch data from the table: "pre_commit" */
  pre_commit: Array<Pre_Commit>
  /** fetch aggregated fields from the table: "pre_commit" */
  pre_commit_aggregate: Pre_Commit_Aggregate
  /** fetch data from the table: "proposal" */
  proposal: Array<Proposal>
  /** fetch aggregated fields from the table: "proposal" */
  proposal_aggregate: Proposal_Aggregate
  /** fetch data from the table: "proposal" using primary key columns */
  proposal_by_pk?: Maybe<Proposal>
  /** fetch data from the table: "proposal_deposit" */
  proposal_deposit: Array<Proposal_Deposit>
  /** fetch aggregated fields from the table: "proposal_deposit" */
  proposal_deposit_aggregate: Proposal_Deposit_Aggregate
  /** fetch data from the table: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot: Array<Proposal_Staking_Pool_Snapshot>
  /** fetch aggregated fields from the table: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot_aggregate: Proposal_Staking_Pool_Snapshot_Aggregate
  /** fetch data from the table: "proposal_staking_pool_snapshot" using primary key columns */
  proposal_staking_pool_snapshot_by_pk?: Maybe<Proposal_Staking_Pool_Snapshot>
  /** fetch data from the table: "proposal_tally_result" */
  proposal_tally_result: Array<Proposal_Tally_Result>
  /** fetch aggregated fields from the table: "proposal_tally_result" */
  proposal_tally_result_aggregate: Proposal_Tally_Result_Aggregate
  /** fetch data from the table: "proposal_tally_result" using primary key columns */
  proposal_tally_result_by_pk?: Maybe<Proposal_Tally_Result>
  /** fetch data from the table: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot: Array<Proposal_Validator_Status_Snapshot>
  /** fetch aggregated fields from the table: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot_aggregate: Proposal_Validator_Status_Snapshot_Aggregate
  /** fetch data from the table: "proposal_validator_status_snapshot" using primary key columns */
  proposal_validator_status_snapshot_by_pk?: Maybe<Proposal_Validator_Status_Snapshot>
  /** fetch data from the table: "proposal_vote" */
  proposal_vote: Array<Proposal_Vote>
  /** fetch aggregated fields from the table: "proposal_vote" */
  proposal_vote_aggregate: Proposal_Vote_Aggregate
  /** fetch data from the table: "redelegation" */
  redelegation: Array<Redelegation>
  /** fetch aggregated fields from the table: "redelegation" */
  redelegation_aggregate: Redelegation_Aggregate
  /** fetch data from the table: "slashing_params" */
  slashing_params: Array<Slashing_Params>
  /** fetch aggregated fields from the table: "slashing_params" */
  slashing_params_aggregate: Slashing_Params_Aggregate
  /** fetch data from the table: "slashing_params" using primary key columns */
  slashing_params_by_pk?: Maybe<Slashing_Params>
  /** fetch data from the table: "staking_params" */
  staking_params: Array<Staking_Params>
  /** fetch aggregated fields from the table: "staking_params" */
  staking_params_aggregate: Staking_Params_Aggregate
  /** fetch data from the table: "staking_params" using primary key columns */
  staking_params_by_pk?: Maybe<Staking_Params>
  /** fetch data from the table: "staking_pool" */
  staking_pool: Array<Staking_Pool>
  /** fetch aggregated fields from the table: "staking_pool" */
  staking_pool_aggregate: Staking_Pool_Aggregate
  /** fetch data from the table: "supply" */
  supply: Array<Supply>
  /** fetch aggregated fields from the table: "supply" */
  supply_aggregate: Supply_Aggregate
  /** fetch data from the table: "token" */
  token: Array<Token>
  /** fetch aggregated fields from the table: "token" */
  token_aggregate: Token_Aggregate
  /** fetch data from the table: "token_price" */
  token_price: Array<Token_Price>
  /** fetch aggregated fields from the table: "token_price" */
  token_price_aggregate: Token_Price_Aggregate
  /** fetch data from the table: "token_price" using primary key columns */
  token_price_by_pk?: Maybe<Token_Price>
  /** fetch data from the table: "token_price_history" */
  token_price_history: Array<Token_Price_History>
  /** fetch aggregated fields from the table: "token_price_history" */
  token_price_history_aggregate: Token_Price_History_Aggregate
  /** fetch data from the table: "token_unit" */
  token_unit: Array<Token_Unit>
  /** fetch aggregated fields from the table: "token_unit" */
  token_unit_aggregate: Token_Unit_Aggregate
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate
  /** fetch data from the table: "transaction" using primary key columns */
  transaction_by_pk?: Maybe<Transaction>
  /** fetch data from the table: "unbonding_delegation" */
  unbonding_delegation: Array<Unbonding_Delegation>
  /** fetch aggregated fields from the table: "unbonding_delegation" */
  unbonding_delegation_aggregate: Unbonding_Delegation_Aggregate
  /** fetch data from the table: "validator" */
  validator: Array<Validator>
  /** fetch aggregated fields from the table: "validator" */
  validator_aggregate: Validator_Aggregate
  /** fetch data from the table: "validator" using primary key columns */
  validator_by_pk?: Maybe<Validator>
  /** fetch data from the table: "validator_commission" */
  validator_commission: Array<Validator_Commission>
  /** fetch aggregated fields from the table: "validator_commission" */
  validator_commission_aggregate: Validator_Commission_Aggregate
  /** fetch data from the table: "validator_commission_amount" */
  validator_commission_amount: Array<Validator_Commission_Amount>
  /** fetch aggregated fields from the table: "validator_commission_amount" */
  validator_commission_amount_aggregate: Validator_Commission_Amount_Aggregate
  /** fetch data from the table: "validator_commission_amount" using primary key columns */
  validator_commission_amount_by_pk?: Maybe<Validator_Commission_Amount>
  /** fetch data from the table: "validator_commission" using primary key columns */
  validator_commission_by_pk?: Maybe<Validator_Commission>
  /** fetch data from the table: "validator_description" */
  validator_description: Array<Validator_Description>
  /** fetch aggregated fields from the table: "validator_description" */
  validator_description_aggregate: Validator_Description_Aggregate
  /** fetch data from the table: "validator_description" using primary key columns */
  validator_description_by_pk?: Maybe<Validator_Description>
  /** fetch data from the table: "validator_info" */
  validator_info: Array<Validator_Info>
  /** fetch aggregated fields from the table: "validator_info" */
  validator_info_aggregate: Validator_Info_Aggregate
  /** fetch data from the table: "validator_info" using primary key columns */
  validator_info_by_pk?: Maybe<Validator_Info>
  /** fetch data from the table: "validator_signing_info" */
  validator_signing_info: Array<Validator_Signing_Info>
  /** fetch aggregated fields from the table: "validator_signing_info" */
  validator_signing_info_aggregate: Validator_Signing_Info_Aggregate
  /** fetch data from the table: "validator_signing_info" using primary key columns */
  validator_signing_info_by_pk?: Maybe<Validator_Signing_Info>
  /** fetch data from the table: "validator_status" */
  validator_status: Array<Validator_Status>
  /** fetch aggregated fields from the table: "validator_status" */
  validator_status_aggregate: Validator_Status_Aggregate
  /** fetch data from the table: "validator_status" using primary key columns */
  validator_status_by_pk?: Maybe<Validator_Status>
  /** fetch data from the table: "validator_voting_power" */
  validator_voting_power: Array<Validator_Voting_Power>
  /** fetch aggregated fields from the table: "validator_voting_power" */
  validator_voting_power_aggregate: Validator_Voting_Power_Aggregate
  /** fetch data from the table: "validator_voting_power" using primary key columns */
  validator_voting_power_by_pk?: Maybe<Validator_Voting_Power>
  /** fetch data from the table: "vesting_account" */
  vesting_account: Array<Vesting_Account>
  /** fetch aggregated fields from the table: "vesting_account" */
  vesting_account_aggregate: Vesting_Account_Aggregate
  /** fetch data from the table: "vesting_account" using primary key columns */
  vesting_account_by_pk?: Maybe<Vesting_Account>
  /** fetch data from the table: "vesting_period" */
  vesting_period: Array<Vesting_Period>
  /** fetch aggregated fields from the table: "vesting_period" */
  vesting_period_aggregate: Vesting_Period_Aggregate
}

export type Subscription_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Order_By>>
  where?: InputMaybe<Account_Bool_Exp>
}

export type Subscription_RootAccount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Order_By>>
  where?: InputMaybe<Account_Bool_Exp>
}

export type Subscription_RootAccount_BalanceArgs = {
  distinct_on?: InputMaybe<Array<Account_Balance_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Balance_Order_By>>
  where?: InputMaybe<Account_Balance_Bool_Exp>
}

export type Subscription_RootAccount_Balance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Balance_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Balance_Order_By>>
  where?: InputMaybe<Account_Balance_Bool_Exp>
}

export type Subscription_RootAccount_Balance_By_PkArgs = {
  address: Scalars['String']
}

export type Subscription_RootAccount_Balance_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Account_Balance_History_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Balance_History_Order_By>>
  where?: InputMaybe<Account_Balance_History_Bool_Exp>
}

export type Subscription_RootAccount_Balance_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Balance_History_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Balance_History_Order_By>>
  where?: InputMaybe<Account_Balance_History_Bool_Exp>
}

export type Subscription_RootAccount_By_PkArgs = {
  address: Scalars['String']
}

export type Subscription_RootAverage_Block_Time_From_GenesisArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_From_Genesis_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Average_Block_Time_From_Genesis_Order_By>>
  where?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>
}

export type Subscription_RootAverage_Block_Time_From_Genesis_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_From_Genesis_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Average_Block_Time_From_Genesis_Order_By>>
  where?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>
}

export type Subscription_RootAverage_Block_Time_Per_DayArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Day_Order_By>>
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>
}

export type Subscription_RootAverage_Block_Time_Per_Day_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Day_Order_By>>
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>
}

export type Subscription_RootAverage_Block_Time_Per_HourArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Hour_Order_By>>
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>
}

export type Subscription_RootAverage_Block_Time_Per_Hour_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Hour_Order_By>>
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>
}

export type Subscription_RootAverage_Block_Time_Per_MinuteArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Minute_Order_By>>
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>
}

export type Subscription_RootAverage_Block_Time_Per_Minute_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Minute_Order_By>>
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>
}

export type Subscription_RootBlockArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Block_Order_By>>
  where?: InputMaybe<Block_Bool_Exp>
}

export type Subscription_RootBlock_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Block_Order_By>>
  where?: InputMaybe<Block_Bool_Exp>
}

export type Subscription_RootBlock_By_PkArgs = {
  height: Scalars['bigint']
}

export type Subscription_RootCommunity_PoolArgs = {
  distinct_on?: InputMaybe<Array<Community_Pool_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Community_Pool_Order_By>>
  where?: InputMaybe<Community_Pool_Bool_Exp>
}

export type Subscription_RootCommunity_Pool_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Community_Pool_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Community_Pool_Order_By>>
  where?: InputMaybe<Community_Pool_Bool_Exp>
}

export type Subscription_RootDelegationArgs = {
  distinct_on?: InputMaybe<Array<Delegation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Delegation_Order_By>>
  where?: InputMaybe<Delegation_Bool_Exp>
}

export type Subscription_RootDelegation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delegation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Delegation_Order_By>>
  where?: InputMaybe<Delegation_Bool_Exp>
}

export type Subscription_RootDelegation_By_PkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootDelegation_RewardArgs = {
  distinct_on?: InputMaybe<Array<Delegation_Reward_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Delegation_Reward_Order_By>>
  where?: InputMaybe<Delegation_Reward_Bool_Exp>
}

export type Subscription_RootDelegation_Reward_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delegation_Reward_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Delegation_Reward_Order_By>>
  where?: InputMaybe<Delegation_Reward_Bool_Exp>
}

export type Subscription_RootDistribution_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Distribution_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Distribution_Params_Order_By>>
  where?: InputMaybe<Distribution_Params_Bool_Exp>
}

export type Subscription_RootDistribution_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Distribution_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Distribution_Params_Order_By>>
  where?: InputMaybe<Distribution_Params_Bool_Exp>
}

export type Subscription_RootDistribution_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean']
}

export type Subscription_RootDouble_Sign_EvidenceArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>
}

export type Subscription_RootDouble_Sign_Evidence_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>
}

export type Subscription_RootDouble_Sign_VoteArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Double_Sign_Vote_Order_By>>
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>
}

export type Subscription_RootDouble_Sign_Vote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Double_Sign_Vote_Order_By>>
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>
}

export type Subscription_RootDouble_Sign_Vote_By_PkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootFee_Grant_AllowanceArgs = {
  distinct_on?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Fee_Grant_Allowance_Order_By>>
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>
}

export type Subscription_RootFee_Grant_Allowance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Fee_Grant_Allowance_Order_By>>
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>
}

export type Subscription_RootFee_Grant_Allowance_By_PkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootGenesisArgs = {
  distinct_on?: InputMaybe<Array<Genesis_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Genesis_Order_By>>
  where?: InputMaybe<Genesis_Bool_Exp>
}

export type Subscription_RootGenesis_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Genesis_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Genesis_Order_By>>
  where?: InputMaybe<Genesis_Bool_Exp>
}

export type Subscription_RootGov_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>
  where?: InputMaybe<Gov_Params_Bool_Exp>
}

export type Subscription_RootGov_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>
  where?: InputMaybe<Gov_Params_Bool_Exp>
}

export type Subscription_RootGov_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean']
}

export type Subscription_RootInflationArgs = {
  distinct_on?: InputMaybe<Array<Inflation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Inflation_Order_By>>
  where?: InputMaybe<Inflation_Bool_Exp>
}

export type Subscription_RootInflation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Inflation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Inflation_Order_By>>
  where?: InputMaybe<Inflation_Bool_Exp>
}

export type Subscription_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Message_Order_By>>
  where?: InputMaybe<Message_Bool_Exp>
}

export type Subscription_RootMessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Message_Order_By>>
  where?: InputMaybe<Message_Bool_Exp>
}

export type Subscription_RootMessages_By_AddressArgs = {
  args: Messages_By_Address_Args
  distinct_on?: InputMaybe<Array<Message_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Message_Order_By>>
  where?: InputMaybe<Message_Bool_Exp>
}

export type Subscription_RootMessages_By_Address_AggregateArgs = {
  args: Messages_By_Address_Args
  distinct_on?: InputMaybe<Array<Message_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Message_Order_By>>
  where?: InputMaybe<Message_Bool_Exp>
}

export type Subscription_RootMint_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Mint_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Mint_Params_Order_By>>
  where?: InputMaybe<Mint_Params_Bool_Exp>
}

export type Subscription_RootMint_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mint_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Mint_Params_Order_By>>
  where?: InputMaybe<Mint_Params_Bool_Exp>
}

export type Subscription_RootMint_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean']
}

export type Subscription_RootModulesArgs = {
  distinct_on?: InputMaybe<Array<Modules_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Modules_Order_By>>
  where?: InputMaybe<Modules_Bool_Exp>
}

export type Subscription_RootModules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Modules_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Modules_Order_By>>
  where?: InputMaybe<Modules_Bool_Exp>
}

export type Subscription_RootModules_By_PkArgs = {
  module_name: Scalars['String']
}

export type Subscription_RootPre_CommitArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>
  where?: InputMaybe<Pre_Commit_Bool_Exp>
}

export type Subscription_RootPre_Commit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>
  where?: InputMaybe<Pre_Commit_Bool_Exp>
}

export type Subscription_RootProposalArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Order_By>>
  where?: InputMaybe<Proposal_Bool_Exp>
}

export type Subscription_RootProposal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Order_By>>
  where?: InputMaybe<Proposal_Bool_Exp>
}

export type Subscription_RootProposal_By_PkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootProposal_DepositArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>
}

export type Subscription_RootProposal_Deposit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>
}

export type Subscription_RootProposal_Staking_Pool_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>
}

export type Subscription_RootProposal_Staking_Pool_Snapshot_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>
}

export type Subscription_RootProposal_Staking_Pool_Snapshot_By_PkArgs = {
  proposal_id: Scalars['Int']
}

export type Subscription_RootProposal_Tally_ResultArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>
}

export type Subscription_RootProposal_Tally_Result_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>
}

export type Subscription_RootProposal_Tally_Result_By_PkArgs = {
  proposal_id: Scalars['Int']
}

export type Subscription_RootProposal_Validator_Status_SnapshotArgs = {
  distinct_on?: InputMaybe<
    Array<Proposal_Validator_Status_Snapshot_Select_Column>
  >
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>
}

export type Subscription_RootProposal_Validator_Status_Snapshot_AggregateArgs =
  {
    distinct_on?: InputMaybe<
      Array<Proposal_Validator_Status_Snapshot_Select_Column>
    >
    limit?: InputMaybe<Scalars['Int']>
    offset?: InputMaybe<Scalars['Int']>
    order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>
    where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>
  }

export type Subscription_RootProposal_Validator_Status_Snapshot_By_PkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootProposal_VoteArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>
  where?: InputMaybe<Proposal_Vote_Bool_Exp>
}

export type Subscription_RootProposal_Vote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>
  where?: InputMaybe<Proposal_Vote_Bool_Exp>
}

export type Subscription_RootRedelegationArgs = {
  distinct_on?: InputMaybe<Array<Redelegation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Redelegation_Order_By>>
  where?: InputMaybe<Redelegation_Bool_Exp>
}

export type Subscription_RootRedelegation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Redelegation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Redelegation_Order_By>>
  where?: InputMaybe<Redelegation_Bool_Exp>
}

export type Subscription_RootSlashing_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Slashing_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Slashing_Params_Order_By>>
  where?: InputMaybe<Slashing_Params_Bool_Exp>
}

export type Subscription_RootSlashing_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Slashing_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Slashing_Params_Order_By>>
  where?: InputMaybe<Slashing_Params_Bool_Exp>
}

export type Subscription_RootSlashing_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean']
}

export type Subscription_RootStaking_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Staking_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Staking_Params_Order_By>>
  where?: InputMaybe<Staking_Params_Bool_Exp>
}

export type Subscription_RootStaking_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staking_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Staking_Params_Order_By>>
  where?: InputMaybe<Staking_Params_Bool_Exp>
}

export type Subscription_RootStaking_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean']
}

export type Subscription_RootStaking_PoolArgs = {
  distinct_on?: InputMaybe<Array<Staking_Pool_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Staking_Pool_Order_By>>
  where?: InputMaybe<Staking_Pool_Bool_Exp>
}

export type Subscription_RootStaking_Pool_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staking_Pool_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Staking_Pool_Order_By>>
  where?: InputMaybe<Staking_Pool_Bool_Exp>
}

export type Subscription_RootSupplyArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Supply_Order_By>>
  where?: InputMaybe<Supply_Bool_Exp>
}

export type Subscription_RootSupply_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Supply_Order_By>>
  where?: InputMaybe<Supply_Bool_Exp>
}

export type Subscription_RootTokenArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Token_Order_By>>
  where?: InputMaybe<Token_Bool_Exp>
}

export type Subscription_RootToken_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Token_Order_By>>
  where?: InputMaybe<Token_Bool_Exp>
}

export type Subscription_RootToken_PriceArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Token_Price_Order_By>>
  where?: InputMaybe<Token_Price_Bool_Exp>
}

export type Subscription_RootToken_Price_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Token_Price_Order_By>>
  where?: InputMaybe<Token_Price_Bool_Exp>
}

export type Subscription_RootToken_Price_By_PkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootToken_Price_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>
  where?: InputMaybe<Token_Price_History_Bool_Exp>
}

export type Subscription_RootToken_Price_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>
  where?: InputMaybe<Token_Price_History_Bool_Exp>
}

export type Subscription_RootToken_UnitArgs = {
  distinct_on?: InputMaybe<Array<Token_Unit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Token_Unit_Order_By>>
  where?: InputMaybe<Token_Unit_Bool_Exp>
}

export type Subscription_RootToken_Unit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Unit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Token_Unit_Order_By>>
  where?: InputMaybe<Token_Unit_Bool_Exp>
}

export type Subscription_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Transaction_Order_By>>
  where?: InputMaybe<Transaction_Bool_Exp>
}

export type Subscription_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Transaction_Order_By>>
  where?: InputMaybe<Transaction_Bool_Exp>
}

export type Subscription_RootTransaction_By_PkArgs = {
  hash: Scalars['String']
}

export type Subscription_RootUnbonding_DelegationArgs = {
  distinct_on?: InputMaybe<Array<Unbonding_Delegation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Unbonding_Delegation_Order_By>>
  where?: InputMaybe<Unbonding_Delegation_Bool_Exp>
}

export type Subscription_RootUnbonding_Delegation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Unbonding_Delegation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Unbonding_Delegation_Order_By>>
  where?: InputMaybe<Unbonding_Delegation_Bool_Exp>
}

export type Subscription_RootValidatorArgs = {
  distinct_on?: InputMaybe<Array<Validator_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Order_By>>
  where?: InputMaybe<Validator_Bool_Exp>
}

export type Subscription_RootValidator_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Order_By>>
  where?: InputMaybe<Validator_Bool_Exp>
}

export type Subscription_RootValidator_By_PkArgs = {
  consensus_address: Scalars['String']
}

export type Subscription_RootValidator_CommissionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>
  where?: InputMaybe<Validator_Commission_Bool_Exp>
}

export type Subscription_RootValidator_Commission_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>
  where?: InputMaybe<Validator_Commission_Bool_Exp>
}

export type Subscription_RootValidator_Commission_AmountArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Amount_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Commission_Amount_Order_By>>
  where?: InputMaybe<Validator_Commission_Amount_Bool_Exp>
}

export type Subscription_RootValidator_Commission_Amount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Amount_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Commission_Amount_Order_By>>
  where?: InputMaybe<Validator_Commission_Amount_Bool_Exp>
}

export type Subscription_RootValidator_Commission_Amount_By_PkArgs = {
  validator_address: Scalars['String']
}

export type Subscription_RootValidator_Commission_By_PkArgs = {
  validator_address: Scalars['String']
}

export type Subscription_RootValidator_DescriptionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>
  where?: InputMaybe<Validator_Description_Bool_Exp>
}

export type Subscription_RootValidator_Description_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>
  where?: InputMaybe<Validator_Description_Bool_Exp>
}

export type Subscription_RootValidator_Description_By_PkArgs = {
  validator_address: Scalars['String']
}

export type Subscription_RootValidator_InfoArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>
  where?: InputMaybe<Validator_Info_Bool_Exp>
}

export type Subscription_RootValidator_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>
  where?: InputMaybe<Validator_Info_Bool_Exp>
}

export type Subscription_RootValidator_Info_By_PkArgs = {
  consensus_address: Scalars['String']
}

export type Subscription_RootValidator_Signing_InfoArgs = {
  distinct_on?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Signing_Info_Order_By>>
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>
}

export type Subscription_RootValidator_Signing_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Signing_Info_Order_By>>
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>
}

export type Subscription_RootValidator_Signing_Info_By_PkArgs = {
  validator_address: Scalars['String']
}

export type Subscription_RootValidator_StatusArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>
  where?: InputMaybe<Validator_Status_Bool_Exp>
}

export type Subscription_RootValidator_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>
  where?: InputMaybe<Validator_Status_Bool_Exp>
}

export type Subscription_RootValidator_Status_By_PkArgs = {
  validator_address: Scalars['String']
}

export type Subscription_RootValidator_Voting_PowerArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>
}

export type Subscription_RootValidator_Voting_Power_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>
}

export type Subscription_RootValidator_Voting_Power_By_PkArgs = {
  validator_address: Scalars['String']
}

export type Subscription_RootVesting_AccountArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Account_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Vesting_Account_Order_By>>
  where?: InputMaybe<Vesting_Account_Bool_Exp>
}

export type Subscription_RootVesting_Account_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Account_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Vesting_Account_Order_By>>
  where?: InputMaybe<Vesting_Account_Bool_Exp>
}

export type Subscription_RootVesting_Account_By_PkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootVesting_PeriodArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Period_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Vesting_Period_Order_By>>
  where?: InputMaybe<Vesting_Period_Bool_Exp>
}

export type Subscription_RootVesting_Period_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Period_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Vesting_Period_Order_By>>
  where?: InputMaybe<Vesting_Period_Bool_Exp>
}

/** columns and relationships of "supply" */
export type Supply = {
  __typename?: 'supply'
  coins: Scalars['_coin']
  height: Scalars['bigint']
}

/** aggregated selection of "supply" */
export type Supply_Aggregate = {
  __typename?: 'supply_aggregate'
  aggregate?: Maybe<Supply_Aggregate_Fields>
  nodes: Array<Supply>
}

/** aggregate fields of "supply" */
export type Supply_Aggregate_Fields = {
  __typename?: 'supply_aggregate_fields'
  avg?: Maybe<Supply_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Supply_Max_Fields>
  min?: Maybe<Supply_Min_Fields>
  stddev?: Maybe<Supply_Stddev_Fields>
  stddev_pop?: Maybe<Supply_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Supply_Stddev_Samp_Fields>
  sum?: Maybe<Supply_Sum_Fields>
  var_pop?: Maybe<Supply_Var_Pop_Fields>
  var_samp?: Maybe<Supply_Var_Samp_Fields>
  variance?: Maybe<Supply_Variance_Fields>
}

/** aggregate fields of "supply" */
export type Supply_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Supply_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Supply_Avg_Fields = {
  __typename?: 'supply_avg_fields'
  height?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "supply". All fields are combined with a logical 'AND'. */
export type Supply_Bool_Exp = {
  _and?: InputMaybe<Array<Supply_Bool_Exp>>
  _not?: InputMaybe<Supply_Bool_Exp>
  _or?: InputMaybe<Array<Supply_Bool_Exp>>
  coins?: InputMaybe<_Coin_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
}

/** aggregate max on columns */
export type Supply_Max_Fields = {
  __typename?: 'supply_max_fields'
  height?: Maybe<Scalars['bigint']>
}

/** aggregate min on columns */
export type Supply_Min_Fields = {
  __typename?: 'supply_min_fields'
  height?: Maybe<Scalars['bigint']>
}

/** Ordering options when selecting data from "supply". */
export type Supply_Order_By = {
  coins?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** select columns of table "supply" */
export enum Supply_Select_Column {
  /** column name */
  Coins = 'coins',
  /** column name */
  Height = 'height'
}

/** aggregate stddev on columns */
export type Supply_Stddev_Fields = {
  __typename?: 'supply_stddev_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Supply_Stddev_Pop_Fields = {
  __typename?: 'supply_stddev_pop_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Supply_Stddev_Samp_Fields = {
  __typename?: 'supply_stddev_samp_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Supply_Sum_Fields = {
  __typename?: 'supply_sum_fields'
  height?: Maybe<Scalars['bigint']>
}

/** aggregate var_pop on columns */
export type Supply_Var_Pop_Fields = {
  __typename?: 'supply_var_pop_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Supply_Var_Samp_Fields = {
  __typename?: 'supply_var_samp_fields'
  height?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Supply_Variance_Fields = {
  __typename?: 'supply_variance_fields'
  height?: Maybe<Scalars['Float']>
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>
  _gt?: InputMaybe<Scalars['timestamp']>
  _gte?: InputMaybe<Scalars['timestamp']>
  _in?: InputMaybe<Array<Scalars['timestamp']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['timestamp']>
  _lte?: InputMaybe<Scalars['timestamp']>
  _neq?: InputMaybe<Scalars['timestamp']>
  _nin?: InputMaybe<Array<Scalars['timestamp']>>
}

/** columns and relationships of "token" */
export type Token = {
  __typename?: 'token'
  name: Scalars['String']
  /** An array relationship */
  token_units: Array<Token_Unit>
  /** An aggregate relationship */
  token_units_aggregate: Token_Unit_Aggregate
}

/** columns and relationships of "token" */
export type TokenToken_UnitsArgs = {
  distinct_on?: InputMaybe<Array<Token_Unit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Token_Unit_Order_By>>
  where?: InputMaybe<Token_Unit_Bool_Exp>
}

/** columns and relationships of "token" */
export type TokenToken_Units_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Unit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Token_Unit_Order_By>>
  where?: InputMaybe<Token_Unit_Bool_Exp>
}

/** aggregated selection of "token" */
export type Token_Aggregate = {
  __typename?: 'token_aggregate'
  aggregate?: Maybe<Token_Aggregate_Fields>
  nodes: Array<Token>
}

/** aggregate fields of "token" */
export type Token_Aggregate_Fields = {
  __typename?: 'token_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Token_Max_Fields>
  min?: Maybe<Token_Min_Fields>
}

/** aggregate fields of "token" */
export type Token_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "token". All fields are combined with a logical 'AND'. */
export type Token_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Bool_Exp>>
  _not?: InputMaybe<Token_Bool_Exp>
  _or?: InputMaybe<Array<Token_Bool_Exp>>
  name?: InputMaybe<String_Comparison_Exp>
  token_units?: InputMaybe<Token_Unit_Bool_Exp>
}

/** aggregate max on columns */
export type Token_Max_Fields = {
  __typename?: 'token_max_fields'
  name?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Token_Min_Fields = {
  __typename?: 'token_min_fields'
  name?: Maybe<Scalars['String']>
}

/** Ordering options when selecting data from "token". */
export type Token_Order_By = {
  name?: InputMaybe<Order_By>
  token_units_aggregate?: InputMaybe<Token_Unit_Aggregate_Order_By>
}

/** columns and relationships of "token_price" */
export type Token_Price = {
  __typename?: 'token_price'
  id: Scalars['Int']
  market_cap: Scalars['bigint']
  price: Scalars['numeric']
  timestamp: Scalars['timestamp']
  /** An object relationship */
  token_unit: Token_Unit
  unit_name: Scalars['String']
}

/** aggregated selection of "token_price" */
export type Token_Price_Aggregate = {
  __typename?: 'token_price_aggregate'
  aggregate?: Maybe<Token_Price_Aggregate_Fields>
  nodes: Array<Token_Price>
}

/** aggregate fields of "token_price" */
export type Token_Price_Aggregate_Fields = {
  __typename?: 'token_price_aggregate_fields'
  avg?: Maybe<Token_Price_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Token_Price_Max_Fields>
  min?: Maybe<Token_Price_Min_Fields>
  stddev?: Maybe<Token_Price_Stddev_Fields>
  stddev_pop?: Maybe<Token_Price_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Token_Price_Stddev_Samp_Fields>
  sum?: Maybe<Token_Price_Sum_Fields>
  var_pop?: Maybe<Token_Price_Var_Pop_Fields>
  var_samp?: Maybe<Token_Price_Var_Samp_Fields>
  variance?: Maybe<Token_Price_Variance_Fields>
}

/** aggregate fields of "token_price" */
export type Token_Price_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Price_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "token_price" */
export type Token_Price_Aggregate_Order_By = {
  avg?: InputMaybe<Token_Price_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Token_Price_Max_Order_By>
  min?: InputMaybe<Token_Price_Min_Order_By>
  stddev?: InputMaybe<Token_Price_Stddev_Order_By>
  stddev_pop?: InputMaybe<Token_Price_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Token_Price_Stddev_Samp_Order_By>
  sum?: InputMaybe<Token_Price_Sum_Order_By>
  var_pop?: InputMaybe<Token_Price_Var_Pop_Order_By>
  var_samp?: InputMaybe<Token_Price_Var_Samp_Order_By>
  variance?: InputMaybe<Token_Price_Variance_Order_By>
}

/** aggregate avg on columns */
export type Token_Price_Avg_Fields = {
  __typename?: 'token_price_avg_fields'
  id?: Maybe<Scalars['Float']>
  market_cap?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "token_price" */
export type Token_Price_Avg_Order_By = {
  id?: InputMaybe<Order_By>
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "token_price". All fields are combined with a logical 'AND'. */
export type Token_Price_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Price_Bool_Exp>>
  _not?: InputMaybe<Token_Price_Bool_Exp>
  _or?: InputMaybe<Array<Token_Price_Bool_Exp>>
  id?: InputMaybe<Int_Comparison_Exp>
  market_cap?: InputMaybe<Bigint_Comparison_Exp>
  price?: InputMaybe<Numeric_Comparison_Exp>
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>
  token_unit?: InputMaybe<Token_Unit_Bool_Exp>
  unit_name?: InputMaybe<String_Comparison_Exp>
}

/** columns and relationships of "token_price_history" */
export type Token_Price_History = {
  __typename?: 'token_price_history'
  market_cap: Scalars['bigint']
  price: Scalars['numeric']
  timestamp: Scalars['timestamp']
  /** An object relationship */
  token_unit: Token_Unit
  unit_name: Scalars['String']
}

/** aggregated selection of "token_price_history" */
export type Token_Price_History_Aggregate = {
  __typename?: 'token_price_history_aggregate'
  aggregate?: Maybe<Token_Price_History_Aggregate_Fields>
  nodes: Array<Token_Price_History>
}

/** aggregate fields of "token_price_history" */
export type Token_Price_History_Aggregate_Fields = {
  __typename?: 'token_price_history_aggregate_fields'
  avg?: Maybe<Token_Price_History_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Token_Price_History_Max_Fields>
  min?: Maybe<Token_Price_History_Min_Fields>
  stddev?: Maybe<Token_Price_History_Stddev_Fields>
  stddev_pop?: Maybe<Token_Price_History_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Token_Price_History_Stddev_Samp_Fields>
  sum?: Maybe<Token_Price_History_Sum_Fields>
  var_pop?: Maybe<Token_Price_History_Var_Pop_Fields>
  var_samp?: Maybe<Token_Price_History_Var_Samp_Fields>
  variance?: Maybe<Token_Price_History_Variance_Fields>
}

/** aggregate fields of "token_price_history" */
export type Token_Price_History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Price_History_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "token_price_history" */
export type Token_Price_History_Aggregate_Order_By = {
  avg?: InputMaybe<Token_Price_History_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Token_Price_History_Max_Order_By>
  min?: InputMaybe<Token_Price_History_Min_Order_By>
  stddev?: InputMaybe<Token_Price_History_Stddev_Order_By>
  stddev_pop?: InputMaybe<Token_Price_History_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Token_Price_History_Stddev_Samp_Order_By>
  sum?: InputMaybe<Token_Price_History_Sum_Order_By>
  var_pop?: InputMaybe<Token_Price_History_Var_Pop_Order_By>
  var_samp?: InputMaybe<Token_Price_History_Var_Samp_Order_By>
  variance?: InputMaybe<Token_Price_History_Variance_Order_By>
}

/** aggregate avg on columns */
export type Token_Price_History_Avg_Fields = {
  __typename?: 'token_price_history_avg_fields'
  market_cap?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "token_price_history" */
export type Token_Price_History_Avg_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "token_price_history". All fields are combined with a logical 'AND'. */
export type Token_Price_History_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Price_History_Bool_Exp>>
  _not?: InputMaybe<Token_Price_History_Bool_Exp>
  _or?: InputMaybe<Array<Token_Price_History_Bool_Exp>>
  market_cap?: InputMaybe<Bigint_Comparison_Exp>
  price?: InputMaybe<Numeric_Comparison_Exp>
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>
  token_unit?: InputMaybe<Token_Unit_Bool_Exp>
  unit_name?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Token_Price_History_Max_Fields = {
  __typename?: 'token_price_history_max_fields'
  market_cap?: Maybe<Scalars['bigint']>
  price?: Maybe<Scalars['numeric']>
  timestamp?: Maybe<Scalars['timestamp']>
  unit_name?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "token_price_history" */
export type Token_Price_History_Max_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  unit_name?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Token_Price_History_Min_Fields = {
  __typename?: 'token_price_history_min_fields'
  market_cap?: Maybe<Scalars['bigint']>
  price?: Maybe<Scalars['numeric']>
  timestamp?: Maybe<Scalars['timestamp']>
  unit_name?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "token_price_history" */
export type Token_Price_History_Min_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  unit_name?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "token_price_history". */
export type Token_Price_History_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  token_unit?: InputMaybe<Token_Unit_Order_By>
  unit_name?: InputMaybe<Order_By>
}

/** select columns of table "token_price_history" */
export enum Token_Price_History_Select_Column {
  /** column name */
  MarketCap = 'market_cap',
  /** column name */
  Price = 'price',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UnitName = 'unit_name'
}

/** aggregate stddev on columns */
export type Token_Price_History_Stddev_Fields = {
  __typename?: 'token_price_history_stddev_fields'
  market_cap?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "token_price_history" */
export type Token_Price_History_Stddev_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Token_Price_History_Stddev_Pop_Fields = {
  __typename?: 'token_price_history_stddev_pop_fields'
  market_cap?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "token_price_history" */
export type Token_Price_History_Stddev_Pop_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Token_Price_History_Stddev_Samp_Fields = {
  __typename?: 'token_price_history_stddev_samp_fields'
  market_cap?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "token_price_history" */
export type Token_Price_History_Stddev_Samp_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Token_Price_History_Sum_Fields = {
  __typename?: 'token_price_history_sum_fields'
  market_cap?: Maybe<Scalars['bigint']>
  price?: Maybe<Scalars['numeric']>
}

/** order by sum() on columns of table "token_price_history" */
export type Token_Price_History_Sum_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Token_Price_History_Var_Pop_Fields = {
  __typename?: 'token_price_history_var_pop_fields'
  market_cap?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "token_price_history" */
export type Token_Price_History_Var_Pop_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Token_Price_History_Var_Samp_Fields = {
  __typename?: 'token_price_history_var_samp_fields'
  market_cap?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "token_price_history" */
export type Token_Price_History_Var_Samp_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Token_Price_History_Variance_Fields = {
  __typename?: 'token_price_history_variance_fields'
  market_cap?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "token_price_history" */
export type Token_Price_History_Variance_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** aggregate max on columns */
export type Token_Price_Max_Fields = {
  __typename?: 'token_price_max_fields'
  id?: Maybe<Scalars['Int']>
  market_cap?: Maybe<Scalars['bigint']>
  price?: Maybe<Scalars['numeric']>
  timestamp?: Maybe<Scalars['timestamp']>
  unit_name?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "token_price" */
export type Token_Price_Max_Order_By = {
  id?: InputMaybe<Order_By>
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  unit_name?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Token_Price_Min_Fields = {
  __typename?: 'token_price_min_fields'
  id?: Maybe<Scalars['Int']>
  market_cap?: Maybe<Scalars['bigint']>
  price?: Maybe<Scalars['numeric']>
  timestamp?: Maybe<Scalars['timestamp']>
  unit_name?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "token_price" */
export type Token_Price_Min_Order_By = {
  id?: InputMaybe<Order_By>
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  unit_name?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "token_price". */
export type Token_Price_Order_By = {
  id?: InputMaybe<Order_By>
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  token_unit?: InputMaybe<Token_Unit_Order_By>
  unit_name?: InputMaybe<Order_By>
}

/** select columns of table "token_price" */
export enum Token_Price_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MarketCap = 'market_cap',
  /** column name */
  Price = 'price',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UnitName = 'unit_name'
}

/** aggregate stddev on columns */
export type Token_Price_Stddev_Fields = {
  __typename?: 'token_price_stddev_fields'
  id?: Maybe<Scalars['Float']>
  market_cap?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "token_price" */
export type Token_Price_Stddev_Order_By = {
  id?: InputMaybe<Order_By>
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Token_Price_Stddev_Pop_Fields = {
  __typename?: 'token_price_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  market_cap?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "token_price" */
export type Token_Price_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Token_Price_Stddev_Samp_Fields = {
  __typename?: 'token_price_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  market_cap?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "token_price" */
export type Token_Price_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Token_Price_Sum_Fields = {
  __typename?: 'token_price_sum_fields'
  id?: Maybe<Scalars['Int']>
  market_cap?: Maybe<Scalars['bigint']>
  price?: Maybe<Scalars['numeric']>
}

/** order by sum() on columns of table "token_price" */
export type Token_Price_Sum_Order_By = {
  id?: InputMaybe<Order_By>
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Token_Price_Var_Pop_Fields = {
  __typename?: 'token_price_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  market_cap?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "token_price" */
export type Token_Price_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Token_Price_Var_Samp_Fields = {
  __typename?: 'token_price_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  market_cap?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "token_price" */
export type Token_Price_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Token_Price_Variance_Fields = {
  __typename?: 'token_price_variance_fields'
  id?: Maybe<Scalars['Float']>
  market_cap?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "token_price" */
export type Token_Price_Variance_Order_By = {
  id?: InputMaybe<Order_By>
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** select columns of table "token" */
export enum Token_Select_Column {
  /** column name */
  Name = 'name'
}

/** columns and relationships of "token_unit" */
export type Token_Unit = {
  __typename?: 'token_unit'
  aliases?: Maybe<Scalars['_text']>
  denom: Scalars['String']
  exponent: Scalars['Int']
  price_id?: Maybe<Scalars['String']>
  /** An object relationship */
  token: Token
  token_name: Scalars['String']
  /** An object relationship */
  token_price?: Maybe<Token_Price>
  /** An array relationship */
  token_price_histories: Array<Token_Price_History>
  /** An aggregate relationship */
  token_price_histories_aggregate: Token_Price_History_Aggregate
  /** An array relationship */
  token_prices: Array<Token_Price>
  /** An aggregate relationship */
  token_prices_aggregate: Token_Price_Aggregate
}

/** columns and relationships of "token_unit" */
export type Token_UnitToken_Price_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>
  where?: InputMaybe<Token_Price_History_Bool_Exp>
}

/** columns and relationships of "token_unit" */
export type Token_UnitToken_Price_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>
  where?: InputMaybe<Token_Price_History_Bool_Exp>
}

/** columns and relationships of "token_unit" */
export type Token_UnitToken_PricesArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Token_Price_Order_By>>
  where?: InputMaybe<Token_Price_Bool_Exp>
}

/** columns and relationships of "token_unit" */
export type Token_UnitToken_Prices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Token_Price_Order_By>>
  where?: InputMaybe<Token_Price_Bool_Exp>
}

/** aggregated selection of "token_unit" */
export type Token_Unit_Aggregate = {
  __typename?: 'token_unit_aggregate'
  aggregate?: Maybe<Token_Unit_Aggregate_Fields>
  nodes: Array<Token_Unit>
}

/** aggregate fields of "token_unit" */
export type Token_Unit_Aggregate_Fields = {
  __typename?: 'token_unit_aggregate_fields'
  avg?: Maybe<Token_Unit_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Token_Unit_Max_Fields>
  min?: Maybe<Token_Unit_Min_Fields>
  stddev?: Maybe<Token_Unit_Stddev_Fields>
  stddev_pop?: Maybe<Token_Unit_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Token_Unit_Stddev_Samp_Fields>
  sum?: Maybe<Token_Unit_Sum_Fields>
  var_pop?: Maybe<Token_Unit_Var_Pop_Fields>
  var_samp?: Maybe<Token_Unit_Var_Samp_Fields>
  variance?: Maybe<Token_Unit_Variance_Fields>
}

/** aggregate fields of "token_unit" */
export type Token_Unit_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Unit_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "token_unit" */
export type Token_Unit_Aggregate_Order_By = {
  avg?: InputMaybe<Token_Unit_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Token_Unit_Max_Order_By>
  min?: InputMaybe<Token_Unit_Min_Order_By>
  stddev?: InputMaybe<Token_Unit_Stddev_Order_By>
  stddev_pop?: InputMaybe<Token_Unit_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Token_Unit_Stddev_Samp_Order_By>
  sum?: InputMaybe<Token_Unit_Sum_Order_By>
  var_pop?: InputMaybe<Token_Unit_Var_Pop_Order_By>
  var_samp?: InputMaybe<Token_Unit_Var_Samp_Order_By>
  variance?: InputMaybe<Token_Unit_Variance_Order_By>
}

/** aggregate avg on columns */
export type Token_Unit_Avg_Fields = {
  __typename?: 'token_unit_avg_fields'
  exponent?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "token_unit" */
export type Token_Unit_Avg_Order_By = {
  exponent?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "token_unit". All fields are combined with a logical 'AND'. */
export type Token_Unit_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Unit_Bool_Exp>>
  _not?: InputMaybe<Token_Unit_Bool_Exp>
  _or?: InputMaybe<Array<Token_Unit_Bool_Exp>>
  aliases?: InputMaybe<_Text_Comparison_Exp>
  denom?: InputMaybe<String_Comparison_Exp>
  exponent?: InputMaybe<Int_Comparison_Exp>
  price_id?: InputMaybe<String_Comparison_Exp>
  token?: InputMaybe<Token_Bool_Exp>
  token_name?: InputMaybe<String_Comparison_Exp>
  token_price?: InputMaybe<Token_Price_Bool_Exp>
  token_price_histories?: InputMaybe<Token_Price_History_Bool_Exp>
  token_prices?: InputMaybe<Token_Price_Bool_Exp>
}

/** aggregate max on columns */
export type Token_Unit_Max_Fields = {
  __typename?: 'token_unit_max_fields'
  denom?: Maybe<Scalars['String']>
  exponent?: Maybe<Scalars['Int']>
  price_id?: Maybe<Scalars['String']>
  token_name?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "token_unit" */
export type Token_Unit_Max_Order_By = {
  denom?: InputMaybe<Order_By>
  exponent?: InputMaybe<Order_By>
  price_id?: InputMaybe<Order_By>
  token_name?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Token_Unit_Min_Fields = {
  __typename?: 'token_unit_min_fields'
  denom?: Maybe<Scalars['String']>
  exponent?: Maybe<Scalars['Int']>
  price_id?: Maybe<Scalars['String']>
  token_name?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "token_unit" */
export type Token_Unit_Min_Order_By = {
  denom?: InputMaybe<Order_By>
  exponent?: InputMaybe<Order_By>
  price_id?: InputMaybe<Order_By>
  token_name?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "token_unit". */
export type Token_Unit_Order_By = {
  aliases?: InputMaybe<Order_By>
  denom?: InputMaybe<Order_By>
  exponent?: InputMaybe<Order_By>
  price_id?: InputMaybe<Order_By>
  token?: InputMaybe<Token_Order_By>
  token_name?: InputMaybe<Order_By>
  token_price?: InputMaybe<Token_Price_Order_By>
  token_price_histories_aggregate?: InputMaybe<Token_Price_History_Aggregate_Order_By>
  token_prices_aggregate?: InputMaybe<Token_Price_Aggregate_Order_By>
}

/** select columns of table "token_unit" */
export enum Token_Unit_Select_Column {
  /** column name */
  Aliases = 'aliases',
  /** column name */
  Denom = 'denom',
  /** column name */
  Exponent = 'exponent',
  /** column name */
  PriceId = 'price_id',
  /** column name */
  TokenName = 'token_name'
}

/** aggregate stddev on columns */
export type Token_Unit_Stddev_Fields = {
  __typename?: 'token_unit_stddev_fields'
  exponent?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "token_unit" */
export type Token_Unit_Stddev_Order_By = {
  exponent?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Token_Unit_Stddev_Pop_Fields = {
  __typename?: 'token_unit_stddev_pop_fields'
  exponent?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "token_unit" */
export type Token_Unit_Stddev_Pop_Order_By = {
  exponent?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Token_Unit_Stddev_Samp_Fields = {
  __typename?: 'token_unit_stddev_samp_fields'
  exponent?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "token_unit" */
export type Token_Unit_Stddev_Samp_Order_By = {
  exponent?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Token_Unit_Sum_Fields = {
  __typename?: 'token_unit_sum_fields'
  exponent?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "token_unit" */
export type Token_Unit_Sum_Order_By = {
  exponent?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Token_Unit_Var_Pop_Fields = {
  __typename?: 'token_unit_var_pop_fields'
  exponent?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "token_unit" */
export type Token_Unit_Var_Pop_Order_By = {
  exponent?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Token_Unit_Var_Samp_Fields = {
  __typename?: 'token_unit_var_samp_fields'
  exponent?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "token_unit" */
export type Token_Unit_Var_Samp_Order_By = {
  exponent?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Token_Unit_Variance_Fields = {
  __typename?: 'token_unit_variance_fields'
  exponent?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "token_unit" */
export type Token_Unit_Variance_Order_By = {
  exponent?: InputMaybe<Order_By>
}

/** columns and relationships of "transaction" */
export type Transaction = {
  __typename?: 'transaction'
  /** An object relationship */
  block: Block
  fee: Scalars['jsonb']
  gas_used?: Maybe<Scalars['bigint']>
  gas_wanted?: Maybe<Scalars['bigint']>
  hash: Scalars['String']
  height: Scalars['bigint']
  logs?: Maybe<Scalars['json']>
  memo?: Maybe<Scalars['String']>
  messages: Scalars['jsonb']
  /** An array relationship */
  messagesByTransactionHash: Array<Message>
  /** An aggregate relationship */
  messagesByTransactionHash_aggregate: Message_Aggregate
  raw_log?: Maybe<Scalars['String']>
  signatures: Scalars['_text']
  signer_infos: Scalars['jsonb']
  success: Scalars['Boolean']
}

/** columns and relationships of "transaction" */
export type TransactionFeeArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "transaction" */
export type TransactionLogsArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "transaction" */
export type TransactionMessagesArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "transaction" */
export type TransactionMessagesByTransactionHashArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Message_Order_By>>
  where?: InputMaybe<Message_Bool_Exp>
}

/** columns and relationships of "transaction" */
export type TransactionMessagesByTransactionHash_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Message_Order_By>>
  where?: InputMaybe<Message_Bool_Exp>
}

/** columns and relationships of "transaction" */
export type TransactionSigner_InfosArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "transaction" */
export type Transaction_Aggregate = {
  __typename?: 'transaction_aggregate'
  aggregate?: Maybe<Transaction_Aggregate_Fields>
  nodes: Array<Transaction>
}

/** aggregate fields of "transaction" */
export type Transaction_Aggregate_Fields = {
  __typename?: 'transaction_aggregate_fields'
  avg?: Maybe<Transaction_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Transaction_Max_Fields>
  min?: Maybe<Transaction_Min_Fields>
  stddev?: Maybe<Transaction_Stddev_Fields>
  stddev_pop?: Maybe<Transaction_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Transaction_Stddev_Samp_Fields>
  sum?: Maybe<Transaction_Sum_Fields>
  var_pop?: Maybe<Transaction_Var_Pop_Fields>
  var_samp?: Maybe<Transaction_Var_Samp_Fields>
  variance?: Maybe<Transaction_Variance_Fields>
}

/** aggregate fields of "transaction" */
export type Transaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "transaction" */
export type Transaction_Aggregate_Order_By = {
  avg?: InputMaybe<Transaction_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Transaction_Max_Order_By>
  min?: InputMaybe<Transaction_Min_Order_By>
  stddev?: InputMaybe<Transaction_Stddev_Order_By>
  stddev_pop?: InputMaybe<Transaction_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Transaction_Stddev_Samp_Order_By>
  sum?: InputMaybe<Transaction_Sum_Order_By>
  var_pop?: InputMaybe<Transaction_Var_Pop_Order_By>
  var_samp?: InputMaybe<Transaction_Var_Samp_Order_By>
  variance?: InputMaybe<Transaction_Variance_Order_By>
}

/** aggregate avg on columns */
export type Transaction_Avg_Fields = {
  __typename?: 'transaction_avg_fields'
  gas_used?: Maybe<Scalars['Float']>
  gas_wanted?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "transaction" */
export type Transaction_Avg_Order_By = {
  gas_used?: InputMaybe<Order_By>
  gas_wanted?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "transaction". All fields are combined with a logical 'AND'. */
export type Transaction_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Bool_Exp>>
  _not?: InputMaybe<Transaction_Bool_Exp>
  _or?: InputMaybe<Array<Transaction_Bool_Exp>>
  block?: InputMaybe<Block_Bool_Exp>
  fee?: InputMaybe<Jsonb_Comparison_Exp>
  gas_used?: InputMaybe<Bigint_Comparison_Exp>
  gas_wanted?: InputMaybe<Bigint_Comparison_Exp>
  hash?: InputMaybe<String_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  logs?: InputMaybe<Json_Comparison_Exp>
  memo?: InputMaybe<String_Comparison_Exp>
  messages?: InputMaybe<Jsonb_Comparison_Exp>
  messagesByTransactionHash?: InputMaybe<Message_Bool_Exp>
  raw_log?: InputMaybe<String_Comparison_Exp>
  signatures?: InputMaybe<_Text_Comparison_Exp>
  signer_infos?: InputMaybe<Jsonb_Comparison_Exp>
  success?: InputMaybe<Boolean_Comparison_Exp>
}

/** aggregate max on columns */
export type Transaction_Max_Fields = {
  __typename?: 'transaction_max_fields'
  gas_used?: Maybe<Scalars['bigint']>
  gas_wanted?: Maybe<Scalars['bigint']>
  hash?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['bigint']>
  memo?: Maybe<Scalars['String']>
  raw_log?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "transaction" */
export type Transaction_Max_Order_By = {
  gas_used?: InputMaybe<Order_By>
  gas_wanted?: InputMaybe<Order_By>
  hash?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  memo?: InputMaybe<Order_By>
  raw_log?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Transaction_Min_Fields = {
  __typename?: 'transaction_min_fields'
  gas_used?: Maybe<Scalars['bigint']>
  gas_wanted?: Maybe<Scalars['bigint']>
  hash?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['bigint']>
  memo?: Maybe<Scalars['String']>
  raw_log?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "transaction" */
export type Transaction_Min_Order_By = {
  gas_used?: InputMaybe<Order_By>
  gas_wanted?: InputMaybe<Order_By>
  hash?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  memo?: InputMaybe<Order_By>
  raw_log?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "transaction". */
export type Transaction_Order_By = {
  block?: InputMaybe<Block_Order_By>
  fee?: InputMaybe<Order_By>
  gas_used?: InputMaybe<Order_By>
  gas_wanted?: InputMaybe<Order_By>
  hash?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  logs?: InputMaybe<Order_By>
  memo?: InputMaybe<Order_By>
  messages?: InputMaybe<Order_By>
  messagesByTransactionHash_aggregate?: InputMaybe<Message_Aggregate_Order_By>
  raw_log?: InputMaybe<Order_By>
  signatures?: InputMaybe<Order_By>
  signer_infos?: InputMaybe<Order_By>
  success?: InputMaybe<Order_By>
}

/** select columns of table "transaction" */
export enum Transaction_Select_Column {
  /** column name */
  Fee = 'fee',
  /** column name */
  GasUsed = 'gas_used',
  /** column name */
  GasWanted = 'gas_wanted',
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  Logs = 'logs',
  /** column name */
  Memo = 'memo',
  /** column name */
  Messages = 'messages',
  /** column name */
  RawLog = 'raw_log',
  /** column name */
  Signatures = 'signatures',
  /** column name */
  SignerInfos = 'signer_infos',
  /** column name */
  Success = 'success'
}

/** aggregate stddev on columns */
export type Transaction_Stddev_Fields = {
  __typename?: 'transaction_stddev_fields'
  gas_used?: Maybe<Scalars['Float']>
  gas_wanted?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "transaction" */
export type Transaction_Stddev_Order_By = {
  gas_used?: InputMaybe<Order_By>
  gas_wanted?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Transaction_Stddev_Pop_Fields = {
  __typename?: 'transaction_stddev_pop_fields'
  gas_used?: Maybe<Scalars['Float']>
  gas_wanted?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "transaction" */
export type Transaction_Stddev_Pop_Order_By = {
  gas_used?: InputMaybe<Order_By>
  gas_wanted?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Transaction_Stddev_Samp_Fields = {
  __typename?: 'transaction_stddev_samp_fields'
  gas_used?: Maybe<Scalars['Float']>
  gas_wanted?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "transaction" */
export type Transaction_Stddev_Samp_Order_By = {
  gas_used?: InputMaybe<Order_By>
  gas_wanted?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Transaction_Sum_Fields = {
  __typename?: 'transaction_sum_fields'
  gas_used?: Maybe<Scalars['bigint']>
  gas_wanted?: Maybe<Scalars['bigint']>
  height?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "transaction" */
export type Transaction_Sum_Order_By = {
  gas_used?: InputMaybe<Order_By>
  gas_wanted?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Transaction_Var_Pop_Fields = {
  __typename?: 'transaction_var_pop_fields'
  gas_used?: Maybe<Scalars['Float']>
  gas_wanted?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "transaction" */
export type Transaction_Var_Pop_Order_By = {
  gas_used?: InputMaybe<Order_By>
  gas_wanted?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Transaction_Var_Samp_Fields = {
  __typename?: 'transaction_var_samp_fields'
  gas_used?: Maybe<Scalars['Float']>
  gas_wanted?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "transaction" */
export type Transaction_Var_Samp_Order_By = {
  gas_used?: InputMaybe<Order_By>
  gas_wanted?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Transaction_Variance_Fields = {
  __typename?: 'transaction_variance_fields'
  gas_used?: Maybe<Scalars['Float']>
  gas_wanted?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "transaction" */
export type Transaction_Variance_Order_By = {
  gas_used?: InputMaybe<Order_By>
  gas_wanted?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** columns and relationships of "unbonding_delegation" */
export type Unbonding_Delegation = {
  __typename?: 'unbonding_delegation'
  /** An object relationship */
  account: Account
  amount: Scalars['coin']
  completion_timestamp: Scalars['timestamp']
  delegator_address: Scalars['String']
  height: Scalars['bigint']
  /** An object relationship */
  validator: Validator
  validator_address: Scalars['String']
}

/** aggregated selection of "unbonding_delegation" */
export type Unbonding_Delegation_Aggregate = {
  __typename?: 'unbonding_delegation_aggregate'
  aggregate?: Maybe<Unbonding_Delegation_Aggregate_Fields>
  nodes: Array<Unbonding_Delegation>
}

/** aggregate fields of "unbonding_delegation" */
export type Unbonding_Delegation_Aggregate_Fields = {
  __typename?: 'unbonding_delegation_aggregate_fields'
  avg?: Maybe<Unbonding_Delegation_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Unbonding_Delegation_Max_Fields>
  min?: Maybe<Unbonding_Delegation_Min_Fields>
  stddev?: Maybe<Unbonding_Delegation_Stddev_Fields>
  stddev_pop?: Maybe<Unbonding_Delegation_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Unbonding_Delegation_Stddev_Samp_Fields>
  sum?: Maybe<Unbonding_Delegation_Sum_Fields>
  var_pop?: Maybe<Unbonding_Delegation_Var_Pop_Fields>
  var_samp?: Maybe<Unbonding_Delegation_Var_Samp_Fields>
  variance?: Maybe<Unbonding_Delegation_Variance_Fields>
}

/** aggregate fields of "unbonding_delegation" */
export type Unbonding_Delegation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Unbonding_Delegation_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "unbonding_delegation" */
export type Unbonding_Delegation_Aggregate_Order_By = {
  avg?: InputMaybe<Unbonding_Delegation_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Unbonding_Delegation_Max_Order_By>
  min?: InputMaybe<Unbonding_Delegation_Min_Order_By>
  stddev?: InputMaybe<Unbonding_Delegation_Stddev_Order_By>
  stddev_pop?: InputMaybe<Unbonding_Delegation_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Unbonding_Delegation_Stddev_Samp_Order_By>
  sum?: InputMaybe<Unbonding_Delegation_Sum_Order_By>
  var_pop?: InputMaybe<Unbonding_Delegation_Var_Pop_Order_By>
  var_samp?: InputMaybe<Unbonding_Delegation_Var_Samp_Order_By>
  variance?: InputMaybe<Unbonding_Delegation_Variance_Order_By>
}

/** aggregate avg on columns */
export type Unbonding_Delegation_Avg_Fields = {
  __typename?: 'unbonding_delegation_avg_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "unbonding_delegation" */
export type Unbonding_Delegation_Avg_Order_By = {
  height?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "unbonding_delegation". All fields are combined with a logical 'AND'. */
export type Unbonding_Delegation_Bool_Exp = {
  _and?: InputMaybe<Array<Unbonding_Delegation_Bool_Exp>>
  _not?: InputMaybe<Unbonding_Delegation_Bool_Exp>
  _or?: InputMaybe<Array<Unbonding_Delegation_Bool_Exp>>
  account?: InputMaybe<Account_Bool_Exp>
  amount?: InputMaybe<Coin_Comparison_Exp>
  completion_timestamp?: InputMaybe<Timestamp_Comparison_Exp>
  delegator_address?: InputMaybe<String_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  validator?: InputMaybe<Validator_Bool_Exp>
  validator_address?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Unbonding_Delegation_Max_Fields = {
  __typename?: 'unbonding_delegation_max_fields'
  completion_timestamp?: Maybe<Scalars['timestamp']>
  delegator_address?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['bigint']>
  validator_address?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "unbonding_delegation" */
export type Unbonding_Delegation_Max_Order_By = {
  completion_timestamp?: InputMaybe<Order_By>
  delegator_address?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Unbonding_Delegation_Min_Fields = {
  __typename?: 'unbonding_delegation_min_fields'
  completion_timestamp?: Maybe<Scalars['timestamp']>
  delegator_address?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['bigint']>
  validator_address?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "unbonding_delegation" */
export type Unbonding_Delegation_Min_Order_By = {
  completion_timestamp?: InputMaybe<Order_By>
  delegator_address?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "unbonding_delegation". */
export type Unbonding_Delegation_Order_By = {
  account?: InputMaybe<Account_Order_By>
  amount?: InputMaybe<Order_By>
  completion_timestamp?: InputMaybe<Order_By>
  delegator_address?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  validator?: InputMaybe<Validator_Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** select columns of table "unbonding_delegation" */
export enum Unbonding_Delegation_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CompletionTimestamp = 'completion_timestamp',
  /** column name */
  DelegatorAddress = 'delegator_address',
  /** column name */
  Height = 'height',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** aggregate stddev on columns */
export type Unbonding_Delegation_Stddev_Fields = {
  __typename?: 'unbonding_delegation_stddev_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "unbonding_delegation" */
export type Unbonding_Delegation_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Unbonding_Delegation_Stddev_Pop_Fields = {
  __typename?: 'unbonding_delegation_stddev_pop_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "unbonding_delegation" */
export type Unbonding_Delegation_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Unbonding_Delegation_Stddev_Samp_Fields = {
  __typename?: 'unbonding_delegation_stddev_samp_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "unbonding_delegation" */
export type Unbonding_Delegation_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Unbonding_Delegation_Sum_Fields = {
  __typename?: 'unbonding_delegation_sum_fields'
  height?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "unbonding_delegation" */
export type Unbonding_Delegation_Sum_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Unbonding_Delegation_Var_Pop_Fields = {
  __typename?: 'unbonding_delegation_var_pop_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "unbonding_delegation" */
export type Unbonding_Delegation_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Unbonding_Delegation_Var_Samp_Fields = {
  __typename?: 'unbonding_delegation_var_samp_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "unbonding_delegation" */
export type Unbonding_Delegation_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Unbonding_Delegation_Variance_Fields = {
  __typename?: 'unbonding_delegation_variance_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "unbonding_delegation" */
export type Unbonding_Delegation_Variance_Order_By = {
  height?: InputMaybe<Order_By>
}

/** columns and relationships of "validator" */
export type Validator = {
  __typename?: 'validator'
  /** An array relationship */
  blocks: Array<Block>
  /** An aggregate relationship */
  blocks_aggregate: Block_Aggregate
  consensus_address: Scalars['String']
  consensus_pubkey: Scalars['String']
  /** An array relationship */
  delegation_rewards: Array<Delegation_Reward>
  /** An aggregate relationship */
  delegation_rewards_aggregate: Delegation_Reward_Aggregate
  /** An array relationship */
  delegations: Array<Delegation>
  /** An aggregate relationship */
  delegations_aggregate: Delegation_Aggregate
  /** An array relationship */
  double_sign_votes: Array<Double_Sign_Vote>
  /** An aggregate relationship */
  double_sign_votes_aggregate: Double_Sign_Vote_Aggregate
  /** An array relationship */
  pre_commits: Array<Pre_Commit>
  /** An aggregate relationship */
  pre_commits_aggregate: Pre_Commit_Aggregate
  /** An array relationship */
  redelegationsByDstValidatorAddress: Array<Redelegation>
  /** An aggregate relationship */
  redelegationsByDstValidatorAddress_aggregate: Redelegation_Aggregate
  /** An array relationship */
  redelegationsBySrcValidatorAddress: Array<Redelegation>
  /** An aggregate relationship */
  redelegationsBySrcValidatorAddress_aggregate: Redelegation_Aggregate
  /** A computed field, executes function "self_delegations" */
  self_delegations?: Maybe<Array<Delegation>>
  /** An array relationship */
  unbonding_delegations: Array<Unbonding_Delegation>
  /** An aggregate relationship */
  unbonding_delegations_aggregate: Unbonding_Delegation_Aggregate
  /** An array relationship */
  validator_commission_amounts: Array<Validator_Commission_Amount>
  /** An aggregate relationship */
  validator_commission_amounts_aggregate: Validator_Commission_Amount_Aggregate
  /** An array relationship */
  validator_commissions: Array<Validator_Commission>
  /** An aggregate relationship */
  validator_commissions_aggregate: Validator_Commission_Aggregate
  /** An array relationship */
  validator_descriptions: Array<Validator_Description>
  /** An aggregate relationship */
  validator_descriptions_aggregate: Validator_Description_Aggregate
  /** An object relationship */
  validator_info?: Maybe<Validator_Info>
  /** An array relationship */
  validator_infos: Array<Validator_Info>
  /** An aggregate relationship */
  validator_infos_aggregate: Validator_Info_Aggregate
  /** An array relationship */
  validator_signing_infos: Array<Validator_Signing_Info>
  /** An aggregate relationship */
  validator_signing_infos_aggregate: Validator_Signing_Info_Aggregate
  /** An array relationship */
  validator_statuses: Array<Validator_Status>
  /** An aggregate relationship */
  validator_statuses_aggregate: Validator_Status_Aggregate
  /** An array relationship */
  validator_voting_powers: Array<Validator_Voting_Power>
  /** An aggregate relationship */
  validator_voting_powers_aggregate: Validator_Voting_Power_Aggregate
}

/** columns and relationships of "validator" */
export type ValidatorBlocksArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Block_Order_By>>
  where?: InputMaybe<Block_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorBlocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Block_Order_By>>
  where?: InputMaybe<Block_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorDelegation_RewardsArgs = {
  distinct_on?: InputMaybe<Array<Delegation_Reward_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Delegation_Reward_Order_By>>
  where?: InputMaybe<Delegation_Reward_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorDelegation_Rewards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delegation_Reward_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Delegation_Reward_Order_By>>
  where?: InputMaybe<Delegation_Reward_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorDelegationsArgs = {
  distinct_on?: InputMaybe<Array<Delegation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Delegation_Order_By>>
  where?: InputMaybe<Delegation_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorDelegations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delegation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Delegation_Order_By>>
  where?: InputMaybe<Delegation_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorDouble_Sign_VotesArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Double_Sign_Vote_Order_By>>
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorDouble_Sign_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Double_Sign_Vote_Order_By>>
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorPre_CommitsArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>
  where?: InputMaybe<Pre_Commit_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorPre_Commits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>
  where?: InputMaybe<Pre_Commit_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorRedelegationsByDstValidatorAddressArgs = {
  distinct_on?: InputMaybe<Array<Redelegation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Redelegation_Order_By>>
  where?: InputMaybe<Redelegation_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorRedelegationsByDstValidatorAddress_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Redelegation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Redelegation_Order_By>>
  where?: InputMaybe<Redelegation_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorRedelegationsBySrcValidatorAddressArgs = {
  distinct_on?: InputMaybe<Array<Redelegation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Redelegation_Order_By>>
  where?: InputMaybe<Redelegation_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorRedelegationsBySrcValidatorAddress_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Redelegation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Redelegation_Order_By>>
  where?: InputMaybe<Redelegation_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorSelf_DelegationsArgs = {
  distinct_on?: InputMaybe<Array<Delegation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Delegation_Order_By>>
  where?: InputMaybe<Delegation_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorUnbonding_DelegationsArgs = {
  distinct_on?: InputMaybe<Array<Unbonding_Delegation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Unbonding_Delegation_Order_By>>
  where?: InputMaybe<Unbonding_Delegation_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorUnbonding_Delegations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Unbonding_Delegation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Unbonding_Delegation_Order_By>>
  where?: InputMaybe<Unbonding_Delegation_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorValidator_Commission_AmountsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Amount_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Commission_Amount_Order_By>>
  where?: InputMaybe<Validator_Commission_Amount_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorValidator_Commission_Amounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Amount_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Commission_Amount_Order_By>>
  where?: InputMaybe<Validator_Commission_Amount_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorValidator_CommissionsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>
  where?: InputMaybe<Validator_Commission_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorValidator_Commissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>
  where?: InputMaybe<Validator_Commission_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorValidator_DescriptionsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>
  where?: InputMaybe<Validator_Description_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorValidator_Descriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>
  where?: InputMaybe<Validator_Description_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorValidator_InfosArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>
  where?: InputMaybe<Validator_Info_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorValidator_Infos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>
  where?: InputMaybe<Validator_Info_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorValidator_Signing_InfosArgs = {
  distinct_on?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Signing_Info_Order_By>>
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorValidator_Signing_Infos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Signing_Info_Order_By>>
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorValidator_StatusesArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>
  where?: InputMaybe<Validator_Status_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorValidator_Statuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>
  where?: InputMaybe<Validator_Status_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorValidator_Voting_PowersArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorValidator_Voting_Powers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>
}

/** aggregated selection of "validator" */
export type Validator_Aggregate = {
  __typename?: 'validator_aggregate'
  aggregate?: Maybe<Validator_Aggregate_Fields>
  nodes: Array<Validator>
}

/** aggregate fields of "validator" */
export type Validator_Aggregate_Fields = {
  __typename?: 'validator_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Validator_Max_Fields>
  min?: Maybe<Validator_Min_Fields>
}

/** aggregate fields of "validator" */
export type Validator_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "validator". All fields are combined with a logical 'AND'. */
export type Validator_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Bool_Exp>>
  _not?: InputMaybe<Validator_Bool_Exp>
  _or?: InputMaybe<Array<Validator_Bool_Exp>>
  blocks?: InputMaybe<Block_Bool_Exp>
  consensus_address?: InputMaybe<String_Comparison_Exp>
  consensus_pubkey?: InputMaybe<String_Comparison_Exp>
  delegation_rewards?: InputMaybe<Delegation_Reward_Bool_Exp>
  delegations?: InputMaybe<Delegation_Bool_Exp>
  double_sign_votes?: InputMaybe<Double_Sign_Vote_Bool_Exp>
  pre_commits?: InputMaybe<Pre_Commit_Bool_Exp>
  redelegationsByDstValidatorAddress?: InputMaybe<Redelegation_Bool_Exp>
  redelegationsBySrcValidatorAddress?: InputMaybe<Redelegation_Bool_Exp>
  self_delegations?: InputMaybe<Delegation_Bool_Exp>
  unbonding_delegations?: InputMaybe<Unbonding_Delegation_Bool_Exp>
  validator_commission_amounts?: InputMaybe<Validator_Commission_Amount_Bool_Exp>
  validator_commissions?: InputMaybe<Validator_Commission_Bool_Exp>
  validator_descriptions?: InputMaybe<Validator_Description_Bool_Exp>
  validator_info?: InputMaybe<Validator_Info_Bool_Exp>
  validator_infos?: InputMaybe<Validator_Info_Bool_Exp>
  validator_signing_infos?: InputMaybe<Validator_Signing_Info_Bool_Exp>
  validator_statuses?: InputMaybe<Validator_Status_Bool_Exp>
  validator_voting_powers?: InputMaybe<Validator_Voting_Power_Bool_Exp>
}

/** columns and relationships of "validator_commission" */
export type Validator_Commission = {
  __typename?: 'validator_commission'
  commission: Scalars['numeric']
  height: Scalars['bigint']
  min_self_delegation: Scalars['numeric']
  /** An object relationship */
  validator: Validator
  validator_address: Scalars['String']
}

/** aggregated selection of "validator_commission" */
export type Validator_Commission_Aggregate = {
  __typename?: 'validator_commission_aggregate'
  aggregate?: Maybe<Validator_Commission_Aggregate_Fields>
  nodes: Array<Validator_Commission>
}

/** aggregate fields of "validator_commission" */
export type Validator_Commission_Aggregate_Fields = {
  __typename?: 'validator_commission_aggregate_fields'
  avg?: Maybe<Validator_Commission_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Validator_Commission_Max_Fields>
  min?: Maybe<Validator_Commission_Min_Fields>
  stddev?: Maybe<Validator_Commission_Stddev_Fields>
  stddev_pop?: Maybe<Validator_Commission_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Validator_Commission_Stddev_Samp_Fields>
  sum?: Maybe<Validator_Commission_Sum_Fields>
  var_pop?: Maybe<Validator_Commission_Var_Pop_Fields>
  var_samp?: Maybe<Validator_Commission_Var_Samp_Fields>
  variance?: Maybe<Validator_Commission_Variance_Fields>
}

/** aggregate fields of "validator_commission" */
export type Validator_Commission_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Commission_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "validator_commission" */
export type Validator_Commission_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Commission_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Validator_Commission_Max_Order_By>
  min?: InputMaybe<Validator_Commission_Min_Order_By>
  stddev?: InputMaybe<Validator_Commission_Stddev_Order_By>
  stddev_pop?: InputMaybe<Validator_Commission_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Validator_Commission_Stddev_Samp_Order_By>
  sum?: InputMaybe<Validator_Commission_Sum_Order_By>
  var_pop?: InputMaybe<Validator_Commission_Var_Pop_Order_By>
  var_samp?: InputMaybe<Validator_Commission_Var_Samp_Order_By>
  variance?: InputMaybe<Validator_Commission_Variance_Order_By>
}

/** columns and relationships of "validator_commission_amount" */
export type Validator_Commission_Amount = {
  __typename?: 'validator_commission_amount'
  amount: Scalars['_dec_coin']
  height: Scalars['bigint']
  /** An object relationship */
  validator: Validator
  validator_address: Scalars['String']
}

/** aggregated selection of "validator_commission_amount" */
export type Validator_Commission_Amount_Aggregate = {
  __typename?: 'validator_commission_amount_aggregate'
  aggregate?: Maybe<Validator_Commission_Amount_Aggregate_Fields>
  nodes: Array<Validator_Commission_Amount>
}

/** aggregate fields of "validator_commission_amount" */
export type Validator_Commission_Amount_Aggregate_Fields = {
  __typename?: 'validator_commission_amount_aggregate_fields'
  avg?: Maybe<Validator_Commission_Amount_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Validator_Commission_Amount_Max_Fields>
  min?: Maybe<Validator_Commission_Amount_Min_Fields>
  stddev?: Maybe<Validator_Commission_Amount_Stddev_Fields>
  stddev_pop?: Maybe<Validator_Commission_Amount_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Validator_Commission_Amount_Stddev_Samp_Fields>
  sum?: Maybe<Validator_Commission_Amount_Sum_Fields>
  var_pop?: Maybe<Validator_Commission_Amount_Var_Pop_Fields>
  var_samp?: Maybe<Validator_Commission_Amount_Var_Samp_Fields>
  variance?: Maybe<Validator_Commission_Amount_Variance_Fields>
}

/** aggregate fields of "validator_commission_amount" */
export type Validator_Commission_Amount_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Commission_Amount_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "validator_commission_amount" */
export type Validator_Commission_Amount_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Commission_Amount_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Validator_Commission_Amount_Max_Order_By>
  min?: InputMaybe<Validator_Commission_Amount_Min_Order_By>
  stddev?: InputMaybe<Validator_Commission_Amount_Stddev_Order_By>
  stddev_pop?: InputMaybe<Validator_Commission_Amount_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Validator_Commission_Amount_Stddev_Samp_Order_By>
  sum?: InputMaybe<Validator_Commission_Amount_Sum_Order_By>
  var_pop?: InputMaybe<Validator_Commission_Amount_Var_Pop_Order_By>
  var_samp?: InputMaybe<Validator_Commission_Amount_Var_Samp_Order_By>
  variance?: InputMaybe<Validator_Commission_Amount_Variance_Order_By>
}

/** aggregate avg on columns */
export type Validator_Commission_Amount_Avg_Fields = {
  __typename?: 'validator_commission_amount_avg_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "validator_commission_amount" */
export type Validator_Commission_Amount_Avg_Order_By = {
  height?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "validator_commission_amount". All fields are combined with a logical 'AND'. */
export type Validator_Commission_Amount_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Commission_Amount_Bool_Exp>>
  _not?: InputMaybe<Validator_Commission_Amount_Bool_Exp>
  _or?: InputMaybe<Array<Validator_Commission_Amount_Bool_Exp>>
  amount?: InputMaybe<_Dec_Coin_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  validator?: InputMaybe<Validator_Bool_Exp>
  validator_address?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Validator_Commission_Amount_Max_Fields = {
  __typename?: 'validator_commission_amount_max_fields'
  height?: Maybe<Scalars['bigint']>
  validator_address?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "validator_commission_amount" */
export type Validator_Commission_Amount_Max_Order_By = {
  height?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Validator_Commission_Amount_Min_Fields = {
  __typename?: 'validator_commission_amount_min_fields'
  height?: Maybe<Scalars['bigint']>
  validator_address?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "validator_commission_amount" */
export type Validator_Commission_Amount_Min_Order_By = {
  height?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "validator_commission_amount". */
export type Validator_Commission_Amount_Order_By = {
  amount?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  validator?: InputMaybe<Validator_Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** select columns of table "validator_commission_amount" */
export enum Validator_Commission_Amount_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Height = 'height',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** aggregate stddev on columns */
export type Validator_Commission_Amount_Stddev_Fields = {
  __typename?: 'validator_commission_amount_stddev_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "validator_commission_amount" */
export type Validator_Commission_Amount_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Validator_Commission_Amount_Stddev_Pop_Fields = {
  __typename?: 'validator_commission_amount_stddev_pop_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "validator_commission_amount" */
export type Validator_Commission_Amount_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Validator_Commission_Amount_Stddev_Samp_Fields = {
  __typename?: 'validator_commission_amount_stddev_samp_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "validator_commission_amount" */
export type Validator_Commission_Amount_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Validator_Commission_Amount_Sum_Fields = {
  __typename?: 'validator_commission_amount_sum_fields'
  height?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "validator_commission_amount" */
export type Validator_Commission_Amount_Sum_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Validator_Commission_Amount_Var_Pop_Fields = {
  __typename?: 'validator_commission_amount_var_pop_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "validator_commission_amount" */
export type Validator_Commission_Amount_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Validator_Commission_Amount_Var_Samp_Fields = {
  __typename?: 'validator_commission_amount_var_samp_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "validator_commission_amount" */
export type Validator_Commission_Amount_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Validator_Commission_Amount_Variance_Fields = {
  __typename?: 'validator_commission_amount_variance_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "validator_commission_amount" */
export type Validator_Commission_Amount_Variance_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate avg on columns */
export type Validator_Commission_Avg_Fields = {
  __typename?: 'validator_commission_avg_fields'
  commission?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  min_self_delegation?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "validator_commission" */
export type Validator_Commission_Avg_Order_By = {
  commission?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  min_self_delegation?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "validator_commission". All fields are combined with a logical 'AND'. */
export type Validator_Commission_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Commission_Bool_Exp>>
  _not?: InputMaybe<Validator_Commission_Bool_Exp>
  _or?: InputMaybe<Array<Validator_Commission_Bool_Exp>>
  commission?: InputMaybe<Numeric_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  min_self_delegation?: InputMaybe<Numeric_Comparison_Exp>
  validator?: InputMaybe<Validator_Bool_Exp>
  validator_address?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Validator_Commission_Max_Fields = {
  __typename?: 'validator_commission_max_fields'
  commission?: Maybe<Scalars['numeric']>
  height?: Maybe<Scalars['bigint']>
  min_self_delegation?: Maybe<Scalars['numeric']>
  validator_address?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "validator_commission" */
export type Validator_Commission_Max_Order_By = {
  commission?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  min_self_delegation?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Validator_Commission_Min_Fields = {
  __typename?: 'validator_commission_min_fields'
  commission?: Maybe<Scalars['numeric']>
  height?: Maybe<Scalars['bigint']>
  min_self_delegation?: Maybe<Scalars['numeric']>
  validator_address?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "validator_commission" */
export type Validator_Commission_Min_Order_By = {
  commission?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  min_self_delegation?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "validator_commission". */
export type Validator_Commission_Order_By = {
  commission?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  min_self_delegation?: InputMaybe<Order_By>
  validator?: InputMaybe<Validator_Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** select columns of table "validator_commission" */
export enum Validator_Commission_Select_Column {
  /** column name */
  Commission = 'commission',
  /** column name */
  Height = 'height',
  /** column name */
  MinSelfDelegation = 'min_self_delegation',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** aggregate stddev on columns */
export type Validator_Commission_Stddev_Fields = {
  __typename?: 'validator_commission_stddev_fields'
  commission?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  min_self_delegation?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "validator_commission" */
export type Validator_Commission_Stddev_Order_By = {
  commission?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  min_self_delegation?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Validator_Commission_Stddev_Pop_Fields = {
  __typename?: 'validator_commission_stddev_pop_fields'
  commission?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  min_self_delegation?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "validator_commission" */
export type Validator_Commission_Stddev_Pop_Order_By = {
  commission?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  min_self_delegation?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Validator_Commission_Stddev_Samp_Fields = {
  __typename?: 'validator_commission_stddev_samp_fields'
  commission?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  min_self_delegation?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "validator_commission" */
export type Validator_Commission_Stddev_Samp_Order_By = {
  commission?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  min_self_delegation?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Validator_Commission_Sum_Fields = {
  __typename?: 'validator_commission_sum_fields'
  commission?: Maybe<Scalars['numeric']>
  height?: Maybe<Scalars['bigint']>
  min_self_delegation?: Maybe<Scalars['numeric']>
}

/** order by sum() on columns of table "validator_commission" */
export type Validator_Commission_Sum_Order_By = {
  commission?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  min_self_delegation?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Validator_Commission_Var_Pop_Fields = {
  __typename?: 'validator_commission_var_pop_fields'
  commission?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  min_self_delegation?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "validator_commission" */
export type Validator_Commission_Var_Pop_Order_By = {
  commission?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  min_self_delegation?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Validator_Commission_Var_Samp_Fields = {
  __typename?: 'validator_commission_var_samp_fields'
  commission?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  min_self_delegation?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "validator_commission" */
export type Validator_Commission_Var_Samp_Order_By = {
  commission?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  min_self_delegation?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Validator_Commission_Variance_Fields = {
  __typename?: 'validator_commission_variance_fields'
  commission?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  min_self_delegation?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "validator_commission" */
export type Validator_Commission_Variance_Order_By = {
  commission?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  min_self_delegation?: InputMaybe<Order_By>
}

/** columns and relationships of "validator_description" */
export type Validator_Description = {
  __typename?: 'validator_description'
  avatar_url?: Maybe<Scalars['String']>
  details?: Maybe<Scalars['String']>
  height: Scalars['bigint']
  identity?: Maybe<Scalars['String']>
  moniker?: Maybe<Scalars['String']>
  security_contact?: Maybe<Scalars['String']>
  /** An object relationship */
  validator: Validator
  validator_address: Scalars['String']
  website?: Maybe<Scalars['String']>
}

/** aggregated selection of "validator_description" */
export type Validator_Description_Aggregate = {
  __typename?: 'validator_description_aggregate'
  aggregate?: Maybe<Validator_Description_Aggregate_Fields>
  nodes: Array<Validator_Description>
}

/** aggregate fields of "validator_description" */
export type Validator_Description_Aggregate_Fields = {
  __typename?: 'validator_description_aggregate_fields'
  avg?: Maybe<Validator_Description_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Validator_Description_Max_Fields>
  min?: Maybe<Validator_Description_Min_Fields>
  stddev?: Maybe<Validator_Description_Stddev_Fields>
  stddev_pop?: Maybe<Validator_Description_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Validator_Description_Stddev_Samp_Fields>
  sum?: Maybe<Validator_Description_Sum_Fields>
  var_pop?: Maybe<Validator_Description_Var_Pop_Fields>
  var_samp?: Maybe<Validator_Description_Var_Samp_Fields>
  variance?: Maybe<Validator_Description_Variance_Fields>
}

/** aggregate fields of "validator_description" */
export type Validator_Description_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Description_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "validator_description" */
export type Validator_Description_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Description_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Validator_Description_Max_Order_By>
  min?: InputMaybe<Validator_Description_Min_Order_By>
  stddev?: InputMaybe<Validator_Description_Stddev_Order_By>
  stddev_pop?: InputMaybe<Validator_Description_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Validator_Description_Stddev_Samp_Order_By>
  sum?: InputMaybe<Validator_Description_Sum_Order_By>
  var_pop?: InputMaybe<Validator_Description_Var_Pop_Order_By>
  var_samp?: InputMaybe<Validator_Description_Var_Samp_Order_By>
  variance?: InputMaybe<Validator_Description_Variance_Order_By>
}

/** aggregate avg on columns */
export type Validator_Description_Avg_Fields = {
  __typename?: 'validator_description_avg_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "validator_description" */
export type Validator_Description_Avg_Order_By = {
  height?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "validator_description". All fields are combined with a logical 'AND'. */
export type Validator_Description_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Description_Bool_Exp>>
  _not?: InputMaybe<Validator_Description_Bool_Exp>
  _or?: InputMaybe<Array<Validator_Description_Bool_Exp>>
  avatar_url?: InputMaybe<String_Comparison_Exp>
  details?: InputMaybe<String_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  identity?: InputMaybe<String_Comparison_Exp>
  moniker?: InputMaybe<String_Comparison_Exp>
  security_contact?: InputMaybe<String_Comparison_Exp>
  validator?: InputMaybe<Validator_Bool_Exp>
  validator_address?: InputMaybe<String_Comparison_Exp>
  website?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Validator_Description_Max_Fields = {
  __typename?: 'validator_description_max_fields'
  avatar_url?: Maybe<Scalars['String']>
  details?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['bigint']>
  identity?: Maybe<Scalars['String']>
  moniker?: Maybe<Scalars['String']>
  security_contact?: Maybe<Scalars['String']>
  validator_address?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "validator_description" */
export type Validator_Description_Max_Order_By = {
  avatar_url?: InputMaybe<Order_By>
  details?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  identity?: InputMaybe<Order_By>
  moniker?: InputMaybe<Order_By>
  security_contact?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
  website?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Validator_Description_Min_Fields = {
  __typename?: 'validator_description_min_fields'
  avatar_url?: Maybe<Scalars['String']>
  details?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['bigint']>
  identity?: Maybe<Scalars['String']>
  moniker?: Maybe<Scalars['String']>
  security_contact?: Maybe<Scalars['String']>
  validator_address?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "validator_description" */
export type Validator_Description_Min_Order_By = {
  avatar_url?: InputMaybe<Order_By>
  details?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  identity?: InputMaybe<Order_By>
  moniker?: InputMaybe<Order_By>
  security_contact?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
  website?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "validator_description". */
export type Validator_Description_Order_By = {
  avatar_url?: InputMaybe<Order_By>
  details?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  identity?: InputMaybe<Order_By>
  moniker?: InputMaybe<Order_By>
  security_contact?: InputMaybe<Order_By>
  validator?: InputMaybe<Validator_Order_By>
  validator_address?: InputMaybe<Order_By>
  website?: InputMaybe<Order_By>
}

/** select columns of table "validator_description" */
export enum Validator_Description_Select_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  Details = 'details',
  /** column name */
  Height = 'height',
  /** column name */
  Identity = 'identity',
  /** column name */
  Moniker = 'moniker',
  /** column name */
  SecurityContact = 'security_contact',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  Website = 'website'
}

/** aggregate stddev on columns */
export type Validator_Description_Stddev_Fields = {
  __typename?: 'validator_description_stddev_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "validator_description" */
export type Validator_Description_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Validator_Description_Stddev_Pop_Fields = {
  __typename?: 'validator_description_stddev_pop_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "validator_description" */
export type Validator_Description_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Validator_Description_Stddev_Samp_Fields = {
  __typename?: 'validator_description_stddev_samp_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "validator_description" */
export type Validator_Description_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Validator_Description_Sum_Fields = {
  __typename?: 'validator_description_sum_fields'
  height?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "validator_description" */
export type Validator_Description_Sum_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Validator_Description_Var_Pop_Fields = {
  __typename?: 'validator_description_var_pop_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "validator_description" */
export type Validator_Description_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Validator_Description_Var_Samp_Fields = {
  __typename?: 'validator_description_var_samp_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "validator_description" */
export type Validator_Description_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Validator_Description_Variance_Fields = {
  __typename?: 'validator_description_variance_fields'
  height?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "validator_description" */
export type Validator_Description_Variance_Order_By = {
  height?: InputMaybe<Order_By>
}

/** columns and relationships of "validator_info" */
export type Validator_Info = {
  __typename?: 'validator_info'
  /** An object relationship */
  account?: Maybe<Account>
  consensus_address: Scalars['String']
  max_change_rate: Scalars['String']
  max_rate: Scalars['String']
  operator_address: Scalars['String']
  self_delegate_address?: Maybe<Scalars['String']>
  /** An object relationship */
  validator: Validator
}

/** aggregated selection of "validator_info" */
export type Validator_Info_Aggregate = {
  __typename?: 'validator_info_aggregate'
  aggregate?: Maybe<Validator_Info_Aggregate_Fields>
  nodes: Array<Validator_Info>
}

/** aggregate fields of "validator_info" */
export type Validator_Info_Aggregate_Fields = {
  __typename?: 'validator_info_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Validator_Info_Max_Fields>
  min?: Maybe<Validator_Info_Min_Fields>
}

/** aggregate fields of "validator_info" */
export type Validator_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Info_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "validator_info" */
export type Validator_Info_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Validator_Info_Max_Order_By>
  min?: InputMaybe<Validator_Info_Min_Order_By>
}

/** Boolean expression to filter rows from the table "validator_info". All fields are combined with a logical 'AND'. */
export type Validator_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Info_Bool_Exp>>
  _not?: InputMaybe<Validator_Info_Bool_Exp>
  _or?: InputMaybe<Array<Validator_Info_Bool_Exp>>
  account?: InputMaybe<Account_Bool_Exp>
  consensus_address?: InputMaybe<String_Comparison_Exp>
  max_change_rate?: InputMaybe<String_Comparison_Exp>
  max_rate?: InputMaybe<String_Comparison_Exp>
  operator_address?: InputMaybe<String_Comparison_Exp>
  self_delegate_address?: InputMaybe<String_Comparison_Exp>
  validator?: InputMaybe<Validator_Bool_Exp>
}

/** aggregate max on columns */
export type Validator_Info_Max_Fields = {
  __typename?: 'validator_info_max_fields'
  consensus_address?: Maybe<Scalars['String']>
  max_change_rate?: Maybe<Scalars['String']>
  max_rate?: Maybe<Scalars['String']>
  operator_address?: Maybe<Scalars['String']>
  self_delegate_address?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "validator_info" */
export type Validator_Info_Max_Order_By = {
  consensus_address?: InputMaybe<Order_By>
  max_change_rate?: InputMaybe<Order_By>
  max_rate?: InputMaybe<Order_By>
  operator_address?: InputMaybe<Order_By>
  self_delegate_address?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Validator_Info_Min_Fields = {
  __typename?: 'validator_info_min_fields'
  consensus_address?: Maybe<Scalars['String']>
  max_change_rate?: Maybe<Scalars['String']>
  max_rate?: Maybe<Scalars['String']>
  operator_address?: Maybe<Scalars['String']>
  self_delegate_address?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "validator_info" */
export type Validator_Info_Min_Order_By = {
  consensus_address?: InputMaybe<Order_By>
  max_change_rate?: InputMaybe<Order_By>
  max_rate?: InputMaybe<Order_By>
  operator_address?: InputMaybe<Order_By>
  self_delegate_address?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "validator_info". */
export type Validator_Info_Order_By = {
  account?: InputMaybe<Account_Order_By>
  consensus_address?: InputMaybe<Order_By>
  max_change_rate?: InputMaybe<Order_By>
  max_rate?: InputMaybe<Order_By>
  operator_address?: InputMaybe<Order_By>
  self_delegate_address?: InputMaybe<Order_By>
  validator?: InputMaybe<Validator_Order_By>
}

/** select columns of table "validator_info" */
export enum Validator_Info_Select_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  MaxChangeRate = 'max_change_rate',
  /** column name */
  MaxRate = 'max_rate',
  /** column name */
  OperatorAddress = 'operator_address',
  /** column name */
  SelfDelegateAddress = 'self_delegate_address'
}

/** aggregate max on columns */
export type Validator_Max_Fields = {
  __typename?: 'validator_max_fields'
  consensus_address?: Maybe<Scalars['String']>
  consensus_pubkey?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Validator_Min_Fields = {
  __typename?: 'validator_min_fields'
  consensus_address?: Maybe<Scalars['String']>
  consensus_pubkey?: Maybe<Scalars['String']>
}

/** Ordering options when selecting data from "validator". */
export type Validator_Order_By = {
  blocks_aggregate?: InputMaybe<Block_Aggregate_Order_By>
  consensus_address?: InputMaybe<Order_By>
  consensus_pubkey?: InputMaybe<Order_By>
  delegation_rewards_aggregate?: InputMaybe<Delegation_Reward_Aggregate_Order_By>
  delegations_aggregate?: InputMaybe<Delegation_Aggregate_Order_By>
  double_sign_votes_aggregate?: InputMaybe<Double_Sign_Vote_Aggregate_Order_By>
  pre_commits_aggregate?: InputMaybe<Pre_Commit_Aggregate_Order_By>
  redelegationsByDstValidatorAddress_aggregate?: InputMaybe<Redelegation_Aggregate_Order_By>
  redelegationsBySrcValidatorAddress_aggregate?: InputMaybe<Redelegation_Aggregate_Order_By>
  self_delegations_aggregate?: InputMaybe<Delegation_Aggregate_Order_By>
  unbonding_delegations_aggregate?: InputMaybe<Unbonding_Delegation_Aggregate_Order_By>
  validator_commission_amounts_aggregate?: InputMaybe<Validator_Commission_Amount_Aggregate_Order_By>
  validator_commissions_aggregate?: InputMaybe<Validator_Commission_Aggregate_Order_By>
  validator_descriptions_aggregate?: InputMaybe<Validator_Description_Aggregate_Order_By>
  validator_info?: InputMaybe<Validator_Info_Order_By>
  validator_infos_aggregate?: InputMaybe<Validator_Info_Aggregate_Order_By>
  validator_signing_infos_aggregate?: InputMaybe<Validator_Signing_Info_Aggregate_Order_By>
  validator_statuses_aggregate?: InputMaybe<Validator_Status_Aggregate_Order_By>
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Power_Aggregate_Order_By>
}

/** select columns of table "validator" */
export enum Validator_Select_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  ConsensusPubkey = 'consensus_pubkey'
}

/** columns and relationships of "validator_signing_info" */
export type Validator_Signing_Info = {
  __typename?: 'validator_signing_info'
  height: Scalars['bigint']
  index_offset: Scalars['bigint']
  jailed_until: Scalars['timestamp']
  missed_blocks_counter: Scalars['bigint']
  start_height: Scalars['bigint']
  tombstoned: Scalars['Boolean']
  validator_address: Scalars['String']
}

/** aggregated selection of "validator_signing_info" */
export type Validator_Signing_Info_Aggregate = {
  __typename?: 'validator_signing_info_aggregate'
  aggregate?: Maybe<Validator_Signing_Info_Aggregate_Fields>
  nodes: Array<Validator_Signing_Info>
}

/** aggregate fields of "validator_signing_info" */
export type Validator_Signing_Info_Aggregate_Fields = {
  __typename?: 'validator_signing_info_aggregate_fields'
  avg?: Maybe<Validator_Signing_Info_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Validator_Signing_Info_Max_Fields>
  min?: Maybe<Validator_Signing_Info_Min_Fields>
  stddev?: Maybe<Validator_Signing_Info_Stddev_Fields>
  stddev_pop?: Maybe<Validator_Signing_Info_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Validator_Signing_Info_Stddev_Samp_Fields>
  sum?: Maybe<Validator_Signing_Info_Sum_Fields>
  var_pop?: Maybe<Validator_Signing_Info_Var_Pop_Fields>
  var_samp?: Maybe<Validator_Signing_Info_Var_Samp_Fields>
  variance?: Maybe<Validator_Signing_Info_Variance_Fields>
}

/** aggregate fields of "validator_signing_info" */
export type Validator_Signing_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "validator_signing_info" */
export type Validator_Signing_Info_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Signing_Info_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Validator_Signing_Info_Max_Order_By>
  min?: InputMaybe<Validator_Signing_Info_Min_Order_By>
  stddev?: InputMaybe<Validator_Signing_Info_Stddev_Order_By>
  stddev_pop?: InputMaybe<Validator_Signing_Info_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Validator_Signing_Info_Stddev_Samp_Order_By>
  sum?: InputMaybe<Validator_Signing_Info_Sum_Order_By>
  var_pop?: InputMaybe<Validator_Signing_Info_Var_Pop_Order_By>
  var_samp?: InputMaybe<Validator_Signing_Info_Var_Samp_Order_By>
  variance?: InputMaybe<Validator_Signing_Info_Variance_Order_By>
}

/** aggregate avg on columns */
export type Validator_Signing_Info_Avg_Fields = {
  __typename?: 'validator_signing_info_avg_fields'
  height?: Maybe<Scalars['Float']>
  index_offset?: Maybe<Scalars['Float']>
  missed_blocks_counter?: Maybe<Scalars['Float']>
  start_height?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Avg_Order_By = {
  height?: InputMaybe<Order_By>
  index_offset?: InputMaybe<Order_By>
  missed_blocks_counter?: InputMaybe<Order_By>
  start_height?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "validator_signing_info". All fields are combined with a logical 'AND'. */
export type Validator_Signing_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Signing_Info_Bool_Exp>>
  _not?: InputMaybe<Validator_Signing_Info_Bool_Exp>
  _or?: InputMaybe<Array<Validator_Signing_Info_Bool_Exp>>
  height?: InputMaybe<Bigint_Comparison_Exp>
  index_offset?: InputMaybe<Bigint_Comparison_Exp>
  jailed_until?: InputMaybe<Timestamp_Comparison_Exp>
  missed_blocks_counter?: InputMaybe<Bigint_Comparison_Exp>
  start_height?: InputMaybe<Bigint_Comparison_Exp>
  tombstoned?: InputMaybe<Boolean_Comparison_Exp>
  validator_address?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Validator_Signing_Info_Max_Fields = {
  __typename?: 'validator_signing_info_max_fields'
  height?: Maybe<Scalars['bigint']>
  index_offset?: Maybe<Scalars['bigint']>
  jailed_until?: Maybe<Scalars['timestamp']>
  missed_blocks_counter?: Maybe<Scalars['bigint']>
  start_height?: Maybe<Scalars['bigint']>
  validator_address?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Max_Order_By = {
  height?: InputMaybe<Order_By>
  index_offset?: InputMaybe<Order_By>
  jailed_until?: InputMaybe<Order_By>
  missed_blocks_counter?: InputMaybe<Order_By>
  start_height?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Validator_Signing_Info_Min_Fields = {
  __typename?: 'validator_signing_info_min_fields'
  height?: Maybe<Scalars['bigint']>
  index_offset?: Maybe<Scalars['bigint']>
  jailed_until?: Maybe<Scalars['timestamp']>
  missed_blocks_counter?: Maybe<Scalars['bigint']>
  start_height?: Maybe<Scalars['bigint']>
  validator_address?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Min_Order_By = {
  height?: InputMaybe<Order_By>
  index_offset?: InputMaybe<Order_By>
  jailed_until?: InputMaybe<Order_By>
  missed_blocks_counter?: InputMaybe<Order_By>
  start_height?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "validator_signing_info". */
export type Validator_Signing_Info_Order_By = {
  height?: InputMaybe<Order_By>
  index_offset?: InputMaybe<Order_By>
  jailed_until?: InputMaybe<Order_By>
  missed_blocks_counter?: InputMaybe<Order_By>
  start_height?: InputMaybe<Order_By>
  tombstoned?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** select columns of table "validator_signing_info" */
export enum Validator_Signing_Info_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  IndexOffset = 'index_offset',
  /** column name */
  JailedUntil = 'jailed_until',
  /** column name */
  MissedBlocksCounter = 'missed_blocks_counter',
  /** column name */
  StartHeight = 'start_height',
  /** column name */
  Tombstoned = 'tombstoned',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** aggregate stddev on columns */
export type Validator_Signing_Info_Stddev_Fields = {
  __typename?: 'validator_signing_info_stddev_fields'
  height?: Maybe<Scalars['Float']>
  index_offset?: Maybe<Scalars['Float']>
  missed_blocks_counter?: Maybe<Scalars['Float']>
  start_height?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
  index_offset?: InputMaybe<Order_By>
  missed_blocks_counter?: InputMaybe<Order_By>
  start_height?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Validator_Signing_Info_Stddev_Pop_Fields = {
  __typename?: 'validator_signing_info_stddev_pop_fields'
  height?: Maybe<Scalars['Float']>
  index_offset?: Maybe<Scalars['Float']>
  missed_blocks_counter?: Maybe<Scalars['Float']>
  start_height?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  index_offset?: InputMaybe<Order_By>
  missed_blocks_counter?: InputMaybe<Order_By>
  start_height?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Validator_Signing_Info_Stddev_Samp_Fields = {
  __typename?: 'validator_signing_info_stddev_samp_fields'
  height?: Maybe<Scalars['Float']>
  index_offset?: Maybe<Scalars['Float']>
  missed_blocks_counter?: Maybe<Scalars['Float']>
  start_height?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  index_offset?: InputMaybe<Order_By>
  missed_blocks_counter?: InputMaybe<Order_By>
  start_height?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Validator_Signing_Info_Sum_Fields = {
  __typename?: 'validator_signing_info_sum_fields'
  height?: Maybe<Scalars['bigint']>
  index_offset?: Maybe<Scalars['bigint']>
  missed_blocks_counter?: Maybe<Scalars['bigint']>
  start_height?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Sum_Order_By = {
  height?: InputMaybe<Order_By>
  index_offset?: InputMaybe<Order_By>
  missed_blocks_counter?: InputMaybe<Order_By>
  start_height?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Validator_Signing_Info_Var_Pop_Fields = {
  __typename?: 'validator_signing_info_var_pop_fields'
  height?: Maybe<Scalars['Float']>
  index_offset?: Maybe<Scalars['Float']>
  missed_blocks_counter?: Maybe<Scalars['Float']>
  start_height?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  index_offset?: InputMaybe<Order_By>
  missed_blocks_counter?: InputMaybe<Order_By>
  start_height?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Validator_Signing_Info_Var_Samp_Fields = {
  __typename?: 'validator_signing_info_var_samp_fields'
  height?: Maybe<Scalars['Float']>
  index_offset?: Maybe<Scalars['Float']>
  missed_blocks_counter?: Maybe<Scalars['Float']>
  start_height?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  index_offset?: InputMaybe<Order_By>
  missed_blocks_counter?: InputMaybe<Order_By>
  start_height?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Validator_Signing_Info_Variance_Fields = {
  __typename?: 'validator_signing_info_variance_fields'
  height?: Maybe<Scalars['Float']>
  index_offset?: Maybe<Scalars['Float']>
  missed_blocks_counter?: Maybe<Scalars['Float']>
  start_height?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Variance_Order_By = {
  height?: InputMaybe<Order_By>
  index_offset?: InputMaybe<Order_By>
  missed_blocks_counter?: InputMaybe<Order_By>
  start_height?: InputMaybe<Order_By>
}

/** columns and relationships of "validator_status" */
export type Validator_Status = {
  __typename?: 'validator_status'
  height: Scalars['bigint']
  jailed: Scalars['Boolean']
  status: Scalars['Int']
  tombstoned: Scalars['Boolean']
  /** An object relationship */
  validator: Validator
  validator_address: Scalars['String']
}

/** aggregated selection of "validator_status" */
export type Validator_Status_Aggregate = {
  __typename?: 'validator_status_aggregate'
  aggregate?: Maybe<Validator_Status_Aggregate_Fields>
  nodes: Array<Validator_Status>
}

/** aggregate fields of "validator_status" */
export type Validator_Status_Aggregate_Fields = {
  __typename?: 'validator_status_aggregate_fields'
  avg?: Maybe<Validator_Status_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Validator_Status_Max_Fields>
  min?: Maybe<Validator_Status_Min_Fields>
  stddev?: Maybe<Validator_Status_Stddev_Fields>
  stddev_pop?: Maybe<Validator_Status_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Validator_Status_Stddev_Samp_Fields>
  sum?: Maybe<Validator_Status_Sum_Fields>
  var_pop?: Maybe<Validator_Status_Var_Pop_Fields>
  var_samp?: Maybe<Validator_Status_Var_Samp_Fields>
  variance?: Maybe<Validator_Status_Variance_Fields>
}

/** aggregate fields of "validator_status" */
export type Validator_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Status_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "validator_status" */
export type Validator_Status_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Status_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Validator_Status_Max_Order_By>
  min?: InputMaybe<Validator_Status_Min_Order_By>
  stddev?: InputMaybe<Validator_Status_Stddev_Order_By>
  stddev_pop?: InputMaybe<Validator_Status_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Validator_Status_Stddev_Samp_Order_By>
  sum?: InputMaybe<Validator_Status_Sum_Order_By>
  var_pop?: InputMaybe<Validator_Status_Var_Pop_Order_By>
  var_samp?: InputMaybe<Validator_Status_Var_Samp_Order_By>
  variance?: InputMaybe<Validator_Status_Variance_Order_By>
}

/** aggregate avg on columns */
export type Validator_Status_Avg_Fields = {
  __typename?: 'validator_status_avg_fields'
  height?: Maybe<Scalars['Float']>
  status?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "validator_status" */
export type Validator_Status_Avg_Order_By = {
  height?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "validator_status". All fields are combined with a logical 'AND'. */
export type Validator_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Status_Bool_Exp>>
  _not?: InputMaybe<Validator_Status_Bool_Exp>
  _or?: InputMaybe<Array<Validator_Status_Bool_Exp>>
  height?: InputMaybe<Bigint_Comparison_Exp>
  jailed?: InputMaybe<Boolean_Comparison_Exp>
  status?: InputMaybe<Int_Comparison_Exp>
  tombstoned?: InputMaybe<Boolean_Comparison_Exp>
  validator?: InputMaybe<Validator_Bool_Exp>
  validator_address?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Validator_Status_Max_Fields = {
  __typename?: 'validator_status_max_fields'
  height?: Maybe<Scalars['bigint']>
  status?: Maybe<Scalars['Int']>
  validator_address?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "validator_status" */
export type Validator_Status_Max_Order_By = {
  height?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Validator_Status_Min_Fields = {
  __typename?: 'validator_status_min_fields'
  height?: Maybe<Scalars['bigint']>
  status?: Maybe<Scalars['Int']>
  validator_address?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "validator_status" */
export type Validator_Status_Min_Order_By = {
  height?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "validator_status". */
export type Validator_Status_Order_By = {
  height?: InputMaybe<Order_By>
  jailed?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  tombstoned?: InputMaybe<Order_By>
  validator?: InputMaybe<Validator_Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** select columns of table "validator_status" */
export enum Validator_Status_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  Status = 'status',
  /** column name */
  Tombstoned = 'tombstoned',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** aggregate stddev on columns */
export type Validator_Status_Stddev_Fields = {
  __typename?: 'validator_status_stddev_fields'
  height?: Maybe<Scalars['Float']>
  status?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "validator_status" */
export type Validator_Status_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Validator_Status_Stddev_Pop_Fields = {
  __typename?: 'validator_status_stddev_pop_fields'
  height?: Maybe<Scalars['Float']>
  status?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "validator_status" */
export type Validator_Status_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Validator_Status_Stddev_Samp_Fields = {
  __typename?: 'validator_status_stddev_samp_fields'
  height?: Maybe<Scalars['Float']>
  status?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "validator_status" */
export type Validator_Status_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Validator_Status_Sum_Fields = {
  __typename?: 'validator_status_sum_fields'
  height?: Maybe<Scalars['bigint']>
  status?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "validator_status" */
export type Validator_Status_Sum_Order_By = {
  height?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Validator_Status_Var_Pop_Fields = {
  __typename?: 'validator_status_var_pop_fields'
  height?: Maybe<Scalars['Float']>
  status?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "validator_status" */
export type Validator_Status_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Validator_Status_Var_Samp_Fields = {
  __typename?: 'validator_status_var_samp_fields'
  height?: Maybe<Scalars['Float']>
  status?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "validator_status" */
export type Validator_Status_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Validator_Status_Variance_Fields = {
  __typename?: 'validator_status_variance_fields'
  height?: Maybe<Scalars['Float']>
  status?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "validator_status" */
export type Validator_Status_Variance_Order_By = {
  height?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** columns and relationships of "validator_voting_power" */
export type Validator_Voting_Power = {
  __typename?: 'validator_voting_power'
  height: Scalars['bigint']
  /** An object relationship */
  validator: Validator
  validator_address: Scalars['String']
  voting_power: Scalars['bigint']
}

/** aggregated selection of "validator_voting_power" */
export type Validator_Voting_Power_Aggregate = {
  __typename?: 'validator_voting_power_aggregate'
  aggregate?: Maybe<Validator_Voting_Power_Aggregate_Fields>
  nodes: Array<Validator_Voting_Power>
}

/** aggregate fields of "validator_voting_power" */
export type Validator_Voting_Power_Aggregate_Fields = {
  __typename?: 'validator_voting_power_aggregate_fields'
  avg?: Maybe<Validator_Voting_Power_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Validator_Voting_Power_Max_Fields>
  min?: Maybe<Validator_Voting_Power_Min_Fields>
  stddev?: Maybe<Validator_Voting_Power_Stddev_Fields>
  stddev_pop?: Maybe<Validator_Voting_Power_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Validator_Voting_Power_Stddev_Samp_Fields>
  sum?: Maybe<Validator_Voting_Power_Sum_Fields>
  var_pop?: Maybe<Validator_Voting_Power_Var_Pop_Fields>
  var_samp?: Maybe<Validator_Voting_Power_Var_Samp_Fields>
  variance?: Maybe<Validator_Voting_Power_Variance_Fields>
}

/** aggregate fields of "validator_voting_power" */
export type Validator_Voting_Power_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "validator_voting_power" */
export type Validator_Voting_Power_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Voting_Power_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Validator_Voting_Power_Max_Order_By>
  min?: InputMaybe<Validator_Voting_Power_Min_Order_By>
  stddev?: InputMaybe<Validator_Voting_Power_Stddev_Order_By>
  stddev_pop?: InputMaybe<Validator_Voting_Power_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Validator_Voting_Power_Stddev_Samp_Order_By>
  sum?: InputMaybe<Validator_Voting_Power_Sum_Order_By>
  var_pop?: InputMaybe<Validator_Voting_Power_Var_Pop_Order_By>
  var_samp?: InputMaybe<Validator_Voting_Power_Var_Samp_Order_By>
  variance?: InputMaybe<Validator_Voting_Power_Variance_Order_By>
}

/** aggregate avg on columns */
export type Validator_Voting_Power_Avg_Fields = {
  __typename?: 'validator_voting_power_avg_fields'
  height?: Maybe<Scalars['Float']>
  voting_power?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Avg_Order_By = {
  height?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "validator_voting_power". All fields are combined with a logical 'AND'. */
export type Validator_Voting_Power_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Voting_Power_Bool_Exp>>
  _not?: InputMaybe<Validator_Voting_Power_Bool_Exp>
  _or?: InputMaybe<Array<Validator_Voting_Power_Bool_Exp>>
  height?: InputMaybe<Bigint_Comparison_Exp>
  validator?: InputMaybe<Validator_Bool_Exp>
  validator_address?: InputMaybe<String_Comparison_Exp>
  voting_power?: InputMaybe<Bigint_Comparison_Exp>
}

/** aggregate max on columns */
export type Validator_Voting_Power_Max_Fields = {
  __typename?: 'validator_voting_power_max_fields'
  height?: Maybe<Scalars['bigint']>
  validator_address?: Maybe<Scalars['String']>
  voting_power?: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Max_Order_By = {
  height?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Validator_Voting_Power_Min_Fields = {
  __typename?: 'validator_voting_power_min_fields'
  height?: Maybe<Scalars['bigint']>
  validator_address?: Maybe<Scalars['String']>
  voting_power?: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Min_Order_By = {
  height?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "validator_voting_power". */
export type Validator_Voting_Power_Order_By = {
  height?: InputMaybe<Order_By>
  validator?: InputMaybe<Validator_Order_By>
  validator_address?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** select columns of table "validator_voting_power" */
export enum Validator_Voting_Power_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

/** aggregate stddev on columns */
export type Validator_Voting_Power_Stddev_Fields = {
  __typename?: 'validator_voting_power_stddev_fields'
  height?: Maybe<Scalars['Float']>
  voting_power?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Validator_Voting_Power_Stddev_Pop_Fields = {
  __typename?: 'validator_voting_power_stddev_pop_fields'
  height?: Maybe<Scalars['Float']>
  voting_power?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Validator_Voting_Power_Stddev_Samp_Fields = {
  __typename?: 'validator_voting_power_stddev_samp_fields'
  height?: Maybe<Scalars['Float']>
  voting_power?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Validator_Voting_Power_Sum_Fields = {
  __typename?: 'validator_voting_power_sum_fields'
  height?: Maybe<Scalars['bigint']>
  voting_power?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Sum_Order_By = {
  height?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Validator_Voting_Power_Var_Pop_Fields = {
  __typename?: 'validator_voting_power_var_pop_fields'
  height?: Maybe<Scalars['Float']>
  voting_power?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Validator_Voting_Power_Var_Samp_Fields = {
  __typename?: 'validator_voting_power_var_samp_fields'
  height?: Maybe<Scalars['Float']>
  voting_power?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Validator_Voting_Power_Variance_Fields = {
  __typename?: 'validator_voting_power_variance_fields'
  height?: Maybe<Scalars['Float']>
  voting_power?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Variance_Order_By = {
  height?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** columns and relationships of "vesting_account" */
export type Vesting_Account = {
  __typename?: 'vesting_account'
  /** An object relationship */
  account: Account
  address: Scalars['String']
  end_time: Scalars['timestamp']
  id: Scalars['Int']
  original_vesting: Scalars['_coin']
  start_time?: Maybe<Scalars['timestamp']>
  type: Scalars['String']
  /** An array relationship */
  vesting_periods: Array<Vesting_Period>
  /** An aggregate relationship */
  vesting_periods_aggregate: Vesting_Period_Aggregate
}

/** columns and relationships of "vesting_account" */
export type Vesting_AccountVesting_PeriodsArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Period_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Vesting_Period_Order_By>>
  where?: InputMaybe<Vesting_Period_Bool_Exp>
}

/** columns and relationships of "vesting_account" */
export type Vesting_AccountVesting_Periods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Period_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Vesting_Period_Order_By>>
  where?: InputMaybe<Vesting_Period_Bool_Exp>
}

/** aggregated selection of "vesting_account" */
export type Vesting_Account_Aggregate = {
  __typename?: 'vesting_account_aggregate'
  aggregate?: Maybe<Vesting_Account_Aggregate_Fields>
  nodes: Array<Vesting_Account>
}

/** aggregate fields of "vesting_account" */
export type Vesting_Account_Aggregate_Fields = {
  __typename?: 'vesting_account_aggregate_fields'
  avg?: Maybe<Vesting_Account_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Vesting_Account_Max_Fields>
  min?: Maybe<Vesting_Account_Min_Fields>
  stddev?: Maybe<Vesting_Account_Stddev_Fields>
  stddev_pop?: Maybe<Vesting_Account_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Vesting_Account_Stddev_Samp_Fields>
  sum?: Maybe<Vesting_Account_Sum_Fields>
  var_pop?: Maybe<Vesting_Account_Var_Pop_Fields>
  var_samp?: Maybe<Vesting_Account_Var_Samp_Fields>
  variance?: Maybe<Vesting_Account_Variance_Fields>
}

/** aggregate fields of "vesting_account" */
export type Vesting_Account_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vesting_Account_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Vesting_Account_Avg_Fields = {
  __typename?: 'vesting_account_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "vesting_account". All fields are combined with a logical 'AND'. */
export type Vesting_Account_Bool_Exp = {
  _and?: InputMaybe<Array<Vesting_Account_Bool_Exp>>
  _not?: InputMaybe<Vesting_Account_Bool_Exp>
  _or?: InputMaybe<Array<Vesting_Account_Bool_Exp>>
  account?: InputMaybe<Account_Bool_Exp>
  address?: InputMaybe<String_Comparison_Exp>
  end_time?: InputMaybe<Timestamp_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  original_vesting?: InputMaybe<_Coin_Comparison_Exp>
  start_time?: InputMaybe<Timestamp_Comparison_Exp>
  type?: InputMaybe<String_Comparison_Exp>
  vesting_periods?: InputMaybe<Vesting_Period_Bool_Exp>
}

/** aggregate max on columns */
export type Vesting_Account_Max_Fields = {
  __typename?: 'vesting_account_max_fields'
  address?: Maybe<Scalars['String']>
  end_time?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['Int']>
  start_time?: Maybe<Scalars['timestamp']>
  type?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Vesting_Account_Min_Fields = {
  __typename?: 'vesting_account_min_fields'
  address?: Maybe<Scalars['String']>
  end_time?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['Int']>
  start_time?: Maybe<Scalars['timestamp']>
  type?: Maybe<Scalars['String']>
}

/** Ordering options when selecting data from "vesting_account". */
export type Vesting_Account_Order_By = {
  account?: InputMaybe<Account_Order_By>
  address?: InputMaybe<Order_By>
  end_time?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  original_vesting?: InputMaybe<Order_By>
  start_time?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  vesting_periods_aggregate?: InputMaybe<Vesting_Period_Aggregate_Order_By>
}

/** select columns of table "vesting_account" */
export enum Vesting_Account_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  Id = 'id',
  /** column name */
  OriginalVesting = 'original_vesting',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Type = 'type'
}

/** aggregate stddev on columns */
export type Vesting_Account_Stddev_Fields = {
  __typename?: 'vesting_account_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Vesting_Account_Stddev_Pop_Fields = {
  __typename?: 'vesting_account_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Vesting_Account_Stddev_Samp_Fields = {
  __typename?: 'vesting_account_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Vesting_Account_Sum_Fields = {
  __typename?: 'vesting_account_sum_fields'
  id?: Maybe<Scalars['Int']>
}

/** aggregate var_pop on columns */
export type Vesting_Account_Var_Pop_Fields = {
  __typename?: 'vesting_account_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Vesting_Account_Var_Samp_Fields = {
  __typename?: 'vesting_account_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Vesting_Account_Variance_Fields = {
  __typename?: 'vesting_account_variance_fields'
  id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "vesting_period" */
export type Vesting_Period = {
  __typename?: 'vesting_period'
  amount: Scalars['_coin']
  length: Scalars['bigint']
  period_order: Scalars['bigint']
  /** An object relationship */
  vesting_account: Vesting_Account
  vesting_account_id: Scalars['bigint']
}

/** aggregated selection of "vesting_period" */
export type Vesting_Period_Aggregate = {
  __typename?: 'vesting_period_aggregate'
  aggregate?: Maybe<Vesting_Period_Aggregate_Fields>
  nodes: Array<Vesting_Period>
}

/** aggregate fields of "vesting_period" */
export type Vesting_Period_Aggregate_Fields = {
  __typename?: 'vesting_period_aggregate_fields'
  avg?: Maybe<Vesting_Period_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Vesting_Period_Max_Fields>
  min?: Maybe<Vesting_Period_Min_Fields>
  stddev?: Maybe<Vesting_Period_Stddev_Fields>
  stddev_pop?: Maybe<Vesting_Period_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Vesting_Period_Stddev_Samp_Fields>
  sum?: Maybe<Vesting_Period_Sum_Fields>
  var_pop?: Maybe<Vesting_Period_Var_Pop_Fields>
  var_samp?: Maybe<Vesting_Period_Var_Samp_Fields>
  variance?: Maybe<Vesting_Period_Variance_Fields>
}

/** aggregate fields of "vesting_period" */
export type Vesting_Period_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vesting_Period_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "vesting_period" */
export type Vesting_Period_Aggregate_Order_By = {
  avg?: InputMaybe<Vesting_Period_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Vesting_Period_Max_Order_By>
  min?: InputMaybe<Vesting_Period_Min_Order_By>
  stddev?: InputMaybe<Vesting_Period_Stddev_Order_By>
  stddev_pop?: InputMaybe<Vesting_Period_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Vesting_Period_Stddev_Samp_Order_By>
  sum?: InputMaybe<Vesting_Period_Sum_Order_By>
  var_pop?: InputMaybe<Vesting_Period_Var_Pop_Order_By>
  var_samp?: InputMaybe<Vesting_Period_Var_Samp_Order_By>
  variance?: InputMaybe<Vesting_Period_Variance_Order_By>
}

/** aggregate avg on columns */
export type Vesting_Period_Avg_Fields = {
  __typename?: 'vesting_period_avg_fields'
  length?: Maybe<Scalars['Float']>
  period_order?: Maybe<Scalars['Float']>
  vesting_account_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "vesting_period" */
export type Vesting_Period_Avg_Order_By = {
  length?: InputMaybe<Order_By>
  period_order?: InputMaybe<Order_By>
  vesting_account_id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "vesting_period". All fields are combined with a logical 'AND'. */
export type Vesting_Period_Bool_Exp = {
  _and?: InputMaybe<Array<Vesting_Period_Bool_Exp>>
  _not?: InputMaybe<Vesting_Period_Bool_Exp>
  _or?: InputMaybe<Array<Vesting_Period_Bool_Exp>>
  amount?: InputMaybe<_Coin_Comparison_Exp>
  length?: InputMaybe<Bigint_Comparison_Exp>
  period_order?: InputMaybe<Bigint_Comparison_Exp>
  vesting_account?: InputMaybe<Vesting_Account_Bool_Exp>
  vesting_account_id?: InputMaybe<Bigint_Comparison_Exp>
}

/** aggregate max on columns */
export type Vesting_Period_Max_Fields = {
  __typename?: 'vesting_period_max_fields'
  length?: Maybe<Scalars['bigint']>
  period_order?: Maybe<Scalars['bigint']>
  vesting_account_id?: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "vesting_period" */
export type Vesting_Period_Max_Order_By = {
  length?: InputMaybe<Order_By>
  period_order?: InputMaybe<Order_By>
  vesting_account_id?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Vesting_Period_Min_Fields = {
  __typename?: 'vesting_period_min_fields'
  length?: Maybe<Scalars['bigint']>
  period_order?: Maybe<Scalars['bigint']>
  vesting_account_id?: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "vesting_period" */
export type Vesting_Period_Min_Order_By = {
  length?: InputMaybe<Order_By>
  period_order?: InputMaybe<Order_By>
  vesting_account_id?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "vesting_period". */
export type Vesting_Period_Order_By = {
  amount?: InputMaybe<Order_By>
  length?: InputMaybe<Order_By>
  period_order?: InputMaybe<Order_By>
  vesting_account?: InputMaybe<Vesting_Account_Order_By>
  vesting_account_id?: InputMaybe<Order_By>
}

/** select columns of table "vesting_period" */
export enum Vesting_Period_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Length = 'length',
  /** column name */
  PeriodOrder = 'period_order',
  /** column name */
  VestingAccountId = 'vesting_account_id'
}

/** aggregate stddev on columns */
export type Vesting_Period_Stddev_Fields = {
  __typename?: 'vesting_period_stddev_fields'
  length?: Maybe<Scalars['Float']>
  period_order?: Maybe<Scalars['Float']>
  vesting_account_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "vesting_period" */
export type Vesting_Period_Stddev_Order_By = {
  length?: InputMaybe<Order_By>
  period_order?: InputMaybe<Order_By>
  vesting_account_id?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Vesting_Period_Stddev_Pop_Fields = {
  __typename?: 'vesting_period_stddev_pop_fields'
  length?: Maybe<Scalars['Float']>
  period_order?: Maybe<Scalars['Float']>
  vesting_account_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "vesting_period" */
export type Vesting_Period_Stddev_Pop_Order_By = {
  length?: InputMaybe<Order_By>
  period_order?: InputMaybe<Order_By>
  vesting_account_id?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Vesting_Period_Stddev_Samp_Fields = {
  __typename?: 'vesting_period_stddev_samp_fields'
  length?: Maybe<Scalars['Float']>
  period_order?: Maybe<Scalars['Float']>
  vesting_account_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "vesting_period" */
export type Vesting_Period_Stddev_Samp_Order_By = {
  length?: InputMaybe<Order_By>
  period_order?: InputMaybe<Order_By>
  vesting_account_id?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Vesting_Period_Sum_Fields = {
  __typename?: 'vesting_period_sum_fields'
  length?: Maybe<Scalars['bigint']>
  period_order?: Maybe<Scalars['bigint']>
  vesting_account_id?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "vesting_period" */
export type Vesting_Period_Sum_Order_By = {
  length?: InputMaybe<Order_By>
  period_order?: InputMaybe<Order_By>
  vesting_account_id?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Vesting_Period_Var_Pop_Fields = {
  __typename?: 'vesting_period_var_pop_fields'
  length?: Maybe<Scalars['Float']>
  period_order?: Maybe<Scalars['Float']>
  vesting_account_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "vesting_period" */
export type Vesting_Period_Var_Pop_Order_By = {
  length?: InputMaybe<Order_By>
  period_order?: InputMaybe<Order_By>
  vesting_account_id?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Vesting_Period_Var_Samp_Fields = {
  __typename?: 'vesting_period_var_samp_fields'
  length?: Maybe<Scalars['Float']>
  period_order?: Maybe<Scalars['Float']>
  vesting_account_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "vesting_period" */
export type Vesting_Period_Var_Samp_Order_By = {
  length?: InputMaybe<Order_By>
  period_order?: InputMaybe<Order_By>
  vesting_account_id?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Vesting_Period_Variance_Fields = {
  __typename?: 'vesting_period_variance_fields'
  length?: Maybe<Scalars['Float']>
  period_order?: Maybe<Scalars['Float']>
  vesting_account_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "vesting_period" */
export type Vesting_Period_Variance_Order_By = {
  length?: InputMaybe<Order_By>
  period_order?: InputMaybe<Order_By>
  vesting_account_id?: InputMaybe<Order_By>
}

export type ValidatorsQueryVariables = Exact<{ [key: string]: never }>

export type ValidatorsQuery = {
  stakingParams: Array<{ __typename?: 'staking_params'; params: any }>
  stakingPool: Array<{ __typename?: 'staking_pool'; bondedTokens: any }>
  validator: Array<{
    __typename?: 'validator'
    validatorStatuses: Array<{
      __typename?: 'validator_status'
      status: number
      jailed: boolean
      height: any
    }>
    validatorSigningInfos: Array<{
      __typename?: 'validator_signing_info'
      tombstoned: boolean
      missedBlocksCounter: any
    }>
    validatorInfo?: {
      __typename?: 'validator_info'
      operatorAddress: string
      selfDelegateAddress?: string | null
    } | null
    validatorVotingPowers: Array<{
      __typename?: 'validator_voting_power'
      votingPower: any
    }>
    validatorCommissions: Array<{
      __typename?: 'validator_commission'
      commission: any
    }>
    delegations: Array<{
      __typename?: 'delegation'
      amount: any
      delegatorAddress: string
    }>
    validatorDescription: Array<{
      __typename?: 'validator_description'
      moniker?: string | null
      avatarUrl?: string | null
    }>
  }>
  slashingParams: Array<{ __typename?: 'slashing_params'; params: any }>
}

export const ValidatorsDocument = gql`
  query Validators {
    stakingParams: staking_params(limit: 1) {
      params
    }
    stakingPool: staking_pool(limit: 1, order_by: { height: desc }) {
      bondedTokens: bonded_tokens
    }
    validator {
      validatorStatuses: validator_statuses(
        order_by: { height: desc }
        limit: 1
      ) {
        status
        jailed
        height
      }
      validatorSigningInfos: validator_signing_infos(
        order_by: { height: desc }
        limit: 1
      ) {
        missedBlocksCounter: missed_blocks_counter
        tombstoned
      }
      validatorInfo: validator_info {
        operatorAddress: operator_address
        selfDelegateAddress: self_delegate_address
      }
      validatorVotingPowers: validator_voting_powers(
        offset: 0
        limit: 1
        order_by: { height: desc }
      ) {
        votingPower: voting_power
      }
      validatorCommissions: validator_commissions(
        order_by: { height: desc }
        limit: 1
      ) {
        commission
      }
      delegations {
        amount
        delegatorAddress: delegator_address
      }
      validatorSigningInfos: validator_signing_infos(
        order_by: { height: desc }
        limit: 1
      ) {
        missedBlocksCounter: missed_blocks_counter
      }
      validatorDescription: validator_descriptions(
        limit: 1
        order_by: { height: desc }
      ) {
        avatarUrl: avatar_url
        moniker
      }
    }
    slashingParams: slashing_params(order_by: { height: desc }, limit: 1) {
      params
    }
  }
`

/**
 * __useValidatorsQuery__
 *
 * To run a query within a React component, call `useValidatorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useValidatorsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ValidatorsQuery,
    ValidatorsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ValidatorsQuery, ValidatorsQueryVariables>(
    ValidatorsDocument,
    options
  )
}
export function useValidatorsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ValidatorsQuery,
    ValidatorsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ValidatorsQuery, ValidatorsQueryVariables>(
    ValidatorsDocument,
    options
  )
}
export type ValidatorsQueryHookResult = ReturnType<typeof useValidatorsQuery>
export type ValidatorsLazyQueryHookResult = ReturnType<
  typeof useValidatorsLazyQuery
>
export type ValidatorsQueryResult = Apollo.QueryResult<
  ValidatorsQuery,
  ValidatorsQueryVariables
>