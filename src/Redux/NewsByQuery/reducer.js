import {
    FETCH_QUERY_REQUEST,
    FETCH_QUERY_SUCCESS,
    FETCH_QUERY_FAILURE,
  } from "./actionTypes"
  
  const initState = {
    isLoading: false,
    error: null,
    newsByQuery: null
  }
  
  export const newsByQueryReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case FETCH_QUERY_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
  
        case FETCH_QUERY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                newsByQuery: payload
            }
  
        case FETCH_QUERY_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload,
                newsByQuery: null
            }
        default:
            return state
    }
  }
  