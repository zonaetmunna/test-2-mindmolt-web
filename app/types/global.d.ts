interface HeaderProps {
  logo: React.ReactNode;
  links: ButtonProps[];
  linksAlign?: 'left' | 'right' | 'center';
  buttons: ButtonProps[];
}
interface HeroProps {
  title: TitleProps; // Title contains words
  subTitle: SubTitle; // Subtitle contains text and color
  description: Description; // Description contains text and color
  buttons: ButtonProps[]; // Array of buttons
  image: React.ReactNode; // Image or any React node (e.g. <Image />)
}

interface ButtonProps {
  text: string;
  href: string;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  size?: 'sm' | 'md' | 'lg';
}

interface Phrase {
  text: string; // Text of each phrase
  color: string; // Class name or style to apply color
}
interface TitleProps {
  words: Phrase[]; // Title has an array of phrases
}
interface SubTitle {
  text: string;
  color: string;
}
interface Description {
  text: string;
  color: string;
}

{
  /* Card Components */
}

interface HorizontalCardProps {
  imageAlign?: 'right' | 'left';
  title: string;
  description: string[];
  image: React.ReactNode;
}
interface VerticalCardProps {
  title: string;
  step: string;
  description: string[];
  image: React.ReactNode;
}

// Blog
