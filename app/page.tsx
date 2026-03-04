import { redirect } from 'next/navigation';

// The primary page in the mockup is the "About" page.
// We will redirect the root path to /about for this project.
export default function HomePage() {
  redirect('/about');
}