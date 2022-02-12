import { ChakraProvider, Container } from "@chakra-ui/react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Employees from "./pages/Employees";
import About from "./pages/About";

import Navbar from "./components/Nav";
import "./App.css";

const FourOFour = () => <div className="four-o-four"></div>;

const navItems = [
  {
    link: "/",
    component: <Main />,
  },
  {
    link: "/employees",
    component: <Employees />,
  },
  {
    link: "/about",
    component: <About />,
  },
  {
    link: "*",
    component: <FourOFour />,
  },
];

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Container maxWidth={"5xl"} marginTop="10" shadow={"md"}>
          <Routes>
            {navItems.map((item) => (
              <Route
                key={Math.random()}
                path={item.link}
                element={item.component}
              />
            ))}
          </Routes>
        </Container>
      </Router>
    </ChakraProvider>
  );
}

export default App;
