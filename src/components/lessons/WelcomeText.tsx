interface WelcomeTextProps {
  username: string;
  className?: string;
}

export default function WelcomeText({ username, className }: WelcomeTextProps) {
  return (
    <div>
      <h1 className={className}>Sveiki sugrįžę, {username} 👋</h1>
      <p>
        Sudalyvaukite pamokoje ir išmokite naujų dalykų apie saugią elgseną
        internete.
      </p>
    </div>
  );
}
