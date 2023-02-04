// It is like context api

import { composeWithDevTools } from "@redux-devtools/extension"
import { createStore } from "redux"
import { productReducer } from "./Reducers/productReducer"

export const store = createStore(productReducer, composeWithDevTools())