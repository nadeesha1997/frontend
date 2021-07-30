import axios from "axios"
const Interceptor=axios.interceptors.request.use((config)=>{
    const token=localStorage.getItem('auth')?JSON.parse(localStorage.getItem('auth')).user.accessToken:null;
    if(token) config.headers.Authorization = `Bearer ${token}`
    return config
  }, error=>{
    return Promise.reject(error)
  })
  export default Interceptor