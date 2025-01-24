# Easy Peasy Tutorials

## Quick Start

### Create the Store
- Define your store by providing a JS object to the `createStore` function:
```js
import { createStore } from 'easy-peasy';

const store = createStore({
  todos: [],
});
```
- These models can be as complex and nested as you'd like.

### Binding the Store to your React App
- Surround your application with the `StoreProvider` component to bind it to your app.
```js
import { StoreProvider } from 'easy-peasy';
import { store } from './store';

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  rootEl,
);
```

### Using State in your Components
- The `useStoreState` hook allows you to access your store's state:
```js
import { useStoreState } from 'easy-peasy';

function Todos() {
  const todos = useStoreState((state) => state.todos);
  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo.text}</li>
      ))}
    </ul>
  );
}
```

### Defining Actions to Perform State Updates
- Place an `action` within your modal to support updates:
```js
import { createStore, action } from 'easy-peasy';

const store = createStore({
  todos: [],
  addTodo: action((state, payload) => {
    state.todos.push({ text: payload, done: false });
  }),
});
```
- The action will receive the state it is local to. Update the state directly by mutating `state`.

### Dispatching Actions
- The `useStoreActions` hook allows you to access `actions` from components.
```js
import { useStoreActions } from 'easy-peasy';

function AddTodoForm() {
  const addTodo = useStoreActions((actions) => actions.addTodo);
  const [value, setValue] = React.useState('');
  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      <button onClick={() => addTodo(value)}>Add Todo</button>
    </>
  );
}
```
- In the example, the `addTodo` action is resolved and bound to the click of the Add Todo button. 

### Encapsulating Side Effects Via Thunks
- Thunks allow for the encapsulation of side effects, and allows the dispatching of actions to update the state.
```js
import { action, thunk } from 'easy-peasy';

const model = {
  todos: [],
  addTodo: action((state, payload) => {
    state.todos.push(payload);
  }),
  saveTodo: thunk(async (actions, payload) => {
    const { data } = await axios.post('/todos', payload);
    actions.addTodo(data);
  }),
};
```

### Dispatching Thunks within Your Components
- Thunks are accessible in the same way as actions, via the `useStoreActions` hook.
```js
import { useStoreActions } from 'easy-peasy';

function AddTodoForm() {
  const saveTodo = useStoreActions((actions) => actions.saveTodo);
  const [value, setValue] = React.useState('');
  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      <button onClick={() => saveTodo(value)}>Add Todo</button>
    </>
  );
}
```

### Deriving State Via Computed Components
- A derived state (such as a total price, number of items, etc) can be made using the `computed` API:
```js
import { computed } from 'easy-peasy';

const store = createStore({
  todos: [{ text: 'Learn easy peasy', done: true }],
  completedTodos: computed((state) => state.todos.filter((todo) => todo.done)),
});
```

### Using Computed Properties
- Computed Properties can be accessed just like any other state.
```js
import { useStoreState } from 'easy-peasy';

function completedTodos() {
  const completedTodos = useStoreState((state) => state.completedTodos);
  return (
    <>
      {completedTodos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </>
  );
}
```

### Persisting State
- If you want to persist your state, you can use the `persist` API:
```js
import { persist } from 'easy-peasy';

const store = createStore(
  persist({
    count: 1,
    inc: action((state) => {
      state.count += 1;
    }),
  }),
);
```
- The state will be stored in the sessionStorage. 
- If the process is asynchronous, you can use the `useStoreRehydrated` hook to ensure rehydration is completed before the component is rendered.
```js
import { useStoreRehydrated } from 'easy-peasy';

const store = createStore(persist(model));

function App() {
  const isRehydrated = useStoreRehydrated();
  return isRehydrated ? <Main /> : <div>Loading...</div>;
```

## Primary API

### Introducing the Model
- Easy Peasy stores are based on model definitions.
- Models are just JS objects that represent everything about the store:
  - The State
  - The actions that can be performed on it
  - The encapsuled side effects
  - Computed Properties
  - etc.

