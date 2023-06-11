import React, { useContext, useState } from "react";
import { FiltersContext } from "../Context/FiltersContext.tsx";
import DropDown from "./Dropdown.tsx";


const Filters: React.FC = (): JSX.Element => {
  const filtersContext = useContext(FiltersContext);
  /**
   * Toggle the drop down menu
   */
  const toggleDropDown = () => {
    filtersContext?.setShowDropDown(!filtersContext.showDropDown);
  };

  /**
   * Hide the drop down menu if click occurs
   * outside of the drop-down element.
   *
   * @param event  The mouse event
   */
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      filtersContext?.setShowDropDown(false);
    }
  };

  /**
   * Callback function to consume the
   * city name from the child component
   *
   * @param city  The selected city
   */
  const displaySelection = (display: string): void => {
    filtersContext?.setSelectDisplay(display);
  };

  return (
    <section id="filters">
      {/* <div className="announcement">
        <div>
          {selectDisplay
            ? `Films are displayed by ${selectDisplay}`
            : "Select your travel destination"}
        </div>
      </div> */}
      <button
        className={filtersContext?.showDropDown ? "active button-primary" : "button-primary"}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>{filtersContext?.selectDisplay ? "Display by " + filtersContext?.selectDisplay : "Choose display ..."} </div>
        {filtersContext?.showDropDown && (
          <DropDown displaySelection={displaySelection} />
        )}
      </button>
    </section>
  );
};

export default Filters;