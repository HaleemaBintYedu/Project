import React, { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Protected = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect =
    (() => {
      if (status !== "authenticated") {
        router.push("/login");
      }
    },
    [status]);
  return (
    <div>
      {status == "authenticated" ? (
        <button onClick={() => signOut({ callbackUrl: "/login" })}>
          LogOut
        </button>
      ) : (
        <button>Login</button>
      )}
    </div>
  );
};

export default Protected;
