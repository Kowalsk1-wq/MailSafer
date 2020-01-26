import app from './app'
import chalk from 'chalk'
import figlet from 'figlet'

import { version } from '../package.json'

app.listen(process.env.PORT || 3000, () => {
  console.log(
    chalk.red(
      `${figlet.textSync('MailSafer', {
        font: 'Doom',
        horizontalLayout: 'default',
        verticalLayout: 'default',
      })} v${version}\nWelcome To Our Service!!!`
    )
  )
})
