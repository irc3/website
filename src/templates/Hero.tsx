import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/irc3">
            <a>GitHub</a>
          </Link>
        </li>
        {/* <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li> */}
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'去中心化类 IRC 即时聊天协议\n'}
            <span className="text-primary-500">基于Web3.0</span>
          </>
        }
        description="端到端即时通讯，无需服务端."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button xl>查看文档</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
