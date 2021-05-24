// import React, { useState } from "react";
// import { Switch } from "antd";
// // import "antd/dist/antd.css";
// import "./Switch.css";

// const SwitchComponent = () => {
//   const [color, setColor] = useState("green");
//   function onChange(checked) {
//     console.log(`switch to ${checked}`);
//     if (checked) {
//       setColor("green");
//     } else {
//       setColor("lightgray");
//     }
//   }
//   return (
//     <div>
//       <Switch defaultChecked className={`${color}`} onChange={onChange} />
//     </div>
//   );
// };

// export default SwitchComponent;
import React from "react";
import Switch from "@material-ui/core/Switch";

export default function Switches() {
  const [color, setColor] = React.useState("green");
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    if (event.target.checked) {
      setColor("green");
    } else {
      setColor("lightgray");
    }
  };

  return (
    <div>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        className={`${color}`}
        // inputProps={{ "aria-label": "success checkbox" }}
      />
    </div>
  );
}
