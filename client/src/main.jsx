import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastProvider } from "react-toast-notifications";

createRoot(document.getElementById("root")).render(
  <StrictMode>
<<<<<<< HEAD:velki/src/main.jsx
    <RouterProvider router={router} />
=======
    <div
      style={{
        backgroundImage:
          "url('https://www.wickspin24.live/images/velki-desktop-bg.webp')",
        backgroundSize: "cover",
      }}
      className="h-screen flex justify-center"
    >
      <div className="hidden lg:flex w-[30%] md:w-[20%] items-center justify-center">
        <img
          src="https://www.wickspin24.live/images/velki-logo-desktop.webp"
          alt=""
        />
      </div>
      <div className="w-full md:w-[60%] lg:w-[40%] xl:w-[30%] bg-[#eef6fb] overflow-y-auto">
        <Provider store={store}>
          <ToastProvider>
            <RouterProvider router={router} />
          </ToastProvider>
        </Provider>
      </div>
      <div className="hidden lg:block md:w-[20%] w-[30%]"></div>
    </div>
>>>>>>> 68998d501141fca00ef5e278ba00cfd76a401cda:client/src/main.jsx
  </StrictMode>
);
