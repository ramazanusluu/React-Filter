import { FormControlLabel, Checkbox } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    "&$checked": {
      color: "rgba(0, 0, 0, 0.64)",
    },
  },
  checked: {

  },
  wrap: {
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 0
  },
  label: {},
});

const Brand = ({ brand, changeChecked }) => {
  const classes = useStyles();

  const { checked, label, id } = brand;

  return (
    <>
      <FormControlLabel
        classes={{ label: classes.label, root: classes.wrap }}
        control={
          <Checkbox
            classes={{ checked: classes.checked, root: classes.root }}
            size="small"
            checked={checked}
            onChange={() => changeChecked(id)}
          />
        }
        label={label}
      />
    </>
  );
};

export default Brand;
