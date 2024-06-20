import React, { forwardRef, useImperativeHandle, useState } from "react";

const Model = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    handleModel() {
      setToggle(!toggle);
    },
  }));

  return toggle ? (
    <div className="absolute top-[50%] left-[50%] transform translate-x-[50%] translate-y-[50%]">
      This is modal component
      <button onClick={() => setToggle(!toggle)}>Close</button>
    </div>
  ) : null;
});

export default Model;
