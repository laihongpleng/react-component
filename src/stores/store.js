//state management using with context or redux, we used for manage in state -> useState()
//redux is a state management library
//how to install redux with pnpm : pnpm add @reduxjs/toolkit react-redux

import { configureStore } from "@reduxjs/toolkit";

import homeStore from "./homeStore.js";

export const store = configureStore({
    reducer : {
        homeData : homeStore.reducer,
    }
})


//configureStore -> create store 