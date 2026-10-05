import { useState } from 'react';

import archiveIcon from '../../assets/icons/icon-archive-black.svg';
import arrowUpIcon from '../../assets/icons/icon-arrow-up.svg';
import editIcon from '../../assets/icons/icon-edit.svg';
import plusIcon from '../../assets/icons/icon-plus.svg';
import searchIcon from '../../assets/icons/icon-search.svg';
import starIcon from '../../assets/icons/icon-star.svg';

const PromptInput = () => {
  const [prompt, setPrompt] = useState('');

  return (
    <div className="mt-[2.5rem]">
      <div className="rounded-[1rem] border border-gray-200 bg-white px-[1rem] py-[0.875rem]">
        <input
          type="text"
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          placeholder="층간소음"
          className="w-full bg-transparent text-[0.875rem] text-gray-900 outline-none placeholder:text-gray-500"
        />

        <div className="mt-[1rem] flex items-center justify-between">
          <div className="flex items-center gap-[0.5rem]">
            <button
              type="button"
              aria-label="추가"
              className="flex cursor-pointer items-center justify-center"
            >
              <img src={plusIcon} alt="" className="h-[1.25rem] w-[1.25rem]" />
            </button>

            <button
              type="button"
              aria-label="아카이브"
              className="flex cursor-pointer items-center justify-center"
            >
              <img src={archiveIcon} alt="" className="h-[1.25rem] w-[1.25rem]" />
            </button>
          </div>

          <div className="flex items-center gap-[0.5rem]">
            <button
              type="button"
              className="cursor-pointer rounded-[0.5rem] border border-gray-200 bg-white px-[0.75rem] py-[0.5rem] text-[0.75rem] font-medium text-gray-700"
            >
              자동
            </button>

            <button
              type="button"
              aria-label="검색"
              className="flex cursor-pointer items-center justify-center"
            >
              <img src={searchIcon} alt="" className="h-[1.25rem] w-[1.25rem]" />
            </button>

            <button
              type="button"
              aria-label="AI 기능"
              className="flex cursor-pointer items-center justify-center"
            >
              <img src={starIcon} alt="" className="h-[1.25rem] w-[1.25rem]" />
            </button>

            <button
              type="button"
              aria-label="편집"
              className="flex cursor-pointer items-center justify-center"
            >
              <img src={editIcon} alt="" className="h-[1.25rem] w-[1.25rem]" />
            </button>

            <button
              type="button"
              aria-label="전송"
              className="flex cursor-pointer items-center justify-center"
            >
              <img src={arrowUpIcon} alt="" className="h-[1.25rem] w-[1.25rem]" />
            </button>
          </div>
        </div>
      </div>

      <p className="mt-[0.5rem] text-center text-[0.75rem] text-gray-400">
        AI 응답은 정확하지 않을 수 있습니다. 내용을 반드시 확인해 주세요.
      </p>
    </div>
  );
};

export default PromptInput;
