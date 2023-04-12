const iconSize = {
    xs: 14,
    sm: 16,
    md: 20,
    lg: 30,
    xl: 45,
};

export type IconSize = keyof typeof iconSize;

export const mapSize = (size: IconSize) => iconSize[size];
