import { signIn } from "../../../auth";
import { AuthError } from 'next-auth';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (!error instanceof AuthError) throw error;
    switch (error.type) {
      case 'CredentialsSignin':
        return 'Invalid Credentials.';
      default:
        return 'Internal server error.';
    }
  }
}
