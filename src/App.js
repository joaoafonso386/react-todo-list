import Layout from "./views/Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Layout></Layout>
      </Router>
    </div>
  );
};

export default App;
