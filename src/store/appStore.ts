import {  combineReducers,configureStore } from "@reduxjs/toolkit";
import { persistStore,persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage";
 import company from "../redux/companySlice";
 import course from "../redux/courseSlice";
import branch from "../redux/branchSlice";
import content from "../redux/contentSlice";
import control from "../redux/controlSlice";
const persistConfig={
    key:'root',
    storage
}

const rootReducer=combineReducers({
   
companyReducer:company,
courseReducer:course,
branchReducer:branch,
contentReducer:content,
navigation:control
})

const persistedReducer=persistReducer(persistConfig,rootReducer)

export const appstore=configureStore({
    reducer:persistedReducer
})
export const persistor = persistStore(appstore);

