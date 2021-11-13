import React from "react";
import { Funnel, X } from "react-bootstrap-icons";

const FilterBar = (props) => {
    return(
        <div className="filterBar w-full flex flex-col p-1 border items-start">
            <div className="flex flex-row space-x-1 items-center p-1 font-semibold">
                <Funnel />
                <p>Filters</p>
            </div>
            <div className="flex flex-wrap">
            {props.filters.map((filter, index) => {
                return (
                    <div key={index} className="flex flex-row group space-x-1 p-1 pl-2 mr-1 mb-1 rounded-full bg-blue-500 text-white font-semibold text-xs w-auto items-center justify-center">
                        <p>{filter.name}: {filter.value}</p>
                        <button className="opacity-0 group-hover:opacity-100 hover:bg-gray-500 rounded-full border" onClick={() => console.log(filter.name + " clicked.")}>
                            <X />
                        </button>
                    </div>
                );
            })}
            </div>

        </div>
    );
}

export default FilterBar