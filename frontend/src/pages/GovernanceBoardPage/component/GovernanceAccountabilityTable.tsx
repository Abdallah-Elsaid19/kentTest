import { useCmsBindings } from "@/features/cms/publicContent";
import { governanceAccountability } from "../data";

export function GovernanceAccountabilityTable() {
  const cms = useCmsBindings(["governance"]);
  const cmsValues = cms.resolve({ governanceAccountability });

  return cms.render((
    <>
      <div className="mt-12 grid gap-4 lg:hidden">
        {cmsValues.governanceAccountability.rows.map((row) => (
          <article key={row.role} className="relative overflow-hidden rounded-2xl border border-primary/20 bg-white p-6 shadow-[0_14px_36px_rgba(64,27,140,.08)] sm:p-7">
            <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-kbc-gold-500 to-primary" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
              {cmsValues.governanceAccountability.columns[0]}
            </p>
            <h3 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-kbc-purple-950">{row.role}</h3>
            <dl className="mt-6 divide-y divide-kbc-purple-100 border-t border-kbc-purple-100">
              <div className="py-5">
                <dt className="text-xs font-bold uppercase tracking-[0.13em] text-kbc-gold-700">{cmsValues.governanceAccountability.columns[1]}</dt>
                <dd className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{row.responsibility}</dd>
              </div>
              <div className="pt-5">
                <dt className="text-xs font-bold uppercase tracking-[0.13em] text-kbc-gold-700">{cmsValues.governanceAccountability.columns[2]}</dt>
                <dd className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{row.connection}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      <div className="mt-16 hidden overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-[0_18px_48px_rgba(64,27,140,.1)] ring-1 ring-primary/5 lg:block">
        <table className="w-full min-w-[900px] border-collapse text-left">
          <caption className="sr-only">{cms.text("governance.pages_governance_board_page_component_go_governance_accountability_table.text_001")}</caption>
          <thead className="bg-gradient-to-r from-primary to-primary-dark text-white">
            <tr>
              {cmsValues.governanceAccountability.columns.map((column) => (
                <th key={column} scope="col" className="border-r border-white/15 px-6 py-5 text-xs font-bold uppercase tracking-[0.14em] last:border-r-0 first:w-[20%] lg:px-8">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-kbc-purple-100">
            {cmsValues.governanceAccountability.rows.map((row) => (
              <tr key={row.role} className="align-top even:bg-kbc-purple-50/60 transition-colors hover:bg-kbc-gold-50">
                <th scope="row" className="border-r border-kbc-purple-100 px-6 py-7 font-heading text-lg font-semibold text-primary lg:px-8">
                  {row.role}
                </th>
                <td className="px-6 py-7 text-sm leading-7 text-[var(--color-muted)] lg:px-8">
                  {row.responsibility}
                </td>
                <td className="px-6 py-7 text-sm leading-7 text-[var(--color-muted)] lg:px-8">
                  {row.connection}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  ));
}
