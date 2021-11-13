import { X } from "react-bootstrap-icons";

const FilterElement = (props) => {
    return (
        <div className="filterElement flex flex-row group space-x-1 p-1 pl-2 mr-1 mb-1 rounded-full bg-blue-500 text-white font-semibold text-xs w-auto items-center justify-center">
            <p>{props.filter.name}: {props.filter.value}</p>
            <button onClick={() => props.removeFilter(props.filter.name)} className="opacity-0 group-hover:opacity-100 hover:bg-gray-500 rounded-full border">
                <X />
            </button>
        </div>
    );
}

export default FilterElement;