import "./App.css";
import { SignInButton, SignUpButton, UserButton } from '@clerk/react';
import { useUser } from '@clerk/react';

function App() {
  const { isSignedIn } = useUser();

  return (
    <>
       <header>
        {!isSignedIn ? (
          <>
            <SignInButton mode="modal" />
            <SignUpButton mode="modal"/>
          </>
        ) : (
          <UserButton />
        )}
      </header>
    </>
  );
}

export default App
