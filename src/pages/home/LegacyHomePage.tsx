/**
 * Backup route: pre-revamp homepage (`/legacy-home`).
 * Section stack lives in `components/homePage/backup/legacyHomeSectionStack.tsx`.
 */
import { LegacyHomeSectionStack } from "../../components/homePage/backup/legacyHomeSectionStack";

export default function LegacyHomePage() {
  return (
    <main className="w-full overflow-hidden">
      <LegacyHomeSectionStack />
    </main>
  );
}
