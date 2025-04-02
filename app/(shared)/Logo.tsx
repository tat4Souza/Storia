export default function Logo({ className }: { className?: string }) {
  return (
    <img width={150} className={className} src="/img/logo.png" alt="Logo" />
  );
}
