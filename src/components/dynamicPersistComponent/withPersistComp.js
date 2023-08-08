import Loader from "@components/common/loader";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

const DynamicPersistComp = ({ children }) => {
  const store = useStore();

  if (typeof window !== undefined) {
    return (
      <PersistGate
        persistor={store.__persistor}
        loading={
          <div>
            <Loader />
          </div>
        }
      >
        {() => children}
      </PersistGate>
    );
  } else {
    return children;
  }
};

export default DynamicPersistComp;
