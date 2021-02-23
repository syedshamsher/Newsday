import {
    FETCH_TOP_STORIES_REQUEST,
    FETCH_TOP_STORIES_SUCCESS,
    FETCH_TOP_STORIES_FAILURE,
  } from "./actionTypes"
  
  const initState = {
    isLoading: false,
    error: null,
    topStories: []
  }
  
  export const topStoriesReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case FETCH_TOP_STORIES_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
  
        case FETCH_TOP_STORIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                topStories: payload
            }
  
        case FETCH_TOP_STORIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        default:
            return state
    }
  }
  