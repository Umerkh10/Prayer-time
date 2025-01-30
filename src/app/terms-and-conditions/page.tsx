import TermsContent from "./TermsContent";

export default function TermsPage() {
  return (
    <div className="min-h-screen ">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-500 mb-8 text-center">Terms and Conditions</h1>
        <TermsContent />
      </main>
    </div>
  )
}

