import { axios } from './utils/axios'

async function *urlTracking(payload) {
  for (const url of payload) {
    const request = await axios(url)
    yield request
  }
}

const init = async () => {

  const set = new Set()
  set.add('http://google.pl')
  set.add('http://facebook.com')

  const iterator = urlTracking(set)

  for await (const response of iterator) {
    console.log(response)
  }
}

init()
