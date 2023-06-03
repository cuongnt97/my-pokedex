import { configureStore } from "@reduxjs/toolkit";
import {AppSlice} from "./slices/AppSlice";
import {PokemonSlice} from './slices/PokemonSlice'

export const store = configureStore({
  reducer: {
    pokemon: PokemonSlice.reducer,
    app: AppSlice.reducer,
  },
});
