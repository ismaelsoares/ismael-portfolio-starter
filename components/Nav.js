//next Link
import Link from 'next/link';
//next Router
import { useRouter } from 'next/router';

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

export const Nav = () => {
  return (
    <nav>
      {/* {inner} */}
      <div>
        {navData.map((link, index) => {
          return <Link key={index} href={link.path}>{link.icon}</Link>
        })}
      </div>
    </nav>

  );
};
