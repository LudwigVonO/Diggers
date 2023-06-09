import React, { useState } from "react";
import DropDown from "./Dropdown.tsx";

const Filters: React.FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectDisplay, setSelectDisplay] = useState<string>("Genre");
  const displays = () => {
    return ["Genre", "Recommender", "Mood"];
  };

  /**
   * Toggle the drop down menu
   */
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  /**
   * Hide the drop down menu if click occurs
   * outside of the drop-down element.
   *
   * @param event  The mouse event
   */
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  /**
   * Callback function to consume the
   * city name from the child component
   *
   * @param city  The selected city
   */
  const displaySelection = (display: string): void => {
    setSelectDisplay(display);
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
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>{selectDisplay ? "Display by " + selectDisplay : "Choose display ..."} </div>
        {showDropDown && (
          <DropDown
            displays={displays()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            displaySelection={displaySelection}
          />
        )}
      </button>
    </section>
  );
};

export default Filters;