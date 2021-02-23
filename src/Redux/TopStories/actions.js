import { FETCH_TOP_STORIES_REQUEST, 
         FETCH_TOP_STORIES_SUCCESS, 
         FETCH_TOP_STORIES_FAILURE 
} from './actionTypes'
import axios from 'axios';

export const topStoriesRequest = () => ({
    type: FETCH_TOP_STORIES_REQUEST

})

export const topStoriesSuccess = (payload) => ({
    type: FETCH_TOP_STORIES_SUCCESS,
    payload
})

export const topStoriesFailure = (payload) => ({
    type: FETCH_TOP_STORIES_FAILURE,
})

export const getTopStories = () => (dispatch) => {
    const key = process.env.REACT_APP_API_KEY
    dispatch(topStoriesRequest())
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`)
        .then((res) => {
            dispatch(topStoriesSuccess(res.data.articles))
        })
        .catch((err) => {
            dispatch(topStoriesFailure(err))
        })
}