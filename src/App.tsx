import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { store } from "./app/store";
import i18n from "./i18n";

function App() {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter basename={__BASE_PATH__}>
          <AppRoutes />
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
  );
}

export default App;
