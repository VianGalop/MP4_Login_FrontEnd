/* import axios from 'axios';

const  API_URL = axios.create({
    baseURL: 'http://localhost:3000/login',   
})

/* export const sendLogin = async ({email, password}) =>{
    const res = await API_URL.post(`${API_URL}/enter`,{ email,
        password})
    console.log('la res',res.data)
    return res.data
} */
/* export const sendLogin = async ({email, password}) =>{
    axios.post('http://localhost:3000/login', {
        email,
        password
    })
    .then(response => {
        console.log(response.data);
        localStorage.setItem('dataUser',JSON.stringify(response.data))
    })
    .catch(error => {
        console.error('Error al iniciar sesión:', error);
    });
}


export const createLogin = () =>{
    API_URL.post('/create')

}

export const getPerfil = async () =>{
     API_URL.get('/registration/see')
        //localStorage.setItem('userLogin', JSON.stringify(res.data)); 
}
export const createPerfil = () =>{
    API_URL.post('/registration/datePerfil')

}
 */

