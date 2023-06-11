import React, { useContext, useState } from "react";
import { FiltersContext } from "../Context/FiltersContext.tsx";
import DropDown from "./Dropdown.tsx";
import { Button, Radio} from "antd";


const Filters: React.FC = (): JSX.Element => {
  const filtersContext = useContext(FiltersContext);

  /**
   * Callback function to consume the
   * city name from the child component
   *
   * @param city  The selected city
   */
  const displaySelection = (display: string): void => {
    filtersContext?.setSelectDisplay(display);
  };


  const handleDisplayChange = (e: RadioChangeEvent) => {
    displaySelection(e.target.value);
  };

  return (
    <section id="filters">
      <Radio.Group value={filtersContext?.selectDisplay} onChange={handleDisplayChange}>
        <Radio.Button value="Mood">Mood</Radio.Button>
        <Radio.Button value="Recommender">Recommender</Radio.Button>
        <Radio.Button value="Genre">Genre</Radio.Button>
      </Radio.Group>
    </section>
  );
};

export default Filters;