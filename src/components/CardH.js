import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import "./History.css";
import { GlobalContext } from "../context/GlobalState";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "none",
    padding: "none",
    borderRight: "10px solid green",
    backgroundColor: "rgba(0,255,0,0.5)",
    hover: "btn-1{display: block}",
  },
  bullet: {
    display: "inline-block",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: "none",
  },
});

export default function SimpleCard({ transaction }) {
  const classes = useStyles();
  const sign = transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <div className="forHover">
      <Card className={transaction.amount < 0 ? "minus" : `${classes.root}`}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={4} className="gamount">
              <div className="transactiontype">
                <h5 className="hfive">{transaction.text}</h5>
              </div>
            </Grid>

            <Grid item xs={7} className="gamount">
              <div className="amount">
                <h5 className="hfive">
                  <span>{sign}$</span>
                  {Math.abs(transaction.amount)}
                </h5>
              </div>
            </Grid>
            <Grid item xs={1}>
              <button
                onClick={() => deleteTransaction(transaction.id)}
                className="btn-1"
              >
                x
              </button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
