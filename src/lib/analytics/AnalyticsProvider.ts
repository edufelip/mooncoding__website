import ga4Provider from './GA4Provider'

class EventsDispatcher {
  private readonly providersList: IAnalyticsProvider[]

  constructor (providersArray: IAnalyticsProvider[]) {
    this.providersList = providersArray
  }

  logScreenView (screenName: string): void {
    this.providersList.forEach((provider) => {
      provider.logScreenView(screenName)
    })
  }
}

const eventsDispatcher = new EventsDispatcher([])

export default eventsDispatcher
