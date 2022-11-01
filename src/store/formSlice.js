import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    isComunitar: false,
    options: [
      { value: 'jack', name: 'Jack' },
      { value: 'lucy', name: 'Lucy' },
      { value: 'yiminghe', name: 'Yiminghe' },
    ],
    values: {}
  },
  reducers: {
    toggleComunitar: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isComunitar = action.payload;
    },
    updateOptions: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.options = state.options.filter(option => option.value !== action.payload)
    },
    updateValues: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.values = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleComunitar, updateOptions, updateValues } = formSlice.actions

export default formSlice.reducer