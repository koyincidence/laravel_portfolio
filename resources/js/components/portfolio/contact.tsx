import { useState, type ReactNode } from 'react';
import Footer from './footer';
import { PulseDot } from './hero';
import { Icon, PinIcon } from './icons';

const EMAIL = 'jianecarlolorenzo@gmail.com';
const iconBadge = 'flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black';
const cardClass = 'line group flex h-full items-center gap-4 rounded-3xl border p-5 transition duration-300 hover:-translate-y-1 hover:bg-black/5 sm:p-6 dark:hover:bg-white/5';

function ContactCard({ href, icon, label, children }: { href?: string; icon: ReactNode; label: string; children: ReactNode }) {
    const inner = (
        <>
            <span className={iconBadge}>{icon}</span>
            <span className="min-w-0">
                <span className="block text-sm opacity-60">{label}</span>
                {children}
            </span>
        </>
    );
    return href ? (
        <a href={href} className={cardClass}>{inner}</a>
    ) : (
        <div className="line flex h-full items-center gap-4 rounded-3xl border p-5 sm:p-6">{inner}</div>
    );
}

export default function Contact() {
    const [copied, setCopied] = useState(false);

    async function copyEmail() {
        try {
            await navigator.clipboard.writeText(EMAIL);
        } catch {
            const t = document.createElement('textarea');
            t.value = EMAIL;
            document.body.appendChild(t);
            t.select();
            document.execCommand('copy');
            document.body.removeChild(t);
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
    }

    return (
        <section id="contact" className="reveal px-6 pt-20 pb-10 md:pt-28">
            <div className="mx-auto max-w-6xl">
                <div className="tag mb-8 flex w-fit items-center gap-2 py-1.5">
                    <PulseDot />
                    Open for projects
                </div>

                <h2 className="text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] font-extrabold tracking-tighter">
                    Let's build
                    <span className="outline-text block">together.</span>
                </h2>
                <p className="mt-6 max-w-lg opacity-70">
                    Looking for an intern or have a project in mind? Send me a message and I'll get back to you as soon as I can.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                    <a href={`mailto:${EMAIL}`} className="pill bg-black! text-white! hover:bg-transparent! hover:text-current! dark:bg-white! dark:text-black! dark:hover:bg-transparent! dark:hover:text-current!">
                        <Icon name="mail" className="mr-2 h-4 w-4" />
                        Send an email
                    </a>
                    <button type="button" onClick={copyEmail} className="pill">
                        {copied ? 'Copied!' : 'Copy email'}
                    </button>
                </div>

                <ul className="mt-12 grid gap-3 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
                    <li className="md:col-span-2 lg:col-span-1">
                        <ContactCard href={`mailto:${EMAIL}`} icon={<Icon name="mail" />} label="Email">
                            <span className="block text-sm font-semibold [overflow-wrap:anywhere] sm:text-base">{EMAIL}</span>
                        </ContactCard>
                    </li>
                    <li>
                        {/* TODO: palitan ng totoong number */}
                        <ContactCard href="tel:+639XXXXXXXXX" icon={<Icon name="phone" />} label="Phone">
                            <span className="block font-semibold">+63 9XX XXX XXXX</span>
                        </ContactCard>
                    </li>
                    <li>
                        <ContactCard icon={<PinIcon className="h-5 w-5" />} label="Location">
                            <span className="block font-semibold">Urdaneta, Pangasinan, PH</span>
                        </ContactCard>
                    </li>
                </ul>

                <Footer />
            </div>
        </section>
    );
}
