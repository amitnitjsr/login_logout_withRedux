import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Row, Col, Button } from 'reactstrap';
import signup from './../../Asset/images/signup-image.webp';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(2),
        boxShadow: "0px 0px 1px 1px lightgrey"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

const Signup = props => {
    const classes = useStyles();
    // const [checkSignup, setSignup] = useState(false);

    // const handleNavigation = () => {
    //     setSignup(!checkSignup);
    // };
    // const handleTextChange = (event, name) => {
    //     const value = event.target.value;
    //     console.log(value);
    //     if (name === "email") setEmail(value);
    //     if (name === "password") setPassword(value);
    //     if (name === "confirmPassword") setConfirmPassword(value);
    // };

    return (
        <Container component="main" maxWidth="md">
            <div className={classes.paper}>
                <form className={classes.form}>
                    <Row>


                        <Col>
                            <h1>Sign up</h1>
                            <TextField
                                id="input-with-icon-textfield"
                                placeholder="Your Name"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <i class="zmdi zmdi-account zmdi-hc-lg"></i>
                                        </InputAdornment>
                                    ),
                                }}
                            /><br /><br />
                            <TextField
                                id="input-with-icon-textfield"
                                placeholder="Email"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <i class="zmdi zmdi-email"></i>
                                        </InputAdornment>
                                    ),
                                }}
                            /><br /><br />
                            <TextField
                                id="input-with-icon-textfield"
                                placeholder="Password"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <i class="zmdi zmdi-lock"></i>
                                        </InputAdornment>
                                    ),
                                }}
                            /><br /><br />
                            <TextField
                                id="input-with-icon-textfield"
                                placeholder="Repeat your password"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <i class="zmdi zmdi-lock"></i>
                                        </InputAdornment>
                                    ),
                                }}
                            /><br /><br />
                            <Checkbox
                            /> I agree all statements in <span style={{ textDecoration: 'underline' }}>Term of services</span>
                            <br /><br />
                            <Button style={{ backgroundColor: '#6384f9' }}>Register</Button>

                        </Col>
                        <Col>
                            <img src={signup} alt="no image" /><br />
                            <span style={{ textDecoration: 'underline' }}>I am already member</span>
                        </Col>
                    </Row>


                </form>
            </div>
        </Container>
    );
};
// const mapStateToProps = state => {
//     return {
//         checkUserExistance: state.userDetails
//     };
// };
// const mapDispatchToProps = dispatch => {
//     return {
//         handleSignup: userDetail =>
//             dispatch({ type: "CREATE_USER", userDetail: userDetail })
//     };
// };

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(SignIn);

export default Signup;
