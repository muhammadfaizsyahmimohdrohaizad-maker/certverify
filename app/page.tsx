// app/page.tsx — the home page, shown at the "/" URL.

export default function Home() {
  return (
    // <main> fills the screen and puts its content in the centre
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 p-8">
      {/* App name */}
      <h1 className="text-4xl font-bold">CertVerify</h1>

      {/* One-line description of what the app does */}
      <p className="text-gray-500 text-center max-w-md">
        Issue tamper-proof certificates and verify them with a QR scan.
      </p>

      {/* Placeholder until the verify page exists */}
      <span className="text-sm text-gray-400">Coming soon: /verify/&lt;id&gt;</span>
    </main>
  );
}