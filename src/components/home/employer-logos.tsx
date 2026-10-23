import { Container } from "@/components/ui/container";

/** Illustrative fictional company marks kept monochrome and understated. */
const mockPartnerTeams = [
  { name: "Northbeam Labs", mark: "N" },
  { name: "Tidewater Studio", mark: "T" },
  { name: "Kestrel Pay", mark: "K" },
  { name: "Meridian Retail", mark: "M" },
  { name: "Arclight Cloud", mark: "A" },
  { name: "Brightfold Group", mark: "B" },
];

export function EmployerLogos() {
  return (
    <section
      aria-labelledby="trust-strip-heading"
      className="border-b border-[#E5E7EB] bg-white py-10 sm:py-12"
    >
      <Container>
        <div className="flex flex-col items-center gap-2 text-center">
          <h2
            id="trust-strip-heading"
            className="text-sm font-semibold text-[#172554]"
          >
            Built for teams and talent
          </h2>
          <p className="text-xs text-[#596579]">
            Illustrative sample company marks used for this frontend demonstration
          </p>
        </div>

        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {mockPartnerTeams.map((team) => (
            <li
              key={team.name}
              className="flex items-center justify-center gap-2.5 rounded-2xl border border-[#E5E7EB]/80 bg-[#FFFCF7] px-3.5 py-3 text-[#596579] transition-colors duration-150 hover:border-[#7C3AED]/30 hover:text-[#172554]"
            >
              <span
                aria-hidden="true"
                className="grid size-7 shrink-0 place-items-center rounded-lg bg-[#172554]/10 text-xs font-extrabold text-[#172554]"
              >
                {team.mark}
              </span>
              <span className="truncate text-sm font-semibold">{team.name}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
