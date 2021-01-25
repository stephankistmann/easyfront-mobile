import React, { useMemo } from "react";
import { Text, Image, SafeAreaView } from "react-native";
// import {  } from "@react-navigation/native";
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from "@react-navigation/drawer";
import { ScrollView } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/auth";
import SuperUnitSelect from "./SuperUnitSelect";
import MenuItem from "./MenuItem";
import {
  Container,
  Header,
  Profile,
  Avatar,
  AvatarPlaceholder,
  Menu,
  Line,
  Logout,
} from "./styles";
import Feather from "react-native-vector-icons/Feather";

interface ISideMenuProps
  extends DrawerContentComponentProps<DrawerContentOptions> {}

const SideMenu: React.FC<ISideMenuProps> = ({ navigation, ...props }) => {
  const { user, signOut } = useAuth();
  const initials = useMemo(() => user.name.slice(0, 2).toUpperCase(), [user]);
  // const routeName = props.state.key.split("-");

  const { state } = props;
  const { routes, index } = state;
  const focusedRoute = routes[index].name;

  console.log(focusedRoute);

  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <Container>
          <Header>
            <Profile>
              <Avatar>
                {user.avatar_url ? (
                  <Image source={{ uri: user.avatar_url }} />
                ) : (
                  <AvatarPlaceholder>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 28,
                        color: "#fff",
                      }}
                    >
                      {initials}
                    </Text>
                  </AvatarPlaceholder>
                )}
              </Avatar>
              <Text style={{ marginTop: 20 }}>{user.name}</Text>

              <SuperUnitSelect />
            </Profile>
          </Header>
          <Menu>Menu</Menu>
          <Line />
          <MenuItem
            name="Home"
            to={focusedRoute}
            iconName="home"
            path="Home"
            navigation={navigation}
          />
          <MenuItem
            name="Teste"
            to={focusedRoute}
            iconName="chevron-right"
            path="Teste"
            navigation={navigation}
          />
          <MenuItem
            name="Invites"
            to={focusedRoute}
            iconName="send"
            path="Invites"
            navigation={navigation}
          />
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
      </SafeAreaView>
    </ScrollView>
  );
};

export default SideMenu;
