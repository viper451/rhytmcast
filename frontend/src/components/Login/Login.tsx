import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import LibraryMusicRoundedIcon from "@mui/icons-material/LibraryMusicRounded";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "../firebaseconfig";
import { useKeycloak } from "@react-keycloak/web";

import "./Login.css";

firebase.initializeApp(firebaseConfig);

const useStyles = makeStyles((theme) => ({
  textField: {
    width: 200,
  },
  label: {
    color: "white",
  },
}));

export default function Login() {
  var provider = new firebase.auth.GoogleAuthProvider();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any | null>(null);
  const { keycloak, initialized } = useKeycloak();
  // const { from } = location.state || { from: { pathname: "/login" } };
  const navigate = useNavigate();
  let resonance = true;

  const classes = useStyles();

  const renderAuthButton = () => {
    if (!keycloak.authenticated) {
      return (
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="success"
          onClick={() => keycloak.login()}
          sx={{ mt: 1, mb: 2 }}
        >
          LogIn using Keycloak
        </Button>
      );
    } else {
      navigate("/home");
    }
  };

  function SignInGoogle() {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result: { credential: any; user: any }) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...

        var info = {
          name: user.displayName,
          mail: user.email,
        };
        setUser(info);
        localStorage.setItem("name", user.displayName ?? "{}");
        localStorage.setItem("user", "Admin");
        navigate("/home");
      })
      .catch(
        (error: { code: any; message: any; email: any; credential: any }) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        }
      );
    console.log(user);
  }

  const handleSubmit = async (event: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement | undefined;
  }) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = JSON.stringify(data.get("username"));

    if (data.get("username") !== "" && data.get("password") === "Admin") {
      localStorage.setItem("name", JSON.parse(name ?? "{}"));
      localStorage.setItem("user", "Admin");
      navigate("/home");
    } else {
      // cookies.set("user_id", responseJson['user_id'], {path: "/", maxAge: 24*60*60});

      alert("Login Failed");
    }
  };
  useEffect(() => {
    if (resonance) {
      // alert("ENTER ANY USERNAME TO LOGIN PASSWORD WILL BE Admin");
      resonance = !resonance;
    }
  }, []);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="h6"
          variant="h5"
          style={{ color: "white", padding: "3%" }}
        >
          <h1>
            {" "}
            <LibraryMusicRoundedIcon /> RhythmCast
          </h1>
        </Typography>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h3" variant="h5" style={{ color: "white" }}>
          Log In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            sx={{ input: { color: "white" } }}
            label={<span className={classes.label}>Username</span>}
            margin="normal"
            required
            fullWidth
            id="username"
            name="username"
            autoComplete="username"
            className={classes.textField}
            autoFocus
          />
          <TextField
            sx={{ input: { color: "white" } }}
            margin="normal"
            required
            fullWidth
            name="password"
            label={<span className={classes.label}>Password</span>}
            type="password"
            id="password"
            autoComplete="current-password"
            className={classes.textField}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/register" variant="body2" style={{ color: "white" }}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <button onClick={SignInGoogle} className="btn btn-custom">
            <div className="img-logo">
              <img
                style={{ maxWidth: "40px" }}
                src="https://img.icons8.com/plasticine/100/000000/google-logo.png"
                alt=""
              />
            </div>
            <b style={{ color: "white" }}>Login With Google</b>
          </button>
          {/* {!keycloak.authenticated && (
                    <button
                      type="button"
                      className="text-blue-800"
                      onClick={() => keycloak.login()}
                    >
                      Login using Cloak
                    </button>
                  )

                  } */}

          {renderAuthButton()}
        </Box>
      </Box>
    </Container>
  );
}
