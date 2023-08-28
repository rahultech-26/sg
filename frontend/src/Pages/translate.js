import React, { useState } from "react";

import { ReactTransliterate } from "react-transliterate";
import "react-transliterate/dist/index.css";

const App = () => {
  const [text, setText] = useState("");

  return (
    <ReactTransliterate
      value={text}
      onChangeText={(text) => {
        setText(text);
      }}
      lang="hi"
    />
  );
};

export default App;