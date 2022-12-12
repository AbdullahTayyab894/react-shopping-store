import React, { useEffect } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';
import {Box, Typography, Button } from '@material-ui/core';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contactinfo from './Contactinfo';
import Shippingdetail from './Shippingdetail';
import Payment from './Payment';

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
    // <b style={{ color: 'purple' }}>'Shipping'</b>,
    // <b style={{ color: 'purple' }}>'Payment'</b>
];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return (
                <Box>
                    <Contactinfo />
                </Box>
            );
        case 1:
            return (
                <Box>
                    {/* <Shippingdetail /> */}
                </Box>
            );
        case 2:
            return (
                <Box>
                    {/* <Payment /> */}
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
            marginTop: "100px"
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
