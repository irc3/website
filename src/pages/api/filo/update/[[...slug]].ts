import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const platformSuffixMap: Record<string, string> = {
  darwin: '.app.tar.gz',
  linux: '.AppImage.tar.gz',
  win64: '.msi.zip',
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;
  const [platform, version] = (slug as string[]) ?? [];
  console.log('old version is: ', version);

  const suffix = platformSuffixMap[platform ?? ''];
  if (suffix) {
    const releases = await axios.get(
      'https://api.github.com/repos/irc3/filo/releases'
    );
    const latestRelease = releases.data.find(
      (item: any) => !item.draft && !item.prerelease
    );
    if (latestRelease) {
      const binaryAsset = latestRelease.assets.find((e: any) =>
        e.name.endsWith(suffix)
      );
      const sigAsset = latestRelease.assets.find((e: any) =>
        e.name.endsWith(`${suffix}.sig`)
      );
      if (binaryAsset && sigAsset) {
        const sigContent = await axios.get(sigAsset.browser_download_url);
        res.status(200).json({
          url: binaryAsset.browser_download_url,
          version: latestRelease.tag_name,
          notes: latestRelease.body,
          pub_date: latestRelease.published_at,
          signature: sigContent.data,
        });
        return;
      }
    }
  }
  res.status(204).end();
}
