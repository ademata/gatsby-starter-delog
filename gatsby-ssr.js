import "./src/styles/global.scss"

import React from "react";
import { navigate } from "gatsby";
 
import { AuthProvider } from "react-use-auth";
 
export const wrapRootElement = ({ element }) => (
    <AuthProvider
        navigate={navigate}
        auth0_domain="dev-ns60-jlk.us.auth0.com"
        auth0_client_id="CZktWCOJLB2uL8vxSC9j9ajvqbpDHnrj"
    >
        {element}
    </AuthProvider>
);