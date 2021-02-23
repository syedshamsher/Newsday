import {
    FETCH_NEWS_BY_SOURCE_REQUEST,
    FETCH_NEWS_BY_SOURCE_SUCCESS,
    FETCH_NEWS_BY_SOURCE_FAILURE,
  } from "./actionTypes"
  
  const initState = {
    isLoading: false,
    error: null,
    newsBySource: []
  }
  
  export const newsBySourceReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case FETCH_NEWS_BY_SOURCE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
  
        case FETCH_NEWS_BY_SOURCE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                newsBySource: payload
            }
  
        case FETCH_NEWS_BY_SOURCE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload,
                newsBySource: []
            }
        default:
            return state
    }
  }
  