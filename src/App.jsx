import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import NotFound from "./pages/NotFound";
import ResetPassword from "./pages/auth/ResetPassword";
import "./App.css";
// import Register from "./pages/auth/Register";
import { PrivateRoute, PublicRoute } from "./routes/AuthRoute";
import Dashboard from "./pages/user/Dashboard";
import Home from "./pages/home/Home";
import SleepQuiz from "./components/SleepQuiz";
import AboutUs from "./pages/home/About";
import ContactUs from "./pages/home/ContactUs";
import Services from "./pages/home/Services";
import Cart from "./pages/user/Cart";
import Assessment from "./pages/user/Assessment";
import VerifyEmail from "./pages/auth/VerifyEmail";
import ThankYouPage from "./components/ThankYouPage";
import Diagnoses from "./pages/user/Diagnosis";
import Treatment from "./pages/user/Treatment";
import CareTeam from "./pages/user/CareTeam";
import Products from "./pages/home/Products";
import ProductDetails from "./components/ProductDetails";
import SuccessPage from "./pages/auth/SuccessPage";
import Categories from "./components/Categories";
import HNavbar from "./components/HNavbar";
import Footer from "./components/homePage/footer";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};
const AnimatedPage = ({ children }) => (
  <motion
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.4 }}
  >
    <HNavbar />
    {children}

    <Footer />
  </motion>
);
const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedPage>
              <Home />
            </AnimatedPage>
          }
        />
        <Route
          path="/about"
          element={
            <AnimatedPage>
              <AboutUs />
            </AnimatedPage>
          }
        />
        <Route
          path="/contact"
          element={
            <AnimatedPage>
              <ContactUs />
            </AnimatedPage>
          }
        />
        <Route
          path="/services"
          element={
            <AnimatedPage>
              <Services />
            </AnimatedPage>
          }
        />
        <Route
          path="/categories/"
          element={
            <AnimatedPage>
              <Categories />
            </AnimatedPage>
          }
        />
        <Route
          path="/category/:categoryName/"
          element={
            <AnimatedPage>
              <Products />
            </AnimatedPage>
          }
        />
        <Route
          path="/category/:categoryName/:productId/details/"
          element={
            <AnimatedPage>
              <ProductDetails />
            </AnimatedPage>
          }
        />
        <Route
          path="/cart"
          element={
            <AnimatedPage>
              <Cart />
            </AnimatedPage>
          }
        />
        <Route
          path="/take-quiz"
          element={
            <AnimatedPage>
              <SleepQuiz />
            </AnimatedPage>
          }
        />
        <Route
          path="/assessment"
          element={
            <AnimatedPage>
              <Assessment />
            </AnimatedPage>
          }
        />
        <Route
          path="/success"
          element={
            <AnimatedPage>
              <SuccessPage />
            </AnimatedPage>
          }
        />
        <Route
          path="/login"
          element={
            <AnimatedPage>
              <PublicRoute>
                <Login />
              </PublicRoute>
            </AnimatedPage>
          }
        />
        <Route
          path="/verify/:token"
          element={
            <AnimatedPage>
              <PublicRoute>
                <VerifyEmail />
              </PublicRoute>
            </AnimatedPage>
          }
        />

        {/* <Route
          path="/register"
          element={
            <AnimatedPage>
              
            </AnimatedPage>
              <PublicRoute>
                <Register />
              </PublicRoute>
          }
        /> */}
        <Route
          path="/forgot-password"
          element={
            <AnimatedPage>
              <PublicRoute>
                <ForgotPassword />
              </PublicRoute>
            </AnimatedPage>
          }
        />
        <Route
          path="/reset-password-user/:token"
          element={
            <AnimatedPage>
              <PublicRoute>
                <ResetPassword />
              </PublicRoute>
            </AnimatedPage>
          }
        />
        <Route
          path="/dashboard/user"
          element={
            <AnimatedPage>
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            </AnimatedPage>
          }
        />
        <Route
          path="/dashboard/user/diagnosis"
          element={
            <AnimatedPage>
              <PrivateRoute>
                <Diagnoses />
              </PrivateRoute>
            </AnimatedPage>
          }
        />
        <Route
          path="/dashboard/user/treatment"
          element={
            <AnimatedPage>
              <PrivateRoute>
                <Treatment />
              </PrivateRoute>
            </AnimatedPage>
          }
        />
        <Route
          path="/dashboard/user/care-team"
          element={
            <AnimatedPage>
              <PrivateRoute>
                <CareTeam />
              </PrivateRoute>
            </AnimatedPage>
          }
        />
        <Route
          path="*"
          element={
            <AnimatedPage>
              <NotFound />
            </AnimatedPage>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
