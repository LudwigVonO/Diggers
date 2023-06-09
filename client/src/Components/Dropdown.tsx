import React, { useEffect, useState } from 'react';

type DropDownProps = {
  displays: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  displaySelection: Function;
};

const DropDown: React.FC<DropDownProps> = ({
  displays,
  displaySelection,
}: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  /**
   * Handle passing the city name
   * back to the parent component
   *
   * @param city  The selected city
   */
  const onClickHandler = (city: string): void => {
    displaySelection(city);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
        {displays.map(
          (display: string, index: number): JSX.Element => {
            return (
              <p
                key={index}
                onClick={(): void => {
                  onClickHandler(display);
                }}
              >
                {display}
              </p>
            );
          }
        )}
      </div>
    </>
  );
};

export default DropDown;
