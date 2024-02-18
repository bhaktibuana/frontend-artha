import MultiProvider from "@/contexts";
import AppRouters from "@/routers";

const App = () => {
  return (
    <>
      <MultiProvider>
        <AppRouters />
      </MultiProvider>
    </>
  );
};

export default App;
