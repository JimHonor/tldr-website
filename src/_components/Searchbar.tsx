import { useState } from "react";

type Props = {
  onSubmit: (value: string) => void;
};

export default function Searchbar({ onSubmit }: Props) {
  const [searchterm, setSearchterm] = useState("");

  return (
    <form
      className="mb-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(searchterm);
      }}
    >
      <input
        className="bg-[#e5e6e8] rounded px-4 py-1.5 w-full "
        type="text"
        placeholder="Search for a memo..."
        value={searchterm}
        onChange={(e) => setSearchterm(e.target.value)}
      />
    </form>
  );
}
