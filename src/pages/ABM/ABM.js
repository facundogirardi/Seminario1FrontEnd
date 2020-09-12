import Button from '@material-ui/core/Button'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import QuestionDialog from 'material-ui-shell/lib/containers/QuestionDialog/QuestionDialog'
import React, { useContext } from 'react'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import { useIntl } from 'react-intl'
import { useSimpleValues } from 'base-shell/lib/providers/SimpleValues'

const DIALOG_ID = 'ABM'

const HomePage = () => {
  const intl = useIntl()
  const { setValue } = useSimpleValues()

  return (
    <Page pageTitle={intl.formatMessage({ id: 'Encuesta' })}>
      <Scrollbar
        style={{ height: '100%', width: '100%', display: 'flex', flex: 1 }}
      >
        {intl.formatMessage({ id: ' ' })}
        <br />
        <Button
          onClick={() => {
            setValue(DIALOG_ID, true)
          }}
        >
          ESTE ES EL ABM
        </Button>
        <QuestionDialog
          id={DIALOG_ID}
          title="Dialog title"
          message="Dialog message"
          action="OK"
          handleAction={(handleClose) => {
            //Do some stuff and then
            handleClose()
          }}
        />
      </Scrollbar>
    </Page>
  )
}
export default HomePage
