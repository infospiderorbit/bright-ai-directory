import { ReactNode, useState } from 'react';
import { useAuth } from '@/components/auth/AuthProvider';
import { LoginDialog } from '@/components/auth/LoginDialog';

interface ProtectedRouteProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export const ProtectedRoute = ({ children, fallback }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading } = useAuth();
  const [showLoginDialog, setShowLoginDialog] = useState(!isAuthenticated);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <>
        {fallback}
        <LoginDialog 
          open={showLoginDialog} 
          onOpenChange={setShowLoginDialog}
          onSuccess={() => setShowLoginDialog(false)}
        />
      </>
    );
  }

  return <>{children}</>;
};