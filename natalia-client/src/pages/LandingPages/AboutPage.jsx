import Button from "../../components/Button";
import profPic from "../../assets/img/prof pic.jpg";

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section
        className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6
              sm:py-8 lg:px-8"
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="flex items-center justify-center">
            <img
              src={profPic}
              alt="Profile Picture"
              className="w-72 h-72 object-cover rounded-full border-4 border-black shadow-md"
            />
          </div>
          <div>
            <h1
              className="max-w-xl text-3xl font-bold 
            leading-7 text-zinc-900 sm:text-4xl"
            >
              About Me
            </h1>
            <p
              className="mt-4 max-w-lg text-sm leading-7 
            text-zinc-600 sm:text-base"
            >
              I am a 34-year-old third-year college student pursuing a Bachelor
              of Science in Information Technology, majoring in Mobile and Web
              Applications at National University Manila. As a returnee student
              balancing my academic journey with active work as a Virtual
              Assistant, I combine real-world administrative experience with a
              deep passion for developing digital solutions. I am dedicated to
              continuously improving my skills to build modern, intuitive, and
              user-friendly web and mobile applications.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back to Home
              </Button>
              <Button to="/articles">Open Articles</Button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6
             sm:px-6 sm:py-8 lg:px-8"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className=" rounded-3xl border-2 border-zinc-900 bg-zinc-100
                     p-5"
          >
            <p className="text-2xl font-bold text-zinc-900">04</p>
            <p
              className="mt-2 text-[11px] font-semibold uppercase 
                         tracking[0.24em] text-zinc-500"
            >
              Information Technology Student
            </p>
          </div>

          <div
            className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 
                    p-5"
          >
            <p className="text-2xl font-bold text-zinc-900">Web & Mobile</p>
            <p
              className="mt-2 text-[11px] font-semibold uppercase
                            tracking-[0.24em] text-zinc-500"
            >
              Basic Developer
            </p>
          </div>

          <div
            className="rounded-3xl border-2 border-zinc-900 bg-zinc-100
                    p-5"
          >
            <p className="text-2xl font-bold text-zinc-900">Multiple</p>
            <p
              className="mt-2 text-[11px] font-semibold uppercase
                            tracking-[0.24em] text-zinc-500"
            >
              Projects and Experience in Various Fields
            </p>
          </div>

          <div
            className="rounded-3xl border-2 border-zinc-900 bg-zinc-100
                        p-5"
          >
            <p className="text-2xl font-bold text-zinc-900">Tools</p>
            <p
              className="mt-2 text-[11px] font-semibold uppercase
                                tracking-[0.24em] text-zinc-500"
            >
              Google Workspace, ServiceTitan, Canva, Microsoft Office, and More
            </p>
          </div>
        </div>
      </section>

      <section
        className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-
            6 sm:py-8 lg:px-8"
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Developer Journey
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
              Bridging Remote Operations with Full-Stack Application Development
            </h2>
            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Hi, I’m Clinton Clarke Natalia — a professional Virtual
                  Assistant and returning BSIT student specializing in Mobile
                  and Web Applications. I combine years of real-world
                  administrative maturity and remote work experience with a
                  passion for building modern, user-friendly digital solutions.
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  I focus on writing clean code, building responsive interfaces,
                  and solving complex technical problems.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Experience Block
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  • Virtual Assistance & Operations: Managed daily
                  administrative workflows, email correspondence, and calendar
                  scheduling for remote clients.
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  • Data & File Management: Handled data entry, organized cloud
                  storage systems, and maintained accurate records using
                  collaborative digital tools.
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  • Academic IT Projects: Built foundational web pages and basic
                  database structures as part of my third-year mobile and web
                  applications coursework.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Tech Stack
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  VA & Productivity Tools: Google Workspace (Docs, Sheets,
                  Drive), Microsoft 365, Slack, Trello, Zoom
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Frontend (Beginner): HTML5, CSS3, Basic JavaScript, Tailwind
                  CSS (Learning)
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Backend & Database (Foundational): Node.js basics, MySQL / MS
                  Access (Relational Databases)
                </p>

                <p className="mt-3 text-sm leading-16 text-zinc-600">
                  Design & Layout: Figma (Basic UI/UX layouts), Canva
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Visual Grid
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                <img
                  src="/IT2.png"
                  alt="IT2"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                <img
                  src="/IT1.png"
                  alt="IT1"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                <img
                  src="/IT3.png"
                  alt="IT3"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                <img
                  src="/IT4.png"
                  alt="IT4"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <Button className="mt-5">View Section</Button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutPage;
