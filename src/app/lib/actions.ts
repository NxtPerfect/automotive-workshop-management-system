import AuthError from 'next-auth';
import { signIn } from 'next-auth/react';
// import { signIn } from '../../../auth';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    console.log('Sign in', signIn)
    await signIn('credentials', formData);
  } catch (error) {
    if (!error instanceof AuthError) throw error;
    switch (error.type) {
      case 'CredentialsSignin':
        console.error(error)
        return 'Invalid Credentials.';
      default:
        console.error(error)
        return 'Something went wrong.';
    }
  }
}
