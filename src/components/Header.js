import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  head: {
    fontFamily: "IBM Plex Mono",
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <header>
      <Typography variant="h1" className={classes.head}>
        Daily todos
      </Typography>
    </header>
  );
};
export default Header;
