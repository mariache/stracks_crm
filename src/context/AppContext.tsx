import {
  createContext,
  FC,
  useState,
  useContext,
  ReactNode,
  useMemo
} from "react";
import { Customer } from "../types/Index";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AppContext = createContext<any>(undefined);
type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentCustomer, setCurrentCustomer] = useState<
    Customer | undefined
  >();

  const setCustomer = (customer: Customer) => {
    setCurrentCustomer(customer);
  };

  const setEditMode = (value: boolean) => {
    setIsEditing(value);
  };

  const memoizedValue = useMemo(
    () => ({
      isEditing,
      currentCustomer,
      setEditMode,
      setCustomer
    }),
    [currentCustomer, isEditing]
  );

  return (
    <AppContext.Provider value={memoizedValue}>{children}</AppContext.Provider>
  );
};

export const useCtx = () => {
  return useContext(AppContext);
};
