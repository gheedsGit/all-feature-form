import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    paddingTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "445px",
    border: "2px solid",
    boxShadow: "2px 2px #00f0ff",
    typography: {
      textAlign: "center",
      fontSize: "24px",
      color: "#050a0e",
      fontFamily: "Tomorrow, sans-serif",
      textShadow: "1px 1px #00f0ff",
      fontWeight: "300",
      textTransform: "uppercase",
    },
  },
}));

const MainContainer = ({ children, typoMessage, ...props }) => {
  const classes = useStyles();

  return (
    <Container
      className={classes.root}
      container="main"
      maxWidth="xs"
      {...props}
    >
      <Typography
        className={classes.root.typography}
        component="h2"
        variant="h5"
      >
        {" "}
        {typoMessage}
      </Typography>
      {children}
    </Container>
  );
};

export default MainContainer;
