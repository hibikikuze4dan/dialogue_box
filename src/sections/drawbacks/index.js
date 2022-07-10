import { Grid } from "@mui/material";
import React from "react";
import Choice from "../../components/Choice";
import DisplayContentWrapper from "../../components/DisplayContentWrapper";
import data from "../../cyoa_data";

const { title, choices } = data.sections.choice_making.drawbacks;

const Perks = () => {
  return (
    <DisplayContentWrapper title={title}>
      <Grid container spacing={4}>
        {choices.map((choice, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Choice
              section="drawbacks"
              {...choice}
              key={`choice-perks-${index}`}
            />
          </Grid>
        ))}
      </Grid>
    </DisplayContentWrapper>
  );
};

export default Perks;
