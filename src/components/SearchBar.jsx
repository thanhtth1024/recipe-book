export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="🔍 Tìm theo nguyên liệu..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border p-1 w-full mb-4"
    />
  );
}
