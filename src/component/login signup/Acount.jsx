import { Grid } from '@mui/material'
import Login from './Login'
import Signup from './Signup'
// import './acount.css'

const Acount = () => {
    return (
        <div style={{
            marginTop: "70px",
            marginBottom: "100px",
            padding: "0px 50px 0px 50px"
        }}>
            <Grid container>
                <Grid item md={6} xs={11} margin="auto">
                    <Login />
                </Grid>
                <Grid item md={6} xs={11} sx={{
                    marginTop: "0px"
                }}>
                    <Signup />
                </Grid>
            </Grid>
        </div>
    )
}
export default Acount