import { FETCH_TOP_STORIES_INDIA_REQUEST, 
         FETCH_TOP_STORIES_INDIA_SUCCESS, 
         FETCH_TOP_STORIES_INDIA_FAILURE 
} from './actionTypes'
import axios from 'axios';

export const topStoriesRequest = () => ({
    type: FETCH_TOP_STORIES_INDIA_REQUEST

})

export const topStoriesSuccess = (payload) => ({
    type: FETCH_TOP_STORIES_INDIA_SUCCESS,
    payload
})

export const topStoriesFailure = (payload) => ({
    type: FETCH_TOP_STORIES_INDIA_FAILURE,
})

export const getTopStoriesFromIndia = () => (dispatch) => {
    dispatch(topStoriesRequest())
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=514026004a8f44fbbc312b7c206cb32d`)
        .then((res) => {
            dispatch(topStoriesSuccess(res.data.articles))
        })
        .catch((err) => {
            dispatch(topStoriesFailure(err))
        })
}