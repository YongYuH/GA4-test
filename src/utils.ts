function gtag() {
  ;(window as any).dataLayer = (window as any).dataLayer || []
  // eslint-disable-next-line
  ;(window as any).dataLayer.push(arguments)
}

export function initializeGtag(): void {
  const GoogleAnalyticsMeasurementID = 'G-0NS23S5KS9'
  // @ts-ignore
  gtag('js', new Date())
  // @ts-ignore
  gtag('config', GoogleAnalyticsMeasurementID)
}

interface PushGA4EventArgs {
  campaignName?: string
  event_name: string
  followName?: string
  followType?: string
  method?: string
  newsletterName?: string
  paywallType?: string
  triggerPoint?: string
}

export function pushGA4Event(args: PushGA4EventArgs): void {
  const dataLayer = (window as any).dataLayer
  if (!dataLayer) {
    return
  }

  const {
    campaignName,
    event_name,
    followName,
    followType,
    method,
    newsletterName,
    paywallType,
    triggerPoint,
  } = args

  const requiredParameters = {
    event_name,
  }

  const optionalParameters = {
    ...(campaignName ? { campaign_name: campaignName } : {}),
    ...(followName ? { follow_name: followName } : {}),
    ...(followType ? { follow_type: followType } : {}),
    ...(method ? { method: method } : {}),
    ...(newsletterName ? { newsletter_name: newsletterName } : {}),
    ...(paywallType ? { paywall_type: paywallType } : {}),
    ...(triggerPoint ? { trigger_point: triggerPoint } : {}),
  }

  const parameters = {
    ...requiredParameters,
    ...optionalParameters,
  }

  // @ts-ignore
  gtag(parameters)
}