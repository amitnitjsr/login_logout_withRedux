import React, { useState } from "react";
import { withRouter, Link } from 'react-router-dom'
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Row, Col, Button } from 'reactstrap';
import signin from './../../Asset/images/signin-image.webp';

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

const SignIn = props => {
    const classes = useStyles();
    const [checkSignup, setSignup] = useState(false);

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
                            <img src={signin} alt="no image" /><br /><br /><br />
                            <Link to='/signup'><span style={{ textDecoration: 'underline' }}>Create an account</span></Link>
                        </Col>

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
                                placeholder="Password"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <i class="zmdi zmdi-lock"></i>
                                        </InputAdornment>
                                    ),
                                }}
                            /><br /><br />

                            <Checkbox
                            /> Rember me
                            <br /><br />
                            <Button style={{ backgroundColor: '#6384f9' }}>Log in</Button>
                            <br /><br />
                            Or login with
                            <Button style={{ color: 'white', backgroundColor: '#3434ef', margin: '7px', width: '42px' }}><i class="zmdi zmdi-facebook"></i></Button>
                            <Button style={{ color: 'white', backgroundColor: '#389ced', margin: '5px' }}><i class="zmdi zmdi-twitter"></i></Button>
                            <Button style={{ color: 'white', backgroundColor: '#dd0d4f', margin: '5px' }}><i class="zmdi zmdi-google"></i></Button>
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

export default withRouter(SignIn);
