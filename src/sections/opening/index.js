import { Grid, Typography } from "@mui/material";
import React from "react";
import CyoaText from "../../components/CyoaText";
import Dialogue from "../../components/Dialogue";

import data from "../../cyoa_data";

const { title } = data;
const { content } = data.sections.opening;

const Opening = () => {
  return (
    <Grid container spacing={4} sx={{ paddingBottom: "48px" }}>
      <Grid zeroMinWidth item xs={12}>
        <Typography sx={{ fontWeight: "bold" }} variant="h2">
          {title}
        </Typography>
      </Grid>
      {content.map(({ type, ...other }, index) => (
        <Grid zeroMinWidth item xs={12}>
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
