import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { User } from "../User";

const useStyles = makeStyles(() =>({
  container: {
    color: "#FF1493",
    fontFamily: 'serif',
    margin: "auto",
    width: "30%",
    fontWeight: "bold",
    paddingTop: "20px",
  },
  title:{
    fontSize: "40px",
    marginLeft:"100px",
  },
  form:{
    fontSize: "20px",
    fontFamily: 'serif',
    color: "black",
  },
  input:{
    width: "100%",
    padding: "12px 20px",
    margin:" 8px 0",
    display: "inline-block",
    border: "1px solid #ccc",
    borderRadius: "4px" 
  },
  button: {
    borderRadius: "4px",
    backgroundColor: "black",
    fontSize: "15px",
    fontFamily: 'serif',
    color: "#FF1493",
    display: "inline",
    "&:hover":{
      backgroundColor: "#696969",
    }
  },
  block:{
    display: "flex",
  },
  text:{
    fontSize: "15px",
    fontFamily: 'serif',
    color: "black",
    marginLeft: "7px",
  }
}))

export function LogIn() {
  const classes = useStyles();
  
  //const dispatch = useDispatch();
  
  // function onClick(){
  //   dispatch(makeFetchUser)
  // }

  // function makeFetchUser(api: API): User {
  // }

    return (
      <div className={classes.container}>
        <div className={classes.title}>
          <p>Join us now!</p>
        </div>
        <div className={classes.form}>
          <label>Email: </label>
          <input className={classes.input} placeholder="Email"></input>
          <label>Password: </label>
          <input className={classes.input} placeholder="Password"></input>
          <div className={classes.block}>
            <Button className={classes.button}>Log in</Button>
            <p className={classes.text}> Don't have an account?
            <a className={classes.text}  href="{this.makeHref('login')}"> Sign up </a>
            </p>
          </div>
        </div>
      </div>
    );
}