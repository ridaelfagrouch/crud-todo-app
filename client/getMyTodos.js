import axios from 'axios';
import { useQuery } from 'react-query';

const allTodosUrl = "http://localhost:4000/test"

const getMyTodos = async () => {
    const response = await axios.get(allTodosUrl);
    console.log(response.data);
    return response;
}

export const UseGetAllTodos = () => {
    const {isLoading, data} = useQuery(['MyTodos'], getMyTodos);
    // console.log(` hello ${data}`);/
    return {isLoading, data};
}