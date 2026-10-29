import type { CaseDetail, CitationSection, CitedCase } from './caseDetail.types';

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
  sections: [],
};

// TODO: GET /judgments/{citationId} 연동 후 제거 (지금은 어떤 인용 판례를 골라도 같은 내용)
export const CITED_CASE_DETAIL_MOCK: CaseDetail = CASE_DETAIL_MOCK;

const createCitedCases = (count: number): CitedCase[] =>
  Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    label: `대법원 2012도 ${9338 + index}`,
  }));

// TODO: GET /judgments/{judgmentId}/citations 연동 후 제거
export const CITATION_SECTIONS_MOCK: CitationSection[] = [
  {
    id: 'cited-1',
    label: '인용된 판례',
    count: 17,
    cases: createCitedCases(17),
  },
];
