import type { Company } from '@/types/movie';

interface MovieCompaniesProps {
  companies: Company[];
}

export default function MovieCompanies({ companies }: MovieCompaniesProps) {
  if (!companies || companies.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 rounded-xl border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-6">제작사</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {companies.map((company) => (
          <div
            key={company.companyCd}
            className="bg-black/30 p-4 rounded-lg border border-white/5"
          >
            <p className="text-white font-medium">{company.companyNm}</p>
            <p className="text-gray-500 text-sm mt-1">
              코드: {company.companyCd}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
