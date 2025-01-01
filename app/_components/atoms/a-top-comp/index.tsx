const TopComp = ({ name = 'name', className = 'flex' }: { name: string; className?: string }) => {
  return (
    <div className={`py-[2rem]    item-center justify-center sm:justify-start ${className}`}>
      <p className="font-semi-bold text-2xl">{name}</p>
    </div>
  );
};

export default TopComp;
