import cyan from '@material-ui/core/colors/cyan'
import red from '@material-ui/core/colors/red'
import pink from '@material-ui/core/colors/pink'
import green from '@material-ui/core/colors/green'
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';


const themes = [
  {
    id: 'default',
    color: red[500],
    source: {
      palette: {
        primary: {
          main: '#e1f5fe',
        },
        secondary: red,
      },
    },
  },
  {
    id: 'Cyan',
    color: cyan[500],
    source: {
      palette: {
        primary: cyan,
        secondary: cyan,
        error: cyan,
      },
    },
  },
  {
    id: 'Verde',
    color: green[500],
    source: {
      palette: {
        primary: green,
        secondary: red,
        error: red,
      },
    },
  },
]

export default themes
