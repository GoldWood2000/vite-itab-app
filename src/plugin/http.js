import axios from 'axios';

export const prefix = process.env.NODE_ENV === 'crx' ? 'https://api.codelife.cc/api/' : 'api/';

export const get = async (url) => {
  const res = await axios.get(`${prefix}${url}`)
  return res.data || {}
}