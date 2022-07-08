import { Grid, Typography } from "@mui/material";
import React from "react";
import CyoaText from "../../components/CyoaText";
import Dialogue from "../../components/Dialogue";

import data from "../../cyoa_data";

const { title } = data;
const { content } = data.sections.opening;

const Opening = () => {
  console.log(content);
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography>{title}</Typography>
      </Grid>
      {content.map(({ type, ...other }, index) => (
        <Grid item xs={12}>
          {type === "cyoa_text" ? (
            <CyoaText key={`cyoatext-opening-${index}`} {...other} />
          ) : (
            <Dialogue key={`dialogue-opening-${index}`} {...other} />
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default Opening;
