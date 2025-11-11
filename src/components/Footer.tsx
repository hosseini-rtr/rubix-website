import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-light-gray/20 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo variant="small" animated={false} />

          <p className="text-gray-400 text-sm">
            © 2025 Rubix Core. Building systems that grow.
          </p>

          <div className="flex gap-6">
            <a
              href="https://twitter.com/rubixcore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-electric-blue transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/company/rubixcore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-electric-blue transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/rubixcore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-electric-blue transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
