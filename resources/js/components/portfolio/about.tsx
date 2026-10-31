import SectionTitle from './section-title';

export default function About() {
    return (
        <section id="about" className="reveal px-6 py-20 md:py-28">
            <div className="mx-auto max-w-6xl">
                <SectionTitle>About</SectionTitle>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
                    <div className="line relative col-span-2 overflow-hidden rounded-3xl border p-8 transition duration-300 hover:bg-black/5 md:col-span-6 md:p-10 dark:hover:bg-white/5">
                        <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:18px_18px] opacity-[0.07] [mask-image:linear-gradient(to_bottom_left,#000,transparent_70%)]"></div>
                        <div className="relative flex h-full flex-col justify-between gap-10">
                            <div>
                                <p className="mb-5 text-sm font-medium tracking-widest uppercase opacity-60">Hello there</p>
                                <p className="max-w-[24ch] text-3xl leading-tight font-semibold tracking-tight md:text-5xl">
                                    I'm a third-year student who loves turning ideas into simple, modern interfaces.
                                </p>
                            </div>
                            <p className="max-w-md opacity-70">
                                I care about typography, spacing and the details that make a site feel effortless. I build for both web and mobile, and I'm always looking for the next thing to learn.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
