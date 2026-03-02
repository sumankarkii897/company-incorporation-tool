import { useForm , useFieldArray} from 'react-hook-form'
import API from "../services/api"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';

const ShareHolder = () => {
      const {register, control, handleSubmit , formState: {errors}} = useForm({
        defaultValues: {
            shareholders: [{ first_name: "", last_name:"" , nationality: "" }]
        }
      });
      const onSubmit = async (data) => {
        try {
          const company_id = localStorage.getItem("company_id");
          const shareholdersWithCompanyId = data.shareholders.map(shareholder => ({
            ...shareholder,
            company_id: parseInt(company_id)
          }));
          const response = await API.post("/shareholders", shareholdersWithCompanyId);
          console.log(response.data);
          toast.success("Shareholders created successfully!");
        } catch (error) {
          console.log(error.message);
          toast.error(error.response?.data?.message || "Failed to create shareholders");
          
        }
      }
  return (
    <>
    <div className="text-center text-2xl font-bold mb-4">Shareholders Information</div>
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white shadow-md rounded space-y-2">
  <div className="flex flex-col  space-y-1">
    <label htmlFor='first_name'> First Name

    </label>
      <input {...register("shareholders.0.first_name", {
        required: "First name is required",
        minLength: { value: 2, message: "First name must be at least 2 characters" }
    })} placeholder='First Name' className="border p-2 w-full" id='first_name'/>
    {errors.shareholders?.[0]?.first_name && <p className='text-red-500'>{errors.shareholders[0].first_name.message}</p>}
  </div>
  <div className='flex flex-col space-y-1'>
    <label htmlFor='last_name'>Last Name</label>
    <input {...register("shareholders.0.last_name", {
        required: "Last name is required",
        minLength: { value: 2, message: "Last name must be at least 2 characters" }
    })} placeholder='Last Name' className="border p-2 w-full" id='last_name'/>
    {errors.shareholders?.[0]?.last_name && <p className='text-red-500'>{errors.shareholders[0].last_name.message}</p>}
    </div>
    <div className='flex flex-col space-y-1'>
    <label htmlFor='nationality'> Nationality</label>
    <input {...register("shareholders.0.nationality", {
        required: "Nationality is required"
    })} placeholder='Nationality' className="border p-2 w-full" id='nationality' />
    {errors.shareholders?.[0]?.nationality && <p className='text-red-500'>{errors.shareholders[0].nationality.message}</p>}
    </div>
    <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Submit</button>
    </form>
    </>
  )
}

export default ShareHolder