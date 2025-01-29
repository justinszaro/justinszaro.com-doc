# React Router Core API

## Hooks
- Router Router ships with a few different hooks to access the state of the router and perform navigation from within components.
  - These hooks only work in React version 16.8 or higher.

### useHistory
- The `useHistory` hook allows you to access the history instance and can be used to navigate.
```jsx
import { useHistory } from "react-router-dom";

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}
```

### useLocation
- The useLocation hook represents the `location` object that represents the current URL. 
- You can think about it is a `useState` that returns a new location whenever the URL changes.
```jsx
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";

function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
    ga.send(["pageview", location.pathname]);
  }, [location]);
}

function App() {
  usePageViews();
  return <Switch>...</Switch>;
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  node
);
```

### useParams
- `useParams` returns an object of key/value pairs of URL parameters. 
- It can be used to access `match.params` of the current Route.
```jsx
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

function BlogPost() {
  let { slug } = useParams();
  return <div>Now showing post {slug}</div>;
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/blog/:slug">
        <BlogPost />
      </Route>
    </Switch>
  </Router>,
  node
);
```

### useRouteMatch
- The `useRouteMatch` hook attempts to match the current URL in the same way a Route would.
- It is useful for collecting the match data without rendering a Route.
- Instead of...
```jsx
import { Route } from "react-router-dom";

function BlogPost() {
  return (
    <Route
      path="/blog/:slug"
      render={({ match }) => {
        // Do whatever you want with the match...
        return <div />;
      }}
    />
  );
}
```
- You can do:
```jsx
import { useRouteMatch } from "react-router-dom";

function BlogPost() {
  let match = useRouteMatch("/blog/:slug");

  // Do whatever you want with the match...
  return <div />;
}
```
- The `useRouteMatch` either:
  - Tales no arguments and returns the match object of the current Route.
  - Takes a single argument, which is identical to the props argument of `matchPath`
```jsx
const match = useRouteMatch({
  path: "/BLOG/:slug/",
  strict: true,
  sensitive: true
});
```