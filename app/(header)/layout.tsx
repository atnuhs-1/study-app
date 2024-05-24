import { ThemeProvider } from "@/components/theme-provider";
import Header from "../ui/header";
// import { ModeToggle } from "@/components/mode-toggle";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <footer className="container sticky top-full h-16 flex justify-between items-center border-t">
            {/* stickyとtop-fullによってコンテンツが少ないとき下に固定される */}
            <p>&copy; atnuhs</p>
            {/* <ModeToggle /> */}
          </footer>
        </ThemeProvider>
      </body>
    </>
  );
}
