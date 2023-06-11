import React, { useContext, useEffect, useState } from 'react';
import { FiltersContext } from '../Context/FiltersContext.tsx';

type DropDownProps = {
  displaySelection: Function;
};

const DropDown: React.FC<DropDownProps> = ({
  displaySelection,
}: DropDownProps): JSX.Element => {
  const filtersContext = useContext(FiltersContext);

  /**
   * Handle passing the city name
   * back to the parent component
   *
   * @param display  The selected display
   */
  const onClickHandler = (display: string): void => {
    displaySelection(display);
  };

  useEffect(() => {
    filtersContext?.setShowDropDown(filtersContext.showDropDown);
  }, [filtersContext?.showDropDown]);

  return (
    <>
      <div className={filtersContext?.showDropDown ? 'dropdown' : 'dropdown active'}>
        {filtersContext?.displays.map(
          (display: string, index: number): JSX.Element => {
            return (
              <p
                className='align-left'
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
