import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Slider } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "90%",
    display: "block",
    justifyContent: "center",
  },
  thumb: {
    color: "#111111",
  },
  rail: {
    color: "#000000",
  },
  track: {
    color: "#111111",
  },
});

const Price = ({ value, changePrice }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Slider
          value={value}
          onChange={changePrice}
          valueLabelDisplay="on"
          min={0}
          max={500}
          classes={{
            thumb: classes.thumb,
            rail: classes.rail,
            track: classes.track,
          }}
        />
      </div>
    </>
  );
};

export default Price;
