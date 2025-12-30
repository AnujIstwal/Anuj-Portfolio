import { Phone, Mail, MapPin } from "lucide-react";

export default function CollaboratePage() {
  return (
    <main className="bg-bg min-h-screen px-[20px]">
      <section className="mx-auto max-w-[1200px] pt-[120px] pb-[80px]">
        {/* Header */}
        <div className="mb-[80px] text-center">
          <h1 className="font-richmond text-[4rem] leading-[1]">
            Let’s build something meaningful.
          </h1>

          <p className="mt-[20px]">
            Open to collaborating on ideas, products, and thoughtful design.
          </p>
        </div>

        {/* Content */}
        <div className="grid max-w-[1200px] grid-cols-1 md:grid-cols-2">
          {/* Contact info */}
          <div>
            <h2 className="mb-[20px] text-sm font-semibold tracking-wide uppercase">
              Contact
            </h2>

            <ul className="space-y-[12px]">
              <li className="flex items-center gap-[12px]">
                <span className="flex h-8 w-8 items-center justify-center rounded border border-[#0c121e]/20">
                  <Phone size={16} strokeWidth={1.5} />
                </span>

                <span>+91 89680 59548</span>
              </li>

              <li className="flex items-center gap-[12px]">
                <span className="flex h-8 w-8 items-center justify-center rounded border border-[#0c121e]/20">
                  <Mail size={16} strokeWidth={1.5} />
                </span>

                <span>anujistwal80@gmail.com</span>
              </li>

              <li className="flex items-center gap-[12px]">
                <span className="flex h-8 w-8 items-center justify-center rounded border border-[#0c121e]/20">
                  <MapPin size={16} strokeWidth={1.5} />
                </span>

                <span>Haryana, India</span>
              </li>
            </ul>
          </div>

          {/* Form */}
          <form className="space-y-[32px]">
            <div>
              <label className="block text-sm">Name</label>
              <input
                type="text"
                className="mt-[8px] w-full border-b bg-transparent py-[6px] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm">Email</label>
              <input
                type="email"
                className="mt-[8px] w-full border-b bg-transparent py-[6px] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm">Message</label>
              <textarea
                rows={4}
                className="mt-[8px] w-full rounded border bg-transparent p-[12px] outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-text text-bg rounded px-[24px] py-[10px]"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
