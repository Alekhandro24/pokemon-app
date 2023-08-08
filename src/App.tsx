import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import Background from "./components/Background";
import "./scss/index.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Search from "./pages/Search";
import MyList from "./pages/MyList";
import About from "./pages/About";
import Compare from "./pages/Compare";
import Pokemon from "./pages/Pokemon";
import { ToastContainer, ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useEffect } from "react";
import { clearToasts, setUserStatus } from "./app/slices/AppSlice";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./utils/FirebaseCinfig";

const App = () => {
  const { toasts } = useAppSelector(({ app }) => app);
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        dispatch(setUserStatus({ email: currentUser.email }));
      }
    });
  }, [dispatch]);

  useEffect(() => {
    if (toasts.length) {
      const toastOptions: ToastOptions = {
        position: "bottom-right",
        autoClose: 2000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };
      toasts.forEach((message: string) => {
        toast(message, toastOptions);
      });
      dispatch(clearToasts());
    }
  }, [dispatch, toasts]);

  return (
    <div className="main-container">
      <Background />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/list" element={<MyList />} />
          <Route path="/about" element={<About />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
          <Route path="*" element={<Navigate to="/pokemon/1" />} />
        </Routes>

        <Footer />
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
