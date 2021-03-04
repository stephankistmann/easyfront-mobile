/* eslint-disable no-constant-condition */
import React from "react";
import { Text, ActivityIndicator, Platform } from "react-native";
import { Feather } from "@expo/vector-icons";
import SelectIOS from "../../Select/index.ios";
import Select from "../../Select/index.android";

import {
  Container,
  Selected,
  IconBackground,
  Left,
  Right,
  SuperUnitUnitTextContainer,
  SuperUnitText,
  ChevronDown,
} from "./styles";
import { useAccess } from "../../../hooks/access";

const SuperUnitSelect: React.FC = () => {
  const { accesses, selected, selectAccess } = useAccess();

  return (
    <Container>
      <Selected>
        {!selected ? (
          <ActivityIndicator />
        ) : (
          <>
            <Left>
              <IconBackground>
                <Feather name="home" size={20} color="#fff" />
              </IconBackground>
              <SuperUnitUnitTextContainer>
                <SuperUnitText>{selected?.superUnit.name}</SuperUnitText>
                <Text>{selected?.unit.name}</Text>
              </SuperUnitUnitTextContainer>
            </Left>
            {Platform.OS === "android" ? (
              <>
                <Right>
                  <Select
                    value={selected.id}
                    onChange={(accessId: string) => selectAccess(accessId)}
                    options={accesses}
                  />
                  <ChevronDown name="chevron-down" size={20} />
                </Right>
              </>
            ) : (
              <>
                <SelectIOS
                  value={selected.id}
                  onChange={(accessId: string) => selectAccess(accessId)}
                  options={accesses}
                />
              </>
            )}
          </>
        )}
      </Selected>
    </Container>
  );
};

export default SuperUnitSelect;
