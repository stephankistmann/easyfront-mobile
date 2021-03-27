import React from "react";
import { ActivityIndicator } from "react-native";
import { useAccess } from "../../../hooks/access";
import { Container, Selected, Unit, UnitName, SuperUnitName } from "./styles";

const AccessSelect: React.FC = () => {
  const { selected, loading } = useAccess();

  return (
    <Container>
      <Selected>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <>
            <Unit>
              <SuperUnitName>{selected?.superUnit.name}</SuperUnitName>
              <UnitName>{selected?.unit.name}</UnitName>
            </Unit>
          </>
        )}
      </Selected>
    </Container>
  );
};

export default AccessSelect;
