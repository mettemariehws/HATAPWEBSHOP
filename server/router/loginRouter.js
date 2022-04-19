import {Router} from "express";
import db from "../db/createConnection.js";

const router = Router();

//laver api fordi ellers kan du ikke sync 
//async skal du bruge for at fetche data læs op på deT!!!!

router.post("/api/login", async (req, res) => {
    const {username, password } = req.body;
    const loginUser = await db.get("SELECT * FROM users WHERE username = ?", [username,]);

    if(!loginUser){
        res.status(400);
        return res.send("Cannot find user");
    }

    if(loginUser.password === password){
        req.session.username = username;
        return res.send("You have succesfully logged into the account:" + username)

    }else{
        res.status(401);
        res.send("IT DID NOT WORK")
    }
  });

  router.post("/api/logout", async (req, res) =>{
      if(req.session.loggedIn){ //check this 
        req.session.loggedIn = false;
      }
    });

export default router; 