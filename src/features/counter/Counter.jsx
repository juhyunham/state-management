import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementMyAmount, fetchIncrement } from "./counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(fetchIncrement(count));
          }}
        >
          Fetch Increment
        </button>
        <span>{count}</span>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch(incrementMyAmount(5));
          }}
        >
          +5
        </button>
      </div>
    </div>
  );
}
