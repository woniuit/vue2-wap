import {
  request
} from '@/request/axios'
export function list(data) {
  return request(false, {
    url: '/download/simplelist',
    method: 'get',
    params: data
  })
}

