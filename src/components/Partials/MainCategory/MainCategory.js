import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  toggle: {
    border: "none !important",
    color: "#111111  !important",
    padding: "5px 10px !important",
    backgroundColor: "rgba(0, 0, 0, 0.12)",
  },
});

const MainCategory = ({ options, value, selectToggle }) => {
  const classes = useStyles();
  return (
    <>
      <ToggleButtonGroup
        value={value}
        onChange={selectToggle}
        className={classes.root}
        exclusive
      >
        {options.map(({ label, id, value }) => (
          <ToggleButton className={classes.toggle} key={id} value={value}>
            {label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </>
  );
};

export default MainCategory;
