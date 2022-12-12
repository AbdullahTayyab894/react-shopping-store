import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { Box, Typography } from '@material-ui/core';
import { useForm } from "react-hook-form";


const Payment = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = ((data) => {
        console.log(data);
        // toast.success("Login form submitted")
    })

    return (
        <div>
            <Box style={{
                minWidth: "300px",
                maxWidth: "600px",
            }}>
                <label>Payment</label>
                <Typography variant='body'>All transection secure and encrypted </Typography>
                <Accordion style={{
                    marginTop: "20px",
                }}>
                    <AccordionSummary
                        expandIcon={<CircleOutlinedIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>PAYFAST(Pay via Debit/Credit/Wallet/Bank Account)</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            After clicking “Complete order”, you will be redirected to PAYFAST(Pay via Debit/Credit/Wallet/Bank Account) to complete your purchase securely.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<CircleOutlinedIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>	Debit - Credit Card</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            After clicking “Complete order”, you will be redirected to Debit - Credit Card to complete your purchase securely.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<CircleOutlinedIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography>Cash on Delivery (COD)</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            We offer COD for all Domestic Devilries only. For international orders please pay through debit/ credit card.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </Box>
        </div>
    )
}

export default Payment