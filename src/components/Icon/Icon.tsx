import { type IconName, iconsMap } from './constants';
import { type IconSize, mapSize } from './helpers';

export interface IconProps {
    name: IconName;
    size?: IconSize;
}

const Icon = ({ name, size = 'md' }: IconProps) => {
    const icon = iconsMap[name];
    const mappedSize = mapSize(size);

    return (
        <div className="icon" style={{ width: mappedSize, height: mappedSize }}>
            <svg
                viewBox={icon.viewBox}
                xmlns="http://www.w3.org/2000/svg"
                width={mappedSize}
                height={mappedSize}>
                {icon.svg}
            </svg>
        </div>
    );
};

export default Icon;
