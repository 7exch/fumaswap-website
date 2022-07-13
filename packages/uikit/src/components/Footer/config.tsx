import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.pancakeswap.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://pancakeswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.pancakeswap.finance/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.pancakeswap.finance/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://pancakeswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.pancakeswap.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.pancakeswap.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.pancakeswap.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: "Documentation",
        href: "https://docs.pancakeswap.finance",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.pancakeswap.finance/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/fumafinance",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "https://t.me/fumaforce",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/fumaforce",
      },
      {
        label: "中文",
        href: "https://t.me/fumaforce",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/fumaforce",
      },
      {
        label: "Italiano",
        href: "https://t.me/fumaforce",
      },
      {
        label: "русский",
        href: "https://t.me/fumaforce",
      },
      {
        label: "Türkiye",
        href: "https://t.me/fumaforce",
      },
      {
        label: "Português",
        href: "https://t.me/fumaforce",
      },
      {
        label: "Español",
        href: "https://t.me/fumaforce",
      },
      {
        label: "日本語",
        href: "https://t.me/fumaforce",
      },
      {
        label: "Français",
        href: "https://t.me/fumaforce",
      },
      {
        label: "Deutsch",
        href: "https://t.me/fumaforce",
      },
      {
        label: "Filipino",
        href: "https://t.me/fumaforce",
      },
      {
        label: "ქართული ენა",
        href: "https://t.me/fumaforce",
      },
      {
        label: "Announcements",
        href: "https://t.me/fumaforce",
      },
    ],
  },
  {
    label: "Reddit",
    icon: RedditIcon,
    href: "https://www.reddit.com/r/fumafinance",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://www.facebook.com/FumaFinance-106605438452591",
  },  
  {
    label: "Medium",
    icon: MediumIcon,
    href: "https://fumafinance.medium.com/",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
