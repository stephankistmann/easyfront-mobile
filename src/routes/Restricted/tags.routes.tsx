import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tags from "../../pages/Tags";
import TagsAdd from "../../pages/TagsAdd";
import TagsCreated from "../../pages/TagsCreated";

const StackNav = createStackNavigator();

const TagsStack: React.FC = () => {
  return (
    <StackNav.Navigator
      initialRouteName="Tags"
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackNav.Screen name="Tags" component={Tags} />
      <StackNav.Screen name="TagsAdd" component={TagsAdd} />
      <StackNav.Screen name="TagsCreated" component={TagsCreated} />
    </StackNav.Navigator>
  );
};

export default TagsStack;
