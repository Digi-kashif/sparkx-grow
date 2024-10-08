import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from '././apis'; 

const store = configureStore({
    reducer: {
        // Add the API reducer to your store
        [usersApi.reducerPath]: usersApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware),
});

export default store;
