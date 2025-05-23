import { useParams } from "react-router-dom";
import { useState } from "react";

export default function User() {
  const { id } = useParams(); // get user ID from route
  const [name, setName] = useState(""); // local state for name input

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">
        User Profile: {id} {name && `| Name: ${name}`}
      </h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded w-full max-w-sm"
      />
    </div>
  );
}
