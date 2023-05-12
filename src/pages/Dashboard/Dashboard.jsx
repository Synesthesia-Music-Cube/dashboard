import { Typography } from '@mui/material'
import { DashboardMoodForm } from '../../components'
import { DashboardMusicTypeForm } from '../../components/dashboard/DashboardMusicTypeForm'
import { StyledContainer } from '../../components/StyledComponents/StyledContainer'

export const Dashboard = () => {
  return (
    <StyledContainer>
      <Typography variant={'h2'}>Cube controller</Typography>
      <DashboardMoodForm />
      <DashboardMusicTypeForm />
    </StyledContainer>
  )
}
