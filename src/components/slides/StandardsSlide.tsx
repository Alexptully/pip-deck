import { standardsSlide } from "@/content/content";
import { Heading } from "@/components/primitives/Heading";
import { Reveal } from "@/components/primitives/Reveal";

export function StandardsSlide() {
  return (
    <div className="relative h-full max-w-[1560px]">
      <Heading>{standardsSlide.heading}</Heading>
      <Reveal delay={0.2} className="mt-10">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="type-caption text-text-faint">
              <th className="w-[720px] pb-4 font-normal">Standard</th>
              <th className="pb-4 font-normal">Where you see it in Pip</th>
            </tr>
          </thead>
          <tbody>
            {standardsSlide.rows.map((row) => (
              <tr key={row.standard} className="border-t border-line align-top">
                <td className="type-lead py-5 pr-10 text-text">{row.standard}</td>
                <td className="type-caption py-5 pt-7 text-text-muted">{row.where}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </div>
  );
}
