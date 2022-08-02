import FilterStyle from "../styled/TodoFilter.styled";
import {MouseEventHandler} from "react";


function TodoFilters({
                         countRemaining,
                         setFilter,
                         handleClear,
                         allFilterActive,
                         activeFilterActive,
                         completedFilterActive
                     }: { countRemaining: Function, setFilter: Function, handleClear: MouseEventHandler<HTMLButtonElement>, allFilterActive: boolean, activeFilterActive: boolean, completedFilterActive: boolean }) {

    function handleFilterAll() {
        setFilter('all');
    }

    function handleFilterActive() {
        setFilter('active');
    }

    function handleFilterComplete() {
        setFilter('completed');
    }

    return (
        <FilterStyle>
            <p className="remaining">{countRemaining()}</p>
            <div className="filters">
                <button className={allFilterActive ? "filter active-filter" : "filter"} onClick={handleFilterAll}>All
                </button>
                <button className={activeFilterActive ? "filter active-filter" : "filter"}
                        onClick={handleFilterActive}>Active
                </button>
                <button className={completedFilterActive ? "filter active-filter" : "filter"}
                        onClick={handleFilterComplete}>Completed
                </button>
            </div>
            <button className="clear" onClick={handleClear}>Clear Completed</button>
        </FilterStyle>
    )
}

export default TodoFilters;
