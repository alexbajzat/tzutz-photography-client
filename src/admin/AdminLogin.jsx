import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/CardContent";

//styles
import styles from "./Admin.module.css";

export default function AdminLogin() {
  return (
    <div className={`${styles.adminContainer} container`}>
      <Card>
        <CardContent>
          <div className={`${styles.loginContainer} container`}>
            <TextField
              className={styles.inputField}
              id="username"
              label="Username"
              //   value={"value"}
              margin="normal"
            />
            <TextField
              id="password"
              className={styles.inputField}
              label="Password"
              type="password"
              //   value={"value"}
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              className={styles.loginButton}
            >
              Login
            </Button>
            <div className={styles.forgotPassContainer}>
              <a href="/forgot-pass">Forgot Password</a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
