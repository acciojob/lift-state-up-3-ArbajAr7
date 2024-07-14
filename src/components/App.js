
import React from "react";
import './../styles/App.css';
import Parent from "./Parent";
import '../styles/Parent.css';
import '../styles/Child1.css';
import '../styles/Child2.css';
const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Parent />
    </div>
  )
}

export default App
