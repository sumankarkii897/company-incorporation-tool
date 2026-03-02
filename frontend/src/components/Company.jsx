import React from 'react'
import {useForm} from 'react-hook-form'
import API from "../services/api"
import { useNavigate} from "react-router-dom"
import { toast } from 'react-toastify';
const Company = () => {
    const {register, handleSubmit , formState: {errors}} = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            const response = await API.post("/companies", data);
            console.log(response.data);
            
         localStorage.setItem(
  "company_id",
  response.data.company.insertId
);
            toast.success("Company created successfully!");
            navigate("/shareholders")
        } catch (error) {
            console.log(error.message);
            toast.error(error.response?.data?.message || "Failed to create company");
        }
    }
  return (
  <>
  <h2 className="text-2xl font-bold text-center mb-4">Company Information</h2>
  <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white shadow-md rounded space-y-2">
<div className=" flex flex-col  space-y-1">
    <label htmlFor="name">Company Name</label>
     <input {...register("name", {
    required: "Company name is required",
     minLength : { value:3 , message: "Company name must be at least 3 characters "}
 })} placeholder='Company Name' className="border p-2 w-full" id='name' />
 {
    errors.name && <p className='text-red-500'> {errors.name.message}</p>
 }
</div>
<div className="flex flex-col  space-y-1">
    <label htmlFor='no_shareholder'>Number of Shareholders</label>
     <input {...register("num_shareholders", {
    required: "Number of shareholders is required",
    min: { value: 1, message: "Number of shareholders must be at least 1" }
 })} placeholder='Number of Shareholders' className="border p-2 w-full" id='no_shareholder'  />
 {
    errors.num_shareholders && <p className='text-red-500'>
        {errors.num_shareholders.message}
    </p>
 }
</div>
<div className="flex flex-col  space-y-1">
    <label htmlFor='total_capital'>Total Capital</label>
     <input {...register("total_capital", {
    required: "Total Capital is required",

 }) } placeholder="Total Capital" className="border p-2 w-full" id="total_capital"/>
 {
    errors.total_capital && <p className='text-red-500'>
        {errors.total_capital.message}
    </p>
 }
</div>
    <button type='submit' className="bg-blue-500 text-white p-2 mt-4 cursor-pointer ">Create Company</button>
  </form>
  </>
  )
}

export default Company