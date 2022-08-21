/* eslint-disable no-unused-vars */
import bottomImageLight from '../../assets/images/bottom_image_light.png'
import bottomImageDark from '../../assets/images/bottom_image_dark.png'

import topImageLight from '../../assets/images/top_image_light.png'
import topImageDark from '../../assets/images/top_image_dark.png'

import githubDark from '../../assets/images/github_dark.png'
import githubLight from '../../assets/images/github_light.png'

import googleLight from '../../assets/images/google_light.png'
import googleDark from '../../assets/images/google_dark.png'

import imageOneDark from '../../assets/images/image_1_dark.png'
import imageOneLight from '../../assets/images/image_1_light.png'

import imageTwoDark from '../../assets/images/image_2_dark.png'
import imageTwoLight from '../../assets/images/image_2_light.png'

import logoDark from '../../assets/images/logo_dark.png'
import logoLight from '../../assets/images/logo_light.png'

import menuDotDark from '../../assets/images/menu_dot_dark.png'
import menuDotLight from '../../assets/images/menu_dot_light.png'

import menuDotFilledDark from '../../assets/images/menu_dot_filled_dark.png'
import menuDotFilledLight from '../../assets/images/menu_dot_filled_light.png'

import playButtonDark from '../../assets/images/play_dark.png'
import playButtonLight from '../../assets/images/play_light.png'

import portalTimerDark from '../../assets/images/portal_dark.png'
import portalTimerLight from '../../assets/images/portal_light.png'

import quoteOpen from '../../assets/images/quote_open.png'
import quoteClose from '../../assets/images/quote_close.png'

const images = {
  bottomImageLight,
  bottomImageDark,
  topImageLight,
  topImageDark,
  githubDark,
  githubLight,
  googleLight,
  googleDark,
  imageOneLight,
  imageOneDark,
  imageTwoDark,
  imageTwoLight,
  logoDark,
  logoLight,
  menuDotDark,
  menuDotLight,
  menuDotFilledDark,
  menuDotFilledLight,
  playButtonDark,
  playButtonLight,
  portalTimerDark,
  portalTimerLight,
  quoteOpen,
  quoteClose
}

export enum ImageNames {
  bottomImageLight = 'bottomImageLight',
  bottomImageDark= 'bottomImageDark',
  topImageLight = 'topImageLight',
  topImageDark = 'topImageDark',
  githubDark= 'githubDark',
  githubLight= 'githubLight',
  googleLight= 'googleLight',
  googleDark= 'googleDark',
  imageOneLight= 'imageOneLight',
  imageOneDark= 'imageOneDark',
  imageTwoDark= 'imageTwoDark',
  imageTwoLight= 'imageTwoLight',
  logoDark= 'logoDark',
  logoLight= 'logoLight',
  menuDotDark= 'menuDotDark',
  menuDotLight= 'menuDotLight',
  menuDotFilledDark= 'menuDotFilledDark',
  menuDotFilledLight= 'menuDotFilledLight',
  playButtonDark= 'playButtonDark',
  playButtonLight= 'playButtonLight',
  portalTimerDark= 'portalTimerDark',
  portalTimerLight= 'portalTimerLight',
  quoteOpen= 'quoteOpen',
  quoteClose= 'quoteClose'
}

const getImage = (name) => images[name]

export { images, getImage }
