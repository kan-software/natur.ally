import LogoIcon from '@/assets/icons/logo.svg';

export function PageHeader() {
  return (
    <header className="bg-white px-10 py-6">
      <h1>
        <span className="sr-only">Natur.ally</span>
        <LogoIcon aria-hidden="true" />
      </h1>
    </header>
  );
}
