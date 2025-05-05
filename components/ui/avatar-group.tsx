import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";

interface AvatarData {
  image?: string;
  fallback?: string;
}

interface AvatarGroupProps {
  avatars: AvatarData[];
  maxDisplay?: number;
}

export function AvatarGroup({ avatars, maxDisplay = 3 }: AvatarGroupProps) {
  const displayedAvatars = avatars.slice(0, maxDisplay);
  const remainingCount = avatars.length - maxDisplay;
  return (
    <div className="flex items-center space-x-[-10px]">
      {displayedAvatars.map((avatar, index) => (
        <Avatar key={index} className="border-2 border-white">
          {avatar.image && <AvatarImage src={avatar.image} />}
          <AvatarFallback>{avatar.fallback}</AvatarFallback>
        </Avatar>
      ))}

      {remainingCount > 0 && (
        <Avatar className="border-2 border-white bg-muted text-muted-foreground">
          <AvatarFallback>+{remainingCount}</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
