import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";

// import ProtectedRoutes from "./components/ProtectedRoutes";
import Dashboard from "./pages/dashboard";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeContextProvider } from "./context/ThemeContext";

const App = () => {
    
  return (
    <>
      <ErrorBoundary>
        <ThemeContextProvider>
          <BrowserRouter>
            <Routes>
              {/** Protected Routes */}
              {/** Wrap all Route under ProtectedRoutes element */}
              {/* <Route path="/" element={<ProtectedRoutes />}> */}
                <Route path="/dashboard/*" element={<Dashboard />} />
              {/* </Route> */}
              <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              <Route
                path="*"
                element={
                  <div className="py-10 px-4 flex flex-col items-center justify-center bg-slate-100 md:flex-row space-y-5 md:space-y-0 md:space-x-5 w-screen h-screen">
                    <p>There's nothing here!</p>
                  </div>
                }
              />
            </Routes>
          </BrowserRouter>
        </ThemeContextProvider>
      </ErrorBoundary>
    </>
  );
};

export default App;
