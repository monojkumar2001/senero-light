export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#f5f5f5] pb-24 md:pb-0">
      <div className="px-4 py-6 text-center sm:py-7">
        <p className="text-sm text-slate-600 sm:text-[15px]">
          Copyright © 2026{" "}
          <a
            href="https://kenarooz.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-700 underline-offset-2 transition hover:text-primary hover:underline"
          >
            KenaRooz
          </a>
        </p>
      </div>
    </footer>
  );
}
