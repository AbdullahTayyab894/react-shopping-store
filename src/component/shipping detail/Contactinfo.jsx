import React from 'react'
import { Box, Typography } from '@material-ui/core';
import Country from './countryapi'
import { useForm } from "react-hook-form";


const Contactinfo = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = ((data) => {
        console.log(data);
        // toast.success("Login form submitted")
    })

    return (
        <div>
            <form class="form-group" onSubmit={handleSubmit(onSubmit)}>
                <Box style={{
                    width: "50%",
                }}>
                    <Box style={{
                        marginTop: "10px",
                        marginBottom: "10px",
                    }}>
                        <Typography variant='h4'>Contact Information</Typography>
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
                    </Box>
                    <Box style={{
                        marginTop: "10px",
                        marginBottom: "10px",
                    }}>
                        <label>Shipping address</label><br />
                        <select style={{
                            width: "104.5%",
                            minWidth: "344px",
                            height: "47px",
                            borderRadius: "5px",
                            border: "2px solid #D0BCA8",
                            marginTop: "5px",
                            paddingLeft: "20px",
                            paddingRight: "20px",
                        }}>
                            {
                                Country.map((item, i) => {
                                    return (
                                        <option key={i} value={item}>{item}</option>
                                    )
                                })
                            }
                        </select>
                    </Box>
                    <Box style={{
                        marginTop: "10px",
                        marginBottom: "10px",
                    }}>
                        <label>First Name*</label>
                        <input {...register("firstName", { required: true, maxLength: 20 })}
                            style={{
                                width: "100%",
                                border: "2px solid #D0BCA8",
                                background: "white",
                            }} />
                        {errors.firstName && <span style={{
                            color: "red"
                        }}>Enter Name</span>} <br />
                    </Box>
                    <Box style={{
                        marginTop: "10px",
                        marginBottom: "10px",
                    }}>
                        <label>Last Name*</label>
                        <input {...register("lastName", { required: true, maxLength: 20 })}
                            style={{
                                width: "100%",
                                border: "2px solid #D0BCA8",
                                background: "white",
                            }} />
                        {errors.lastName && <span style={{
                            color: "red"
                        }}>Enter Name</span>} <br />
                    </Box>
                    <Box style={{
                        marginTop: "10px",
                        marginBottom: "10px",
                    }}>
                        <label>Address*</label>
                        <input {...register("address", { required: true, maxLength: 20 })}
                            style={{
                                width: "100%",
                                border: "2px solid #D0BCA8",
                                background: "white",
                            }} />
                        {errors.address && <span style={{
                            color: "red"
                        }}>Enter Address</span>} <br />
                    </Box>
                    <Box style={{
                        marginTop: "10px",
                        marginBottom: "10px",
                    }}>
                        <label>City*</label>
                        <input {...register("city", { required: true, maxLength: 20 })}
                            style={{
                                width: "100%",
                                border: "2px solid #D0BCA8",
                                background: "white",
                            }} />
                        {errors.city && <span style={{
                            color: "red"
                        }}>Enter City</span>} <br />
                    </Box>
                    <Box style={{
                        marginTop: "10px",
                        marginBottom: "10px",
                    }}>
                        <label>Postal Code*</label>
                        <input {...register("postalcode", { required: true, maxLength: 20 })}
                            style={{
                                width: "100%",
                                border: "2px solid #D0BCA8",
                                background: "white",
                            }} />
                        {errors.postalcode && <span style={{
                            color: "red"
                        }}>Enter Postal code</span>} <br />
                    </Box>
                    <Box style={{
                        marginTop: "10px",
                        marginBottom: "10px",
                    }}>
                        <label>Phone Number*</label>
                        <input {...register("phone", { required: true, maxLength: 20 })}
                            style={{
                                width: "100%",
                                border: "2px solid #D0BCA8",
                                background: "white",
                            }} />
                        {errors.phone && <span style={{
                            color: "red"
                        }}>Enter Phone Number</span>} <br />
                    </Box>
                </Box>
            </form>
        </div>
    )
}

export default Contactinfo