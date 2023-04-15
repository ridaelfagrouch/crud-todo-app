import React from "react";
import MyTodos from "./MyTodos";
import { QueryClientProvider, QueryClient, useQuery } from 'react-query'

const QUERY_CLIENT = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={QUERY_CLIENT}>
      <MyTodos />
    </QueryClientProvider>
  );
}
