import { createSlice } from '@reduxjs/toolkit';

interface userDataState {
  first_name: string;
  last_name: string;
  email: string;
  user_type: string;
  registeringUserEmail: string | null;
}

const userDataSlice = createSlice({
  name: 'userData',
  initialState: {} as userDataState,
  reducers: {
    setUserData: (state, action) => {
      const newState = Object.assign(state, action.payload);
      return newState;
    },
    setRegisteringUserEmail: (state, action) => {
      const newState = Object.assign(state, { registeringUserEmail: action.payload });
      return newState;
    },
    removeRegisteringUserEmail: (state) => {
      const newState = Object.assign(state, { registeringUserEmail: null });
      return newState;
    },
    removeUserData: () => ({} as userDataState),
  },
});

/**
 *  used for data fetching
 * */

// export const fetchAndSetUserData = () => async (dispatch: any) => {
//     const response = await fetch('/api/user-data');
//     if (response.ok) {
//         const data = await response.json();
//         const { setUserData } = userDataSlice.actions;
//         dispatch(setUserData(data));
//     } else {
//         Toast('Updating Personal Information Failed. Refresh!', { type: 'error' });
//     }
// };

export const userDataActions = userDataSlice.actions;

export default userDataSlice.reducer;
