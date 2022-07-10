import { SaveAlt } from "@mui/icons-material";
import { AppBar, Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getCurrentPoints } from "../../app/selectors";

const PointsAndSave = ({ onSaveClick }) => {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));
  const currentPoints = useSelector(getCurrentPoints);
  return (
    <AppBar
      position="fixed"
      sx={{ top: "auto", bottom: 0, backgroundColor: "green" }}
    >
      <Grid container justifyContent="space-around">
        <Grid item xs={2}>
          <Button
            sx={{ color: "white" }}
            onClick={onSaveClick}
            startIcon={<SaveAlt />}
          >
            {smUp && <p>Save Build</p>}
          </Button>
        </Grid>
        <Grid
          container
          item
          xs={2}
          justifyContent="center"
          alignContent="center"
        >
          {smUp ? "Points: " : ""}
          {currentPoints}
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default PointsAndSave;
