import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";

export default function Page() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      window.location.href = "/api/auth/auth";
    }
  }, [status]);

  if (status === "loading") return <div>Loading...</div>;

  if (!session) {
    return (
      <div>
        <p>You are not signed in</p>
        <button onClick={() => window.location.href = "/api/auth/auth"}>Sign in</button>
      </div>
    );
  }

  return (
    <div>
      <p>Signed in as {session?.user?.email}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
