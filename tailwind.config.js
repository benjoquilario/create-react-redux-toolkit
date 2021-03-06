module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      extend: {
         gridTemplateColumns: {
            'fill-20': 'repeat(auto-fill, 140px)',
            'fill-mobile': 'repeat(auto-fill, 112px)',
         },

         colors: {
            'bg-loading': 'rgba(221, 230, 238, 0.8)',
         },
      },
   },
   plugins: [],
};
