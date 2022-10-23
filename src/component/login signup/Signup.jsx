import React from 'react'
import { useForm } from "react-hook-form";
import { Typography, Box } from '@mui/material'
import { toast } from 'react-toastify'
import './acount.css'

const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = ((data) => {
        console.log(data);
        toast.success("Sign Up form submitted")
    })
    return (
        <div>
            <Typography variant='h4' sx={{
                mb: "20px",
                textAlign: "center"
            }}>Sign Up</Typography>
            <Box sx={{
                ml: "25px"
            }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Name</label>
                    <input {...register("firstName", { required: true, maxLength: 20 })} />
                    <label>Email*</label>
                    <input {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })} />
                    {errors.email && <span style={{
                        color: "red"
                    }}>Enter valid Email</span>} <br />
                    <label>Password*</label>
                    <input {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/ })} />
                    {errors.password && <span style={{
                        color: "red"
                    }}>Enter valid Password (Testing193!)</span>} <br />
                    <input type="submit"
                        style={{
                            width: "120px",
                            height: "50px",
                            border: "1px solid gray",
                            "&:hover": {
                                background: "black",
                                color: "white",
                            }
                        }} />
                </form>
            </Box>
        </div>
    )
}

export default Signup