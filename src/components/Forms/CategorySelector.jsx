export const CategorySelector = ({ category, setCategory, categories }) => (
  <select className="w-full bg-white/60 p-3 rounded-xl border border-gray-200 outline-none" value={category} onChange={(e) => setCategory(e.target.value)}>
    {categories.map(c => <option key={c} value={c}>{c}</option>)}
  </select>
);