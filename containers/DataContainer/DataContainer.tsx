import React from "react";

import DataViews from "../../components/DataViews";

const DataContainer = () => {
  return (
    <div className="grid grid-flow-row py-16 gap-2 md:grid-cols-2 md:gap-4">
      <DataViews title="Unplash Downloads" views="21,828" />
      <DataViews title="Unplash Downloads" views="2,410,597" />
      <DataViews title="Unplash Downloads" views="13,500" />
      <DataViews title="Unplash Downloads" views="569,475" />
      <DataViews title="Unplash Downloads" views="619,373" />
      <DataViews title="Unplash Downloads" views="4,499" />
      <DataViews title="Unplash Downloads" views="$48,282" />
      <DataViews title="Unplash Downloads" views="5,517" />
    </div>
  );
};

export default DataContainer;
