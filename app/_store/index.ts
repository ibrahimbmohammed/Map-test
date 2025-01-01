import { configureStore } from '@reduxjs/toolkit';

import userReducer from '@/app/_store/slices/user-slice';
import quoteReducer from '@/app/_store/slices/quote-slice';

export const store = configureStore({
  reducer: {
    userData: userReducer,
    quoteData: quoteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
