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