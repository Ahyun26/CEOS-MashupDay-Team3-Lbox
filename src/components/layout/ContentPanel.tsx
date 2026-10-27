import type { ReactNode, Ref } from 'react';

interface ContentPanelProps {
  children: ReactNode;
  /** 스크롤과 무관하게 패널 위에 떠 있는 요소 (툴바, 맨 위로 버튼 등) */
  floating?: ReactNode;
  scrollRef?: Ref<HTMLDivElement>;
}

function ContentPanel({ children, floating, scrollRef }: ContentPanelProps) {
  return (
    <div className="flex min-h-px w-full flex-[1_0_0] flex-col items-center overflow-clip bg-gray-100 pr-8 pb-8">
      <div className="relative flex min-h-px w-full flex-[1_0_0] flex-col overflow-hidden rounded-md border-[0.5px] border-(--color-border-default) bg-(--color-surface-default)">
        <div
          ref={scrollRef}
          className="min-h-px flex-[1_0_0] [scrollbar-width:none] overflow-y-auto"
        >
          {children}
        </div>
        {floating}
      </div>
    </div>
  );
}

export default ContentPanel;
