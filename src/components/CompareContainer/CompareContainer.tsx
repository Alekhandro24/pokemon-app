import React from "react";
import { userPokemonsType } from "../../utils/Types";

const CompareContainer = ({
  pokemon = undefined,
  isEmpty = false,
}: {
  pokemon?: userPokemonsType;
  isEmpty?: boolean;
}) => {
  return (
    <div className="compare-container">
      {isEmpty && (
        <div className="empty">
          <button></button>
        </div>
      )}
    </div>
  );
};

export default CompareContainer;
