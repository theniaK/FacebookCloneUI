import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>({
  text: {
    fontSize: "20px",
    color: "#FF1493",
    fontFamily: 'serif',
    margin: "auto",
    width: "50%",
  }
}))

export function LogIn() {
  const classes = useStyles();
  
    return (
      <div className={classes.text}>
        <p>Join us now!</p>
      </div>
    );
}