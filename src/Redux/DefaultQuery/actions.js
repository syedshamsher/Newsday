import { FETCH_DEFAULT_QUERY_REQUEST, 
         FETCH_DEFAULT_QUERY_SUCCESS, 
         FETCH_DEFAULT_QUERY_FAILURE 
} from './actionTypes'
import axios from 'axios';

export const defaultQueryRequest = () => ({
    type: FETCH_DEFAULT_QUERY_REQUEST

})

export const defaultQuerySuccess = (payload) => ({
    type: FETCH_DEFAULT_QUERY_SUCCESS,
    payload
})

export const defaultQueryFailure = (payload) => ({
    type: FETCH_DEFAULT_QUERY_FAILURE,
})

export const getDefaultQuery = () => (dispatch) => {
    const key = process.env.REACT_APP_API_KEY
    dispatch(defaultQueryRequest())
    axios.get(`https://newsapi.org/v2/everything?q=a&sortBy=publishedAt&pageSize=51&apiKey=${key}`)
        .then((res) => {
            dispatch(defaultQuerySuccess(res.data.articles))
        })
        .catch((err) => {
            dispatch(defaultQueryFailure(err))
        })
}