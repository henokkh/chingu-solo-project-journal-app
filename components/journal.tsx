import { FC } from "react";
import SecondaryButton from "./buttons/secondary-button";

interface JournalProps {
  title: string;
  body: string;
  id: string;
}

const Journal: FC<JournalProps> = ({ title, body, id }) => {
  return (
    <div className="max-w-sm rounded border">
      <div className="rounded-t bg-[#4A688E] p-4">
        <h2 className="font-bold text-white">{title}</h2>
      </div>
      <div className="p-4 pb-8">{body}</div>
      <div className="flex items-center justify-between rounded-b bg-[#F3F7FB]">
        <SecondaryButton text="Edit" iconUrl="/svg-icons/pencil.svg" />
        <SecondaryButton danger text="Delete" iconUrl="/svg-icons/trash.svg" />
      </div>
    </div>
  );
};

export default Journal;
