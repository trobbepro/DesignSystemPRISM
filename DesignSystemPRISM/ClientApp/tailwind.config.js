const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "../**/*.razor",
        "../**/*.cshtml",
        "../**/*.html",
        "../AADStaticFiles/styles/dist/**/*.js",
        "../AADStaticFiles/*.html"
    ],
    safelist: [
        'invalid-input',
        'registrer-stepper',
        'step',
        'sr-only',
        'text-error',
        'text-success',
        'text-placeholder'
    ],
    theme: {
        screens: {
            sm: "768px",
            md: "1024px",
            lg: "1360px",
            xl: "1440px",
            xxl: "1600px",
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
            },
            screens: {
                DEFAULT: 'none',
                sm: '680px',
                md: '936px',
                lg: '1128px',
                xl: '1128px',
                '2xl': '1312px',
            },
        },
        fontFamily: {
            'lexend': ['Lexend Deca', 'sans-serif'],
            'michroma': ['Michroma', 'sans-serif'],
            'icon': ['icon-font']
        },
        colors: {
            primary: {
                lightest: "#F9F7FD",
                lighter: "#F2F2FD",
                light: "#DBE2FD",
                DEFAULT: "#8C4AF7",
                dark: "#671FB8",
                darker: "#2B145C",
                accent: '#CAB4FE'
            },
            secondary: {
                lighter: "#DCFFFF",
                light: "#BFF1F2",
                DEFAULT: "#40F4E9",
                dark: "#1FCBCB",
            },
            neutral: {
                0: "#FFFFFF",
                50: "#F6F7F8",
                100: "#D9DADE",
                300: "#BBC1D1",
                500: "#8892A9",
                600: "#7582A3",
                700: "#4E5974",
                900: "#191B1F",
            },
            success: {
                light: "#ECF9F0",
                DEFAULT: "#12973B",
                dark: "#175129",
            },
            warning: {
                light: "#FFEACB",
                DEFAULT: "#FFAF37",
                dark: "#FF9212",
            },
            danger: {
                light: "#FDF2F1",
                DEFAULT: "#B21D15",
                dark: "#650707",
            },
        },
        backgroundImage: {
            
        },
        borderRadius: {
            xs: "0.25rem",
            s: "0.5rem",
            m: "1rem",
            l: "1.5rem",
            xl: "8rem",
            "modal": "0.25rem",
            "button": "0.25rem",
            "selection-card": "0.25rem",
            "button-card": "0.25rem",
            "input": "0.25rem",
            "card": "1.5rem",
            "full": "100%"
        },
        fontSize: {
            xs: '0.75rem', // 12px en rem
            s: '0.875rem', //14px en rem
            m: '1rem', // 16px en rem
            l: '1.25rem', // 20px en rem
            xl: '1.5rem', // 24px en rem
            '2xl': '2.25rem', // 36px en rem
            '3xl': '2.5rem', // 40px en rem
        },
        extend: {
            spacing: {
                "0": "0px",
                "0.25": "0.125rem", // 2px en rem
                "0.5": "0.25rem", // 4px en rem
                "0.75": "0.375rem", // 6px en rem
                "1": "0.5rem", // 8px en rem
                "1.5": "0.75rem", // 12px en rem
                "2": "1rem", // 16px en rem
                "2.5": "1.25rem", // 20px en rem
                "3": "1.5rem", // 24px en rem
                "4": "2rem", // 32px en rem
                "5": "2.5rem", // 40px en rem
                "6": "3rem", // 48px en rem
                "7": "3.5rem", // 56px en rem
                "8": "4rem", // 64px en rem
                "9": "4.5rem", // 72px en rem
                "10": "5rem", // 80px en rem
                "11": "5.5rem", // 88px en rem
                "12": "6rem", // 96px en rem
                "13": "6.5rem", //104px en rem
                "none": "0",
                "3xs": "0.125rem",
                "2xs": "0.25rem",
                "xs": "0.5rem",
                "s": "1rem",
                "m": "1.5rem",
                "l": "2rem",
                "xl": "2.5rem",
                "2xl": "3.5rem",
                "3xl": "5rem"
            },
            textColor: {
                'placeholder': "#4E5974",
                'disabled-button': "#8892A9",
                'disabled': "#BBC1D1"
            },
            keyframes: {
                // FADE IN
                fadeInBottom: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(20px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                fadeInBottomToast: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(20px) translateX(-50%)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0) translateX(-50%)'
                    }
                },
                fadeInTop: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-20px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                fadeInTopToast: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-20px) translateX(-50%)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0) translateX(-50%)'
                    }
                },
                fadeInLeft: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(-20px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    }
                },
                fadeInRight: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(20px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    }
                },

                // FADE OUT
                fadeOutBottom: {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(20px)'
                    }
                },
                fadeOutBottomToast: {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0) translateX(-50%)'
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(20px) translateX(-50%)'
                    }
                },
                fadeOutTop: {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(-20px)'
                    }
                },
                fadeOutTopToast: {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0) translateX(-50%)'
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(-20px) translateX(-50%)'
                    }
                },
                fadeOutLeft: {
                    '0%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateX(-20px)'
                    }
                },
                fadeOutRight: {
                    '0%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateX(20px)'
                    }
                },

                // SHAKE
                shakeX: {
                    'from, to': {
                        transform: 'translate3d(0, 0, 0)'
                    },
                    '10%, 30%, 50%, 70%, 90%': {
                        transform: 'translate3d(-10px, 0, 0)'
                    },
                    '20%, 40%, 60%, 80%': {
                        transform: 'translate3d(10px, 0, 0)'
                    }
                }
            },
            animation: {
                // FADE-IN
                'fade-in-bottom': 'fadeInBottom 1s ease-in-out',
                'fade-in-bottom-toast': 'fadeInBottomToast 1s ease-in-out',
                'fade-in-top': 'fadeInTop 1s ease-in-out',
                'fade-in-top-toast': 'fadeInTopToast 1s ease-in-out',
                'fade-in-left': 'fadeInLeft 1s ease-in-out',
                'fade-in-right': 'fadeInRight 1s ease-in-out',

                // FADE-OUT
                'fade-out-bottom': 'fadeOutBottom 1s ease-in-out forwards',
                'fade-out-bottom-toast': 'fadeOutBottomToast 1s ease-in-out forwards',
                'fade-out-top': 'fadeOutTop 1s ease-in-out',
                'fade-out-top-toast': 'fadeOutTopToast 1s ease-in-out forwards',
                'fade-out-left': 'fadeOutLeft 1s ease-in-out',
                'fade-out-right': 'fadeOutRight 1s ease-in-out',

                // SHAKE
                'shake-x': 'shakeX 0.3s'
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('tailwind-scrollbar')({ nocompatible: true }),
    ],
};
