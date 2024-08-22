export function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(
      import.meta.env.MODE === 'production' ? '/sw.js' : '/dev-sw.js?dev-sw',
      {
        scope: './',
        updateViaCache: 'none',
      },
    )
  }
}
