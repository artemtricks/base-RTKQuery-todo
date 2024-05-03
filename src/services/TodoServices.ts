import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreateTodo, TodoTask } from "../types/types";

const API_URL = "https://efccf8c1b1d51061.mokky.dev/todos";
export const todoAPI = createApi({
  reducerPath: "todoAPI",
  tagTypes: ["Todo"],
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getTodo: builder.query<TodoTask[], null>({
      query: () => "/?sortBy=-id",
      providesTags: () => [
        {
          type: "Todo",
        },
      ],
    }),
    createTodo: builder.mutation<null, CreateTodo>({
      query: (newTodo) => ({
        body: newTodo,
        url: "/",
        method: "POST",
      }),
      invalidatesTags: () => [
        {
          type: "Todo",
        },
      ],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: () => [
        {
          type: "Todo",
        },
      ],
    }),
  }),
});

export const { useGetTodoQuery, useCreateTodoMutation, useDeleteTodoMutation } =
  todoAPI;
