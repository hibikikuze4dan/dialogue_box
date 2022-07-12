import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getChoiceDisabledFunction,
  getChoiceSelectedFunction,
  getHideUnselected,
} from "../../app/selectors";
import {
  addDrawback,
  addPerk,
  removeDrawback,
  removePerk,
} from "../../app/slice";
import { getChoicesThatRequireACertainChoice, plusOrMinus } from "../../utils";

const Choice = (props) => {
  const {
    title,
    cost,
    description,
    requirements,
    exclude,
    section,
    displayChoice,
    imgSrc,
  } = props;
  const dispatch = useDispatch();
  const disabled = useSelector(getChoiceDisabledFunction)(
    exclude,
    requirements
  );
  const hideUnselected = useSelector(getHideUnselected);
  const selected = useSelector(getChoiceSelectedFunction)(title);
  const choicesThatRequireThisChoice =
    getChoicesThatRequireACertainChoice(title);
  const isPerksSection = section === "perks";
  const remove = isPerksSection ? removePerk : removeDrawback;
  const add = isPerksSection ? addPerk : addDrawback;
  const dispatchFunc = displayChoice
    ? null
    : () => {
        if (selected) {
          if (choicesThatRequireThisChoice.length)
            choicesThatRequireThisChoice.forEach((choice) =>
              dispatch(remove(choice))
            );
          return dispatch(remove(props));
        }
        dispatch(add(props));
      };
  const buttonBackgroundColor =
    selected && !displayChoice ? "blue" : "rgba(114, 182, 133, 1)";

  return hideUnselected && !selected ? null : (
    <Grid sx={{ height: "100%" }} container>
      <Button
        onClick={dispatchFunc}
        component={Paper}
        disabled={disabled}
        fullWidth
        sx={{
          alignItems: "baseline",
          padding: 0,
          border: "2px solid rgba(114, 142, 120, 1)",
          borderRadius: "16px",
          textTransform: "none",
          color: selected && !displayChoice ? "white" : "black",
          overflow: "hidden",
          backgroundColor: buttonBackgroundColor,
          "&:hover": {
            backgroundColor: buttonBackgroundColor,
          },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div style={{ height: "275px", backgroundColor: "black" }}>
              <img
                style={{ width: "100%", height: "275px", maxWidth: "300px" }}
                src={imgSrc}
                alt={title + "image"}
                loader={<CircularProgress />}
              />
            </div>
          </Grid>
          <Grid
            container
            item
            xs={12}
            justifyContent="space-between"
            sx={{ margin: "0 8px" }}
          >
            <Grid item>
              <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Box
                sx={{
                  backgroundColor: "rgba(116, 141, 122, 1)",
                  borderRadius: "16px",
                }}
              >
                <Typography align="center" sx={{ fontWeight: "bold" }}>
                  {plusOrMinus(cost)}
                  {Math.abs(cost)}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ margin: "0 8px 16px 8px" }}>
            {requirements && (
              <Typography align="center" variant="body2">{`Requires ${
                requirements[requirements.length - 1]
              }`}</Typography>
            )}
            <Typography align="center" variant="body2">
              {description}
            </Typography>
            {exclude && (
              <Typography
                align="center"
                variant="body2"
              >{`Cannot be taken with ${exclude}`}</Typography>
            )}
          </Grid>
        </Grid>
      </Button>
    </Grid>
  );
};

Choice.defaultProps = {
  displayChoice: false,
};

export default Choice;
