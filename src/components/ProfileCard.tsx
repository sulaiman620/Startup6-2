import { User } from "lucide-react";

interface ProfileCardProps {
  name: string;
  role: string;
  description: string;
  delay?: number;
}

const ProfileCard = ({ name, role, description, delay = 0 }: ProfileCardProps) => {
  return (
    <div
      className="bg-card rounded-xl p-6 shadow-card hover-lift transition-all duration-300 animate-fade-in-up group"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-gradient-accent flex items-center justify-center mb-4 group-hover:animate-tilt transition-all">
          <User size={40} className="text-white" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-gradient transition-all">
          {name}
        </h3>
        <p className="text-sm text-accent font-semibold mb-3">{role}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
