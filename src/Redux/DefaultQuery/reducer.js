import {
    FETCH_DEFAULT_QUERY_REQUEST,
    FETCH_DEFAULT_QUERY_SUCCESS,
    FETCH_DEFAULT_QUERY_FAILURE,
  } from "./actionTypes"
  
  const initState = {
    isLoading: false,
    error: null,
    defaultQuery: []
  }
  
  export const defaultQueryReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case FETCH_DEFAULT_QUERY_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
  
        case FETCH_DEFAULT_QUERY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                defaultQuery: payload
            }
  
        case FETCH_DEFAULT_QUERY_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        default:
            return state
    }
  }
  