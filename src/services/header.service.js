import STYLES_CONSTANTS from './styles.constants'

/**
 * @function
 */
function getHeaderStyles(title = 'No Title') {
  return {
    title: title,
    headerTintColor: STYLES_CONSTANTS.headerStyle.headerTintColor,
    headerStyle: {
      backgroundColor: STYLES_CONSTANTS.headerStyle.backgoundColorPrimary
    }
  }
}

export default getHeaderStyles;
