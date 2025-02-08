# WabiSabi - Japanese-Inspired Homeware E-commerce

A minimalist e-commerce platform showcasing Japanese-inspired homeware products, built with modern web technologies.

## Features

- 🛍️ Product browsing with dynamic filtering
- 🔍 Real-time search functionality
- 📱 Responsive design for mobile, tablet, and desktop
- 🎨 Minimalist Japanese-inspired design
- ⚡ Server-side rendering for optimal performance
- 🔒 Integration with Supabase for data management

## Tech Stack

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS
- **UI Components:** shadcn/ui
- **Backend:** Supabase
- **Deployment:** Docker, Vercel
- **State Management:** React Hooks
- **Styling:** Tailwind CSS with custom configuration

## Getting Started

### Prerequisites

- Node.js 18.x or later
- Docker (for containerized deployment)
- Supabase account and project

### Local Development Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/wabisabi.git
cd wabisabi
```

2. Create a .env file:
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

### Docker Deployment

1. Build the Docker image:

```bash
docker build -t wabisabi .
```

2. Run the container:

```bash
docker run -p 3000:3000 --env-file .env wabisabi
```
