import React, { Suspense } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import RollerSpinner from "./components/RollerSpinner";

import "./App.css";
import Homepage from "./pages/Homepage";
// const Homepage = React.lazy(() => import("./pages/Homepage"));

function App() {
  const location = useLocation();
  return (
    <Suspense fallback={<RollerSpinner />}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            render={(routerProps) => <Homepage {...routerProps} />}
          />
        </Switch>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;

// {/* <div className="App">
//     <header className="App-header">{/* <Navbar /> */}</header>
// </div> */}
