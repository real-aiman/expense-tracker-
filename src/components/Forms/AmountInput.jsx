export const AmountInput = ({ amount, setAmount }) => (
  <input type="number" placeholder="Enter Amount" className="w-full bg-white/60 p-3 rounded-xl border border-gray-200 outline-none" value={amount} onChange={(e) => setAmount(e.target.value)} required />
);