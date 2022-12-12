import React from 'react'
import {Box, Typography } from '@material-ui/core';
import { useForm } from "react-hook-form";


const Shippingdetail = () => {

    const { register, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = ((data)=>{
        console.log(data);
        // toast.success("Login form submitted")
    })

    return (
        <div>
            <label>Shipping Method</label>
            <Box style={{
                display: "flex",
                minWidth: "300px",
                maxWidth: "600px",
                height: "25px",
                marginTop: "10px",
                justifyContent: "space-between",
                border: "2px solid #D0BCA8",
                padding: "10px"
            }}>
                <Typography>
                    Shipping Cost
                </Typography>
                <Typography>
                    RS : 200
                </Typography>
            </Box>
        </div>
    )
}

export default Shippingdetail