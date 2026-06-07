export default function Contact() {
  return (
    <main className="bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-200">
          <h1 className="text-4xl font-semibold">Let’s build something together</h1>
          <p className="mt-4 text-slate-600 leading-8">
            I’m open to new embedded software, IoT, and robotics opportunities. If you have a product idea or need engineering expertise, let’s connect.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-semibold">Email</h2>
              <p className="mt-3 text-slate-700">hari@example.com</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-semibold">LinkedIn</h2>
              <p className="mt-3 text-slate-700">linkedin.com/in/hari-saravanan</p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-700">
            <p className="text-sm">
              Tip: Replace these placeholders with your real email and profile links. If you want, I can also add a contact form that sends email or integrates with a service.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
