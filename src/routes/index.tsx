import React from "react";
import {Switch,Route} from "react-router-dom"
import Dashboard from "../pages/Dashboard/"
import Repository from "../pages/Repository/"

const Routes=()=>{
  return   <Switch>//Sorgt dafür, dass nur eine route sichtbar ist
        <Route path="/" exact component={Dashboard}  />
        <Route path="/repository"  component={ Repository}  />
    </Switch>

}
export default Routes