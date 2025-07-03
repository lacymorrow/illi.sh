interface SiteConfig {
	name: string;
	title: string;
	url: string;
	ogImage: string;
	description: string;
	behavior: {
		pageTransitions: boolean;
	};
	creator: {
		fullName: string;
		role: string;
		name: string;
		email: string;
		url: string;
		twitter: string;
		twitter_handle: string;
		domain: string;
		avatar: string;
		bio: string;
		location: string;
	};
	store: {
		domain: string;
		product: string;
		products: {
			[key: string]: string;
		};
		format: {
			buyUrl: (product: keyof typeof siteConfig.store.products) => string;
		};
	};
	links: {
		twitter: string;
		twitter_follow: string;
		x: string;
		x_follow: string;
		github: string;
	};
	app: {
		[key: string]: string;
	};
	repo: {
		owner: string;
		name: string;
		url: string;
		format: {
			clone: () => string;
			ssh: () => string;
		};
	};
	email: {
		support: string;
		team: string;
		noreply: string;
		domain: string;
		format: (type: Exclude<keyof typeof siteConfig.email, "format">) => string;
	};
	admin: {
		emails: string[];
		domains: string[];
		isAdmin: (email: string) => boolean;
	};
	metadata: {
		keywords: string[];
		themeColor: {
			light: string;
			dark: string;
		};
	};
}

export const siteConfig: SiteConfig = {
	behavior: {
		pageTransitions: true, // Transition between pages
	},

	name: "NextAccel",
	title: "NextAccel - Next.js Implementation Experts",
	url: "https://nextaccel.com",
	ogImage: "https://nextaccel.com/api/og",
	description:
		"We implement Next.js at your company. Enterprise-grade Next.js applications, team training, and performance optimization from certified experts.",
	links: {
		twitter: "https://twitter.com/lacybuilds",
		twitter_follow: "https://twitter.com/intent/follow?screen_name=lacybuilds",
		x: "https://x.com/lacybuilds",
		x_follow: "https://x.com/intent/follow?screen_name=lacybuilds",
		github: "https://github.com/lacymorrow/shipkit",
	},
	repo: {
		owner: "lacymorrow",
		name: "shipkit",
		url: "https://github.com/lacymorrow/shipkit", // TODO: change to use the variable
		format: {
			clone: () =>
				`https://github.com/${siteConfig.repo.owner}/${siteConfig.repo.name}.git`,
			ssh: () =>
				`git@github.com:${siteConfig.repo.owner}/${siteConfig.repo.name}.git`,
		},
	},
	email: {
		support: "feedback@shipkit.io",
		team: "team@shipkit.io",
		noreply: "noreply@shipkit.io",
		domain: "shipkit.io",
		format: (type: Exclude<keyof typeof siteConfig.email, "format">) =>
			siteConfig.email[type],
	},
	creator: {
		name: "nextaccel",
		email: "hello@nextaccel.com",
		url: "https://nextaccel.com",
		twitter: "@nextaccel",
		twitter_handle: "nextaccel",
		domain: "nextaccel.com",
		fullName: "NextAccel Team",
		role: "Next.js Implementation Experts",
		avatar: "https://avatars.githubusercontent.com/u/1311301?v=4",
		location: "Global Remote Team",
		bio: "Next.js accelerator agency specializing in enterprise implementations.",
	},

	store: {
		domain: "nextaccel.lemonsqueezy.com",
		products: {
			bones: "eb159dba-96a3-40f2-a97b-7b9117e635a1",
			muscles: "4d259175-0a79-486a-b0f8-b77404ee68df",
			brains: "7935a386-7cd0-47fe-83c8-cab101323591",
		},
		product: "20b5b59e-b4c4-43b0-9979-545f90c76f28",
		format: {
			buyUrl: (product: keyof typeof siteConfig.store.products) =>
				`https://${siteConfig.store.domain}/checkout/buy/${siteConfig.store.products[product]}`,
		},
	},
	admin: {
		emails: ["lacymorrow0@gmail.com", "gojukebox@gmail.com"],
		domains: ["nextaccel.com"],
		isAdmin: (email: string) =>
			siteConfig.admin.emails.includes(email) ||
			siteConfig.admin.domains.some((domain: string) =>
				email?.endsWith(`@${domain}`),
			),
	},
	metadata: {
		keywords: [
			"Next.js Implementation",
			"Next.js Experts",
			"Next.js Consulting",
			"Enterprise Next.js",
			"Next.js Agency",
			"React Server Components",
			"Next.js Training",
			"Next.js Performance",
			"Next.js Migration",
			"Next.js Architecture",
		],
		themeColor: {
			light: "white",
			dark: "black",
		},
	},
	app: {
		apiKeyPrefix: "sk",
	},
};
