import React, {
  useReducer,
  useEffect,
  useRef,
  HTMLProps,
  ChangeEvent,
} from "react";
import { FaWindowClose } from "react-icons/fa";
import { useTheme } from "../../hooks/useTheme";

interface State {
  query: string;
  isSearching: boolean;
}

type Action =
  | { type: "searching"; payload: { query: string } }
  | { type: "clear" };

function reducer(_state, action: Action): State {
  switch (action.type) {
    case "searching":
      return { isSearching: true, query: action.payload.query };
    case "clear":
      return initState();
    // default:
    //   throw new Error("invalid action");
  }
}

function initState(query = "") {
  return { query, isSearching: false };
}

interface Props extends HTMLProps<HTMLInputElement> {
  setQuery: (query: string) => void;
  query: string;
}

export default function SearchInput({ setQuery, query, ...inputProps }: Props) {
  const [state, dispatch] = useReducer(reducer, query, initState);
  const uncontrolledInput = useRef<HTMLInputElement>();
  const { theme } = useTheme();

  function changeQuery(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value.length === 0) {
      dispatch({ type: "clear" });
    } else {
      dispatch({ type: "searching", payload: { query: value } });
    }
  }

  useEffect(() => {
    setQuery(state.query);
  }, [state.query, setQuery]);

  return (
    <span
      style={{
        position: "relative",
        background: theme.background,
        color: theme.foreground,
      }}
    >
      {/*controlled*/}
      <label>
        Query
        <input
          type="text"
          onChange={changeQuery}
          value={state.query}
          {...inputProps}
        />
        {state.isSearching && (
          <FaWindowClose
            onClick={() => dispatch({ type: "clear" })}
            style={{ position: "absolute", right: 3, top: 3 }}
          />
        )}
      </label>
      {/*uncontrolled*/}
      <input type="text" ref={uncontrolledInput} />
      <button
        onClick={() => {
          console.log(uncontrolledInput.current.value);
        }}
      >
        Show Me
      </button>
    </span>
  );
}
