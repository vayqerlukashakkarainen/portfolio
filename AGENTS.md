# Agent Guidelines

## Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type check with svelte-check
- `npm run lint` - Run ESLint and Prettier checks
- `npm run format` - Format code with Prettier

## Code Style

- **Formatting**: Use tabs (not spaces), single quotes, no trailing commas, 100 char line width
- **TypeScript**: Strict mode enabled, use proper types for all exports and interfaces
- **Imports**: Use `$lib/` and `$app/` path aliases, group external imports first then internal
- **Components**: PascalCase for components, camelCase for variables and functions
- **Naming**: Descriptive names, use `interface` for type definitions, `type` for unions
- **Files**: kebab-case for component files, camelCase for TypeScript files
- **Svelte**: Follow standard Svelte patterns, use reactive statements (`$:`) appropriately
- **CSS**: Use CSS custom properties for theming, class-based styling over inline styles

## Project Structure

- Components in `src/components/`, utilities in `src/lib/`, routes in `src/routes/`
- Static assets in `static/`, organized by project slug in subdirectories
- No test framework configured - verify changes manually with `npm run dev`

## Adding New Projects (Primary Use Case)

### 1. Add Project Data to src/lib/project.ts

Add a new project object to the `projects` array with these required fields:

- `title`: Project display name
- `description`: Brief project description for the card
- `icon`: Icon identifier (can be empty string)
- `date`: Year as number (e.g., 2025)
- `category`: One of 'wacky' | 'apps' | 'boringWebsites'
- `url`: Either 'projects/' for internal pages or full URL for external
- `slug`: Unique identifier (kebab-case, used for routing and assets)
- `isExternalUrl`: Boolean (true for external links, false for project pages)

Optional fields:

- `website`: External website URL
- `appUrl`: App store or live app URL
- `bgImg`: Background image/video path (relative to static/)
- `wip`: Boolean to show "IN PROGRESS" badge
- `pageContent`: Object with detailed page content (see below)

### 2. Create Project Assets (if needed)

- Create folder `/static/images/{slug}/` for project media
- Add images (PNG, JPG) and videos (MP4) to this folder
- Files are automatically discovered and displayed in project gallery
- Use descriptive filenames (img1.png, img2.png, video1.mp4, etc.)

### 3. Create Project Description Component (for detailed pages)

- Create `/src/components/projects/{ProjectName}.svelte`
- Follow existing patterns (see Smam.svelte, Cartopia.svelte as examples)
- Use semantic HTML with h4 headings for sections
- Include styling in component if needed

### 4. Add PageContent (for detailed project pages)

Configure the `pageContent` object in project.ts:

```typescript
pageContent: {
	description: YourProjectComponent, // Import the component
	devRes?: [{ text: 'Tech Name', icon: 'iconify-icon', url: 'https://...' }],
	appRes?: [{ text: 'Link Name', icon: 'iconify-icon', url: 'https://...' }],
	apiRes?: [{ text: 'API Name', icon: 'iconify-icon', url: 'https://...' }]
}
```

### 5. Import Component (if created)

Add import at top of src/lib/project.ts:

```typescript
import YourProject from '../components/projects/YourProject.svelte';
```

### Example: Adding External Project

```typescript
{
	title: 'My Cool App',
	description: 'A revolutionary new application',
	icon: '',
	date: 2025,
	category: 'apps',
	url: 'https://github.com/user/repo',
	isExternalUrl: true,
	slug: 'my-cool-app',
	bgImg: 'images/my-cool-app/img1.png'
}
```

### Example: Adding Internal Project Page

```typescript
{
	title: 'My Game Project',
	description: 'An awesome game I built',
	icon: '',
	date: 2025,
	category: 'wacky',
	url: 'projects/',
	isExternalUrl: false,
	slug: 'my-game',
	bgImg: 'images/my-game/video1.mp4',
	pageContent: {
		description: MyGameComponent,
		devRes: [
			{ text: 'Unity', icon: 'mdi:unity', url: 'https://unity.com/' }
		]
	}
}
```
