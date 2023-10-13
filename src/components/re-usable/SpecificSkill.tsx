interface skillProp {
  skill: string;
}

export const SpecificSkill: React.FC<skillProp> = ({ skill }) => {
  return (
    <p
      className="bg-slate-100 text-gray-500 text-center py-4 px-2 rounded-lg 
        cursor-pointer hover:bg-slate-200 font-medium text-md shadow-md">
      {skill}
    </p>
  );
};
