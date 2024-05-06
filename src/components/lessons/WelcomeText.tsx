interface WelcomeTextProps {
  username: string;
  style?: React.CSSProperties;
}

export default function WelcomeText({ username, style }: WelcomeTextProps) {
  return <h1 style={style}>Sveiki sugrįžę, {username} 👋</h1>;
}
