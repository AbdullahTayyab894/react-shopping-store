import React, { useEffect } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';
import Country from './countryapi'
import { Grid, Box, Typography, Button } from '@material-ui/core';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        button: {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        actionsContainer: {
            marginBottom: theme.spacing(2),
        },
        resetContainer: {
            padding: theme.spacing(3),
        },

    }),
);

function getSteps() {
    return [<b style={{ color: 'purple' }}>'Information'</b>,
    <b style={{ color: 'purple' }}>'Shipping'</b>,
    <b style={{ color: 'purple' }}>'Payment'</b>];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return (

                <form class="form-group">
                    <Box style={{
                        width: "50%",
                    }}>
                        <Box style={{
                            marginTop: "10px",
                            marginBottom: "10px",
                        }}>
                            <Typography variant='h4'>Contact Information</Typography>
                            <input type="email" placeholder="Email" style={{
                                width: "100%",
                                minWidth: "320px",
                                height: "40px",
                                borderRadius: "5px",
                                paddingLeft: "20px",
                                marginTop: "5px",
                                border: "2px solid #D0BCA8",
                            }} />
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
                            <input type="text" placeholder="First Name" style={{
                                width: "100%",
                                minWidth: "320px",
                                height: "40px",
                                borderRadius: "5px",
                                border: "2px solid #D0BCA8",
                                marginRight: "7px",
                                paddingLeft: "20px",
                            }} />
                        </Box>
                        <Box style={{
                            marginTop: "10px",
                            marginBottom: "10px",
                        }}>
                            <input type="text" placeholder="Last Name" style={{
                                width: "100%",
                                minWidth: "320px",
                                height: "40px",
                                borderRadius: "5px",
                                border: "2px solid #D0BCA8",
                                paddingLeft: "20px",
                            }} />
                        </Box>
                        <Box style={{
                            marginTop: "10px",
                            marginBottom: "10px",
                        }}>
                            <input type="address" placeholder="Address" style={{
                                width: "100%",
                                minWidth: "320px",
                                height: "40px",
                                borderRadius: "5px",
                                border: "2px solid #D0BCA8",
                                paddingLeft: "20px",
                            }} />
                        </Box>
                        <Box style={{
                            marginTop: "10px",
                            marginBottom: "10px",
                        }}>
                            <input type="city" placeholder="City" style={{
                                width: "100%",
                                minWidth: "320px",
                                height: "40px",
                                borderRadius: "5px",
                                border: "2px solid #D0BCA8",
                                marginRight: "7px",
                                paddingLeft: "20px",
                            }} />
                        </Box>
                        <Box style={{
                            marginTop: "10px",
                            marginBottom: "10px",
                        }}>
                            <input type="postal code" placeholder="Postal Code" style={{
                                width: "100%",
                                minWidth: "320px",
                                height: "40px",
                                borderRadius: "5px",
                                border: "2px solid #D0BCA8",
                                paddingLeft: "20px",
                            }} />
                        </Box>
                        <Box style={{
                            marginTop: "10px",
                            marginBottom: "10px",
                        }}>
                            <input type="phone" placeholder="Phone" style={{
                                width: "100%",
                                minWidth: "320px",
                                height: "40px",
                                borderRadius: "5px",
                                border: "2px solid #D0BCA8",
                                paddingLeft: "20px",
                            }} />
                        </Box>
                    </Box>
                </form>
            );
        case 1:
            return (
                <Box>
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
                </Box>
            );
        case 2:
            return (
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
            );
        default:
            return 'Unknown step';
    }
}

export default function GeekStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <div className={classes.root} style={{
            marginTop:"100px"
        }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <Typography>{getStepContent(index)}</Typography>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>Next Functionality added coming soon</Typography>
                </Paper>
            )}
        </div>
    );
}
