import axios from 'axios';

export const prefix = 'api/';

export const get = async (url) => {
  const res = await axios.get(`${prefix}${url}`)
  return res.data || {}
}