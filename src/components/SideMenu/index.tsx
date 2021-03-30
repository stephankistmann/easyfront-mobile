import React, { useMemo } from "react";
import { Text, SafeAreaView } from "react-native";
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
  ProfileText,
  Avatar,
  AvatarBorder,
  AvatarPlaceholder,
  AvatarPlaceholderText,
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

  const { state } = props;
  const { routes, index } = state;
  const focusedRoute = routes[index].name;

  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <Container>
          <Header>
            <Profile>
              {user.avatar_url ? (
                <AvatarBorder>
                  <Avatar source={{ uri: user.avatar_url }} />
                </AvatarBorder>
              ) : (
                <AvatarBorder>
                  <AvatarPlaceholder>
                    <AvatarPlaceholderText>{initials}</AvatarPlaceholderText>
                  </AvatarPlaceholder>
                </AvatarBorder>
              )}

              <ProfileText>{user.name}</ProfileText>

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
            name="Convites"
            to={focusedRoute}
            iconName="send"
            path="InvitesStack"
            navigation={navigation}
            screen="Invites"
          />
          <MenuItem
            name="Eventos"
            to={focusedRoute}
            iconName="bell"
            path="Events"
            navigation={navigation}
          />
          <MenuItem
            name="Dispositivos"
            to={focusedRoute}
            iconName="tablet"
            path="Devices"
            navigation={navigation}
          />
          <MenuItem
            name="Tags"
            to={focusedRoute}
            iconName="credit-card"
            path="TagsStack"
            navigation={navigation}
            screen="Tags"
          />
          <MenuItem
            name="Perfil"
            to={focusedRoute}
            iconName="user"
            path="Profile"
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
