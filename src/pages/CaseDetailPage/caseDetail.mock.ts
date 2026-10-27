export interface CaseInfoRow {
  label: string;
  lines: string[];
}

export interface CaseDetail {
  title: string;
  caseName: string;
  courtLines: string[];
  infoRows: CaseInfoRow[];
}

export const CASE_DETAIL_MOCK: CaseDetail = {
  title: '인천지방법원 2022. 2. 17. 선고 2020고합715, 2020고합628, 2020고합648, 2020고합702 판결',
  caseName:
    '[공직선거법위반·정보통신망이용촉진및정보보호등에관한법률위반(명예훼손)·공직선거법위반방조]',
  courtLines: ['인천지방법원', '제15형사부', '판결'],
  infoRows: [
    {
      label: '사건',
      lines: [
        '2020고합628, 648(병합), 702(병합), 715(병합)가. 공직선거법위반',
        '나. 정보통신망이용촉진및정보보호등에관한법률위반(명예훼손)',
        '다. 공직선거법위반방조',
      ],
    },
  ],
};

export interface CitationSection {
  id: string;
  label: string;
  count: number;
  badge?: string;
}

// TODO: GET /judgments/{judgmentId}/citations 연동 후 제거
export const CITATION_SECTIONS_MOCK: CitationSection[] = [
  { id: 'cited-1', label: '인용된 판례', count: 17, badge: '확정여부 미확인' },
  { id: 'cited-2', label: '인용된 판례', count: 17 },
  { id: 'cited-3', label: '인용된 판례', count: 17 },
  { id: 'cited-4', label: '인용된 판례', count: 17 },
  { id: 'cited-5', label: '인용된 판례', count: 17 },
];
