import React from "react";
import { Text, View } from "react-native";
import { useAccess } from "../../../hooks/access";
import { Container, Selected } from "./styles";

const AccessSelect: React.FC = () => {
  const { selected, loading } = useAccess();

  return (
    <Container>
      <Selected>
        {loading ? (
          <Text>loading...</Text>
        ) : (
          <>
            <View>
              <Text style={{ fontWeight: "bold", textAlign: "right" }}>
                {selected?.superUnit.name}
              </Text>
              <Text style={{ textAlign: "right" }}>{selected?.unit.name}</Text>
            </View>
          </>
        )}
      </Selected>
    </Container>
  );
};

export default AccessSelect;
