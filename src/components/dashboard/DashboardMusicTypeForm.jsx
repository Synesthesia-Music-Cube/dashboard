import { useLocalStorage } from '../../hooks'
import { StyledFormControl } from '../StyledComponents'
import { FormControlLabel, Switch } from '@mui/material'

export const DashboardMusicTypeForm = () => {
  const [isRealtime, setIsRealtime] = useLocalStorage('isRealtime')

  const handleChange = (e) => {
    setIsRealtime((prev) => !prev)
  }

  return (
    <StyledFormControl clr={'sidePurple'}>
      <FormControlLabel
        control={<Switch onChange={handleChange} defaultChecked={isRealtime} />}
        label={`${isRealtime ? '' : 'Not'} ${
          isRealtime ? 'L' : 'l'
        }istening to realtime music.`}
      />
    </StyledFormControl>
  )
}
