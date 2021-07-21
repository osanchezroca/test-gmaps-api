import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import warehouseReducer from './slices/warehouseSlice';

export const store = configureStore({
  reducer: {
    warehouse: warehouseReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
