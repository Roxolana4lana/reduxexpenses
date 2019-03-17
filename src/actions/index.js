import {ADD_POST, DELETE_POST, FETCH_POST} from './types'
import axios from 'axios'

const apiUrl = 'http://127.0.0.1:8000/expenses/'

export const createPost = ({title,category,amount})=>{
    return(dispatch)=>{
        return axios.post(`${apiUrl}`, {title,category,amount})
        .then(res=>{
            dispatch(createPostSuccess(res.data))
        })
        .catch(error=>{
            throw(error)
        })
    }
}
export const createPostSuccess = (data)=>{
    return{
        type:ADD_POST,
        payload:{
            title:data.title,
            category:data.category,
            amount:data.amount
        }
    }
}

export const deletePostSuccess = id =>{
    return{
        type:DELETE_POST,
        payload:{
            id
        }
    }
}

export const deletePost = id =>{
    return(dispatch)=>{
        return axios.delete(`${apiUrl}${id}/`)
        .then(res=>{
            dispatch(deletePostSuccess(res.data))
        })
        .catch(error=>{
            throw(error)
        })
    }
}

export const fetchPosts = posts =>{
    return{
        type:FETCH_POST,
        posts
    }
}

export const fetchAllPosts = () =>{
    return(dispatch)=>{
        return axios.get(apiUrl)
        .then(res=>{
            dispatch(fetchPosts(res.data))
        })
        .catch(error=>{
            throw(error)
        })
    }
}