import glob from 'glob';
import path from 'path';
import { promises as fs } from 'fs';
import nodeHtmlToImage from 'node-html-to-image';

const extractMdxMeta = require('extract-mdx-metadata'); // non TS lib

const generateOgImages = async () => {
  const blogDirectory = path.join(__dirname, '..', 'assets', 'blog');
  const templatePath = path.join(__dirname, '..', 'templates', 'og.hbs');
  const destinationDirectory = path.join(
    __dirname,
    '..',
    '..',
    'public',
    'og',
    'blog'
  );
  const extension = '.mdx';

  // Get blog file paths
  glob(blogDirectory + '/**/*' + extension, {}, async (err, blogFilePaths) => {
    if (err) {
      console.log(err);
      return;
    }

    // Function for reading/extracting meta from a file path to a blog file
    const readMeta = async (filePath: string) => {
      const buffer = await fs.readFile(filePath);
      const meta = await extractMdxMeta(buffer);

      return {
        meta,
        output: `${path.join(
          destinationDirectory,
          path.basename(filePath, '.mdx')
        )}.png`,
      };
    };

    // Wait for all meta to be extracted
    const content = await Promise.all(
      blogFilePaths.map(async (filePath) => await readMeta(filePath))
    );

    await fs.mkdir(destinationDirectory, { recursive: true });

    const templateBuffer = await fs.readFile(templatePath);
    const template = templateBuffer.toString();

    await nodeHtmlToImage({
      html: template,
      content,
    });

    console.log(`✔️  OG images created successfully`);
  });
};

generateOgImages();
