import "@pages/popup/Popup.css";
import withSuspense from "@src/shared/hoc/withSuspense";
import useStorage from "@src/shared/hooks/useStorage";
import exampleThemeStorage from "@src/shared/storages/exampleThemeStorage";
import React from "react";
import Button from "../components/Button/button";

const Popup = () => {
  const theme = useStorage(exampleThemeStorage);

  return (
    <div className="App">
      <Button />
      <a href="www.baidu.com">baidu</a>
    </div>
  );
};

export default withSuspense(Popup);
