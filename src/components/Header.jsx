import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    textAlign: "center",
    fontSize: "40px",
    color: "#050a0e",
    fontFamily: "Tomorrow, sans-serif",
    textShadow: "1px 1px #00f0ff",
    fontWeight: "500",
    textTransform: "uppercase",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.root} component="h1">
      All Feature Form_
    </Typography>
  );
};

export default Header;
