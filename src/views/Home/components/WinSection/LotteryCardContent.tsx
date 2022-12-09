import { useState, useEffect } from 'react'
import { Flex, Text, Skeleton, Button, ArrowForwardIcon } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { useTranslation } from 'contexts/Localization'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import { usePriceCakeBusd } from 'state/farms/hooks'
import Balance from 'components/Balance'
import styled from 'styled-components'
import { fetchLottery, fetchCurrentLotteryId } from 'state/lottery/helpers'
import { getBalanceAmount } from 'utils/formatBalance'
import { SLOW_INTERVAL } from 'config/constants'
import useSWRImmutable from 'swr/immutable'

const StyledLink = styled(NextLinkFromReactRouter)`
  width: 100%;
`

const StyledBalance = styled(Balance)`
  background: ${({ theme }) => theme.colors.gradients.gold};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const LotteryCardContent = () => {
  const { t } = useTranslation()
  const { observerRef, isIntersecting } = useIntersectionObserver()
  const [loadData, setLoadData] = useState(false)
  const cakePriceBusd = usePriceCakeBusd()
  const { data: currentLotteryId } = useSWRImmutable(loadData ? ['currentLotteryId'] : null, fetchCurrentLotteryId, {
    refreshInterval: SLOW_INTERVAL,
  })
  const { data: currentLottery } = useSWRImmutable(
    currentLotteryId ? ['currentLottery'] : null,
    async () => fetchLottery(currentLotteryId.toString()),
    {
      refreshInterval: SLOW_INTERVAL,
    },
  )

  const cakePrizesText = t('%cakePrizeInUsd% in CAKE prizes this round', { cakePrizeInUsd: cakePriceBusd.toString() })
  const [pretext, prizesThisRound] = cakePrizesText.split(cakePriceBusd.toString())
  const amountCollectedInCake = currentLottery ? parseFloat(currentLottery.amountCollectedInCake) : null
  const currentLotteryPrize = amountCollectedInCake ? cakePriceBusd.times(amountCollectedInCake) : null

  useEffect(() => {
    if (isIntersecting) {
      setLoadData(true)
    }
  }, [isIntersecting])

  return (
    <>
      <Flex flexDirection="column" mt="48px">
        <Text color="white" bold fontSize="16px">
          {'Online Games'}
        </Text>
        
        <Text color="white" mb="40px">
          {'Play online Games and win prizes, get referral income from 3 levels.'}
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center">
        <StyledLink to="https://khiladi.net/" id="homepage-prediction-cta">
          <Button width="100%">
            <Text bold color="invertedContrast">
              {'Play Games'}
            </Text>
            <ArrowForwardIcon ml="4px" color="invertedContrast" />
          </Button>
        </StyledLink>
      </Flex>
    </>
  )
}

export default LotteryCardContent
