import { TCandidate } from "../App";

type TCandidateTable = {
  candidates: TCandidate[];
  onEdit: (candidate: TCandidate) => void;
  onDelete: (id: number) => void;
};

const candidateLabels = [
  "Name",
  "Email",
  "Phone",
  "Skills",
  "Experience",
  "Actions",
];

export const CandidateTable = ({
  candidates,
  onEdit,
  onDelete,
}: TCandidateTable) => (
  <table className="w-full mt-4 border-collapse border border-fuchsia-300">
    <thead>
      <tr>
        {candidateLabels.map((label) => (
          <th className="border bg-fuchsia-300 p-2 text-left border border-fuchsia-300">
            {label}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {candidates.map((candidate) => (
        <tr key={candidate.id}>
          <td className="border p-2">{candidate.name}</td>
          <td className="border p-2">{candidate.email}</td>
          <td className="border p-2">{candidate.phone}</td>
          <td className="border p-2">{candidate.skills}</td>
          <td className="border p-2">{candidate.experience}</td>
          <td className="border p-2">
            <button
              onClick={() => onEdit(candidate)}
              className="bg-fuchsia-500 py-1 px-4 text-white rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(candidate.id)}
              className="bg-transparent py-1 px-4 border border-fuchsia-500 text-fuchsia-500 rounded"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