### State
- Below is a simple state model with a basic state structure with a list of todos:
```js
const model = {
  todos: [],
};
```
- The below example is a more advanced, real world use:
```js
const model = {
  products: {
    byId: {},
  },
  basket: {
    productsInBasket: [],
  },
  userSession: {
    isLoggedIn: false,
    user: null,
  },
};
```
- As the application grows, these can be made into imports:
```js
import productsModel from './products-model';
import basketModel from './basket-model';
import userSessionModel from './user-session-model';

const model = {
  products: productsModel,
  basket: basketModel,
  userSession: userSessionModel,
};
```

### Actions
- To perform updates against the state, an action must be defined:
```jsx
import { action } from 'easy-peasy';

const model = {
  todos: [],
  addTodo: action((state, payload) => {
    state.todos.push(payload);
  }),
};
```

#### Arguments
- An action should receive a `state` argument:
```js
{
  "todos": []
}
```
- The second argument to actions is the `payload`, which will default to undefined.

#### Modifying the State
- The bodies of actions should update the `state` and utilize the payload if it influences the update.
```js
import { action } from 'easy-peasy';

const model = {
  todos: [],
  addTodo: action((state, payload) => {
    return {
      ...state,
      todos: [...state.todos, payload],
    };
  }),
};
```

#### Scoping Actions
- You can attach actions at any level in the object model. 
```js
const model = {
  products: {
    byId: {},
  },
  basket: {
    productsInBasket: [],
    // 👇 Defining a "nested" action
    addProductToBasket: action((state, payload) => {
      state.productsInBasket.push(payload);
    }),
  },
  userSession: {
    isLoggedIn: false,
    user: null,
  },
};
```
- The action is received by the state that is local to it, as in the state would receive the following value:
```js
{
  "productsInBasket": []
}
```

#### Bad Practices
1. Do not destructure the `state` argument.
```js
action(({ todos }, payload) => {
  //       👆 destructuring the state argument is bad, m'kay
  todos.push(payload);
}),
```
   - This will result in the state not being updated.
1. Do not execute any side effects within the action.
   - Actions should be synchronous and pure.
   - They should do updates and not do things like make API requests.
```js
action(({ todos }, payload) => {
  // 👇 side effects in actions are bad, m'kay
  fetch('/todos').then(response => response.json()).then(data => {
    state.todos = state.todos.concat(data);
  });
}),
```
   - If side effects need to happen, perform them in a Thunk.

### Creating a Store
- Once a model is defined, a store can be made:
```js
import { createStore } from 'easy-peasy';
import model from './model';

const store = createStore(model);
```
- The `createStore` function has a few configuration options as well, such as a rendered state that was stored:
```js
const store = createStore(model, {
  initialState: serverRenderedState,
});
```

#### Fun Facts about the store:
1. It is a Redux Store
   - You can do anything to it that you would expect from a Redux store.
   - For example: from the `react-redux` Provider
