import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>({
  footer:{
     backgroundColor: "black",
     height: "50px",
     marginTop: "140px"
  },
  text: {
    fontSize: "15px",    
    fontFamily: 'Monaco',
    color: "#FF1493",
    float: "right",
    paddingRight: "30px"
  }
}))

export function Footer() {
  const classes = useStyles();

    return (
      <div className={classes.footer}>
        <div className={classes.text}>
         <p>Copyright 2022 &copy; FreakTeam</p>
        </div>
      </div>
    );
}