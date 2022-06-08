import axios from 'axios'
let api=()=>{ return 'http://127.0.0.1:'+sessionStorage.getItem('port')};
axios.defaults.baseURL = api
export {axios,api}