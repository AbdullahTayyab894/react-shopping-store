import React from 'react'
import { useForm } from "react-hook-form";
import { Typography, Box } from '@mui/material'
import { toast } from 'react-toastify'

const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = ((data) => {
        console.log(data);
        toast.success("Sign Up form submitted")
    })
    return (
        <div style={{
            paddingTop: "80px"
        }}>
            <Typography variant='h3' sx={{
                mb: "20px",
                textAlign: "center"
            }}>Contact Us</Typography>
            <Box sx={{
                ml: "25px",
                width: "50%",
                margin: "auto"
            }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Name*</label>
                    <input {...register("name", { required: true, maxLength: 20 })}
                        style={{
                            width: "100%",
                            border: "2px solid #D0BCA8",
                            background: "white",
                        }} />
                    {errors.name && <span style={{
                        color: "red"
                    }}>Enter your name</span>} <br />
                    <label>Email*</label>
                    <input {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
                        style={{
                            width: "100%",
                            border: "2px solid #D0BCA8",
                            background: "white",
                        }} />
                    {errors.email && <span style={{
                        color: "red"
                    }}>Enter valid Email</span>} <br />
                    <label>Phone Number*</label>
                    <input {...register("phone", { required: true })}
                        style={{
                            width: "100%",
                            border: "2px solid #D0BCA8",
                            background: "white",
                        }} />
                    {errors.phone && <span style={{
                        color: "red"
                    }}>Enter Your Phone Number</span>} <br />
                    <label>Message*</label>
                    <textarea rows="10" cols="50" maxlength="500"
                        {...register("message", { required: true, maxLength: 20 })}
                        style={{
                            width: "100%",
                            border: "2px solid #D0BCA8",
                            background: "white",
                        }} />
                    {errors.message && <span style={{
                        color: "red"
                    }}>Enter your Message</span>} <br />
                    <button
                        style={{
                            width: "100%",
                            height: "50px",
                            border: "1px solid black",
                            background: "black",
                            color: "white",
                            marginBottom:"20px",
                        }}>Submit</button>
                </form>
            </Box>
        </div>
    )
}

export default Signup