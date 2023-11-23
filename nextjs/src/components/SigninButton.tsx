"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "@/styles/SigninButton.module.css";

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
          <img
            src={session.user.image}
            alt={session.user.name}
            className={styles.user_icon}
          />
        </p>
        <button onClick={() => signOut()} className="text-red-600">
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
