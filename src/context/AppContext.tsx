import {
  createContext,
  FC,
  useState,
  useContext,
  ReactNode,
  useMemo
} from "react";
import { Customer, Opportunity } from "../types/Index";

type CtxType = {
  isEditing: boolean;
  currentCustomer: Customer | undefined;
  setEditMode: (value: boolean) => void;
  setCustomer: (customer?: Customer) => void;
  currentCustomerId: number | undefined;
  currentOppId: number | undefined;
  setCustomerId: (id: number) => void;
  setOppId: (id: number) => void;
  currentOpportunity: Opportunity | undefined;
  setOpportunity: (opportunity?: Opportunity) => void;
  openOpModal: boolean;
  setOpenOpModal: (value: boolean) => void;
  openCustomerModal: boolean;
  setOpenCustomerModal: (value: boolean) => void;
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
  const [currentOpportunity, setCurrentOpportunity] = useState<
    Opportunity | undefined
  >();
  const [currentCustomerId, setCurrentCustomerId] = useState<number>();
  const [currentOppId, setCurrentOppId] = useState<number>();
  const [isOpenCustomerModal, setIsOpenCustomerModal] =
    useState<boolean>(false);
  const [isOpenOpModal, setIsOpenOpModal] = useState<boolean>(false);

  const setCustomer = (customer?: Customer) => {
    setCurrentCustomer(customer);
  };

  const setOpenCustomerModal = (value: boolean) => {
    setIsOpenCustomerModal(value);
  };

  const setOpenOpModal = (value: boolean) => {
    setIsOpenOpModal(value);
  };

  const setOpportunity = (opportunity?: Opportunity) => {
    setCurrentOpportunity(opportunity);
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
      currentOpportunity,
      openOpModal: isOpenOpModal,
      openCustomerModal: isOpenCustomerModal,
      setOpportunity,
      setOppId,
      setOpenCustomerModal,
      setOpenOpModal,
      setCustomerId
    }),
    [
      currentCustomer,
      currentCustomerId,
      currentOppId,
      currentOpportunity,
      isEditing,
      isOpenCustomerModal,
      isOpenOpModal
    ]
  );

  return (
    <AppContext.Provider value={memoizedValue}>{children}</AppContext.Provider>
  );
};

export const useCtx = () => {
  return useContext(AppContext);
};
