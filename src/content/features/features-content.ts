import type { Feature } from "@/types/feature";

type FeatureContent = Omit<Feature, "id" | "order">;

export const content: FeatureContent[] = [
	// Core Implementation Services
	{
		name: "Enterprise Next.js Implementation",
		description:
			"Full-scale Next.js application development with App Router, Server Components, and enterprise-grade architecture",
		category: "core",
		plans: ["bones", "muscles", "brains"],
		icon: "Zap",
	},
	{
		name: "Migration & Modernization",
		description:
			"Seamlessly migrate your existing applications to Next.js with zero downtime and improved performance",
		plans: ["bones", "muscles", "brains"],
		category: "core",
		icon: "RefreshCw",
	},
	{
		name: "Team Training & Workshops",
		description:
			"Comprehensive Next.js training programs to upskill your development team with hands-on workshops",
		category: "core",
		plans: ["bones", "muscles", "brains"],
		icon: "GraduationCap",
	},
	{
		name: "Performance Optimization",
		description:
			"Advanced optimization techniques including SSR, ISR, edge computing, and Core Web Vitals improvements",
		category: "core",
		plans: ["brains"],
		icon: "Gauge",
	},
	{
		name: "Architecture Consulting",
		description:
			"Scalable Next.js architecture design, code reviews, and best practices implementation",
		category: "core",
		plans: ["brains"],
		icon: "Building",
	},
	{
		name: "Ongoing Support & Maintenance",
		description:
			"Dedicated support team for your Next.js applications with monitoring, updates, and troubleshooting",
		category: "core",
		plans: ["bones", "muscles", "brains"],
		icon: "Shield",
	},
	// Technical Implementation Features
	{
		name: "Next.js 15 App Router Expertise",
		description:
			"Deep expertise in the latest Next.js features including Server Components, streaming, and parallel routes",
		category: "dx",
		plans: ["bones", "muscles", "brains"],
		icon: "NextJs",
	},
	{
		name: "Production-Ready UI Systems",
		description:
			"Enterprise component libraries built with Radix UI, Tailwind CSS, and accessibility best practices",
		category: "dx",
		plans: ["bones", "muscles", "brains"],
		icon: "Paintbrush",
	},
	{
		name: "Authentication & Security",
		description:
			"Secure authentication implementation with NextAuth.js v5, RBAC, and enterprise security standards",
		category: "security",
		plans: ["bones", "muscles", "brains"],
		icon: "Lock",
	},
	{
		name: "Database Integration & Optimization",
		description:
			"Optimized database setup with PostgreSQL, Drizzle ORM, and connection pooling for high performance",
		category: "backend",
		plans: ["muscles", "brains"],
		icon: "Database",
	},
];
