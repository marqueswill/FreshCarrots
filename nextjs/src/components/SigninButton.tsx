"use client";
import React from "react";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import styles from "@/styles/SigninButton.module.css";
import Link from "next/link";
import { getUser } from "@/lib/user";

export default function SigninButton() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p className="text-sky-600">
          <Link href={`/user/profile/${session.user.email}`}>
            <img
              src={String(session.user.image)}
              alt={String(session.user.name)}
              className={styles.user_icon}
            />
          </Link>
        </p>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="text-red-600"
        >
          Sair
        </button>
      </div>
    );
  }

  
  return (
    <button
      onClick={() =>
        signIn("google", { callbackUrl: "http://localhost:3000/" })
      }
      className={styles.button}
    >
      Entrar
    </button>
  );
}
