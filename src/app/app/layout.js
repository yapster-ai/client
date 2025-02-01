import Auth from "@/auth/auth";
import PrivyWrapper from "@/privy/privyProvider";

export const metadata = {
  title: "app.yapster.ai",
  description: "We only talk about verfied yaps nothin else, HEHE!:)",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <PrivyWrapper>
        <Auth>{children}</Auth>
      </PrivyWrapper>
    </div>
  );
}
