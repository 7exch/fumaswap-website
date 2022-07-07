import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'
import SalesSection from './components/SalesSection'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  const { t } = useTranslation()

  return (
    <>
      <PageMeta />  
       
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}       
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...cakeSectionData(t)} />
        <CakeDataRow />
        
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}        
        background="linear-gradient(180deg, #7645D9 0%, #5121B1 100%)" 
        index={2}
        hasCurvedDivider={false}
      >      
        <Footer />
      </PageSection>
     
    </>
  )
}

export default Home
