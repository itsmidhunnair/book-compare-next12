import Loader from "@components/common/loader";
import { Provider, useStore } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { wrapper } from "src/store";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { client } from "src/graphql/client";

function MyApp({ Component, pageProps }) {
  const store = useStore();
  return (
    <>
      {/* To make full body bg in dark colour */}
      <style jsx global>
        {`
          body {
            background: #4b5563;
          }
        `}
      </style>
      <PersistGate
        persistor={store.__persistor}
        loading={
          <div>
            <Loader />
          </div>
        }
      >
        <ApolloProvider client={client}>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <div className="dark">
            <Component {...pageProps} />
          </div>
        </ApolloProvider>
      </PersistGate>
    </>
  );
}

export default wrapper.withRedux(MyApp);
