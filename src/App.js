import Layout from "./views/Layout/Layout";
import HomePage from "./views/HomePage/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import { routes } from "./routes/routes";

const App = () => {
  return (
    <div>
      <Router>
        <Layout>
          <HomePage routes={routes} />
        </Layout>
      </Router>
    </div>
  );
};

export default App;
