export default function Footer() {
  return (
    <footer className="border-t bg-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Umesh. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <a href="mailto:poolaumesh@gmail.com" className="hover:text-blue-600">Email</a>
          <a href="https://github.com/Tej0712" target="_blank" className="hover:text-blue-600">GitHub</a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-blue-600">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
