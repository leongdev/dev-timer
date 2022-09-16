const SVG = {

}

const SvgImage = ({ name, ...rest }: {name: string}) => {
  const Svg = SVG[name] ? SVG[name] : SVG.Location
  return <Svg {...rest} />
}

export default SvgImage
