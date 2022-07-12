import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";

const DisplayContentWrapper = ({ title, children }) => {
  const [isOpen, toggleOpen] = useState(false);
  const isDrawbacks = title === "Drawbacks";
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid container spacing={4} sx={{ paddingBottom: "32px" }}>
      <Grid item xs={12}>
        <Button
          size="large"
          variant="contained"
          onClick={() => toggleOpen(!isOpen)}
          sx={{
            border: "2px solid rgba(114, 142, 120, 1) !important",
            borderRadius: "16px",
            backgroundColor: "#8fe5a6ff",
            textTransform: "none",
            color: "black",
            marginLeft: isDrawbacks && isMdUp ? "8px" : "0px",
            "&:hover": {
              backgroundColor: "inherit",
            },
          }}
        >
          <Typography variant="h3">{title}</Typography>
        </Button>
      </Grid>
      {children && isOpen && (
        <Grid item xs={12}>
          {children}
        </Grid>
      )}
    </Grid>
  );
};

DisplayContentWrapper.defaultProps = {
  title: "",
};

export default DisplayContentWrapper;
