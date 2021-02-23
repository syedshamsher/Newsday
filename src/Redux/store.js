import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { defaultQueryReducer } from './DefaultQuery/reducer';
import { newsByCategoryReducer } from './NewsByCategory/reducer';
import { newsByQueryReducer } from './NewsByQuery/reducer';
import { newsBySourceReducer } from './NewsBySource/reducer';
import { topStoriesReducer } from './TopStories/reducer';
import { topStoriesFromIndiaReducer } from './TopStoriesFromIndia/reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    topStories: topStoriesReducer,
    topStoriesFromIndia: topStoriesFromIndiaReducer,
    defaultQuery: defaultQueryReducer,
    newsBySource: newsBySourceReducer,
    newsByCategory: newsByCategoryReducer,
    newsByQuery: newsByQueryReducer,
})

export const store = createStore( rootReducer, composeEnhancer(applyMiddleware(thunk)))