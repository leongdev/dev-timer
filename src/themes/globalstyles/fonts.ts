import Layout from '../../../constants/Layout'

const { width } = Layout.window

export const Title = `
  font-family: ${'fira-bold'};  
  font-size: ${width * 0.07}px;
`

export const Title2 = `
  font-family: ${'fira-bold'};
  font-size: ${width * 0.04}px;
`

export const Subtitle = `
  font-family: ${'fira-medium'};
  font-size: ${width * 0.045}px;
`

export const Label1 = `
  font-family: ${'fira-regular'};
  font-size: ${width * 0.04}px;
`

export const Label2 = `
  font-family: ${'fira-regular'};
  font-size: ${width * 0.03}px;
`

export default {
  Title,
  Title2,
  Subtitle,
  Label1,
  Label2
}
