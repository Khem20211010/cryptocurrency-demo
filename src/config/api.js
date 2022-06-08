import {axios,api} from './intercept'

export const getchain=()=>{
  console.log(api())
  return axios.get(api()+'/chain').then(res=>res.data)
}
export const getmine=()=>{
    return axios.get(api()+'/mine').then(res=>res.data)
  }
  export const posttransaction=(params)=>{
    return axios.post(api()+'/transactions/new',params).then(res=>res.data)
  }