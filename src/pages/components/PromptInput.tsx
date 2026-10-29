import { useState } from 'react';

import archiveIcon from '../../assets/icons/search/icon-archive-black.svg';
import arrowIcon from '../../assets/icons/common/icon-arrow.svg';
import editIcon from '../../assets/icons/search/icon-edit.svg';
import plusIcon from '../../assets/icons/search/icon-plus.svg';
import searchIcon from '../../assets/icons/search/icon-search.svg';
import starIcon from '../../assets/icons/search/icon-star.svg';
import Icon from '../../components/common/Icon';

const PromptInput = () => {
  const [prompt, setPrompt] = useState('');

  return (
    <div className="search-prompt">
      <div className="min-h-[6.1875rem] rounded-[1rem] border border-gray-200 bg-gray-50 px-[1rem] py-[0.875rem]">
        <input
          type="text"
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          placeholder="층간소음"
          aria-label="검색어 입력"
          className="w-full bg-transparent text-[0.875rem] text-gray-900 outline-none placeholder:text-gray-900"
        />

        <div className="mt-[1rem] flex items-center justify-between">
          <div className="flex items-center gap-[0.75rem]">
            <button type="button" aria-label="추가" className="cursor-pointer">
              <img src={plusIcon} alt="" />
            </button>

            <button type="button" aria-label="아카이브" className="cursor-pointer">
              <img src={archiveIcon} alt="" />
            </button>
          </div>

          <div className="search-prompt-modes">
            <button type="button" className="cursor-pointer text-[0.75rem] text-gray-700">
              자동
            </button>

            <button type="button" aria-label="검색" className="search-prompt-selected cursor-pointer">
              <img src={searchIcon} alt="" />
            </button>

            <button type="button" aria-label="AI" className="cursor-pointer">
              <img src={starIcon} alt="" />
            </button>

            <button type="button" aria-label="편집" className="cursor-pointer">
              <img src={editIcon} alt="" />
            </button>

            <button type="button" aria-label="전송" className="search-prompt-submit cursor-pointer">
              <Icon src={arrowIcon} className="size-[1.25rem] rotate-90 text-white" />
            </button>
          </div>
        </div>
      </div>

      <p className="mt-[0.5rem] text-center text-[0.6875rem] text-gray-400">
        AI 응답은 정확하지 않을 수 있습니다. 내용을 반드시 확인해 주세요.
      </p>
    </div>
  );
};

export default PromptInput;
