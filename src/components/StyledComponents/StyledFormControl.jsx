import { FormControl, styled } from '@mui/material'

export const StyledFormControl = styled(FormControl)(
  ({ theme, clr = 'sideBlue' }) => {
    return {
      background: theme.color[clr],
      padding: theme.widths.spacing,
      borderRadius: theme.border.radius8,
      marginBottom: theme.widths.spacing * 2,
      width: '100%',
    }
  }
)
