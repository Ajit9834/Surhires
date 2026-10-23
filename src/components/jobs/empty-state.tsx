import { Button } from "@/components/ui/button";

export function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="animate-scale-in rounded-[24px] border border-dashed border-[#CBD5E1] bg-white px-6 py-16 text-center shadow-[0_12px_34px_-22px_rgba(23,37,84,0.14)]">
      <div
        aria-hidden="true"
        className="mx-auto grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-[#EDE9FE] to-[#CCFBF1] text-[#6D28D9]"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="size-8"
        >
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="m20 20-3.5-3.5M8.5 11h5" />
        </svg>
      </div>

      <h3 className="mt-5 text-xl font-bold text-[#172554]">
        No jobs match those filters yet
      </h3>
      <p className="mx-auto mt-2.5 max-w-[46ch] text-[#596579]">
        Try broadening your search keyword, switching to all locations, or
        clearing your selected job type to view all 12 sample openings.
      </p>

      <div className="mt-6">
        <Button type="button" variant="primary" onClick={onReset}>
          Reset filters
        </Button>
      </div>
    </div>
  );
}
