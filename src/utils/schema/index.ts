import {
	makeIds,
	assembleGraph,
	buildWebSite,
	buildPiece,
	buildWebPage,
	buildArticle,
	buildBreadcrumbList,
	buildImageObject,
} from '@jdevalk/seo-graph-core';
import type { Person, Blog } from 'schema-dts';

export const SITE_URL = 'https://adamking.me';
export const WRITING_URL = `${SITE_URL}/writing/`;
export const BLOG_ID = `${WRITING_URL}#blog`;

export const ids = makeIds({ siteUrl: SITE_URL, personUrl: `${SITE_URL}/` });

export function siteWideEntities() {
	return [
		buildWebSite(
			{
				url: `${SITE_URL}/`,
				name: 'Adam King',
				description: 'Generalized specialist. Founder of GenZen — counter-exploitation and autonomy restoration.',
				publisher: { '@id': ids.person },
				copyrightHolder: { '@id': ids.person },
				copyrightYear: 2024,
				inLanguage: 'en-US',
			},
			ids,
		),
		buildPiece<Person>({
			'@type': 'Person',
			'@id': ids.person,
			name: 'Adam King',
			url: `${SITE_URL}/`,
			image: { '@id': ids.personImage },
			jobTitle: 'Founder & Lead Strategist',
			worksFor: {
				'@type': 'Organization',
				name: 'GenZen',
				url: 'https://genzen.solutions',
			},
			sameAs: [
				'https://www.linkedin.com/in/-adamking/',
				'https://www.instagram.com/adam_m_king/',
			],
			knowsAbout: [
				'Counter-exploitation',
				'Autonomy restoration',
				'Legacy protection',
				'Agentic partnership design',
				'Pattern recognition',
				'Systems thinking',
				'Behavioral profiling',
			],
		}),
		buildImageObject(
			{
				id: ids.personImage,
				url: `${SITE_URL}/ak-portrait.png`,
				width: 800,
				height: 800,
			},
			ids,
		),
		buildPiece<Blog>({
			'@type': 'Blog',
			'@id': BLOG_ID,
			name: 'Writing — Adam King',
			description: 'Writing on counter-exploitation, autonomy restoration, agentic partnership design, and the generalized specialist practice.',
			url: WRITING_URL,
			publisher: { '@id': ids.person },
			inLanguage: 'en-US',
		}),
	];
}

export function homePageGraph() {
	const url = `${SITE_URL}/`;
	return assembleGraph([
		...siteWideEntities(),
		buildWebPage(
			{
				url,
				name: 'Adam King — Generalized Specialist',
				isPartOf: { '@id': ids.website },
				about: { '@id': ids.person },
				copyrightHolder: { '@id': ids.person },
				copyrightYear: 2024,
				inLanguage: 'en-US',
			},
			ids,
		),
	]);
}

export function writingListGraph() {
	const url = WRITING_URL;
	return assembleGraph([
		...siteWideEntities(),
		buildWebPage(
			{
				url,
				name: 'Writing — Adam King',
				isPartOf: { '@id': ids.website },
				about: { '@id': BLOG_ID },
				breadcrumb: { '@id': ids.breadcrumb(url) },
				inLanguage: 'en-US',
			},
			ids,
			'CollectionPage',
		),
		buildBreadcrumbList(
			{
				url,
				items: [
					{ name: 'Home', url: `${SITE_URL}/` },
					{ name: 'Writing', url },
				],
			},
			ids,
		),
	]);
}

export function articleGraph(opts: {
	url: string;
	title: string;
	description: string;
	datePublished: Date;
	dateModified?: Date;
	category?: string;
	ogImage?: string;
}) {
	const { url, title, description, datePublished, dateModified, category } = opts;
	const ogImage = opts.ogImage ?? `${SITE_URL}/ak-portrait.png`;

	return assembleGraph([
		...siteWideEntities(),
		buildImageObject(
			{
				pageUrl: url,
				url: ogImage,
				width: 1200,
				height: 630,
			},
			ids,
		),
		buildWebPage(
			{
				url,
				name: title,
				isPartOf: { '@id': ids.website },
				breadcrumb: { '@id': ids.breadcrumb(url) },
				datePublished,
				dateModified: dateModified ?? datePublished,
				primaryImage: { '@id': ids.primaryImage(url) },
				copyrightHolder: { '@id': ids.person },
				copyrightYear: datePublished.getFullYear(),
				inLanguage: 'en-US',
			},
			ids,
		),
		buildArticle(
			{
				url,
				headline: title,
				description,
				datePublished,
				dateModified: dateModified ?? datePublished,
				author: { '@id': ids.person },
				publisher: { '@id': ids.person },
				isPartOf: [{ '@id': ids.webPage(url) }, { '@id': BLOG_ID }],
				image: { '@id': ids.primaryImage(url) },
				articleSection: category ?? 'Writing',
				inLanguage: 'en-US',
			},
			ids,
			'BlogPosting',
		),
		buildBreadcrumbList(
			{
				url,
				items: [
					{ name: 'Home', url: `${SITE_URL}/` },
					{ name: 'Writing', url: WRITING_URL },
					{ name: title, url },
				],
			},
			ids,
		),
	]);
}
