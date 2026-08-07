import { NextResponse } from "next/server";
import { supabase, isSupabaseConfigured } from "@/lib/supabaseClient";
import type { ContactPayload } from "@/lib/types";

export async function POST(request: Request) {
  if (!isSupabaseConfigured) {
    return NextResponse.json(
      { error: "Supabase is not configured on this deployment." },
      { status: 503 }
    );
  }

  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = (body.name ?? "").toString().trim();
  const email = (body.email ?? "").toString().trim();
  const message = (body.message ?? "").toString().trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "name, email, and message are all required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "That email address looks invalid." }, { status: 400 });
  }

  const { error } = await supabase.from("messages").insert({ name, email, message });

  if (error) {
    return NextResponse.json({ error: "Could not save your message. Try again shortly." }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
