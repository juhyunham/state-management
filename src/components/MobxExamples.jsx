import React from "react";

import { todoStore } from "../app/TodoStore";
import { observableTodoStore } from "../app/ObservableStore";

export default function MobxExamples() {
  const run = () => {
    todoStore.addTodo("read MobX tutorial");
    console.log(todoStore.report());

    todoStore.addTodo("try MobX");
    console.log(todoStore.report());

    todoStore.todos[0].completed = true;
    console.log(todoStore.report());

    todoStore.todos[1].task = "try MobX in own project";
    console.log(todoStore.report());

    todoStore.todos[0].task = "grok MobX tutorial";
    console.log(todoStore.report());
  };

  const runObs = () => {
    observableTodoStore.addTodo("read MobX tutorial");
    observableTodoStore.addTodo("try MobX");
    observableTodoStore.todos[0].completed = true;
    observableTodoStore.todos[1].task = "try MobX in own project";
    observableTodoStore.todos[0].task = "grok MobX tutorial";
  };

  return (
    <div>
      <button type="button" onClick={run}>
        run code
      </button>
      <button type="button" onClick={runObs}>
        run Obs code
      </button>
    </div>
  );
}
