import { BOOKING_URL } from "../site";

const offers = [
	{
		title: "Build",
		body: "A new Next.js app from first commit to production on Vercel: App Router, auth, a database, payments if you need them.",
	},
	{
		title: "Migrate",
		body: "Move a Create React App, Pages Router, or aging Next.js codebase to current Next.js without a rewrite-from-scratch.",
	},
	{
		title: "Tune",
		body: "Slow pages, bloated bundles, confusing data fetching. I find the cause, fix it, and show your team what changed.",
	},
];

const steps = [
	{ title: "Book a call", body: "Tell me what you have and what you need. I will say plainly whether I am the right person." },
	{ title: "Get a written scope", body: "A short document with what gets built, what it costs, and when. No surprises later." },
	{ title: "Work in your repo", body: "You own the code from day one. Commits and pull requests are yours to read as they land." },
	{ title: "Hand it over", body: "Docs, a walkthrough, and a codebase your team can run without me." },
];

const projects = [
	{
		name: "Shipkit",
		url: "https://shipkit.io",
		body: "A Next.js starter with auth, payments, database, CMS, and AI wired in.",
	},
	{
		name: "Bones",
		url: "https://bones.sh",
		body: "The free, open-source Next.js boilerplate behind it.",
	},
	{
		name: "Uibrary",
		url: "https://uibrary.com",
		body: "An open-source library of React, Tailwind, and shadcn components.",
	},
	{
		name: "Juno",
		url: "https://junebug.ai",
		body: "A computer use agent for macOS that works your mouse and keyboard.",
	},
	{
		name: "lacymorrow.com",
		url: "https://lacymorrow.com",
		body: "My other work, including CrossOver.",
	},
];

export default function Page() {
	return (
		<main>
			<section className="hero">
				<p className="mark">illi.sh</p>
				<h1>I build Next.js apps, and leave your team able to run them.</h1>
				<a className="button" href={BOOKING_URL}>
					Book a call
				</a>
			</section>

			<section>
				<h2>What I do</h2>
				<ul className="grid">
					{offers.map((o) => (
						<li key={o.title}>
							<h3>{o.title}</h3>
							<p>{o.body}</p>
						</li>
					))}
				</ul>
			</section>

			<section>
				<h2>How it works</h2>
				<ol className="steps">
					{steps.map((s) => (
						<li key={s.title}>
							<h3>{s.title}</h3>
							<p>{s.body}</p>
						</li>
					))}
				</ol>
			</section>

			<section>
				<h2>Things I have built</h2>
				<p className="lede">
					I am Lacy Morrow, a full-stack engineer with more than 20 years of experience. These are real, live
					projects you can open.
				</p>
				<ul className="projects">
					{projects.map((p) => (
						<li key={p.name}>
							<a href={p.url}>{p.name}</a>
							<span>{p.body}</span>
						</li>
					))}
				</ul>
			</section>

			<section className="cta">
				<h2>Have a Next.js project?</h2>
				<a className="button" href={BOOKING_URL}>
					Book a call
				</a>
			</section>

			<footer>
				<p>
					illi.sh is run by Lacy Morrow through <a href="https://buildandserve.com">Build and Serve</a>.
				</p>
				<div data-more-by-lacy />
			</footer>
		</main>
	);
}
