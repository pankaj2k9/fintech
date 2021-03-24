import React from 'react'

interface FilterSearchProps {
    onChange: any;
    onSubmit:any;
    level: string;
    submitText: string;
}

const FilterSearch: React.FC<FilterSearchProps> =({onChange, onSubmit, level, submitText})=> {
    return (
        <div>
            <input />
        </div>
    )
}

export default FilterSearch
