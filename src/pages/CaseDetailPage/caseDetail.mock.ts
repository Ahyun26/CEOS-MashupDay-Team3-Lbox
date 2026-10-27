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
