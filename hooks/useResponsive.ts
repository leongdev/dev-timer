
import Layout from '../constants/Layout'

export default function useResponsive (size: number) {
  const { window } = Layout

  return window.width * (size / 10)
}
