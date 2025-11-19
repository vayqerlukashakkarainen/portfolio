<script>
	import { base } from '$app/paths';
	import { projects } from '$lib/project';
	import { allImagesSame, getRandomImage } from '$lib/images';
	import Icon from '@iconify/svelte';
	import Project from '../components/Project.svelte';
	import Image from '../components/Image.svelte';
	import Me from '../components/Me.svelte';
	import Dialog from '../components/Dialog.svelte';

	$: allSame = false;
</script>

<svelte:head>
	<meta property="og:title" content="Hey! - Lukas Hakkarainen" />
	<meta property="og:image" content={`https://luhakk.com/urlimg.png`} />
</svelte:head>

<div class="container center">
	<div class="me">
		<Me />
		<h1 class="primary">
			<Dialog
				text={'<wait=30>Hello!<wait=40> This is<wait=10><speed=20>... <wait=12><speed=7>pretty much <wait=30>my portfolio'}
			/>
		</h1>
	</div>
	<p>
		Self-taught software developer based in Sweden's countryside, close to Borås, constantly
		tinkering on my house and what I find fun software. Currently working as a team leader @Rudholm
		Technology AB.
	</p>
	<a href="https://www.linkedin.com/in/lukas-hakkarainen-841254120/">
		Reach out to me on LinkedIn
	</a>
	<div class="breakout pt-2">
		<div class="project-grid">
			{#each projects.sort((a, b) => b.date - a.date) as project}
				<Project {project} />
			{/each}
		</div>

		<div>
			<h2>Knowledge base</h2>
			<p>Here you can read about the things I have experience with</p>
			<div class="knowledge-container">
				<h2>Customer relations</h2>
				<p>
					Experience in managing customer relationships, understanding client needs, and delivering
					solutions that meet or exceed expectations. Having roots in service industry and sales has
					taught me the value of good customer relations, and how to foster them.
				</p>

				<hr />
				<h2>Project management</h2>
				<h3>Agile methodologies (to some extent)</h3>
				<p>
					Experience in implementing Agile practices such as Scrum and Kanban to enhance team
					collaboration, adaptability, and project delivery. Although I do not fully believe in
					methodologies to be followed 100%, I do see the value in certain parts of them.
				</p>
				<h3>Deliverer</h3>
				<p>
					Proven track record of successfully delivering projects on time and within budget while
					maintaining high-quality standards.
				</p>
				<h3>Team leadership</h3>
				<p>
					Experience in leading and motivating teams to achieve project goals, fostering a
					collaborative and productive work environment.
				</p>
				<h3>The art of feature development</h3>
				<p>
					I've come to call this "The art of feature development" as it encompasses the entire
					process of understanding user needs, designing solutions by iterating on feedback from
					fast developed mock ups before actual implementation. This has proven to be an effective
					way to ensure that the final product meets user expectations, and reduces the risk of
					costly changes later in the development process.
				</p>
				<p>The key parts are:</p>
				<ul>
					<li>
						Start by understanding the requested features and user needs by gathering requirements
						and feedback.
					</li>
					<li>
						Design solutions by iterating on feedback from fast developed mock ups before actual
						implementation. <b>This is crucial</b> to ensure that the design aligns with user expectations
						before any actual coding starts.
					</li>
					<li>
						Implement the feature in small, manageable increments, allowing for frequent testing and
						feedback.
					</li>
					<li>
						Continuously test and gather feedback from users to ensure the feature meets their needs
						and expectations.
					</li>
				</ul>
				<hr />
				<h2>Technical skills</h2>
				<h3>Continous integration and deployment</h3>
				<p>
					Setting up continuous integration and deployment pipelines using GitHub Actions to
					automate testing and deployment processes for various projects.
				</p>
				<h3>DevOps</h3>
				<p>
					Implementing infrastructure as code, monitoring, and collaboration practices to improve
					software delivery and reliability.
				</p>
				<h3>Cloud configuration</h3>
				<p>
					Experience with configuring and managing cloud services on platforms like Google Cloud and
					Azure, including setting up virtual servers, databases, and networking.
				</p>
				<h3>Agentic applications</h3>
				<p>
					Building applications that leverage custom built AI agents to perform tasks autonomously,
					enhancing user experience and functionality.
				</p>
				<h3>Programming languages</h3>
				<p>
					Even tho I believe the programming language of choice is dependent on the application and
					need, and there should actually be no preference beyond scalability and maintainability, I
					have experience with languages such as JavaScript, Java, C++, Python, and C#.
				</p>
				<h3>Debugging</h3>
				<p>
					One of the most important skills as a developer is the ability to effectively debug code
					and understand certain behaviors. I have experience in using various debugging tools and
					techniques to identify and resolve issues in software applications, which should be
					expected from any developer today.
				</p>
				<hr />
				<h2>Design</h2>
				<h3>UI/UX</h3>
				<p>
					Experience in designing user interfaces and user experiences that are intuitive, visually
					appealing, and user-friendly. Understanding the principles of design, usability, and
					accessibility to create effective digital products.
				</p>
				<h3>Graphic design</h3>
				<p>
					Proficient in using design tools such as Adobe Photoshop, Illustrator, and Figma to create
					graphics, logos, and other visual elements.
				</p>
				<h3>Frontend frameworks</h3>
				<p>
					This goes as the same mentality as Programming Languages, frameworks are just a tool for
					reaching the goal of a maintainable application. But I am experienced with frontend
					frameworks such as Svelte, React, and Vue.js to build responsive and dynamic web
					applications.
				</p>
			</div>
		</div>

		<h2 class="primary">Cute pictures of my dog</h2>
		<div class="project-grid">
			{#each { length: 3 } as _, i}
				<Image
					onChange={() => {
						allSame = allImagesSame();
					}}
					{allSame}
					index={i}
					image={getRandomImage(i)}
				/>
			{/each}
		</div>
	</div>

	<div class="yay" class:show={allSame}>
		<p>Nice work! Here is your reward</p>
		<div>
			<Icon icon="fxemoji:trophy" />
		</div>
	</div>
	<footer class="pb-2">
		<div class="icons">
			<a target="_blank" href="https://github.com/vayqerlukashakkarainen"
				><Icon icon="mdi:github" /></a
			>
			<a target="_blank" href="https://www.linkedin.com/in/lukas-hakkarainen-841254120/"
				><Icon icon="mdi:linkedin" /></a
			>
		</div>
		<p>Site made using SvelteKit</p>
	</footer>
</div>

<style>
	.me {
		padding-top: calc(1.5vw + 100px);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0;
		padding-bottom: 60px;
	}
	.me h1 {
		margin-top: -82px;
		font-size: calc(1vw + 42px);
		filter: drop-shadow(2px 4px 6px #00000087);
		height: 160px;
	}
	.center {
		text-align: center;
	}

	.yay {
		opacity: 0;
		transform: translateY(0px);
		transition: all 300ms ease;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 6px;
	}
	.yay.show {
		opacity: 1;
		transform: translateY(12px);
	}
	.yay p {
		margin: 0;
	}
	.yay.show > div {
		animation: rubber-band 1.3s linear;
		animation-delay: 300ms;
	}
	a {
		color: var(--color-teal-500);
	}

	@keyframes rubber-band {
		0% {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}

		30% {
			-webkit-transform: scale3d(1.25, 0.75, 1);
			transform: scale3d(1.25, 0.75, 1);
		}

		40% {
			-webkit-transform: scale3d(0.75, 1.25, 1);
			transform: scale3d(0.75, 1.25, 1);
		}

		50% {
			-webkit-transform: scale3d(1.15, 0.85, 1);
			transform: scale3d(1.15, 0.85, 1);
		}

		65% {
			-webkit-transform: scale3d(0.95, 1.05, 1);
			transform: scale3d(0.95, 1.05, 1);
		}

		75% {
			-webkit-transform: scale3d(1.05, 0.95, 1);
			transform: scale3d(1.05, 0.95, 1);
		}

		100% {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}
	}
</style>
