import {
  createContext,
  FC,
  useState,
  useContext,
  ReactNode,
  useMemo
} from "react";
import { Customer } from "../types/Index";

type CtxType = {
  isEditing: boolean;
  currentCustomer: Customer | undefined;
  setEditMode: (value: boolean) => void;
  setCustomer: (customer?: Customer) => void;
  currentCustomerId: number | undefined;
  currentOppId: number | undefined;
  setCustomerId: (id: number) => void;
  setOppId: (id: number) => void;
};

const AppContext = createContext<CtxType>({} as CtxType);
type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentCustomer, setCurrentCustomer] = useState<
    Customer | undefined
  >();
  const [currentCustomerId, setCurrentCustomerId] = useState<number>();
  const [currentOppId, setCurrentOppId] = useState<number>();

  const setCustomer = (customer?: Customer) => {
    setCurrentCustomer(customer);
  };

  const setEditMode = (value: boolean) => {
    setIsEditing(value);
  };

  const setOppId = (id: number) => {
    setCurrentOppId(id);
  };

  const setCustomerId = (id: number) => {
    setCurrentCustomerId(id);
  };

  const memoizedValue = useMemo(
    () => ({
      isEditing,
      currentCustomer,
      setEditMode,
      setCustomer,
      currentOppId,
      currentCustomerId,
      setOppId,
      setCustomerId
    }),
    [currentCustomer, currentCustomerId, currentOppId, isEditing]
  );

  return (
    <AppContext.Provider value={memoizedValue}>{children}</AppContext.Provider>
  );
};

export const useCtx = () => {
  return useContext(AppContext);
};
