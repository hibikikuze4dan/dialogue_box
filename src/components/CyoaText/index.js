import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Interweave } from "interweave";
import React from "react";

const CyoaText = ({ text, subcontent }) => {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          sx={{ backgroundColor: "rgba(114, 182, 133, 1)", padding: "16px" }}
        >
          {text.map((t, index) => (
            <Typography gutterBottom key={`interweave-cyoatext-${index}`}>
              <Interweave content={t} />
            </Typography>
          ))}
        </Box>
      </Grid>
      {subcontent && (
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {subcontent.map((subArray, index) => (
              <Grid key={`grid-cyoatext-${index}`} item xs={12} md={6}>
                <Box
                  sx={{
                    backgroundColor: "rgba(114, 182, 133, 1)",
                    padding: "16px",
                    height: smUp ? "100%" : "inherit",
                  }}
                >
                  {subArray.map((s, sIndex) => (
                    <Typography
                      gutterBottom
                      key={`typography-cyoatext-${index}-${sIndex}`}
                    >
                      <Interweave content={s} />
                    </Typography>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default CyoaText;
