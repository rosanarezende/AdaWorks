import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import Select from "react-select";

import AppbarWithDrawer from "../../containers/AppbarWithDrawer";

function SearchPage() {
  const dispatch = useDispatch();

  const options = [
    { value: "vtex", label: "VTEX" },
    { value: "globo", label: "Globo" },
    { value: "green-mobility", label: "Green mobility" },
  ];

  const handleChange = (e) => {
    dispatch(push(`/empresa/${e.value}`))
  }

  return (
    <AppbarWithDrawer>
      <Select
        className="basic-single"
        classNamePrefix="select"
        name="color"
        isClearable={true}
        isSearchable={true}
        options={options}
        onChange={handleChange}
        placeholder="Buscar empresa..."
      />
    </AppbarWithDrawer>
  );
}

export default SearchPage;
