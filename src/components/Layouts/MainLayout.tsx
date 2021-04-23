import { Container } from "components/Container";
import { Header } from "components/Header";
import { Logo } from "components/Logo";

type MainLayoutProps = {
  heading?: string;
};

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  heading,
}) => {
  return (
    <div>
      <nav className="bg-brand-black">
        <Container>
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Logo />
              </div>
              <div className="hidden md:flex ml-10 items-baseline space-x-4">
                <span className="text-white">Dashboard</span>
              </div>
            </div>
          </div>
        </Container>
      </nav>

      <Header>{heading}</Header>
      <main>
        <Container className="py-6">{children}</Container>
      </main>
    </div>
  );
};
