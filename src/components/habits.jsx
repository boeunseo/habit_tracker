import React, { Fragment } from 'react'
import HabitAddForm from './habitAddForm';
import Habit from './habit'


const Habits = ({habits,onIncrement,onDecrement,onDelete,onAdd,onReset }) => {
  const handleIncrement = (habit) => {
    onIncrement(habit);
  }
  const handleDecrement = (habit) => {
    onDecrement(habit);
  }
  const handleDelete = (habit) => {
    onDelete(habit);
  }
  const handleAdd = name => {
    onAdd(name);
  }

  return (
    <Fragment>
    <HabitAddForm 
      onAdd={handleAdd}
    />
    <ul>
      {
        habits.map(habit => (
          <Habit 
            key={habit.id} 
            habit={habit} 
            onIncrement={handleIncrement} 
            onDecrement={handleDecrement}
            onDelete={handleDelete}
          />
        ))
      }
    </ul> 
    <button className="habits-reset" onClick={onReset}>Reset All</button>       
    </Fragment>

  );
}

export default Habits;

