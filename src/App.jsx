import React, { useState, useEffect, useMemo } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Background } from './components/Layout/Background';
import { Container } from './components/Layout/Container';
import { DateSelector } from './components/Forms/DateSelector';
import { CategorySelector } from './components/Forms/CategorySelector';
import { AmountInput } from './components/Forms/AmountInput';
import { AddButton } from './components/Forms/AddButton';
import { ExpenseDoughnut } from './components/Charts/ExpenseDoughnut';
import { Header } from './components/UI/Header';
ChartJS.register(ArcElement, Tooltip, Legend);

const categories = ['Housing', 'Food', 'Transportation', 'Bills', 'Miscellaneous'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const App = () => {
  const [month, setMonth] = useState(new Date().toLocaleString('default', { month: 'long' }));
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Housing');
  const [expenses, setExpenses] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem('expense-data');
    if (saved) setExpenses(JSON.parse(saved));
  }, []);

  const currentData = useMemo(() => {
    const key = `${month}-${year}`;
    return expenses[key] || { Housing: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 };
  }, [expenses, month, year]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const val = parseFloat(amount);
    if (isNaN(val)) return;
    const key = `${month}-${year}`;
    const newExpenses = { ...expenses, [key]: { ...(expenses[key] || {}), [category]: (expenses[key]?.[category] || 0) + val } };
    setExpenses(newExpenses);
    localStorage.setItem('expense-data', JSON.stringify(newExpenses));
    setAmount('');
  };

  const chartData = {
    labels: categories,
    datasets: [{
      data: categories.map(cat => currentData[cat]),
      backgroundColor: ['#f87171', '#4ade80', '#fbbf24', '#60a5fa', '#a78bfa'],
      borderWidth: 0,
      hoverOffset: 15
    }]
  };

  return (
    <div className="min-h-screen relative bg-gray-100 flex flex-col items-center justify-center p-4">
      <Background />
      <Container>
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-10 text-gray-800">Monthly Expense Tracker</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <DateSelector {...{month, setMonth, year, setYear, months}} />
            <CategorySelector {...{category, setCategory, categories}} />
            <AmountInput {...{amount, setAmount}} />
            <AddButton />
          </form>
          <ExpenseDoughnut chartData={chartData} />
        </div>
      </Container>
    </div>
  );
};

export default App;