import { getAnalytics, logEvent } from 'firebase/analytics'

const logScreenView = (screenName: string): void => {
  logEvent(getAnalytics(), 'screen_view', {
    firebase_screen: screenName,
    firebase_screen_class: ''
  })
}

export default logScreenView
