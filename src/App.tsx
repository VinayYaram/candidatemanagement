import { useState } from "react";
import { CandidateTable } from "./components/CandidateTable";
import { CandidateForm } from "./components/CandidateForm";

export type TCandidate = {
  id: number;
  name: string;
  email: string;
  phone: string;
  skills: string;
  experience: string;
};

const App = () => {
  const [candidates, setCandidates] = useState<TCandidate[]>([
    {
      id: 1,
      name: "Vinay",
      email: "vinay@mail.com",
      phone: "9083938939",
      skills: "React, TS",
      experience: "3",
    },
    {
      id: 2,
      name: "Ajay",
      email: "ajay@mail.com",
      phone: "8938492999",
      skills: "Angular",
      experience: "5",
    },
    {
      id: 3,
      name: "Shanmugam",
      email: "shanmugam@mail.com",
      phone: "7038743939",
      skills: "Java",
      experience: "4",
    },
    {
      id: 4,
      name: "Roja",
      email: "roja@mail.com",
      phone: "8937382930",
      skills: "Python",
      experience: "6",
    },
    {
      id: 5,
      name: "Rama",
      email: "rama@mail.com",
      phone: "8937389273",
      skills: "DotNet",
      experience: "5",
    },
  ]);
  const [selectedCandidate, setSelectedCandidate] = useState<TCandidate | null>(
    null
  );
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAdd = () => {
    setSelectedCandidate(null);
    setIsFormOpen(true);
  };

  const handleEdit = (candidate: TCandidate) => {
    setSelectedCandidate(candidate);
    setIsFormOpen(true);
  };

  const handleDelete = (id: number) => {
    setCandidates(candidates.filter((c) => c.id !== id));
  };

  const handleSave = (candidate: TCandidate) => {
    if (candidate.id) {
      setCandidates(
        candidates.map((c) => (c.id === candidate.id ? candidate : c))
      );
    } else {
      setCandidates([...candidates, { ...candidate, id: Date.now() }]);
    }
    setIsFormOpen(false);
  };

  return (
    <div className="p-16">
      <button
        onClick={handleAdd}
        className="bg-indigo-500 hover:bg-fuchsia-500 text-white py-2 px-4 rounded"
      >
        Add Candidate
      </button>
      <CandidateTable
        candidates={candidates}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {isFormOpen && (
        <CandidateForm
          candidate={selectedCandidate}
          onSave={handleSave}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
