
import React from "react";

interface BrandFilterProps {
  brandName: string;
  checked: boolean;
  onChange: () => void;
}

const BrandFilter: React.FC<BrandFilterProps> = ({
  brandName,
  checked,
  onChange,
}) => {
  return (
    <div className="input_label_container">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <label>{brandName}</label>
    </div>
  );
};

export default BrandFilter;
