import React, { useState } from "react";
import User from "./User";
import "@elastic/eui/dist/eui_theme_light.css";
import { EuiCode, EuiPanel, useEuiTheme } from "@elastic/eui";
import { css, SerializedStyles } from "@emotion/react";


const FindUser = () => {
  const [userName, setUserName] = useState("");
  const { euiTheme } = useEuiTheme();

  return (
    <>
      <div>
        <h1>Find User</h1>
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="Enter username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </form>
      </div>

      <div
        css={css`
          padding: ${euiTheme.base * 55}px;
        `}
      >padding div</div>
      <EuiPanel paddingSize="l" className="eui-border">
        {userName ? <User username={userName} /> : <span>no users</span>}
      </EuiPanel>
    </>
  );
};

export default FindUser;
