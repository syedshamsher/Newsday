import {
    FETCH_NEWS_BY_CATEGORY_REQUEST,
    FETCH_NEWS_BY_CATEGORY_SUCCESS,
    FETCH_NEWS_BY_CATEGORY_FAILURE,
  } from "./actionTypes"
  
  const initState = {
    isLoading: false,
    error: null,
    newsByCategory: []
  }
  
  export const newsByCategoryReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case FETCH_NEWS_BY_CATEGORY_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
  
        case FETCH_NEWS_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                newsByCategory: payload
            }
  
        case FETCH_NEWS_BY_CATEGORY_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload,
                newsByCategory: []
            }
        default:
            return state
    }
  }
  