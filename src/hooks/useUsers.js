import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { filterUser } from '../features/users/userSlice';
import { GetUser } from '../services';


export const useUsers = () => {

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    useEffect(() => {
        getUsers();
    }, []);

    const handleSearch = (text) => {
        if (!text) {
            getUsers();
            return;
        }
        const searchText = text.toLowerCase();
        dispatch(filterUser({ searchText }));
    }

    const getUsers = () => {
        dispatch(GetUser());
    }

    return {
        users,
        handleSearch
    }
}