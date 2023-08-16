import React from 'react';
import './App.css';
import List from './List/List';

function App() {
  return (
    <div className="bg-gray-200 flex items-center justify-center h-screen">
      <div className='max-w-4xl grow mx-12'>
        <h1 className='text-2xl font-bold text-gray-900 mb-4'>Analysis</h1>
        <List />
      </div>
    </div>
  );
}

export default App;
