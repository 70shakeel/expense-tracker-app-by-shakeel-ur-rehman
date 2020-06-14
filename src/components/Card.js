import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import "./Balance.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    boxShadow: "1px 2px 2px 2px",
    padding: 0,
    margin: 0,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({ income, expense }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={6} className="income">
            <div>
              <p className="hfive">INCOME</p>
              <h3 className="hfive">{income}</h3>
            </div>
          </Grid>
          <Grid item xs={6} className="expense">
            <div>
              <p className="hfive">EXPENSE</p>
              <h3 className="hfive">{expense}</h3>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
