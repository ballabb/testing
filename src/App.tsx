import { useState } from 'react';

interface DataItem {
  type: 'Fruit' | 'Vegetable';
  name: string;
}

const initialData: DataItem[] = [
  {
    type: 'Fruit',
    name: 'Apple',
  },
  {
    type: 'Vegetable',
    name: 'Broccoli',
  },
  {
    type: 'Vegetable',
    name: 'Mushroom',
  },
  {
    type: 'Fruit',
    name: 'Banana',
  },
  {
    type: 'Vegetable',
    name: 'Tomato',
  },
  {
    type: 'Fruit',
    name: 'Orange',
  },
  {
    type: 'Fruit',
    name: 'Mango',
  },
  {
    type: 'Fruit',
    name: 'Pineapple',
  },
  {
    type: 'Vegetable',
    name: 'Cucumber',
  },
  {
    type: 'Fruit',
    name: 'Watermelon',
  },
  {
    type: 'Vegetable',
    name: 'Carrot',
  },
];

function App() {
  const [fruits, setFruits] = useState<DataItem[]>([]);
  const [vegetables, setVegetables] = useState<DataItem[]>([]);
  const [remainingItems, setRemainingItems] = useState<DataItem[]>(initialData);

  const handleClick = (item: DataItem) => {
    setRemainingItems(prevItems => prevItems.filter(i => i.name !== item.name));

    if (item.type === 'Fruit') {
      setFruits(prevFruits => [...prevFruits, item]);
      setTimeout(() => moveToMainList(item), 5000);
    } else {
      setVegetables(prevVegetables => [...prevVegetables, item]);
      setTimeout(() => moveToMainList(item), 5000);
    }
  };

  const moveToMainList = (item: DataItem) => {
    setFruits(prevFruits => prevFruits.filter(i => i.name !== item.name));
    setVegetables(prevVegetables => prevVegetables.filter(i => i.name !== item.name));
    setRemainingItems(prevItems => [...prevItems, item]);
  };

  return (
    <div className="container mx-auto grid grid-cols-3 p-8 gap-4">
      <div className="space-y-4 px-8">
        {remainingItems.map((item, index) => (
          <div
            key={index}
            className="border shadow-sm p-4 text-center cursor-pointer hover:bg-slate-50"
            onClick={() => handleClick(item)}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="px-8">
        <div className="border h-full">
          <div className="bg-gray-100 p-4 text-center">Fruit</div>
          <div className="space-y-4 p-4">
            {fruits.map((fruit, index) => (
              <div key={index} className="border shadow-sm p-4 text-center">
                {fruit.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-8">
        <div className="border h-full">
          <div className="bg-gray-100 p-4 text-center">Vegetable</div>
          <div className="space-y-4 p-4">
            {vegetables.map((vegetable, index) => (
              <div key={index} className="border shadow-sm p-4 text-center">
                {vegetable.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
