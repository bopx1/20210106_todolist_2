import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export function PrivateRoute(props){
    const currentUser = useSelector(state => state.auth.user);
    console.log(currentUser);
    return currentUser ?  <Route {...props}>
        {props.children}
    </Route> : <Redirect to='/' />
}