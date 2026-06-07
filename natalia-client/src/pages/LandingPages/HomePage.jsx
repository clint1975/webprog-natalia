import Button from "../../components/Button";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section
        className="border-y-2 border-zinc-900 bg-zinc-50 px-4 
      py-6 sm:px-6 sm:py-8 lg:px-8"
      >
        <div
          className="grid gap-8 lg:grid-cols-2 lg:items-
        center space-y-5"
        >
          <div>
            <h1 className="max-w-xl text-3xl font-bold leading-7 text-slate-900 sm:text-4xl">
              Clinton Clarke Natalia
            </h1>

            <p className="max-w-lg font-bold leading-12 text-slate-900 sm:text-xl">
              Virtual Assistant and Aspiring IT Graduate
            </p>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
              I build modern, intuitive, and user-friendly web applications that
              combine clean design with practical digital functionality.
              Leveraging my background as a professional Virtual Assistant
              alongside my BSIT studies at National University Manila, I focus
              on creating structured, scalable digital solutions. I specialize
              in applying foundational modern technologies—including HTML, CSS,
              JavaScript, Tailwind CSS, and relational databases—to streamline
              workflows and optimize user experiences.
            </p>
            <div className="mt-6">
              <Button to="/about" variant="primary">
                Explore my Profile
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/src/assets/img/Clinton Natalia.jpg"
              alt="Profile Picture"
              className="w-72 h-72 object-cover rounded-full border-4 border-black shadow-md"
            />
          </div>
        </div>
      </section>

      <section
        className="border-y-2 border-zinc-900 bg-zinc-50 px-4 
      py-6 sm:px-6 sm:py-8 lg:px-8"
      >
        <div className="mb-6">
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">
            Tech Stack
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-slate-300 bg-slate-100 p-5">
            <p className="text-2xl font-bold text-slate-900">
              Virtual Assistance & Remote Operations
            </p>
            <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Google Workspace, Microsoft 365, Slack, Trello, Zoom
            </p>
          </div>

          <div className="rounded-3xl border-2 border-slate-300 bg-slate-100 p-5">
            <p className="text-2xl font-bold text-slate-900">
              Mobile Development
            </p>
            <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Flutter, Dart
            </p>
          </div>

          <div className="rounded-3xl border-2 border-slate-300 bg-slate-100 p-5">
            <p className="text-2xl font-bold text-slate-900">
              Backend & Database
            </p>
            <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Node.js, Express.js, MongoDB, MySQL
            </p>
          </div>
          <div className="rounded-3xl border-2 border-slate-300 bg-slate-100 p-5">
            <p className="text-2xl font-bold text-slate-900">
              Design & Wireframing
            </p>
            <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Figma, Canva
            </p>
          </div>
        </div>
      </section>

      <section
        className="border-y-2 border-zinc-900 bg-zinc-50 px-4 
            py-6 sm:px-6 sm:py-8 lg:px-8"
      >
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Experience & Projects
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Outputs</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-[4/3] items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img
                src="src/assets/img/client.jpg"
                alt="Simple Product Catalog"
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              Project TaskFlow: Client Dashboard Portal
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              A custom, responsive web application designed to streamline
              collaboration between a Virtual Assistant and their clients. It
              consolidates daily task lists, project statuses, and file
              repositories into a single intuitive user interface, replacing
              messy email threads and scattered spreadsheets.
            </p>
            <p className="mt- text-sm leading-12 text-zinc-600">
              Build using HTML, CSS, and Javascript
            </p>
            <Button className="mt-1" variant="primary">
              View More
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-[4/3] items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img
                src="src/assets/img/data.jpg"
                alt="Simple Product Catalog"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              AutoDocs: Data Entry & Report Automation Script
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              An internal IT solution built to eliminate repetitive
              administrative work. This project uses JavaScript logic to extract
              raw spreadsheet data provided by clients and automatically format
              it into clean, beautifully structured weekly PDF reports and
              relational database entries.
            </p>
            <p className="mt- text-sm leading-12 text-zinc-600">
              JavaScript, Node.js, MySQL, Google Sheets API
            </p>
            <Button className="mt-1" variant="primary">
              View More
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-[4/3] items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img
                src="src/assets/img/book.jpg"
                alt="Simple Product Catalog"
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              EduSchedule: Academic Room Booking System
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              A mobile-friendly web system built as a core academic project for
              school operations. It allows students and faculty to check
              real-time room availability, schedule group study sessions, and
              manage booking data through a clean, secure relational database
              interface.
            </p>
            <p className="mt- text-sm leading-12 text-zinc-600">
              HTML5, Tailwind CSS, JavaScript, MySQL
            </p>
            <Button className="mt-1" variant="primary">
              View More
            </Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
