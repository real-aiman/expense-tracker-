export const DateSelector = ({ month, setMonth, year, setYear, months }) => (
  <div className="grid grid-cols-2 gap-4">
    <select className="w-full bg-white/60 p-3 rounded-xl border border-gray-200 outline-none" value={month} onChange={(e) => setMonth(e.target.value)}>
      {months.map(m => <option key={m} value={m}>{m}</option>)}
    </select>
    <select className="w-full bg-white/60 p-3 rounded-xl border border-gray-200 outline-none" value={year} onChange={(e) => setYear(e.target.value)}>
      {[...Array(20)].map((_, i) => <option key={i} value={2020 + i}>{2020 + i}</option>)}
    </select>
  </div>
);