import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";

import ProtectedRoutes from "./components/ProtectedRoutes";
import Dashboard from "./pages/dashboard";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeContext, ThemeContextProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <ThemeContextProvider>
          <BrowserRouter>
            <Routes>
              {/** Protected Routes */}
              {/** Wrap all Route under ProtectedRoutes element */}
              {/* <Route path="/" element={<ProtectedRoutes/>}> */}
              <Route path="dashboard" element={<Dashboard />} />
              {/* </Route> */}
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </BrowserRouter>
        </ThemeContextProvider>
      </ErrorBoundary>
    </>
  );
};

export default App;
