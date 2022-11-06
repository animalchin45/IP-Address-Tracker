import ipify from '../apis/ipify'

const KEY = process.env.IPIFY_KEY

// axios request for location
export const location = async (term, type) => {
  if (type) {
    const response = await ipify.get('/country,city', {
      params: {
        apiKey: KEY,
        ipAddress: term,
      },
    })

    return response.data
  } else {
    const response = await ipify.get('/country,city', {
      params: {
        apiKey: KEY,
        ipAddress: null,
        domain: term,
      },
    })

    return response.data
  }
}
