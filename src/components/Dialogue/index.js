import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { plusOrMinus } from "../../utils";

const getPointColorClass = (num) => {
  if (num > 0) return "point-green";
  else if (num < 0) return "red";
  return "";
};

const Dialogue = ({ name, relationship, choices }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="end" spacing={2}>
          <Grid item xs={6} md={4}>
            <Paper
              sx={{
                backgroundColor: "rgba(114, 182, 133, 1)",
                padding: "16px",
                borderRadius: "20px",
              }}
            >
              <Typography textAlign="end">{name}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={3} sm={1} md={1}>
            <Paper
              sx={{
                backgroundColor: "rgba(114, 182, 133, 1)",
                padding: "16px",
                borderRadius: "20px",
              }}
            >
              <Typography className={getPointColorClass(relationship)}>
                {relationship}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          {choices.map(({ text, points }, index) => (
            <Grid key={`grid-dialgue-${index}`} item xs={12} sm={6}>
              <Paper
                sx={{
                  backgroundColor: "rgba(114, 182, 133, 1)",
                  padding: "16px",
                  borderRadius: "20px",
                  border: "1px solid rgba(42, 183, 81, 1)",
                }}
              >
                <Grid container justifyContent="space-between">
                  <Grid item xs={9}>
                    <Typography
                      textAlign="start"
                      sx={{ textTransform: "uppercase" }}
                    >
                      {text}
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    item
                    xs={2}
                    alignContent="center"
                    justifyContent="center"
                  >
                    <Typography className={getPointColorClass(points)}>
                      {`${plusOrMinus(points)}${Math.abs(points)}`}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dialogue;
