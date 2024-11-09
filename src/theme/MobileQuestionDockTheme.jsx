import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system"

export const mobileStyle = (mobileCss, fallbackCss) => {
  return {
    base: mobileCss, // iphone SE
    sm: mobileCss, // android
    md: fallbackCss, // ipad mini
    lg: fallbackCss, // ipad pro
    xl: fallbackCss, // macbook air
    '2xl': fallbackCss, // desktop
  };
};

const helpers = createMultiStyleConfigHelpers([
  'container',
])

const MobileQuestionDockTheme = helpers.defineMultiStyleConfig({
  defaultProps: {},
  baseStyle: {
    container: {
      overflow: 'scroll',
      background: 'red',
      position: 'absolute',
      zIndex:'999',
      pointerEvents: 'none',
      bottom: '0',
      alignContent: 'center',
      //left: '9.75rem',
      //right: '3.325rem',
    }
  },
})

export default MobileQuestionDockTheme;