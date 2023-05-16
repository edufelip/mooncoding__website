import { type Analytics, getAnalytics, logEvent } from '@firebase/analytics'
import initFirebaseAnalytics from '../../../firebase'

class GA4Provider implements IAnalyticsProvider {
  analytics: Analytics

  constructor () {
    initFirebaseAnalytics()
    this.analytics = getAnalytics()
  }

  logScreenView (screenName: string): void {
    logEvent(this.analytics, 'screen_view', {
      firebase_screen: screenName,
      firebase_screen_class: ''
    })
    console.log(screenName)
  }
}

const ga4Provider = new GA4Provider()

export default ga4Provider
