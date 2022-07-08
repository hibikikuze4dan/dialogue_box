import { Grid, Typography } from "@mui/material";
import { Interweave } from "interweave";
import React from "react";

const CyoaText = ({ text, subcontent }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {text.map((t, index) => (
          <Typography gutterBottom key={`interweave-cyoatext-${index}`}>
            <Interweave content={t} />
          </Typography>
        ))}
      </Grid>
      {subcontent && (
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {subcontent.map((subArray, index) => (
              <Grid key={`grid-cyoatext-${index}`} item xs={12} md={6}>
                {subArray.map((s, sIndex) => (
                  <Typography
                    gutterBottom
                    key={`typography-cyoatext-${index}-${sIndex}`}
                  >
                    <Interweave content={s} />
                  </Typography>
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default CyoaText;
