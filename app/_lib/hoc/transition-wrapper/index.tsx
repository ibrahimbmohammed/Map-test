interface TransitionProp {
  show: boolean;
  height?:
    | 'h-fit'
    | 'h-106'
    | 'h-104'
    | 'h-96'
    | 'h-80'
    | 'h-72'
    | 'h-64'
    | 'h-60'
    | 'h-56'
    | 'h-48'
    | 'h-40'
    | 'h-32'
    | 'h-24'
    | 'h-12';
  children: React.ReactNode;
}

function Transition({ show = false, height = 'h-40', children }: TransitionProp) {
  return (
    <div
      className={`${
        show === false ? 'h-0' : ` ${height} `
      } block  transform overflow-hidden rounded-t-3xl transition-all duration-150 ease-in-out lg:hidden lg:shadow-lg   `}
    >
      {children}
    </div>
  );
}

export default Transition;
