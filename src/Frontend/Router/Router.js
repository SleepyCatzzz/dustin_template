import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

const Navigator = ({routes}) => {
  const history = useHistory();
  return(
    <Router history={history}>
      <div>
        <nav>
          <ul>
            {routes.map((route)=>{
              return(
                <li key={route.name}>
                  <Link to={route.path}>{route.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Switch>
          {routes.map((route)=>{
            return(
              <Route 
                key={route.name}
                exact path={route.path}
                render={()=>
                  <div>
                    path {route.path}
                    <route.component/>
                  </div>
                }
              >
              </Route>
              );
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default Navigator;
