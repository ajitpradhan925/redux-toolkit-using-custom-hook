import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = "https://reqres.in";

export const GetUser = createAsyncThunk(
    "get/getUsers",
    async () => await await (await axios.get(`${BASE_URL}/api/users?page=2`)).data
)