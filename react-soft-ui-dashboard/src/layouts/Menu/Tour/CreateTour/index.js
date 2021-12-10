import { useState } from "react";
import Button from "@mui/material/Button";
import SuiTypography from "components/SuiTypography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SuiBox from "components/SuiBox";
import SuiInput from "components/SuiInput";
import AuthApi from "../../../../api/auth";

export default function CreateForm() {
  const [username, setUsername] = useState("username");
  const [error, setError] = useState("Error!");
  const [password, setPassword] = useState("Password");
  const [passverifiy, setPassverify] = useState("Repeat Password");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const register = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (username === "") {
      return setError("You must enter your username.");
    }
    if (password === "") {
      return setError("You must enter your password");
    }
    if (passverifiy === "") {
      return setError("You must enter repeat password");
    }
    if (passverifiy !== password) {
      return setError("Repeat password must same password");
    }
    try {
      console.log("username : ----> ", username);
      console.log("password : ----> ", password);
      console.log("passverifiy : ----> ", passverifiy);

      const obj = {
        username: username,
        password: password,
      };
      let response = await AuthApi.Register(obj);
      console.log(response.data);
      if (response.data && response.data.status_code === 400) {
        return setError(response.data.msg);
      }
      return history.push("/author");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <SuiBox mb={1} ml={0.5}>
            <SuiTypography component="label" variant="caption" fontWeight="bold">
              Username
            </SuiTypography>
          </SuiBox>
          <SuiInput
            defaultValue={username}
            onChange={(event) => {
              setUsername(event.target.value);
              setError(undefined);
            }}
            type="email"
            placeholder="Email"
          />

          <SuiBox mb={2}>
            <SuiBox mb={1} ml={0.5}>
              <SuiTypography component="label" variant="caption" fontWeight="bold">
                Password
              </SuiTypography>
            </SuiBox>
            <SuiInput
              defaultValue={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setError(undefined);
              }}
              type="password"
              placeholder="Password"
            />
          </SuiBox>

          <SuiBox mb={2}>
            <SuiBox mb={1} ml={0.5}>
              <SuiTypography component="label" variant="caption" fontWeight="bold">
                Password Verified
              </SuiTypography>
            </SuiBox>
            <SuiInput
              defaultValue={password}
              onChange={(event) => {
                setPassverify(event.target.value);
                setError(undefined);
              }}
              type="password"
              placeholder="Password"
            />
          </SuiBox>

          <SuiBox mt={2} mb={2} textAlign="center">
            <h6
              style={{
                fontSize: ".8em",
                color: "red",
                textAlign: "center",
                fontWeight: 400,
                transition: ".2s all",
              }}
            >
              {error}
            </h6>
          </SuiBox>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={register}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
