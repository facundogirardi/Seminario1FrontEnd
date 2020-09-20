import React from 'react'
import DaschboardIcon from '@material-ui/icons/Dashboard'
import LockIcon from '@material-ui/icons/Lock'
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import GetApp from '@material-ui/icons/GetApp'
import ChromeReaderMode from '@material-ui/icons/ChromeReaderMode'
import StyleIcon from '@material-ui/icons/Style'
import allThemes from './themes'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PollIcon from '@material-ui/icons/Poll';
import InfoIcon from '@material-ui/icons/Info';
import CreateIcon from '@material-ui/icons/Create';
import HomeIcon from '@material-ui/icons/Home';
import ContactsIcon from '@material-ui/icons/Contacts';

const getMenuItems = (props) => {
  const {
    intl,
    menuContext,
    themeContext,
    a2HSContext,
    auth: authData,
  } = props
  const { isDesktop, isAuthMenuOpen, useMiniMode, setMiniMode } = menuContext
  const { themeID, setThemeID } = themeContext
  const { auth, setAuth } = authData
  const { isAppInstallable, isAppInstalled, deferredPrompt } = a2HSContext

  const isAuthorised = auth.isAuthenticated

  const themeItems = allThemes.map((t) => {
    return {
      value: undefined,
      visible: true,
      primaryText: intl.formatMessage({ id: t.id }),
      onClick: () => {
        setThemeID(t.id)
      },
      leftIcon: <StyleIcon style={{ color: t.color }} />,
    }
  })

  if (isAuthMenuOpen && isAuthorised) {
      return [
        {
        value: '/',
        visible: true,
        primaryText: intl.formatMessage({ id: 'Inicio' }),
        leftIcon: <HomeIcon />,
        },
        {
          value: '/ABM',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'ABM',
          }),
          leftIcon: <CreateIcon />,
        },
        {
          value: '/Encuesta',
          visible: false,
          primaryText: intl.formatMessage({ id: 'Encuesta' }),
          leftIcon: <PollIcon />,
        },
        {
          value: '/Resultados',
          visible: false,
          primaryText: intl.formatMessage({
            id: 'Resultados',
          }),
          leftIcon: <DaschboardIcon />,
        },
        {
          value: '/signin',
          onClick: isAuthorised
            ? () => {
                setAuth({ isAuthenticated: false })
              }
            : () => {},
          visible: true,
          primaryText: isAuthorised
            ? intl.formatMessage({ id: 'sign_out' })
            : intl.formatMessage({ id: 'sign_in' }),
          leftIcon: isAuthorised ? <ExitToAppIcon /> : <LockIcon />,
        },
      {
        value: '/about',
        visible: isAuthorised,
        primaryText: intl.formatMessage({ id: 'Informacion' }),
        leftIcon: <InfoIcon />,
      },
      {
        value: null,
        visible: isAppInstallable && !isAppInstalled,
        onClick: () => {
          deferredPrompt.prompt()
        },
        primaryText: intl.formatMessage({
          id: 'install',
          defaultMessage: 'Install',
        }),
        leftIcon: <GetApp />,
      },
       { divider: true },
      {
        primaryText: intl.formatMessage({ id: 'settings' }),
        primaryTogglesNestedList: true,
        leftIcon: <SettingsIcon />,
        nestedItems: [
          {
            primaryText: intl.formatMessage({ id: 'theme' }),
            secondaryText: intl.formatMessage({ id: themeID }),
            primaryTogglesNestedList: true,
            leftIcon: <StyleIcon />,
            nestedItems: themeItems,
          },
          {
            visible: isDesktop ? true : false,
            onClick: () => {
              setMiniMode(!useMiniMode)
            },
            primaryText: intl.formatMessage({
              id: 'menu_mini_mode',
            }),
            leftIcon: useMiniMode ? <MenuOpenIcon /> : <ChromeReaderMode />,
          },
        ],
      },
    ]
  }
  else{
    return [
        {
        value: '/',
        visible: true,
        primaryText: intl.formatMessage({ id: 'Inicio' }),
        leftIcon: <HomeIcon />,
        },
      {
        value: '/ABM',
        visible: isAuthorised,
        primaryText: intl.formatMessage({
          id: 'ABM',
        }),
        leftIcon: <CreateIcon />,
      },
      {
        value: '/about',
        visible: isAuthorised,
        primaryText: intl.formatMessage({ id: 'Informacion' }),
        leftIcon: <InfoIcon />,
      },
      {
          value: '/signin',
          onClick: isAuthorised
            ? () => {
                setAuth({ isAuthenticated: false })
              }
            : () => {},
          visible: true,
          primaryText: isAuthorised
            ? intl.formatMessage({ id: 'sign_out' })
            : intl.formatMessage({ id: 'sign_in' }),
          leftIcon: isAuthorised ? <ExitToAppIcon /> : <LockIcon />,
        },
      {
        value: null,
        visible: isAppInstallable && !isAppInstalled,
        onClick: () => {
          deferredPrompt.prompt()
        },
        primaryText: intl.formatMessage({
          id: 'install',
          defaultMessage: 'Install',
        }),
        leftIcon: <GetApp />,
      },
      {
        value: '/Encuesta',
        visible: false,
        primaryText: intl.formatMessage({ id: 'Encuesta' }),
        leftIcon: <PollIcon />,
      },
      {
        value: '/Resultados',
        visible: false,
        primaryText: intl.formatMessage({
          id: 'Resultados',
        }),
        leftIcon: <DaschboardIcon />,
      },
       { divider: true },
      {
        primaryText: intl.formatMessage({ id: 'settings' }),
        primaryTogglesNestedList: true,
        leftIcon: <SettingsIcon />,
        nestedItems: [
          {
            primaryText: intl.formatMessage({ id: 'theme' }),
            secondaryText: intl.formatMessage({ id: themeID }),
            primaryTogglesNestedList: true,
            leftIcon: <StyleIcon />,
            nestedItems: themeItems,
          },
          {
            visible: isDesktop ? true : false,
            onClick: () => {
              setMiniMode(!useMiniMode)
            },
            primaryText: intl.formatMessage({
              id: 'menu_mini_mode',
            }),
            leftIcon: useMiniMode ? <MenuOpenIcon /> : <ChromeReaderMode />,
          },
        ],
      },
    ]
  }

  
}
export default getMenuItems
