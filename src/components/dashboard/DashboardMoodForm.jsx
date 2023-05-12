import { useState } from 'react'

import { FormLabel, Radio, RadioGroup, FormControlLabel } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'

import { StyledFormControl, StyledButton } from '..'
import { useLocalStorage } from '../../hooks'

export const DashboardMoodForm = () => {
  const [moodStorage, setMoodStorage] = useLocalStorage('mood')
  const [mood, setMood] = useState(moodStorage ?? '')

  const handleMoodChange = (e) => {
    setMood(e.target.value)
  }

  const handleSubmit = () => {
    setMoodStorage(mood)
  }

  return (
    <form onSubmit={handleSubmit}>
      <StyledFormControl>
        <FormLabel>Mood</FormLabel>

        <RadioGroup
          onChange={handleMoodChange}
          defaultValue={moodStorage ? moodStorage : 'happy'}
          name='mood'
          row
        >
          <FormControlLabel
            value={'happy'}
            control={<Radio />}
            label={'Happy'}
          />
          <FormControlLabel value={'sad'} control={<Radio />} label={'Sad'} />
          <FormControlLabel
            value={'party'}
            control={<Radio />}
            label={'Party'}
          />
          <FormControlLabel
            value={'chill'}
            control={<Radio />}
            label={'Chill'}
          />
        </RadioGroup>
        <StyledButton
          type='submit'
          startIcon={<SaveIcon />}
          variant={'outlined'}
        >
          Save
        </StyledButton>
      </StyledFormControl>
    </form>
  )
}
