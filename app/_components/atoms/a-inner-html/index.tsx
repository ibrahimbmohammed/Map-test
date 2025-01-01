interface InnerHTMLProps {
  content: any;
  containerStyle?: string;
  htmlStyle?: string;
}

const InnerHTML = ({ content, containerStyle, htmlStyle }: InnerHTMLProps) => {
  function createMarkup() {
    return { __html: content };
  }
  return (
    <span className={containerStyle}>
      {content && (
        <span
          className={` prose-img:max-h-46 md:prose-h2:text-md prose max-w-none prose-h1:text-[1.1rem] prose-h3:text-black  prose-h1:text-primaryColor  prose-h2:text-sm prose-h3:text-sm  prose-a:break-words prose-a:text-blue-400 md:prose-h1:text-xl prose:text-black  md:prose-h3:text-md text-black prose-p:text-black ${htmlStyle} `}
          key={Math.random()}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={createMarkup()}
        />
      )}
    </span>
  );
};

export default InnerHTML;
