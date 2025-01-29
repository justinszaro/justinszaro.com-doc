# React Router Core Guide

## Philosophy
- Router Router allows you to dynamically route your application. 

### Static Routing
- Routes are declared as part of the app's initialization before any rendering takes place.
- Laravel uses Static Routing
- React Router DOES NOT DO THIS!

### Dynamic Routing
- In Dynamic Routing, routing takes place as the app is rendering. 
- This allows almost everything to be a component in React Router.
- Example:
  - First, grab a Router component from your environment and render it at the top of the app.
```jsx
// react-native
import { NativeRouter } from "react-router-native";

// react-dom (what we'll use here)
import { BrowserRouter } from "react-router-dom";
```
  - Next, grab a link component to to send the user to a new location.
```jsx
const App = () => (
  <div>
    <nav>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  </div>
);
```
  - Finally, render a route when someone visits the dashboard.
```jsx
const App = () => (
  <div>
    <nav>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
    <div>
      <Route path="/dashboard" component={Dashboard} />
    </div>
  </div>
);
```
- The route will render `<Dashboard {...props}/>` which is where props are specific router things `{ match, location, history }`
- If the user is not at the dashboard, null will be rendered.

### Nested Routes
- You can nest routes in the same way you nest divs.
```jsx
const App = () => (
  <BrowserRouter>
    {/* here's a div */}
    <div>
      {/* here's a Route */}
      <Route path="/tacos" component={Tacos} />
    </div>
  </BrowserRouter>
);

// when the url matches `/tacos` this component renders
const Tacos = ({ match }) => (
  // here's a nested div
  <div>
    {/* here's a nested Route,
        match.url helps us make a relative path */}
    <Route path={match.url + "/carnitas"} component={Carnitas} />
  </div>
);
```

### Responsive Routes
- Consider a user navigates to /invoices. 
- On a smaller screen, we want to show a list of invoices and link to the invoice dashboard.
```
Small Screen
url: /invoices

+----------------------+
|                      |
|      Dashboard       |
|                      |
+----------------------+
|                      |
|      Invoice 01      |
|                      |
+----------------------+
|                      |
|      Invoice 02      |
|                      |
+----------------------+
|                      |
|      Invoice 03      |
|                      |
+----------------------+
|                      |
|      Invoice 04      |
|                      |
+----------------------+
```
- On larger screens, we want to show a master-detail view where the navigation is on the left and the dashboard or specific invoices show up on the right.
```
Large Screen
url: /invoices/dashboard

+----------------------+---------------------------+
|                      |                           |
|      Dashboard       |                           |
|                      |   Unpaid:             5   |
+----------------------+                           |
|                      |   Balance:   $53,543.00   |
|      Invoice 01      |                           |
|                      |   Past Due:           2   |
+----------------------+                           |
|                      |                           |
|      Invoice 02      |                           |
|                      |   +-------------------+   |
+----------------------+   |                   |   |
|                      |   |  +    +     +     |   |
|      Invoice 03      |   |  | +  |     |     |   |
|                      |   |  | |  |  +  |  +  |   |
+----------------------+   |  | |  |  |  |  |  |   |
|                      |   +--+-+--+--+--+--+--+   |
|      Invoice 04      |                           |
|                      |                           |
+----------------------+---------------------------+
```
- `/invoices` is not a valid route for a larger screen, since there isn't anything to include on the right hand side.
- If you start thinking about routing as UI, it could lead to the following configuration:
```jsx
const App = () => (
  <AppLayout>
    <Route path="/invoices" component={Invoices} />
  </AppLayout>
);

const Invoices = () => (
  <Layout>
    {/* always show the nav */}
    <InvoicesNav />

    <Media query={PRETTY_SMALL}>
      {screenIsSmall =>
        screenIsSmall ? (
          // small screen has no redirect
          <Switch>
            <Route
              exact
              path="/invoices/dashboard"
              component={Dashboard}
            />
            <Route path="/invoices/:id" component={Invoice} />
          </Switch>
        ) : (
          // large screen does!
          <Switch>
            <Route
              exact
              path="/invoices/dashboard"
              component={Dashboard}
            />
            <Route path="/invoices/:id" component={Invoice} />
            <Redirect from="/invoices" to="/invoices/dashboard" />
          </Switch>
        )
      }
    </Media>
  </Layout>
);
```
- The user rotating their phone will be redirected to the correct layout. 

