/* eslint-disable no-constant-condition */
import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Feather } from "@expo/vector-icons";
import Select from "../../Select/index.ios";

import {
  Container,
  Selected,
  IconBackground,
  AccessSelect,
  Left,
  Loading,
  LoadingContainer,
  LoadingText,
  SuperUnitUnitTextContainer,
  SelectedInfo,
  SuperUnitText,
  SelectContainer,
  // Content,
  // SelectedInfo,
  // Item,
  // StyledLoading,
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
            <Select
              value={selected.id}
              onChange={(accessId: string) => selectAccess(accessId)}
              options={accesses}
            />

            {/* <AccessSelect
              selectedValue={selected?.id}
              onValueChange={(superunitId: string) =>
                selectSuperunit(superunitId)
              }
            >
              {superunities.map((superunit) => (
                <SuperunitSelect.Item
                  label={superunit.name}
                  value={superunit.id}
                  key={superunit.id}
                />
              ))}
            </AccessSelect> */}
            {/* <TouchableOpacity>
              <Feather name="chevron-down" color="#0e0e2c" size={24} />
            </TouchableOpacity> */}
          </>
        )}
      </Selected>
    </Container>
  );
};

export default SuperUnitSelect;
