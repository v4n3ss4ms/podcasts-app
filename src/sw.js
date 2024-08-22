const CACHE_NAME = 'v1'
const INVALIDATE_CACHE_MS = 86_400_000
// const INVALIDATE_CACHE_MS_1_MIN = 60_000

const broadcast = new BroadcastChannel('sw-tunnel')

self.addEventListener('install', function () {
  self.skipWaiting()
  console.log('Service worker has been installed.')
})

self.addEventListener('activate', function (event) {
  event.waitUntil(handleActivation())
})

async function handleActivation() {
  await self.clients.claim()
  console.log('Service worker has been activated.')
}

self.addEventListener('fetch', function (event) {
  const url = new URL(event.request.url)
  if (
    url.origin.includes('api.allorigins.win') ||
    url.origin.includes('is1-ssl.mzstatic.com')
  ) {
    onMessage({ type: 'STATE_LOAD_DATA', isFetching: true })
    return event.respondWith(cacheFirst(event.request))
  }
})

async function invalidateCache(cache, keys) {
  const now = new Date().getTime()

  for (const key of keys) {
    const url = new URL(key.url)
    const cacheTime = url.searchParams.get('sw-cache')
    if (now - INVALIDATE_CACHE_MS > cacheTime) {
      await cache.delete(key)
    }
  }
}

function findSearchedRequest(request, keys) {
  return keys
    .filter((key) => {
      const url = new URL(key.url)
      url.searchParams.has('sw-cache') && url.searchParams.delete('sw-cache')
      return request.url === url.href
    })
    .at(0)
}

const cacheFirst = async (request) => {
  const cache = await caches.open(CACHE_NAME)
  const keys = await cache.keys()
  await invalidateCache(cache, keys)
  const requestFound = findSearchedRequest(request, keys)

  if (requestFound) {
    let response = await caches.match(requestFound)
    if (response) {
      onMessage({ type: 'STATE_LOAD_DATA', isFetching: false })
      return response
    }
  }

  console.log('Fetching from network...', request.url)
  const responseFromNetwork = await fetch(request)
  await addCache(request, responseFromNetwork)

  onMessage({ type: 'STATE_LOAD_DATA', isFetching: false })
  return responseFromNetwork
}

async function addCache(request, response) {
  const copy = response.clone()
  const url = new URL(request.url)
  url.searchParams.set('sw-cache', new Date().getTime().toString())
  const newRequest = new Request(url)

  const cache = await caches.open(CACHE_NAME)
  await cache.put(newRequest, copy)
}

function onMessage(message) {
  broadcast.postMessage(message)
}
