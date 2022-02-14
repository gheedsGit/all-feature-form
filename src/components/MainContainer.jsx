import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "600px",
    border: "2px solid",
    boxShadow: "2px 2px #00f0ff",
  },
}));

const MainContainer = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <Container
      className={classes.root}
      container="main"
      maxWidth="xs"
      {...props}
    >
      {children}
    </Container>
  );
};

export default MainContainer;
