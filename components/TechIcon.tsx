import { TECH_ICONS } from "@/lib/tech-icons";

interface Props {
  name: string;
  size?: number;
}

export function TechIcon({ name, size = 18 }: Props) {
  const Icon = TECH_ICONS[name];

  if (!Icon) {
    return (
      <div className="w-5 h-5 rounded bg-slate-800 text-[10px] flex items-center justify-center text-slate-400">
        {name[0]}
      </div>
    );
  }

  return (
    <Icon
      size={size}
      className="text-slate-400 hover:text-indigo-400 transition-colors"
      title={name}
    />
  );
}
