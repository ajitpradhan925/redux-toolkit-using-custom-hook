import { GetUser } from '../../services';
import { createSlice, current } from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name: "users",
    initialState: {
        listUsers: [],
        loading: false
    },
    extraReducers: {
        [GetUser.pending]: (state, action) => {
            state.loading = true;
        },

        [GetUser.fulfilled]: (state, action) => {
            console.log("action ", action);
            const { payload: { data = [] } } = action;
            state.listUsers = data;
            state.loading = false;
        }
    },
    reducers: {
        filterUser: (state, action) => {
            const { payload: { searchText = '' } } = action;
            let users = current(state.listUsers);
            state.listUsers = users.filter((user) => {
                const user_name = user.first_name.toLowerCase();
                return user_name.includes(searchText)
            });
            
        },
    }
})

export const { filterUser } = userSlice.actions;

export default userSlice.reducer;