import {combineReducers,createStore} from "redux";
import { BTDatVeXemPhim } from "./reducer/BTDatVeXemPhim";


const rootReducer = combineReducers({
    BTDatVeXemPhim,
})

export const store = createStore(rootReducer);