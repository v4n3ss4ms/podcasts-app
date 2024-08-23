export const loader = async () => {
  if (!('serviceWorker' in window.navigator)) {
    console.error('Service Worker not supported')
    return true
  }

  const registration = await window.navigator.serviceWorker.ready
  if (registration.active) {
    console.debug('Service Worker ready', registration.active.state)
  }

  return true
}
