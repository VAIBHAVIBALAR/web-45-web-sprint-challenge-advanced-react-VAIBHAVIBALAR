# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

We use stateful component when building element that accepts user input while we use functional component when we just need to present the props
functional components are used for reusable code while stateful when dependent on any data that cannot be passed down as props

2. When does a componentWillMount function be called? What about a componentWillUpdate?

componentWillMount will be callled just before mounting occurs, componentWillUpdate will be called just before rendering when new props or state are being recieved

3. Define stateful logic.

stateful logic is any code that uses state, and it can be extended by combining several hooks in a powerful, single custom hook


4. What are the three step of creating a successful test? What is done in each phase?

 the three steps of creating a successful test are Arrange, Act and Assert 
 Arrange- here we use render method to set ourselves up to success

 Act- Here we use specific methods to search in DOM for specific nodes

 Assert- Here we need to assert that the component is indeed been rendered