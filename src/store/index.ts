import { configureStore, ThunkDispatch, AnyAction, combineReducers } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { HYDRATE } from 'next-redux-wrapper';

import { artistsReducer } from './artists/artistsSlice';
import { byIdReducer } from './byId/byIdSlice';
import { categoryReducer } from './category/categorySlice';
import { randomReducer } from './random/randomSlice';
import { relatedReducer } from './related/relatedSlice';
import { searchReducer } from './search/searchSlice';
import { trendingReducer } from './trending/trendingSlice';
import { userReducer } from './user/userSlice';

const rootReducer = (state: any, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        user: userReducer,
        trending: trendingReducer,
        artists: artistsReducer,
        related: relatedReducer,
        byId: byIdReducer,
        random: randomReducer,
        search: searchReducer,
        category: categoryReducer,
      });
      return combineReducer(state, action);
    }
  }
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

const makeStore = () => {
  // add middleware
  return store;
};

const wrapper = createWrapper(makeStore);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;

export default wrapper;
