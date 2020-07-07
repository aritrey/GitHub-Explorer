import React from "react";
import {Switch,Route} from "react-router-dom"
import Dashboard from "../pages/Dashboard/"
import Repository from "../pages/Repository/"

const Routes=()=>{
  return   <Switch>//Sorgt dafür, dass nur eine route sichtbar ist
        <Route path="/" exact component={Dashboard}  />
        <Route path="/repository/:repository+"  component={ Repository}  />//+ damit man sieht dass alles nach dem strich ein param ist. sonst "/repository/:repository/:lalal möglich
    </Switch>

}
export default Routes