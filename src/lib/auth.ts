import type { AuthError, Session, User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

export type AuthResult = {
  error: string | null;
  session: Session | null;
  user: User | null;
};

export type SignUpResult = AuthResult & {
  needsEmailConfirmation: boolean;
};

const formatAuthError = (error: AuthError | null) => error?.message ?? null;

export const getCurrentSession = async () => {
  if (!supabase) {
    return { session: null, error: "Supabase is not configured." };
  }

  const { data, error } = await supabase.auth.getSession();
  return {
    session: data.session,
    error: formatAuthError(error),
  };
};

export const signInWithEmail = async (
  email: string,
  password: string,
): Promise<AuthResult> => {
  if (!supabase) {
    return { error: "Supabase is not configured.", session: null, user: null };
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.trim(),
    password,
  });

  return {
    error: formatAuthError(error),
    session: data.session,
    user: data.user,
  };
};

export const signUpWithEmail = async (
  email: string,
  password: string,
): Promise<SignUpResult> => {
  if (!supabase) {
    return {
      error: "Supabase is not configured.",
      session: null,
      user: null,
      needsEmailConfirmation: false,
    };
  }

  const { data, error } = await supabase.auth.signUp({
    email: email.trim(),
    password,
  });

  const needsEmailConfirmation = Boolean(data.user && !data.session);

  return {
    error: formatAuthError(error),
    session: data.session,
    user: data.user,
    needsEmailConfirmation,
  };
};

export const signOut = async () => {
  if (!supabase) {
    return { error: "Supabase is not configured." };
  }

  const { error } = await supabase.auth.signOut();
  return { error: formatAuthError(error) };
};
