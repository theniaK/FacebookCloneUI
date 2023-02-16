import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() =>({
  header:{
     backgroundColor: "black",
     height: "50px"
  },
  logo: {
    paddingTop: "12px",
    paddingLeft: "60px",
    fontWeight: "bold",
    color: "#FF1493",
    fontSize: "30px"
  }
}))

export function Header() {
  const classes = useStyles();
    return (
      <div className={classes.header}>
        {/* <img src={"/src/logo.png"} className={classes.logo} /> */}
        <div className={classes.logo}>FreakBook</div>
      </div>
    );
}