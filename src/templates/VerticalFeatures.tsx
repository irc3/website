import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="IRC3 = IRC + Web3"
    description="去中心化无服务器的即时通讯协议，支持 IRC 中的大部分指令"
  >
    <VerticalFeatureRow
      title="支持 ENS 域名"
      description="绑定 ENS 域名作为认证昵称"
      image="/assets/images/ens.png"
      imageAlt="支持 ENS 域名"
    />
    <VerticalFeatureRow
      title="P2P"
      description="端到端通讯，保护隐私"
      image="/assets/images/p2p.png"
      imageAlt="p2p 通讯"
      reverse
    />
    <VerticalFeatureRow
      title="类 IRC"
      description="随意切换马甲，支持私聊和频道聊天"
      image="/assets/images/irc.png"
      imageAlt="irc 协议"
    />
  </Section>
);

export { VerticalFeatures };
