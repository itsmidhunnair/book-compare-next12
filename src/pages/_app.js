import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { ToastContainer } from "react-toastify";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import LoadingBar from "react-top-loading-bar";

import { ApolloProvider } from "@apollo/client";

import Loader from "@components/common/loader";

import { client } from "src/graphql/client";
import { wrapper } from "src/store";

import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  const store = useStore();
  const router = useRouter();
  const ref = useRef(null);

  useEffect(() => {
    const start = () => {
      console.log("start");
      ref.current.continuousStart();
    };
    const end = () => {
      console.log("finished");
      ref.current.complete();
    };
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeError", end);
    router.events.on("routeChangeComplete", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, []);

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
      <LoadingBar color="#131827" ref={ref} height={4} />
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
