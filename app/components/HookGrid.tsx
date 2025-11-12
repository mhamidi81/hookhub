import { Hook } from "@/app/types/hook";
import { HookCard } from "./HookCard";

interface HookGridProps {
  hooks: Hook[];
}

export const HookGrid = ({ hooks }: HookGridProps) => {
  if (hooks.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {hooks.map((hook) => (
        <HookCard key={hook.id} hook={hook} />
      ))}
    </div>
  );
};
