import { Svg, Path } from "react-native-svg"

export default function FavoriteSvg({ fill, color = null }) {
    return (
        <Svg
            width={28}
            height={28}
            viewBox="0 0 28 28"
            fill="none"
        >
            <Path
                d="M9.25 3.5A3.25 3.25 0 0 0 6 6.75v18a.75.75 0 0 0 1.203.598L14 20.19l6.797 5.157A.75.75 0 0 0 22 24.75v-18a3.25 3.25 0 0 0-3.25-3.25z"
                fill={color}
                stroke={fill}
                strokeWidth={1.5}
            />
        </Svg>
    )
}