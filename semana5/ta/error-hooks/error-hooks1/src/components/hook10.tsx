import React, { useReducer } from "react";

interface State {
  items: number[];
  filteredItems: number[];
}

type Action = { type: "FILTER_ITEMS"; filter: number };

const initialState: State = {
  items: [1, 2, 3, 4, 5],
  filteredItems: [],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "FILTER_ITEMS":
      return {
        ...state,
        filteredItems: state.items.filter((item) => item > action.filter),
      };
    default:
      return state;
  }
};

const Example10: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filterItems = (filter: number) => {
    dispatch({ type: "FILTER_ITEMS", filter });
  };

  return (
    <div>
      <button onClick={() => filterItems(2)}>Filter Items</button>
      <ul>
        {state.filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Example10;
