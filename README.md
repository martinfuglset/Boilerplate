# Modern Next.js Supabase Starter

A modern, scalable starter template built with Next.js 13+, TypeScript, Tailwind CSS, and Supabase. This template provides a solid foundation for building full-stack web applications with built-in authentication, database integration, and a clean, modern UI.

## Features

- ⚡ **Next.js 13+** with App Router
- 🔐 **Supabase Auth** for authentication
- 📦 **Supabase Database** for data storage
- 🎨 **Tailwind CSS** for styling
- 📝 **TypeScript** for type safety
- 🚀 **Vercel** deployment ready
- 🔥 **React Hot Toast** for notifications
- 📱 **Responsive Design** out of the box

## Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/modern-nextjs-supabase-starter.git
   cd modern-nextjs-supabase-starter
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Create a Supabase project and get your credentials from the Supabase dashboard.

4. Create a `.env.local` file in the root directory and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── src/
│   ├── app/                # Next.js App Router
│   ├── components/         # React components
│   ├── lib/               # Utility functions and libraries
│   ├── types/             # TypeScript type definitions
│   └── hooks/             # Custom React hooks
├── public/                # Static files
└── ...config files
```

## Deployment

This template is ready to be deployed to Vercel with zero configuration:

1. Push your code to a GitHub repository
2. Import your project into Vercel
3. Add your environment variables
4. Click Deploy

## Learn More

To learn more about the technologies used in this template, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

MIT