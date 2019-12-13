## What problem does the context API help solve?

Context API attempts to solve the problem of prop drilling, so developers have the flexibility to pass desired props into specific components, regardless of inheritance or hierarchy via the context object.

## In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is where the entire state of an application lives. Actions are triggers that are defined by a type and a payload(optional) and when called inside components, trigger a state update as defined in the reducer. The reducer contains the predicted way in which state will change, defined in if statements or switch cases. These three things act as a layer of abstraction between state changes and components.

## What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the entire state of the app, where Component state is localized state held in a component. Application state is great to pass down to a component, if for example you need to manipulate the stored data in some way (mapping over an array to display data objects to the user). Component state is useful when you need to define a local piece of state (for example a local state in a form component.)

## Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

Redux-thunk allows us to use functions inside our action creators. Action creators can only return an object to the reducer, but Redux-thunk calls the function before it is received by the reducer, thus returning the object inside the function to the reducer instead.

## What is your favorite state management system you've learned and this sprint? Please explain why!

I think the combo of Context/Reducer is pretty flexible, albeit for smaller apps. I like that I can still use functions(which I'm more comfortable with than writing action types and creators) and I like that I can choose what and where I want to pass thoses functions and props. Redux is great, but for a small app I feel like it's a lot of setup. I used it today on the sprint challenge to practice it, but this simple app would have benefitted from Context/Reducer, imho.
