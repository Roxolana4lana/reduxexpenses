import { ADD_POST, DELETE_POST, FETCH_POST } from './types'
import { ADD_INCOME, DELETE_INCOME, FETCH_INCOME } from './types'
import axios from 'axios'

const apiUrl = 'http://127.0.0.1:8000/expenses/'

export const createPost = ({ title, category, amount }) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}`, { title, category, amount })
            .then(res => {
                dispatch(createPostSuccess(res.data))
            })
            .catch(error => {
                throw (error)
            })
    }
}
export const createPostSuccess = (data) => {
    return {
        type: ADD_POST,
        payload: {
            title: data.title,
            category: data.category,
            amount: data.amount
        }
    }
}

export const deletePostSuccess = id => {
    return {
        type: DELETE_POST,
        payload: {
            id
        }
    }
}

export const deletePost = id => {
    return (dispatch) => {
        return axios.delete(`${apiUrl}${id}/`)
            .then(res => {
                dispatch(deletePostSuccess(res.data))
            })
            .catch(error => {
                throw (error)
            })
    }
}

export const fetchPosts = posts => {
    return {
        type: FETCH_POST,
        posts
    }
}

export const fetchAllPosts = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(res => {
                dispatch(fetchPosts(res.data))
            })
            .catch(error => {
                throw (error)
            })
    }
}

//Incomes
const apiInc = 'http://127.0.0.1:8000/incomes/'

export const createIncome = ({ from_where, amount }) => {
    return (dispatch) => {
        return axios.post(`${apiInc}`, { from_where, amount })
            .then(res => {
                dispatch(createIncomeSuccess(res.data))

            })
            .catch(error => {
                throw (error)
            })
    }

}

export const createIncomeSuccess = (data) => {
    return {
        type: ADD_INCOME,
        payload: {
            from_where: data.from_where,
            amount: data.amount
        }
    }
}

export const deleteIncome = id => {
    return (dispatch) => {
        return axios.delete(`${apiInc}${id}/`)
            .then(res => {
                dispatch(deleteIncomeSuccess(res.data))
            })
            .catch(error => {
                throw (error)
            })
    }
}
export const deleteIncomeSuccess = id => {
    return {
        type: DELETE_INCOME,
        payload: {
            id
        }
    }
}

export const fetchIncome = incomes => {
    return {
        type: FETCH_INCOME,
        incomes
    }
}

export const fetchAllIncomes = () => {
    return (dispatch) => {
        return axios.get(apiInc)
            .then(res => {
                dispatch(fetchIncome(res.data))
            })
            .catch(error => {
                throw (error)
            })
    }
}


