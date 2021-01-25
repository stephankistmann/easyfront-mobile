import React, { useMemo } from "react";
import { Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  NavButton,
  UserContainer,
  UnitsContainer,
  Profile,
  Avatar,
  AvatarPlaceholder,
  GreenDot,
} from "./styles";
import Feather from "react-native-vector-icons/Feather";
import { useAuth } from "../../hooks/auth";
import AccessSelect from "./AccessSelect";

interface IHeader {
  hasBackButton?: boolean;
}

const Header: React.FC<IHeader> = ({ hasBackButton }) => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const initials = useMemo(() => user.name.slice(0, 2).toUpperCase(), [user]);

  return (
    <Container>
      <NavButton onPress={() => navigation.openDrawer()}>
        {hasBackButton ? (
          <Feather
            name="chevron-left"
            size={28}
            onPress={() => navigation.goBack()}
          />
        ) : (
          <Feather name="menu" size={28} />
        )}
      </NavButton>
      <UserContainer>
        <UnitsContainer>
          <AccessSelect />
        </UnitsContainer>
        <Profile>
          <GreenDot />
          <Avatar onPress={() => console.log("enviar para o profile")}>
            {user.avatar_url ? (
              <Image source={{ uri: user.avatar_url }} />
            ) : (
              <AvatarPlaceholder>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "#fff",
                  }}
                >
                  {initials}
                </Text>
              </AvatarPlaceholder>
            )}
          </Avatar>
        </Profile>
      </UserContainer>
    </Container>
  );
};

export default Header;
