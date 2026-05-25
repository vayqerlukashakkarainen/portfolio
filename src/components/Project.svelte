<script lang="ts">
	import { isVideo, type Project } from '$lib/project';
	import Icon from '@iconify/svelte';
	import { base } from '$app/paths';

	export let project: Project;
	export let pinned: boolean = false;
	export let onPin: (() => void) | undefined = undefined;
</script>

<div class="card-wrap">
	<a
		class={`project-card ${project.category}`}
		href={project.isExternalUrl ? project.url : `${base}/` + project.url + project.slug}
		target={project.isExternalUrl ? '_blank' : '_self'}
	>
		{#if project.bgImg}
			<div class="media">
				{#if isVideo(project.bgImg ?? '')}
					<video playsInline autoplay muted loop>
						<source src={`${base}/${project.bgImg}`} type="video/mp4" />
					</video>
				{:else}
					<img src={`${base}/${project.bgImg}`} alt={project.title} />
				{/if}
			</div>
		{/if}

		<div class="info">
			<div class="title-row">
				<span class="title">{project.title}</span>
				{#if project.isExternalUrl}
					<Icon icon="mdi:open-in-new" class="ext-icon" />
				{/if}
			</div>
			<p class="desc">{project.description}</p>
			{#if project.wip}
				<span class="in-dev">IN PROGRESS</span>
			{/if}
		</div>
	</a>

	<div class="card-actions">
		{#if onPin}
			<button
				class="action-btn pin-btn"
				class:pinned
				title={pinned ? 'Unpin' : 'Pin'}
				on:click|stopPropagation|preventDefault={() => onPin?.()}
			>
				<Icon icon={pinned ? 'mdi:pin' : 'mdi:pin-outline'} />
			</button>
		{/if}
		{#if project.website}
			<a
				class="action-btn visit-btn"
				href={project.website}
				target="_blank"
				title="Visit"
				on:click|stopPropagation
			>
				<Icon icon="mdi:open-in-new" />
			</a>
		{/if}
	</div>
</div>

<style>
	.card-wrap {
		position: relative;
	}

	.card-wrap:hover .card-actions {
		opacity: 1;
	}

	.card-actions {
		position: absolute;
		top: 8px;
		right: 8px;
		display: flex;
		gap: 4px;
		opacity: 0;
		transition: opacity 150ms ease;
	}

	.action-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 28px;
		height: 28px;
		min-width: 28px;
		min-height: 28px;
		padding: 0;
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		color: var(--color-text-secondary);
		font-size: 0.95rem;
		cursor: pointer;
		text-decoration: none;
		border-radius: 2px;
		box-sizing: border-box;
		transition:
			color 150ms ease,
			border-color 150ms ease,
			background 150ms ease;
	}

	.action-btn:hover {
		border-color: var(--color-text-primary);
		color: var(--color-text-primary);
	}

	.pin-btn.pinned {
		color: var(--color-text-primary);
	}

	/* Always show actions if something is pinned */
	.card-wrap:has(.pin-btn.pinned) .card-actions {
		opacity: 1;
	}

	a {
		text-decoration: none;
		display: block;
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		overflow: hidden;
		border-radius: 4px;
		transition:
			box-shadow 200ms ease,
			border-color 200ms ease;
	}
	a:visited {
		border-color: none;
	}

	a:hover {
		border-color: var(--color-text-primary);
	}

	.media {
		width: 100%;
		overflow: hidden;
	}

	.media img,
	.media video {
		width: 100%;
		display: block;
		object-fit: cover;
		transition: transform 300ms ease-out;
	}

	a:hover .media img,
	a:hover .media video {
		transform: scale(1.05);
	}

	.info {
		padding: 12px 14px 14px;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.title-row {
		display: flex;
		align-items: center;
		gap: 0.5ch;
	}

	.title {
		font-size: 0.95rem;
		font-weight: 600;
		color: var(--color-text-primary);
		line-height: 1.3;
	}

	.desc {
		margin: 0;
		font-size: 0.8rem;
		color: var(--color-text-secondary);
		line-height: 1.5;
	}

	:global(.ext-icon) {
		font-size: 0.85rem;
		color: var(--color-text-secondary);
		flex-shrink: 0;
	}
</style>
