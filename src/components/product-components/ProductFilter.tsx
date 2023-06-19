import React from 'react';

interface IProductFilter {
  totalQuantity: number;
  types: string[];
  currentType: string;
  setCurrentType: (type: string) => void;
}

const ProductFilter: React.FC<IProductFilter> = ({
  totalQuantity,
  types,
  currentType,
  setCurrentType,
}) => {
  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setCurrentType(value);
  };

  return (
    <div className="flex-row-aligned gap-12">
      <h2>Products / {totalQuantity}</h2>
      <select
        name="select"
        value={currentType}
        defaultValue=""
        onChange={handleTypeChange}
        className="px-4 py-2 rounded-sm"
      >
        <option value="">select the type</option>
        {types?.map(type => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilter;
