// store.js

import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import noteReducer from "./noteReducer";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
  };
  
  const rootReducer = combineReducers({
    notes: noteReducer,
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  
  export { store, persistor };