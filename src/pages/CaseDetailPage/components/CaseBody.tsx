import type { CaseInfoRow } from '../caseDetail.mock';

interface CaseBodyProps {
  courtLines: string[];
  infoRows: CaseInfoRow[];
}

function CaseBody({ courtLines, infoRows }: CaseBodyProps) {
  return (
    <section className="flex w-full grow flex-col items-center gap-[3.75rem] py-[3.75rem] text-(--color-text-primary)">
      <div className="document-title shrink-0 text-center whitespace-nowrap">
        {courtLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      {infoRows.map((row) => (
        <div
          key={row.label}
          className="document-body flex shrink-0 items-start justify-center gap-[3.75rem] whitespace-nowrap"
        >
          <p className="shrink-0 text-center">{row.label}</p>
          <div className="shrink-0">
            {row.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default CaseBody;
