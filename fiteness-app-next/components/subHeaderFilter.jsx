import { DropdownButton, Dropdown } from "react-bootstrap";

const SubHeaderFilter = ({ data, onSelect }) => {
  
  return (
    <div className="d-flex justify-content-start gap-2 ps-4">
      {data &&
        Object.keys(data).map((filter, index) => (
          <DropdownButton 
          key={filter + index} 
          title={data[filter].length === 1 ? data[filter] : filter} 
          disabled={data[filter].length === 1}>
            {data[filter].map((opt, index) => (
              <Dropdown.Item key={opt+index} onClick={() => onSelect(filter, opt)}>
                {opt}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        ))}
    </div>
  );
};

export default SubHeaderFilter;
