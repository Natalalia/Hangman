import React from "react";

function TheEnd({ didYouWin }) {
  return <>{didYouWin ? <span>You Win!</span> : <span>You Lose!</span>}</>;
}

export default TheEnd;
