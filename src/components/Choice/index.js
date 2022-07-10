import { Box, Button, Grid, Paper, Typography } from "@mui/material";
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
  const { title, cost, description, requirements, exclude, section } = props;
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
  const dispatchFunc = () => {
    if (selected) {
      if (choicesThatRequireThisChoice.length)
        choicesThatRequireThisChoice.forEach((choice) =>
          dispatch(remove(choice))
        );
      return dispatch(remove(props));
    }
    dispatch(add(props));
  };

  return hideUnselected && !selected ? null : (
    <Grid sx={{ height: "100%" }} container>
      <Button
        onClick={dispatchFunc}
        component={Paper}
        disabled={disabled}
        fullWidth
        sx={{
          alignItems: "baseline",
          border: "2px solid rgba(114, 142, 120, 1)",
          borderRadius: "16px",
          textTransform: "none",
          color: "black",
          overflow: "hidden",
          backgroundColor: selected ? "blue" : "rgba(114, 182, 133, 1)",
          "&:hover": {
            backgroundColor: selected ? "blue" : "rgba(114, 182, 133, 1)",
          },
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            {/* IMAGE GOES HERE */}
          </Grid>
          <Grid container item xs={12} justifyContent="space-between">
            <Grid item>
              <Typography>{title}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Box
                sx={{
                  backgroundColor: "rgba(116, 141, 122, 1)",
                  borderRadius: "16px",
                }}
              >
                <Typography>
                  {plusOrMinus(cost)}
                  {Math.abs(cost)}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {requirements && (
              <Typography variant="body2">{`Requires ${
                requirements[requirements.length - 1]
              }`}</Typography>
            )}
            <Typography variant="body2">{description}</Typography>
            {exclude && (
              <Typography variant="body2">{`Cannot be taken with ${exclude}`}</Typography>
            )}
          </Grid>
        </Grid>
      </Button>
    </Grid>
  );
};

export default Choice;
