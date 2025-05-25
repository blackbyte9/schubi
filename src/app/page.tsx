import { auth } from "@/auth";
import AuthButton from "@/component/auth/AuthButton.server";

export default async function Page() {
  const session = await auth();
  return (
    <main>
      <h1>Hello, Next.js!</h1>
      <pre>{JSON.stringify(session, null, 2)}  </pre>
      <AuthButton />
    </main>
  );
}
