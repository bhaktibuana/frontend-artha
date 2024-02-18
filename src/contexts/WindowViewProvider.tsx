import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface IWindowViewContext {
  windowViewType: "desktop" | "mobile";
}

interface IWindowViewProviderProps {
  children?: ReactNode;
}

const WindowViewContext = createContext<IWindowViewContext>(
  {} as IWindowViewContext
);

export const useWindowViewContext = () => {
  return useContext(WindowViewContext);
};

const WindowViewProvider: React.FC<IWindowViewProviderProps> = (props) => {
  const [viewType, setViewType] =
    useState<IWindowViewContext["windowViewType"]>("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setViewType("mobile");
      } else {
        setViewType("desktop");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <WindowViewContext.Provider
        value={{
          windowViewType: viewType,
        }}
      >
        {props.children}
      </WindowViewContext.Provider>
    </>
  );
};

export default WindowViewProvider;
