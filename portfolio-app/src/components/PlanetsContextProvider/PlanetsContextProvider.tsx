import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface PlanetsContextProviderInterface {
  tooltip: string;
  setTooltip: Dispatch<SetStateAction<string>>;
}

type PlanetsContextProviderType = {
  children: ReactNode;
};

const PlanetsContext = createContext<PlanetsContextProviderInterface | null>(
  null
);

export const PlanetsContextProvider = ({
  children,
}: PlanetsContextProviderType) => {
  const [tooltip, setTooltip] = useState('');

  return (
    <PlanetsContext.Provider value={{ tooltip, setTooltip }}>
      {children}
    </PlanetsContext.Provider>
  );
};

export const usePlanetsContext = () => {
  const context = useContext(PlanetsContext);

  if (!context) {
    throw new Error(
      'usePlanetsContext must be called within a PlanetsContextProvider'
    );
  }

  const { tooltip, setTooltip } = context;

  const handleSetTooltip = (value: string) => {
    setTooltip(value);
  };

  return { tooltip, handleSetTooltip };
};
