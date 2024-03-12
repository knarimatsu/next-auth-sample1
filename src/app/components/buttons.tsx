"use client";
import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
    return (
        <button onClick={() => signIn()} className="py-2 px-3 bg-green-800">
            ログイン
        </button>
    );
};

export const LogoutButton = () => {
    return (
        <button onClick={() => signOut()} className="py-2 px-3 bg-green-800">
            ログアウト
        </button>
    );
};
