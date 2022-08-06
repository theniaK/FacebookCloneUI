import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>({
  header:{
     backgroundColor: "black",
     height: "100px"
  },
  logo: {
    paddingTop: "30px",
    paddingLeft: "40px",
    fontWeight: "bold"
  }
}))

export function Header() {
  const classes = useStyles();
    return (
      <div className={classes.header}>
        <img src={"./src/logo.png"} className={classes.logo} />
      </div>
    );
}