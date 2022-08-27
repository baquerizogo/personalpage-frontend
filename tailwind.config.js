const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		"./pages/*.js",
		"./pages/**/*.js",
		"./pages/*.jsx",
		"./pages/**/*.jsx",
		"./components/**/*.jsx",
		"./components/**/**/*.jsx",
		"./common/components/**/*.jsx",
		"./common/components/**/**/*.jsx",
		"./common/components/**/**/**/*.jsx",
		"./modules/**/components/**/*.jsx",
		"./modules/**/components/**/**/*.jsx",
	],
	darkMode: "class",
	theme: {
        extend: {
            fontFamily: {
                sans: ["'DM Sans', sans-serif", ...defaultTheme.fontFamily.sans],
				titles: ["'Montserrat', sans-serif", ...defaultTheme.fontFamily.sans]
			},
            colors: {
                primary: {  
                    DEFAULT: '#76BA99',  
                    '50': '#F0F7F4',  
                    '100': '#E3F1EA',  
                    '200': '#C7E3D6',  
                    '300': '#ACD5C1',  
                    '400': '#91C8AD',  
                    '500': '#76BA99',  
                    '600': '#53A57D',  
                    '700': '#408061',  
                    '800': '#2D5A45',  
                    '900': '#1B3528'
                },
                secondary: {  
                    DEFAULT: '#876445',  
                    '50': '#F4EAE1',  
                    '100': '#DECEBF',  
                    '200': '#CBB19A',  
                    '300': '#B89475',  
                    '400': '#9F7651',  
                    '500': '#876445',  
                    '600': '#624932',  
                    '700': '#3D2D1F',  
                    '800': '#35281D',  
                    '900': '#1C1712'
                },
                
                
                lowContrast: "#EDDFB3",
                background: "#FEFFEB",
                auxiliary: "#CA955C",
            },
            transitionDelay: {
                '0': '0ms',
                '2000': '2000ms',
            },
            transitionDuration: {
                '0': '0ms',
                '50': '50ms',
            },
        },
    },
    plugins: [

    ],
    variants: {

    }
};
