const links = [
  { name: 'About', href: '#about' },
  { name: 'Timetable', href: '#schedule' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  return (
    <footer className="bg-stage py-12 text-sm text-stage-muted">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-base font-medium text-stage-foreground">Owens Academy</p>
          <p className="mt-2 max-w-xs leading-6">Irish dance classes in Downpatrick and Saintfield, taught by Christopher Owens TCRG</p>
        </div>
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="transition-colors duration-150 hover:text-stage-foreground">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto mt-12 max-w-6xl px-6">
        <p className="border-t border-white/8 pt-6 text-faint">&copy; {new Date().getFullYear()} Owens Academy</p>
      </div>
    </footer>
  );
};

export default Footer;
