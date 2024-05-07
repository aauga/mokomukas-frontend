interface WelcomeTextProps {
  username: string;
  className?: string;
}

export default function WelcomeText({ username, className }: WelcomeTextProps) {
  return <h1 className={className}>Sveiki sugrįžę, {username} 👋</h1>;
}
