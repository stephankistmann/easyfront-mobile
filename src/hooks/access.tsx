import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { useAuth } from "./auth";

interface ISuperUnit {
  id: string;
  name: string;
}
interface IUnit {
  id: string;
  name: string;
}

interface IAccessCategory {
  id: string;
  name: string;
}

interface IAccess {
  accessCategory: IAccessCategory;
  unit: IUnit;
  superUnit: ISuperUnit;
  id: string;
  active: boolean;
  superUnit_id: string;
}

interface IAccessContext {
  accesses: IAccess[];
  selected: IAccess | undefined;
  selectAccess(accessId: string): void;
  loading: boolean;
}

const AccessesContext = createContext<IAccessContext>({} as IAccessContext);

const AccessProvider: React.FC = ({ children }) => {
  const { token } = useAuth();
  const [accesses, setAccesses] = useState<IAccess[]>([]);
  const [selected, setSelected] = useState<IAccess>();
  const [loading, setLoading] = useState(true);

  async function selectAccess(id: string) {
    setSelected(accesses.find((access) => access.id === id));
  }

  useEffect(() => {
    async function getData() {
      const response = await api.get("/user/accesses");

      if (response.status !== 200) return;

      const filteredAccesses: IAccess[] = response.data.data.filter(
        (access: IAccess) => access.active
      );

      setAccesses(filteredAccesses);

      setSelected(filteredAccesses[0]);
      setLoading(false);
    }

    getData();
  }, [token]);

  return (
    <AccessesContext.Provider
      value={{ accesses, selected, selectAccess, loading }}
    >
      {children}
    </AccessesContext.Provider>
  );
};

function useAccess(): IAccessContext {
  const context = useContext(AccessesContext);

  if (!context) {
    throw new Error("useSuperunit must be used within an AuthProvider");
  }

  return context;
}

export { AccessProvider, useAccess };
