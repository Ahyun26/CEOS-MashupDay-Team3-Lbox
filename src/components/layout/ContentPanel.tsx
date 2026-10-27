import type { ReactNode, Ref } from 'react';

interface ContentPanelProps {
  children: ReactNode;
  /** 스크롤과 무관하게 본문 영역 위에 떠 있는 요소 (툴바, 맨 위로 버튼 등) */
  floating?: ReactNode;
  /** 본문 오른쪽에 붙는 사이드 패널 */
  aside?: ReactNode;
  scrollRef?: Ref<HTMLDivElement>;
}

function ContentPanel({ children, floating, aside, scrollRef }: ContentPanelProps) {
  return (
    <div className="flex min-h-px w-full flex-[1_0_0] flex-col items-center overflow-clip bg-gray-100 pr-8 pb-8">
      <div className="flex min-h-px w-full flex-[1_0_0] overflow-hidden rounded-md border-[0.5px] border-(--color-border-default) bg-(--color-surface-default)">
        <div className="relative flex min-w-px flex-[1_0_0] flex-col">
          <div
            ref={scrollRef}
            className="min-h-px flex-[1_0_0] [scrollbar-width:none] overflow-y-auto"
          >
            {children}
          </div>
          {floating}
        </div>
        {aside}
      </div>
    </div>
  );
}

export default ContentPanel;
