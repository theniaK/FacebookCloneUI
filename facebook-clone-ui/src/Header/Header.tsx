import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>({
  header:{
     backgroundColor: "black",
     height: "100px"
  },
  text: {
    fontSize: "50px",
    color: "#FF1493",
    fontFamily: 'serif',
    paddingTop: "30px",
    paddingLeft: "40px",
    fontWeight: "bold"
  }
}))

export function Header() {
  const classes = useStyles();
    return (
      <div className={classes.header}>
        <div className={classes.text}>Facebook</div>
      </div>
    );
}