import React from "react";
import { Container, Content, Text, Image, Logout } from "./style";
import logo from "../../assets/logo.png";
import Feather from "react-native-vector-icons/Feather";
import { useAuth } from "../../hooks/auth";

const DefaultError: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Content>
        <Image source={logo} />
        <Text>Você ainda não possui acessos.</Text>
      </Content>
      <Logout onPress={signOut}>
        <Feather
          name="log-out"
          size={20}
          style={{
            marginRight: 16,
            color: "#383850",
          }}
        />
        <Text>Logout</Text>
      </Logout>
    </Container>
  );
};

export default DefaultError;
