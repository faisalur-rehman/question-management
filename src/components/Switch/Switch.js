import React from "react";
import Switch from "@material-ui/core/Switch";
import useApi from "../../hooks/useApi";
import * as projectApi from "../../apis/project";

export default function Switches({ role, property, state, setState }) {
  // const history = useHistory();
  const setPresenterPermissions = useApi(projectApi.setPresenterPermissions);
  const setModeratorPermissions = useApi(projectApi.setModeratorPermissions);

  const handleChange = async () => {
    if (role === "moderator") {
      try {
        const data = await setModeratorPermissions.request({
          [property]: !state,
        });
        console.log("moderator", data);
      } catch (_) {}
    } else {
      console.log({
        [property]: !state,
      });
      try {
        const data = await setPresenterPermissions.request({
          [property]: !state,
        });
        console.log("moderator", data);
      } catch (_) {}
    }

    setState(!state);
  };

  return (
    <div>
      <Switch checked={state} onChange={handleChange} name="checkedA" />
    </div>
  );
}
