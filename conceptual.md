### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

- What is a single page application?
A Single Page Application is a website or web application that dynamically rewrites the current web page with new data from the web server

- What are some differences between client side and server side routing?
The difference between this two routing have been stated above server sides needs to keep making requests to the server in order for the application to rerender, but client side does not need to keep make request to the server.

- What are two ways of handling redirects with React Router? When would you use each?
Use history, Redirect. Use useHistory when we want to keep track of session history for React Router.

- What are two different ways to handle page-not-found user experiences using React Router? 
Inside the <Switch /> component from React Router, we can declare a final <Route /> at the bottom of the route declarations.


Create NotFound component, and uses React Router’s <Link to="/">

- How do you grab URL parameters from within a component using React Router?
useParam

- What is context in React? When would you use it?
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

- Describe some differences between class-based components and function
  components in React.
A functional component is accepts props as an argument and returns a React element. A class component requires you to extend from React.Component and create a render function which returns a React element. There is no render method used in functional components.

- What are some of the problems that hooks were designed to solve?

This hook allows us to add side effects to a given functional component, that is, it allows us to make modifications to our logic once the rendering has been performed, in the same way as the componentDidMount,componentDidUpdate and componentWillUnmount lifecycle methods in class components.