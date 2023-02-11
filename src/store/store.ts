import {combineReducers, configureStore} from "@reduxjs/toolkit";
import shipmentsSlice from "../reducers/shipments";

const rootReducer = combineReducers({
    shipments: shipmentsSlice
})

export const store = configureStore({
    reducer: rootReducer
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;