```js
import { Provider } from 'react-redux';
import store from './my-easy-peasy-store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
```
2. It's a Redux Store (Again)
   - You can use all of the APIs of a standard [Redux Store](https://redux.js.org/api/store).
3. There are a few additional enhancements to the API:
   - There is no documentation on this currently!

### Connecting the Store
- To utilize the store, you need to wrap your application in the `StoreProvider` component.
```js
import { StoreProvider } from 'easy-peasy';
import store from './my-easy-peasy-store';

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById('root'),
);
```

### Using the Store
- There are a variety of hooks you can use to connect to the store:

#### The `useStoreState` hook:
```js
import { useStoreState } from 'easy-peasy';

function Todos() {
  const todos = useStoreState((state) => state.todos);
  return <TodoList todos={todos} />;
}
```
- The `useStoreState` hook allows you to add a selector function to resolve the state that the component needs.
- You can use this multiple times in a component to resolve various states that may be needed:
```js
import { useStoreState } from 'easy-peasy';

function Todos() {
  const todos = useStoreState((state) => state.todos);
  return <TodoList todos={todos} />;
}
```

##### Important Note on Selector Optimization
- The `useStoreState` will execute any time an update to the store's state occurs.
```js
if (prevState !== nextState) {
  console.log('We will re-render your component');
} else {
  console.log('We will do nothing');
}
```
- Be careful not to return a selected that will always break strict equality checking:
```js
// These are some examples of selectors that may have negative performance
// characteristics.

useStoreState((state) => {
  // We are creating a new object every time!
  return {
    name: state.name,
    age: state.age,
  };
});

useStoreState((state) => {
  // We are returning a new array every time!
  return [...state.fruits, ...state.vegetables];
});
```

#### The `useStoreActions` Hook
- To use actions within our component we can utilize the useStoreActions hook.
```js
import { useStoreActions } from 'easy-peasy';

function AddTodoForm() {
  // We provide a selector to resolve an action, rather than state
  //                                 👇
  const addTodo = useStoreActions((actions) => actions.addTodo);
  const [value, setValue] = React.useState('');
  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      {/* Dispatch the action with a payload
                                       👇    */}
      <button onClick={() => addTodo(value)}>Add Todo</button>
    </>
  );
}
```
- Actions can be dispatched with or without a `payload` argument.

### Thunks
- Thunks can provide the ability to encapsulate side-effects. 

#### Defining Thunks
- You can define a thunk using the Thunk API
```js
import { action, thunk } from 'easy-peasy';
//                 👆

const model = {
  todos: [],
  addTodo: action((state, payload) => {
    state.todos.push(payload);
  }),
  //         👇
  saveTodo: thunk(async (actions, payload) => {
    const { data } = await axios.post('/todos', payload);
    actions.addTodo(data);
  }),
};
```
- The Thunk receives the actions that are local to the Thunk.
- Instead of async, Promises can also be used:
```js
saveTodo: thunk((actions, payload) => {
  // Important to return the Promise
  // 👇
  return axios.post('/todos', payload)
    .then(({ data }) => {
      actions.addTodo(data);
    });
}),
```

#### Dispatching Thunks
- Thunks have some properties and recommended practices:
1. You should handle errors within your Thunks.
```js
import { action, thunk } from 'easy-peasy';

const model = {
  error: null,
  todos: [],
  addTodo: action((state, payload) => {
    state.todos.push(payload);
  }),
  setError: action((state, payload) => {
    state.error = payload;
  }),
  saveTodo: thunk(async (actions, payload) => {
    try {
      const { data } = await axios.post('/todos', payload);
      actions.addTodo(data);
    } catch (err) {
      actions.setError(err.message);
    }
  }),
};
```
2. Thunks can be synchronous:
```js
const model = {
  actionOne: action((state, payload) => {
    /* ... */
  }),
  actionTwo: action((state, payload) => {
    /* ... */
  }),
  thunkOne: thunk((actions, payload) => {
    if (condition) {
      actions.actionOne(payload);
    } else {
      actions.actionTwo(payload);
    }
  }),
};
```
3. Thunks can dispatch other Thunks:
```js
const model = {
  actionOne: action()
  thunkOne: thunk(async (actions, payload) => { /* ... */ }),
  thunkTwo: thunk(async (actions, payload) => {
    await actions.thunkOne(payload);
    actions.actionOne(payload);
  }),
};
```
4. Thunks can access the store state:
```js
const model = {
  todos: [],
  saveAllTodos: thunk((actions, payload, helpers) => {
    const { todos } = helpers.getState();
    return Promise.all(todos.map((todo) => axios.post('/todos', todo)));
  }),
};
```
5. Data can be returned our of a thunk:
```js
// The Thunk
const model = {
  thunkOne: thunk((actions, payload) => {
    return `hello ${payload}`;
  }),
};

// Example
const thunkOne = useStoreActions((actions) => actions.thunkOne);

const thunkDispatchResult = thunkOne('world');

console.log(thunkDispatchResult);
// "hello world"

// Asynchronous Example
const asyncLoginThunk = useStoreActions((actions) => actions.asyncLoginThunk);

asyncLoginThunk({ username: 'ww', password: 'ww1984' }).then(() => {
  console.log('Login is complete');
  // Redirect to new page?
});
```

### Computed Properties

#### Defining a Computed Property
- Use the `computed` helper!
```js
import { computed } from 'easy-peasy';
//         👆

const model = {
  todos: [],
  //            👇
  todoCount: computed((state) => state.todos.length),
};
```
- Computed Properties should only be used to derive States!

## Testing
- Different testing strategies can be found in the [official documentation](https://easy-peasy-v4.vercel.app/docs/tutorials/testing.html).