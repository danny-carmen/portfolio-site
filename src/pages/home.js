import React, { useState, useEffect } from "react";

const Home = () => {
  const [opaque, startFadeIn] = useState(false);

  useEffect(() => {
    startFadeIn(true);
  }, []);
  return (
    <div className={opaque ? "homepage page" : "homepage page transparent"}>
      Home
    </div>
  );
};

export default Home;
