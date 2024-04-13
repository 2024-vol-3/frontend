import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Box } from "@yamada-ui/react";

export default function LoginButton() {
  return (
    <>
      <SignedIn>
        <UserButton afterSignOutUrl='/' />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </>
  );
}
