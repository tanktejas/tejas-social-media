import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./pop.css";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Storage } from "../DB/video_store";
import ReactPlayer from "react-player/lazy";

//mui button.
//has to add.
import "./button.css";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export default function AlertDialog({ state, setstate }) {
  const storage = getStorage();
  const [open, setOpen] = React.useState(state);
  const [currfile, setcurr] = React.useState();
  const [name, setn] = React.useState("");
  const [desc, setdes] = React.useState("");
  const [vid_file, setvid] = React.useState();
  const { user } = useAuth0();

  const handleClickOpen = () => {
    console.log("yeah..");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitvideo = () => {
    const formda = new FormData();
    formda.append("file", vid_file);
    formda.append("name", name);
    formda.append("description", desc);

    const imgref = ref(Storage, `images/${vid_file[0].name}`);
    uploadBytes(imgref, vid_file[0])
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          console.log(url);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <>
      <div>
        <div
          className="button1"
          onClick={() => {
            if (isAuthenticated) {
              setstate(true);
            } else {
              loginWithRedirect();
            }
            handleClickOpen();
          }}
        >
          ADD IMAGE
        </div>

        {/* <Button variant="outlined" onClick={handleClickOpen}>
          Open alert dialoga
        </Button> */}

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Add your best Video."}
          </DialogTitle>
          <DialogContent>
            {/* <DialogContentText id="alert-dialog-description"> */}
            <form className="videoform">
              <div>
                <label>Name </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setn(e.target.value);
                  }}
                ></input>
              </div>
              <div>
                <label>Description </label>
                <textarea
                  type="text"
                  value={desc}
                  onChange={(e) => {
                    setdes(e.target.value);
                  }}
                ></textarea>
              </div>
              <div>
                <label>Choose Video </label>
                <Button
                  variant="contained"
                  className="inpbutt"
                  component="label"
                >
                  Upload File
                  <input
                    type="file"
                    value={currfile}
                    onChange={(e) => {
                      setvid(e.target.files);
                      console.log(e.target.files[0]);
                      setcurr(e.target.value);
                    }}
                    multiple
                  />
                </Button>
              </div>
              {currfile != "" && (
                <>
                  <label>File Chosen:</label>
                  <label>{currfile}</label>{" "}
                </>
              )}
            </form>
            {/* </DialogContentText> */}
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                submitvideo();
              }}
              variant="contained"
              component="label"
              autoFocus
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
