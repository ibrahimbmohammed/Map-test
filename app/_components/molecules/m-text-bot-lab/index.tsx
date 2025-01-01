const TextInCardInfo = ({
  title = ' Name of Broker:',
  body = 'Test broker',
}: {
  title?: string;
  body?: string;
}) => {
  return (
    <div className="flex justify-between items-start flex-row gap-2 grow-0 shrink-0 basis-auto">
      <div className="grow-0 shrink-0 basis-auto pb-2.5 ">
        <p className="text-xs lg:text-xl font-semibold  text-[rgba(64,72,79,1)]">{title}</p>
      </div>
      <div className="grow-0 shrink-0 basis-auto pb-2.5 ">
        <p className="text-xs lg:text-xl font-semibold  text-[rgba(64,72,79,1)]">{body}</p>
      </div>
    </div>
  );
};

export default TextInCardInfo;
