import { BrowserRouter } from "react-router-dom";
import { ReactElement } from "react";

import { AppRouter } from "./providers/Router";
import { ErrorBoundary } from "./providers/ErrorBoundary";
import { StoreProvider } from "./providers/StoreProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import "./styles/index.css";

function App(): ReactElement {
  return (
    <BrowserRouter>
      <StoreProvider>
        <ErrorBoundary>
          <ThemeProvider>
            <AppRouter />
          </ThemeProvider>
        </ErrorBoundary>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
