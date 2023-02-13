import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home from "./routes/Home";
import NewActivity from "./routes/NewActivity";
import Activities from "./routes/Activities";
import ActivityPage from "./routes/ActivityPage";

// Components
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />

      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/newactivity" element={<NewActivity />} />

          <Route path="/activities" element={<Activities />} />

          <Route path="/activities/:id" element={<ActivityPage />} />
        </Routes>
      </Wrapper>

      <Footer />
    </Router>
  );
}

export default App;
