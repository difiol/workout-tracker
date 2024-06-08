import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/elements/avatar";

interface UserAvatarProps {
  username: string;
  src: string;
}

export function UserAvatar({ username = "Jhon Doe", src }: UserAvatarProps) {
  return (
    <Avatar>
      <AvatarImage src={src} alt="User" />
      <AvatarFallback>{username.slice(0, 1)}</AvatarFallback>
    </Avatar>
  );
}
