import { FETCH_QUERY_REQUEST, 
         FETCH_QUERY_SUCCESS, 
         FETCH_QUERY_FAILURE 
} from './actionTypes'
import axios from 'axios';

export const queryRequest = () => ({
    type: FETCH_QUERY_REQUEST

})

export const querySuccess = (payload) => ({
    type: FETCH_QUERY_SUCCESS,
    payload
})

export const queryFailure = (payload) => ({
    type: FETCH_QUERY_FAILURE,
})

export const getNewsByQuery = (query) => (dispatch) => {
    const key = process.env.REACT_APP_API_KEY
    dispatch(queryRequest())
    axios.get(`https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&pageSize=51&apiKey=${key}`)
        .then((res) => {
            dispatch(querySuccess(res.data.articles))
        })
        .catch((err) => {
            dispatch(queryFailure(err))
        })
}