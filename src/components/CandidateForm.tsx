import { useState } from "react";
import { TCandidate } from "../App";

interface Props {
  candidate: TCandidate | null;
  onSave: (candidate: TCandidate) => void;
  onClose: () => void;
}

const inputFields = [
  { name: "name", placeholder: "Name", type: "text" },
  { name: "email", placeholder: "Email", type: "email" },
  { name: "phone", placeholder: "Phone", type: "text" },
  { name: "skills", placeholder: "Skills", type: "text" },
  { name: "experience", placeholder: "Experience", type: "text" },
];

export const CandidateForm = ({ candidate, onSave, onClose }: Props) => {
  const [formData, setFormData] = useState<TCandidate>(
    candidate || {
      id: 0,
      name: "",
      email: "",
      phone: "",
      skills: "",
      experience: "",
    }
  );

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    let newErrors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone number must contain only digits";
    }

    if (!formData.skills.trim()) newErrors.skills = "Skills are required";
    if (!formData.experience.trim()) newErrors.experience = "Experience is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      onSave(formData);
    }
  };

  return (
    <div className="fixed top-0 right-0 w-1/3 h-full bg-white p-4 shadow-lg">
      <h2 className="text-lg font-bold mb-4">
        {candidate ? "Edit Candidate" : "Add Candidate"}
      </h2>
      
      {inputFields.map((field) => (
        <div key={field.name} className="mb-4">
          <input
            className={`border p-2 w-full ${errors[field.name] ? "border-red-500" : ""}`}
            placeholder={field.placeholder}
            value={formData[field.name as keyof typeof formData]}
            onChange={(e) =>
              setFormData({ ...formData, [field.name]: e.target.value })
            }
          />
          {errors[field.name] && (
            <p className="text-red-500 text-sm">{errors[field.name]}</p>
          )}
        </div>
      ))}
      
      <button
        onClick={handleSubmit}
        className="bg-fuchsia-500 py-1 px-4 text-white rounded mr-2"
      >
        Save
      </button>
      <button
        onClick={onClose}
        className="ml-2 bg-transparent py-1 px-4 border border-fuchsia-500 text-fuchsia-500 rounded"
      >
        Cancel
      </button>
    </div>
  );
};



