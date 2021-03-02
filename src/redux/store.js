import { createStore, applyMiddleware} from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const Middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...Middlewares));

const persistor = persistStore(store);

export { store, persistor };