import { Link } from 'react-router';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Card className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="primary">
            <Home className="w-5 h-5" />
            Back to Home
          </Button>
        </Link>
      </Card>
    </div>
  );
}
