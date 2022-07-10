import React, { useCallback, useRef } from "react";
import "./App.css";
import Opening from "./sections/opening";
import Perks from "./sections/perks";
import Drawbacks from "./sections/drawbacks";
import { Grid } from "@mui/material";
import PointsAndSave from "./components/PointsAndSave";
import { toPng } from "html-to-image";
import { useDispatch } from "react-redux";
import { toggleHideUnselected } from "./app/slice";

function App() {
  const ref = useRef(null);
  const dispatch = useDispatch();

  const onSaveClick = useCallback(() => {
    if (!ref.current) return;
    dispatch(toggleHideUnselected());
    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "Dialogue_Box_Build.png";
        link.href = dataUrl;
        link.click();
        dispatch(toggleHideUnselected());
      })
      .catch((err) => {
        console.log(err);
        alert("Sorry, something went wrong with the build generation process");
        dispatch(toggleHideUnselected());
      });
  }, [ref]);

  return (
    <div className="App">
      <div ref={ref} style={{ padding: "64px 16px" }}>
        <Grid container>
          <Grid zeroMinWidth item xs={12}>
            <Opening />
          </Grid>
          <Grid item xs={12}>
            <Perks />
          </Grid>
          <Grid item xs={12}>
            <Drawbacks />
          </Grid>
        </Grid>
      </div>
      <PointsAndSave onSaveClick={onSaveClick} />
    </div>
  );
}

export default App;
