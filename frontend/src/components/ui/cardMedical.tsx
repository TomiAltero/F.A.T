import React from "react";

interface MedicalHistoryCardProps {
  category: string;
  value: string;
  description: string;
  improved?: boolean;
  worsened?: boolean;
}

const MedicalHistoryCard: React.FC<MedicalHistoryCardProps> = ({
  category,
  value,
  description,
  improved,
  worsened,
}) => {
  return (
    <div className="rounded-sm border border-gray-200 bg-white px-7.5 py-6 shadow-default dark:border-gray-800 dark:bg-gray-900 shadow-md">
      <div className="flex flex-col h-full justify-between">
        <div className="text-center mb-4">
          <h4 className="text-lg font-bold text-black dark:text-white">
            {value}
          </h4>
          <span className="text-sm font-medium">{category}</span>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {description}
          </p>
        </div>

        <span className="flex items-center justify-center gap-1 text-sm font-medium">
          {improved && (
            <svg
              className="w-4 h-4 fill-current text-green-600"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.7071 3.29289C19.0976 3.68342 19.0976 4.31658 18.7071 4.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L7 11.5858L17.2929 1.29289C17.6834 0.902369 18.3166 0.902369 18.7071 1.29289Z"
              />
            </svg>
          )}
          {worsened && (
            <svg
              className="w-4 h-4 fill-current text-red-600"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 1.41L17.59 0 10 7.59 2.41 0 1 1.41 8.59 9 1 16.59 2.41 18 10 10.41 17.59 18 19 16.59 11.41 9 19 1.41Z"
              />
            </svg>
          )}
        </span>
      </div>
    </div>
  );
};

export default MedicalHistoryCard;
