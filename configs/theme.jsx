const getDesignTokens = mode => ({
   typography: {
      fontFamily: 'jakartaTextRegular',
   },

   palette: {
      mode,

      secondary: {
         main: '#EF5A88',
      },
      black: {
         main: '#000000',
      },
   },

   components: {
      MuiButton: {
         styleOverrides: {
            root: () => ({
               boxShadow: 'none',
               textTransform: 'none',
               padding: 0,
               minWidth: 0,
               borderRadius: 0,
               '&:hover': {
                  boxShadow: 'none',
               },
            }),
         },
      },

      MuiDialog: {
         styleOverrides: {
            root: {
               fontFamily: 'jakartaTextRegular',
            },
         },
      },

      MuiDrawer: {
         styleOverrides: {
            root: {
               fontFamily: 'jakartaTextRegular',
            },
         },
      },

      MuiTab: {
         styleOverrides: {
            root: {
               fontFamily: 'jakartaTextBold',
               textTransform: 'none',
            },
         },
      },
   },
});

export default getDesignTokens;
