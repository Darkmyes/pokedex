const getTypeColor = (color: string) : string  => {
    switch (color) {
        case "normal": return "#ACA974"
        case "flying": return "#095865"
        case "poison": return "#621481"
        case "ground": return "#BEAB22"
        case "rock": return "#474026"
        case "bug": return "#91BA30"
        case "steel": return "#454545"
        case "fire": return "#FC0C0B"
        case "figthing": return "#800B11"
        case "water": return "#08517A"
        case "grass": return "#204000"
        case "ghost": return "#472B53"
        case "electric": return "#979203"
        case "psychic": return "#8B0633"
        case "ice": return "#113C43"
        case "dragon": return "#29036A"
        case "dark": return "#2D221C"
        case "fairy": return "#F87EA7"
        case "unknown": return "grey"
        case "shadow": return "grey"
        default: return "grey"
    }
}

export {
    getTypeColor
}