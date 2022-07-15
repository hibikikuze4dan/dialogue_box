import { Grid } from "@mui/material";
import React from "react";
import Choice from "../../components/Choice";
import DisplayContentWrapper from "../../components/DisplayContentWrapper";
import data from "../../cyoa_data";

const { title, choices } = data.sections.choice_making.perks;

const Perks = () => {
  return (
    <DisplayContentWrapper title={title}>
      <Grid justifyContent="center" container spacing={4}>
        {choices.map((choice, index) => (
          <Grid key={`choice-perks-${index}`} item xs={12} sm={6} md={4} lg={3}>
            <Choice section="perks" {...choice} />
          </Grid>
        ))}
      </Grid>
    </DisplayContentWrapper>
  );
};

export default Perks;
