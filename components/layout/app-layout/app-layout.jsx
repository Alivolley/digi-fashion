// MUI
import { ThemeProvider, createTheme } from '@mui/material';

// Components
import PagesLayout from '../pages-layout/pages-layout';

// Styles
import getDesignTokens from '@/configs/theme';

function AppLayout({ children }) {
   const themeConfig = createTheme(getDesignTokens('light'));

   return (
      <ThemeProvider theme={themeConfig}>
         <PagesLayout>{children}</PagesLayout>
      </ThemeProvider>
   );
}

export default AppLayout;
