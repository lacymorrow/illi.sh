import { Balancer } from "@/components/primitives/balancer";
import { Link } from "@/components/primitives/link";
import { siteConfig } from "@/config/site";
import BlobScene from "@/components/blocks/blob-scene";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight, Code2, Rocket, Sparkle, SparkleIcon, SparklesIcon, Zap } from "lucide-react";
import { IconRobotFace } from "@tabler/icons-react";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Inter({ subsets: ["latin"] });

export default function Page() {
	return (
		<div className="relative min-h-screen overflow-hidden">
			{/* Abstract Background */}
			<div className="absolute inset-0 z-0 after:absolute after:inset-0 after:bg-gradient-to-b after:from-background/40 after:to-background/60 after:animate-gradient-x">
				<BlobScene />
			</div>

			{/* Content Layer */}
			<div className="relative z-10">
				<div className="container flex min-h-screen flex-col items-center justify-center px-4 py-16 md:px-6 lg:px-8">
					{/* Main Hero Content */}
					<div className="mx-auto max-w-4xl text-center">
						{/* Eyebrow text with gradient */}
						<p className="backdrop-blur-md mb-6 inline-block rounded-full bg-gradient-to-r from-background/60 via-background/90 to-background/70 px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
							Next.js Implementation Experts
						</p>

						{/* Main Heading */}
						<h1 className="animate-fadeDown mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
							<Balancer>
								We implement <span className={cn(font.className, "text-primary")}>Next.js</span> at your company
							</Balancer>
						</h1>

						{/* Subheading */}
						<p className="relative mb-8 text-lg sm:text-xl font-medium">
							<span className="relative text-foreground [text-shadow:_0_1px_2px_rgb(0_0_0_/_30%)] dark:[text-shadow:_0_1px_2px_rgb(0_0_0_/_50%)]">
								<Balancer>
									From enterprise-grade applications to team training, we accelerate your Next.js adoption.
									Production-ready implementations, scalable architecture, and performance optimization from certified experts.
								</Balancer>
							</span>
						</p>

						{/* CTA Buttons */}
						<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
							<Link className={buttonVariants({ variant: "outline", size: "lg" })} href="/case-studies">
								View Implementation Case Studies
							</Link>
							<Link className={buttonVariants({ variant: "outline", size: "lg" })} href="/contact">
								Start Your Next.js Journey
								<SparklesIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Link>
						</div>

						{/* Features Grid */}
						<div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
							<div className="rounded-lg border bg-background/80 p-4 backdrop-blur-md shadow-sm">
								<div className="flex items-center justify-center gap-2 mb-1">
									<Zap className="h-5 w-5 text-primary" />
									<h3 className="font-semibold text-foreground">Enterprise Implementation</h3>
								</div>
								<p className="text-sm text-foreground/80">
									Production-ready Next.js applications built for scale and performance
								</p>
							</div>
							<div className="rounded-lg border bg-background/80 p-4 backdrop-blur-md shadow-sm">
								<div className="flex items-center justify-center gap-2 mb-1">
									<Code2 className="h-5 w-5 text-primary" />
									<h3 className="font-semibold text-foreground">Team Training</h3>
								</div>
								<p className="text-sm text-foreground/80">
									Comprehensive Next.js training to upskill your development team
								</p>
							</div>
							<div className="rounded-lg border bg-background/80 p-4 backdrop-blur-md shadow-sm">
								<div className="flex items-center justify-center gap-2 mb-1">
									<IconRobotFace className="h-5 w-5 text-primary" />
									<h3 className="font-semibold text-foreground">Performance Optimization</h3>
								</div>
								<p className="text-sm text-foreground/80">
									Advanced optimization techniques for lightning-fast Next.js applications
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
