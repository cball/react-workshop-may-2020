import React, { useReducer, useEffect, useRef } from "react";
import { FaWindowClose } from "react-icons/fa";

function initState(query = "") {
  return { query, isSearching: false };
}

function reducer(state, action) {
  switch (action.type) {
    case "searching":
      return { isSearching: true, query: action.payload.query };
    case "clear":
      return initState();
    default:
      throw new Error("invalid action");
  }
}

/**
 * Used to search for recipes
 */
export function SearchInput({ query, onQuery, ...inputProps }) {
  const [state, dispatch] = useReducer(reducer, query, initState);
  const uncontrolledInput = useRef();

  function handleInputChange(e) {
    const value = e.target.value;

    if (value.length === 0) {
      dispatch({ type: "clear" });
      return;
    }

    dispatch({ type: "searching", payload: { query: value } });
  }

  useEffect(() => {
    onQuery(state.query);
  }, [state.query, onQuery]);

  return (
    <>
      <span style={{ position: "relative" }}>
        {/* controlled */}
        <input
          type="text"
          value={state.query}
          onChange={handleInputChange}
          {...inputProps}
        />

        {state.isSearching && (
          <FaWindowClose
            color="red"
            onClick={() => dispatch({ type: "clear" })}
            style={{ position: "absolute", right: 4, top: 4 }}
          />
        )}
      </span>

      {/* uncontrolled */}
      <input type="text" ref={uncontrolledInput} />

      <button
        onClick={() => {
          console.log(uncontrolledInput.current.value);
        }}
      >
        Show me the value
      </button>
    </>
  );
}
