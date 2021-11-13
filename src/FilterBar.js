import React from "react";
import { Funnel } from "react-bootstrap-icons";
import FilterElement from "./FilterElement";

const FilterBar = (props) => {
    return (
        <div className="filterBar w-full flex flex-col p-1 border items-start">
            <div className="flex flex-row space-x-1 items-center p-1 font-semibold">
                <Funnel />
                <p>Filters</p>
            </div>
            <div className="flex flex-wrap">
            {props.filters.map((filter, index) => {
                return (
                    <FilterElement key={index} filter={filter} removeFilter={props.removeFilter}/>
                );
            })}
            </div>

        </div>
    );
}

export default FilterBar