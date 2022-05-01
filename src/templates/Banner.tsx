import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="项目仍在开发中"
      subtitle="欢迎访问我们的 Github 项目以获取更多信息"
      button={
        <Link href="https://github.com/irc3">
          <a>
            <Button>Github</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
