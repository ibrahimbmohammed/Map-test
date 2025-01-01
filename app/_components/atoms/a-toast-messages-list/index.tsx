import { v4 as uuidv4 } from 'uuid';

interface MessageItems {
  code: string;
  message: string;
  details: string;
}

interface IToastMessagesListProps {
  items: MessageItems[];
}

const processMessages = (item: MessageItems) => {
  // check if details is a type of string
  const itemDetails = item.details;
  if (typeof itemDetails === 'string') {
    if (itemDetails.includes('throttled')) {
      return 'Too many requests. Try again later';
    }
    return item.details;
  }

  if (item.message) {
    return item.message;
  }

  if (Array.isArray(itemDetails)) {
    return (
      <li>
        {(itemDetails as MessageItems[]).map((detail) => {
          return (
            <span key={uuidv4()}>
              {' '}
              - {detail.details} <br />
            </span>
          );
        })}
      </li>
    );
  }

  return 'Something went wrong. Try again';
};

function ToastMessagesList({ items }: IToastMessagesListProps) {
  return (
    <ul>
      {items.map((item) => {
        const message = processMessages(item);
        return <li key={uuidv4()}>{message}</li>;
      })}
    </ul>
  );
}

export default ToastMessagesList;
