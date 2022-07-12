import { CloseRounded, ContentCopy, SaveAlt } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBuildText,
  getDialogOpen,
  getDrawbacks,
  getPerks,
} from "../../app/selectors";
import { toggleDialogOpen } from "../../app/slice";
import Choice from "../Choice";

const ChoicesAndSaveDialog = ({ onSaveClick, saveRef }) => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));
  const dialogOpen = useSelector(getDialogOpen);
  const perks = useSelector(getPerks);
  const drawbacks = useSelector(getDrawbacks);
  const dispatch = useDispatch();
  const buildText = useSelector(getBuildText);

  return (
    <Dialog
      title="Choices"
      open={dialogOpen}
      onClose={() => dispatch(toggleDialogOpen())}
      fullScreen={mdDown}
    >
      <DialogContent sx={{ backgroundColor: "#8fe5a6ff" }}>
        <Grid
          container
          justifyContent="space-between"
          sx={{ marginBottom: "32px" }}
        >
          <Typography gutterBottom variant="h4">
            {smUp && "Dialogue Box "}Choices
          </Typography>
          <IconButton onClick={() => dispatch(toggleDialogOpen())}>
            <CloseRounded />
          </IconButton>
        </Grid>
        <Grid
          container
          justifyContent={mdDown ? "center" : "space-between"}
          sx={{ marginBottom: "32px" }}
        >
          <Button
            variant="contained"
            onClick={() =>
              navigator.clipboard
                .writeText(buildText)
                .catch(
                  (err) =>
                    alert("Sorry, something went wrong") && console.log(err)
                )
            }
            startIcon={<ContentCopy />}
            sx={{
              border: "2px solid rgba(114, 142, 120, 1) !important",
              borderRadius: "16px",
              textTransform: "none",
              color: "black",
              backgroundColor: "inherit",
              marginBottom: "16px",
              "&:hover": {
                backgroundColor: "inherit",
              },
            }}
          >
            <Typography>Copy Build Text</Typography>
          </Button>
          <Button
            variant="contained"
            onClick={onSaveClick}
            startIcon={<SaveAlt />}
            sx={{
              border: "2px solid rgba(114, 142, 120, 1) !important",
              borderRadius: "16px",
              textTransform: "none",
              color: "black",
              backgroundColor: "inherit",
              marginBottom: "16px",
              "&:hover": {
                backgroundColor: "inherit",
              },
            }}
          >
            <Typography>Download Build Image</Typography>
          </Button>
        </Grid>
        <Grid
          ref={saveRef}
          container
          spacing={2}
          sx={{ backgroundColor: "#8fe5a6ff" }}
        >
          <Grid justifyContent="center" spacing={2} container item xs={12}>
            <Grid container justifyContent="center" item xs={12}>
              <Typography variant="h4">Perks</Typography>
            </Grid>
            {perks.map((perk, index) => (
              <Grid key={`perk-item-${index}`} item xs={12} sm={6}>
                <Choice {...perk} displayChoice />
              </Grid>
            ))}
          </Grid>
          <Grid justifyContent="center" spacing={2} container item xs={12}>
            <Grid container justifyContent="center" item xs={12}>
              <Typography variant="h4">Drawbacks</Typography>
            </Grid>
            {drawbacks.map((drawbacks, index) => (
              <Grid key={`drawbacks-item-${index}`} item xs={12} sm={6}>
                <Choice {...drawbacks} displayChoice />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ChoicesAndSaveDialog;
