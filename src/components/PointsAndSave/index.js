import { ListAlt } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPoints } from "../../app/selectors";
import { toggleDialogOpen } from "../../app/slice";

const PointsAndSave = ({ onSaveClick }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));
  const currentPoints = useSelector(getCurrentPoints);
  return (
    <AppBar
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        backgroundColor: "green",
        padding: "4px 0",
      }}
    >
      <Grid container justifyContent="space-around">
        <Grid item xs={2}>
          <Button
            sx={{ color: "white" }}
            onClick={() => dispatch(toggleDialogOpen())}
            startIcon={<ListAlt />}
            fullWidth
          >
            <Typography>Build</Typography>
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
