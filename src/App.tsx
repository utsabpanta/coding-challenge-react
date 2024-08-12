import * as React from "react";
import "./index.css";

interface TodoItem {
  id: number;
  name: string;
  description: string;
  priority: number;
}

// TODO: give this a type based on the TodoItem interface
// The higher the priority number, the more important the TODO item!
const sampleTodoItems: any[] = [
  {
    id: 10,
    name: "Walk the dog",
    description: "Fido needs to take a trip around the block.",
    priority: 10,
  },
  {
    id: 12,
    name: "Put out the fire in the kitchen",
    description: "The oven is on fire.",
    priority: 100,
  },
  {
    id: 7,
    name: "Make lunch",
    description: "Maybe a sandwich today?",
    priority: 1,
  },
];

const App: React.FC = () => {
  // TODO: simulate loading the todoItems into state, using an effect
  console.log(sampleTodoItems);

  const [todoItems, setTodoItems] = React.useState(null);

  React.useEffect(() => {}, []);

  // TODO: display each TODO item, sorted from highest priority to lowest priority
  // TODO: TODO items should be colored based on priority: <10 green, 10-50 yellow, >50 red
  // TODO: Add two buttons -- one that sorts from highest to lowest priority,
  // another that sorts by name alphabetically in ascending order

  // TODO: stretch: Add a text field that allows filtering of items that contain a search term in the
  //  name or description. Only matching items should be displayed.
  //  Clearing the field should once again display all items.
  // TODO: stretch 2: Highlight matching text in the item, when there's a search term.
  return (
    <div className="App">
      <h1>Hello, Dev! Welcome to the coding challenge.</h1>
      <h2>Start editing the code to see some magic happen!</h2>
      <div>TODO List Here</div>
    </div>
  );
};

export default App;
