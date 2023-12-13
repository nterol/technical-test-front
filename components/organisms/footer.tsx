export function Footer() {
  return (
    <footer className="flex items-center justify-center bg-white w-full h-full">
      <p className="text-secondary-main">
        {'Copyright © '}SuperSite{new Date().getFullYear()}
        {'.'}
      </p>
    </footer>
  );
}
