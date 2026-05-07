import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import satori from 'satori';
import sharp from 'sharp';

const fontLight = readFileSync(join(process.cwd(), 'src/fonts/HankenGrotesk-Light.ttf'));
const fontRegular = readFileSync(join(process.cwd(), 'src/fonts/HankenGrotesk-Regular.ttf'));

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection('writing');
  return posts.map((post) => ({
    params: { slug: post.id },
    props: {
      title: post.data.title,
      category: post.data.category ?? 'Writing',
    },
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const { title, category } = props as { title: string; category: string };

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          backgroundColor: '#0c1020',
          fontFamily: 'Hanken Grotesk',
        },
        children: [
          // Top: category label
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              },
              children: [
                {
                  type: 'span',
                  props: {
                    style: {
                      fontSize: '13px',
                      fontWeight: 400,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#6499C4',
                    },
                    children: category,
                  },
                },
              ],
            },
          },

          // Middle: title
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '0px',
              },
              children: [
                {
                  type: 'h1',
                  props: {
                    style: {
                      fontSize: title.length > 60 ? '44px' : title.length > 40 ? '52px' : '62px',
                      fontWeight: 300,
                      lineHeight: 1.1,
                      letterSpacing: '-0.03em',
                      color: '#ede8de',
                      margin: 0,
                      maxWidth: '900px',
                    },
                    children: title,
                  },
                },
              ],
            },
          },

          // Bottom: site name + divider
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      width: '100%',
                      height: '1px',
                      backgroundColor: '#1c2538',
                    },
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    },
                    children: [
                      {
                        type: 'span',
                        props: {
                          style: {
                            fontSize: '16px',
                            fontWeight: 300,
                            letterSpacing: '0.05em',
                            color: '#8a8f9a',
                          },
                          children: 'Adam King',
                        },
                      },
                      {
                        type: 'span',
                        props: {
                          style: {
                            fontSize: '13px',
                            fontWeight: 400,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: '#1c2538',
                          },
                          children: 'adamking.me',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Hanken Grotesk', data: fontLight, weight: 300, style: 'normal' },
        { name: 'Hanken Grotesk', data: fontRegular, weight: 400, style: 'normal' },
      ],
    },
  );

  const jpeg = await sharp(Buffer.from(svg)).jpeg({ quality: 90 }).toBuffer();

  return new Response(jpeg, {
    headers: {
      'Content-Type': 'image/jpeg',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
