import React from "react";

import { AuthProvider } from "./auth";
import { SuperunitProvider } from "./superunit";
import { AccessProvider } from "./access";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <SuperunitProvider>
      <AccessProvider>{children}</AccessProvider>
    </SuperunitProvider>
  </AuthProvider>
);

export default AppProvider;
