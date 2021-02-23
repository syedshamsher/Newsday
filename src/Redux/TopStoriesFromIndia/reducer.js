import {
    FETCH_TOP_STORIES_INDIA_REQUEST,
    FETCH_TOP_STORIES_INDIA_SUCCESS,
    FETCH_TOP_STORIES_INDIA_FAILURE,
  } from "./actionTypes"
  
  const initState = {
    isLoading: false,
    error: null,
    topStoriesFromIndia: []
  }
  
  export const topStoriesFromIndiaReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case FETCH_TOP_STORIES_INDIA_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
  
        case FETCH_TOP_STORIES_INDIA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                topStoriesFromIndia: payload
            }
  
        case FETCH_TOP_STORIES_INDIA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        default:
            return state
    }
  }
  