# react-components-test
react-components-test

##React Test Utilities:
npm install --save-dev react-addons-test-utils

##Shallow Rendering
Shallow rendering is a new feature introduced in React 0.13 that lets us output a component¡¯s virtual tree without generating a DOM node. This way we can inspect how the component would be built, but without actually rendering it. The advantages of this approach over using renderIntoDocument includes removing
the need for a DOM in the test environment (which is consequentially much faster), and the fact that is allows us to test React components in true isolation from other component classes. It does this by allowing us to test the return value of a component's render method, without instantiating any subcomponents.
