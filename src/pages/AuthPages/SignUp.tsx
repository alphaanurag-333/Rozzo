import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignUpForm from "../../components/auth/SignUpForm";

export default function SignUp() {
  return (
    <>
      {/* <PageMeta
        title="React.js SignUp Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js SignUp Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      /> */}
      {/* <AuthLayout> */}
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">

          <SignUpForm />
        </div>
      {/* </AuthLayout> */}
    </>
  );
}
