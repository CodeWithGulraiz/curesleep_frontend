import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import NotFound from "./pages/NotFound";
import ResetPassword from "./pages/auth/ResetPassword";
import "./App.css";
// import Register from "./pages/auth/Register";
import { PrivateRoute, PublicRoute } from "./routes/AuthRoute";
import Dashboard from "./pages/user/Dashboard";
import Home from "./pages/home/Home";
import SleepQuiz from "./pages/components/SleepQuiz";
import AboutUs from "./pages/home/About";
import ContactUs from "./pages/home/ContactUs";
import Services from "./pages/home/Services";
import Cart from "./pages/user/Cart";
import Assessment from "./pages/user/Assessment";
import VerifyEmail from "./pages/auth/VerifyEmail";
import ThankYouPage from "./pages/components/ThankYouPage";
import Diagnoses from "./pages/user/Diagnosis";
import Treatment from "./pages/user/Treatment";
import CareTeam from "./pages/user/CareTeam";
import Products from "./pages/home/Products";
import ProductDetails from "./pages/components/ProductDetails";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <AboutUs />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <ContactUs />
            </motion.div>
          }
        />
        <Route
          path="/services"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <Services />
            </motion.div>
          }
        />
        <Route
          path="/products/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <Products />
            </motion.div>
          }
        />
        <Route
          path="/products/:id/details"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <ProductDetails />
            </motion.div>
          }
        />
        <Route
          path="/cart"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <Cart />
            </motion.div>
          }
        />
        <Route
          path="/take-quiz"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <SleepQuiz />
            </motion.div>
          }
        />
        <Route
          path="/assessment"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <Assessment />
            </motion.div>
          }
        />
        <Route
          path="/login"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <PublicRoute>
                <Login />
              </PublicRoute>
            </motion.div>
          }
        />
        <Route
          path="/verify/:token"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <PublicRoute>
                <VerifyEmail />
              </PublicRoute>
            </motion.div>
          }
        />

        {/* <Route
          path="/register"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <PublicRoute>
                <Register />
              </PublicRoute>
            </motion.div>
          }
        /> */}
        <Route
          path="/forgot-password"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <PublicRoute>
                <ForgotPassword />
              </PublicRoute>
            </motion.div>
          }
        />
        <Route
          path="/reset-password-user/:token"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <PublicRoute>
                <ResetPassword />
              </PublicRoute>
            </motion.div>
          }
        />
        <Route
          path="/dashboard/user"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            </motion.div>
          }
        />
        <Route
          path="/dashboard/user/diagnosis"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <PrivateRoute>
                <Diagnoses />
              </PrivateRoute>
            </motion.div>
          }
        />
        <Route
          path="/dashboard/user/treatment"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <PrivateRoute>
                <Treatment />
              </PrivateRoute>
            </motion.div>
          }
        />
        <Route
          path="/dashboard/user/care-team"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <PrivateRoute>
                <CareTeam />
              </PrivateRoute>
            </motion.div>
          }
        />
        <Route
          path="*"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <NotFound />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
