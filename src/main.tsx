import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import calculationReducer from "./redux/calculationSlice";

const store = configureStore({
  reducer: {
    // registerではslice全体を登録しないといけないから名前を変更して登録する
    register: calculationReducer,
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
