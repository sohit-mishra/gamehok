"use client";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full text-center">
      <h1 className="text-6xl font-bold text-2xl mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">Sorry, the page you are looking for does not exist.</p>
      <a
        href="/"
        className="text-white hover:underline text-lg"
      >
        Go back home
      </a>
    </div>
  );
}
