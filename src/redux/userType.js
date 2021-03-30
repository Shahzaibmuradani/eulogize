import { createSlice } from '@reduxjs/toolkit'

export const userType = createSlice({
  name: 'userType',
  initialState: {
    userType: ''
  },
  reducers: {
    setUserType: (state,action) => {
      state.userType = action.payload
    },
   
    
  }
})

// Action creators are generated for each case reducer function
export const { setUserType} = userType.actions

export default userType.reducer