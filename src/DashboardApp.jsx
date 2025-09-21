
import ApplicationRoutes from './AppRouter';
import { ColorSchemeProvider } from './context/AppTheme';

function ApplicationRoot() {
  return (
    <ColorSchemeProvider>
      <ApplicationRoutes />
    </ColorSchemeProvider>
  );
}

export default ApplicationRoot;