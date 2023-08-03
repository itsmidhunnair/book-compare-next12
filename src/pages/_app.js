import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          body {
            background: #4b5563;
          }
        `}
      </style>
      <div className="dark">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
