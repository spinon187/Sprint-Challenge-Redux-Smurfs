1. In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are essentially forms that are filled out based on various functions that are then passed to the reducer. The reducer looks at what kind of form it is(type) and decides where it should be filed. It then passes it to the store, which is the record of all changes to the state tree. The store is the single source of truth because it is immutable.

2. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state refers to the store when talking about Redux, and it holds global variables that all components can access if they want. Component states hold local variables, which is useful when you only need to track specific data within the component, like a form for instance, or a self-delete function.

3. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

Thunk is middleware that allows you dispatch actions to the reducer in an asynchronous way, meaning you can hook them into lifecycle methods when appropriate. It turns our action creators from basic functions into promises.