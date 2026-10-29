export type JudgmentSearchSort = 'date,desc' | 'viewCount,desc';

export interface JudgmentSearchParams {
  keyword: string;
  caseType?: 'CIVIL' | 'CRIMINAL' | 'ADMINISTRATIVE';
  court?: string;
  /** YYYY-MM-DD */
  dateFrom?: string;
  /** YYYY-MM-DD */
  dateTo?: string;
  /** 서버 기본값: date,desc */
  sort?: JudgmentSearchSort;
  /** 0부터 시작하는 페이지 번호 */
  page?: number;
  size?: number;
}

export interface JudgmentSearchItem {
  id: number;
  caseNumber: string;
  caseName: string;
  court: string;
  judgmentDate: string;
  resultType: string;
  claimPurpose: string;
  excerpt: string;
  viewCount: number;
}

export interface JudgmentSearchResponse {
  content: JudgmentSearchItem[];
  page: {
    number: number;
    size: number;
    totalElements: number;
    totalPages: number;
  };
}

export interface JudgmentSearchApiResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: JudgmentSearchResponse | null;
  error: unknown;
}
