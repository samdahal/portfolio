import { template } from "@/lib/data";
import Resume from "@/components/Resume";
import ResumeCompact from "@/components/ResumeCompact";
import ResumeModern from "@/components/ResumeModern";
import ResumeMinimal from "@/components/ResumeMinimal";

export default function Page() {
  switch (template) {
    case "compact":
      return <ResumeCompact />;
    case "modern":
      return <ResumeModern />;
    case "minimal":
      return <ResumeMinimal />;
    case "classic":
    default:
      return <Resume />;
  }
}
