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
          <Grid item xs={3} md={4}>
            <Paper>
              <Typography textAlign="end">{name}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={2} md={1}>
            <Paper>
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
            <Grid key={`grid-dialgue-${index}`} item xs={12} md={6}>
              <Paper>
                <Grid container justifyContent="space-between">
                  <Grid item xs={10}>
                    <Typography
                      textAlign="start"
                      sx={{ textTransform: "uppercase" }}
                    >
                      {text}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
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
