//ACTIONS for FILTERS
// 1 - Set Filter Text
const setFilterText = (
    { text = '' } = {}
) => ( {
    type: 'SET_FILTER_TEXT',
    text: text
} );

// 2 - Sort By Amount
const sortByAmount = () => ( {
    type: 'SORT_BY_AMOUNT',
    sortBy: "amount"
} );

// 3 - Sort By Date
const sortByDate = () => ( {
    type: 'SORT_BY_DATE',
    sortBy: "date"
} );

// 4
const setStartDate = ( startDate ) => ( {
    type: 'SET_START_DATE',
    startDate: startDate
} );

// 5
const setEndDate = ( endDate ) => ( {
    type: 'SET_END_DATE',
    endDate: endDate
} );

export { setFilterText, sortByAmount, sortByDate, setStartDate, setEndDate };