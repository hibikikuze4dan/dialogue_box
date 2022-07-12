import React, { useCallback, useRef } from "react";
import "./App.css";
import Opening from "./sections/opening";
import Perks from "./sections/perks";
import Drawbacks from "./sections/drawbacks";
import { Grid } from "@mui/material";
import PointsAndSave from "./components/PointsAndSave";
import { toPng } from "html-to-image";
import ChoicesAndSaveDialog from "./components/ChoicesAndSaveDialog";

function App() {
  const ref = useRef(null);

  const onSaveClick = useCallback(() => {
    if (!ref.current) return;
    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "Dialogue_Box_Build.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
        alert("Sorry, something went wrong with the build generation process");
      });
  }, [ref]);

  return (
    <div className="App">
      <div style={{ padding: "16px 16px 64px 16px" }}>
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
      <ChoicesAndSaveDialog saveRef={ref} onSaveClick={onSaveClick} />
      <PointsAndSave />
    </div>
  );
}

export default App;
