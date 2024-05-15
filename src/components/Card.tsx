interface CardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div className=" bg-slate-100 rounded-lg p-5 shadow-sm">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-gray-500 my-5">{description}</p>
      {icon}
    </div>
  );
};

export default Card;
