/* eslint-disable no-constant-condition */
import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSuperunit } from "../../../hooks/superunit";

import {
  Container,
  Selected,
  IconBackground,
  SuperunitSelect,
  // Content,
  // SelectedInfo,
  // Item,
  // StyledLoading,
} from "./styles";

const SuperUnitSelect: React.FC = () => {
  const { superunities, selected, selectSuperunit } = useSuperunit();

  return (
    <Container>
      <Selected>
        {/* {!selected ? (
          <StyledLoading color="#0e0e2c" />
        ) : (
          <> */}
        {/* <SelectedInfo> */}
        <IconBackground>
          <Feather name="home" size={20} color="#fff" />
        </IconBackground>

        <SuperunitSelect
          selectedValue={selected?.id}
          onValueChange={(superunitId: string) => selectSuperunit(superunitId)}
        >
          {superunities.map((superunit) => (
            <SuperunitSelect.Item
              label={superunit.name}
              value={superunit.id}
              key={superunit.id}
            />
          ))}
        </SuperunitSelect>
        {/* <Text>{selected?.name}</Text> */}

        {/* </SelectedInfo>
            <button type="button">
              <FiChevronDown color="#0e0e2c" size={24} />
            </button>
          </> 
        )}*/}
      </Selected>

      {/* <Content>
        {superunities.map(superunit => (
          <Item
            key={superunit.id}
            onClick={() => selectSuperunit(superunit.id)}
          >
            <h1>{superunit.name}</h1>
          </Item>
        ))}
      </Content> */}
    </Container>
  );
};

export default SuperUnitSelect;
