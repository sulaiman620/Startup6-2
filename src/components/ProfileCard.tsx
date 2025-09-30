interface ProfileCardProps {
  name: string;
  role: string;
  description: string;
  delay?: number;
  imagePath: string;
}

const ProfileCard = ({ name, role, description, delay = 0, imagePath }: ProfileCardProps) => {
  return (
    <div
      className="bg-card rounded-xl p-6 shadow-card hover-lift transition-all duration-300 animate-fade-in-up group"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 group-hover:animate-tilt transition-all border-2 border-accent">
          <img 
            src={imagePath} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-gradient transition-all">
          {name}
        </h3>
        <p className="text-sm text-secondary font-semibold mb-3">{role}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
