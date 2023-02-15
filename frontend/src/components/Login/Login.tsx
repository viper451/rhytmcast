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

import "./Login.css";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: 200,
  },
  label: {
    color: "white",
  },
}));

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let resonance = true;

  const classes = useStyles();

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
      alert("ENTER ANY USERNAME TO LOGIN PASSWORD WILL BE Admin");
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
        </Box>
      </Box>
    </Container>
  );
}
