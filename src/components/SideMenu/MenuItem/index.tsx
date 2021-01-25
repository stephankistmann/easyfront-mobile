import { DrawerItem } from "@react-navigation/drawer";
import React from "react";
import { Container, ScreenName, FeatherIcon } from "./styles";

interface MenuItemProps {
  name: string;
  iconName: string;
  path: string;
  to: string;
  navigation: any;
}

const MenuItem: React.FC<MenuItemProps> = ({
  path,
  to,
  name,
  iconName,
  navigation,
}) => {
  return (
    <Container
      isSelected={path === to}
      onPress={() => navigation.navigate(`${path}`)}
    >
      {iconName && (
        <FeatherIcon isSelected={path === to} name={iconName} size={20} />
      )}
      <ScreenName isSelected={path === to}>{name}</ScreenName>
    </Container>
  );
};

export default MenuItem;
