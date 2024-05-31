import axios from 'axios';

export const sendLogin = async ({email, password}) =>{
    const responses = await axios.post('http://localhost:3000/login/enter', {email, password})
    if(responses.status !== 200){
        return alert('credenciales invalidas')
    } 
    return responses.data
}

export const createLogin = async ({email, password}) =>{
    const res = await axios.post('http://localhost:3000/login', {email, password})
   /*  if(res.status !== 200){
        return alert('credenciales invalidas')
    } */
    //localStorage.setItem('token', JSON.stringify(res.data))
}

export const getPerfil = async (id) =>{
    const responses = await axios.get(`http://localhost:3000/perfil/see/${id}`)
    if(responses.status !== 200){
        return alert('No existe informacion')
    } 
    return responses.data
}

export const getPerfil = async (id) =>{
    const responses = await axios.get(`http://localhost:3000/perfil/see/${id}`)
    if(responses.status !== 200){
        return alert('No existe informacion')
    } 
    return responses.data
}