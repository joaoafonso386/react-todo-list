import Layout from "./views/Layout/Layout";
import RenderRoutes from "./routes/RenderRoutes/RenderRoutes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Layout>
          <RenderRoutes />
        </Layout>
      </Router>
    </div>
  );
};

export default App;
