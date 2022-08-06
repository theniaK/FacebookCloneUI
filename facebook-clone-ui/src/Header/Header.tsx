import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>({
  header:{
    fontSize: "30px"
  }
}))

export function Header() {
  const classes = useStyles();
    return (
      <div className={classes.header}>
        <div>Hello World!</div>
      </div>
    );
}