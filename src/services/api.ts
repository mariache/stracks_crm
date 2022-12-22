/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Customer, Opportunity } from "../types/Index";

const BASE_URL = "https://xvy4yik9yk.us-west-2.awsapprunner.com/";

export const api = createApi({
  reducerPath: "spiderTracksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  tagTypes: ["Customer", "Opportunity"],
  endpoints: builder => ({
    getCustomers: builder.query<Customer[], void>({
      query: () => ({ url: "/customers" }),
      providesTags: result => ["Customer"]
    }),
    getCustomerById: builder.query<Customer, number>({
      query: id => ({ url: `/customers/${id}` })
    }),
    addCustomer: builder.mutation({
      query: customer => ({
        url: "/customers",
        method: "POST",
        body: customer
      }),
      invalidatesTags: ["Customer"]
    }),
    updateCustomer: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/customers/${id}`,
        method: "PUT",
        body: rest
      }),
      invalidatesTags: ["Customer"]
    }),
    deleteCustomer: builder.mutation({
      query: id => ({
        url: `/customers/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Customer"]
    }),
    getCustomerOpportunities: builder.query<Opportunity[], number>({
      query: id => ({ url: `/customers/${id}/opportunities` }),
      providesTags: result => ["Opportunity"]
    }),
    getOpportunities: builder.query<Opportunity[], void>({
      query: () => ({ url: "/opportunities" }),
      providesTags: result => ["Opportunity"]
    }),
    addCustomerOpportunity: builder.mutation({
      query: ({ id, ...opportunity }) => ({
        url: `/customers/${id}/opportunities`,
        method: "POST",
        body: opportunity
      }),
      invalidatesTags: ["Opportunity"]
    }),
    deleteCustomerOpportunity: builder.mutation({
      query: ({ id, opId }) => ({
        url: `/customers/${id}/opportunities/${opId}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Opportunity"]
    })
  })
});

export const {
  useGetCustomersQuery,
  useAddCustomerMutation,
  useGetCustomerByIdQuery,
  useGetOpportunitiesQuery,
  useDeleteCustomerMutation,
  useUpdateCustomerMutation,
  useGetCustomerOpportunitiesQuery,
  useAddCustomerOpportunityMutation,
  useDeleteCustomerOpportunityMutation
} = api;
