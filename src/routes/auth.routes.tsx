import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { SignIn } from "../screens/SignIn";
import { Home } from "../screens/Home";
import { AppointmentDetails } from "../screens/AppointmentDetails";
import { AppointmentCreate } from "../screens/AppointmentCreate";

const AuthStack = createStackNavigator();

export function AuthRoutes() {
  return (
    <AuthStack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <AuthStack.Screen name="Home" component={Home} />
      <AuthStack.Screen
        name="AppointmentDetails"
        component={AppointmentDetails}
      />
      <AuthStack.Screen
        name="AppointmentCreate"
        component={AppointmentCreate}
      />
    </AuthStack.Navigator>
  );
}
