import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/avatar";

interface UserAvatarProps {
  username?: string;
  src?: string;
}

export function UserAvatar({ username = "Anonymous", src }: UserAvatarProps) {
  return (
    <Avatar>
      <AvatarImage src={src} alt="user" />
      <AvatarFallback>{username.slice(0, 1).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
}
