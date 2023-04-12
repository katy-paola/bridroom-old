import { HousingModel } from '@/models/Housing.model';

interface CardProps {
    housing: HousingModel;
}

const Card = ({ housing }: CardProps) => {
    return (
        <article className="card">
            <div className="card__carrousel">
                {housing.photos.map((photo, index) => (
                    <picture key={index} className="card__carrousel--image">
                        <img src={photo} alt={`Foto #${index} de la casa ${housing.name}`} />
                    </picture>
                ))}
            </div>

            <h3 className="card__title">{housing.name}</h3>
            <p className="card__description">{housing.description}</p>

            <p className="card__price">
                <span className="card__price--currency">$</span>
                <span className="card__price--value">
                    {new Intl.NumberFormat('es-CO').format(housing.price)}
                </span>
            </p>

            <div className="card__status">
                <span className={`card__status--text card__status--${housing.status}`}>
                    {housing.status === 'avaliable' ? 'Disponible' : 'No disponible'}
                </span>
            </div>

            <p className="card__date">
                Publicado:{' '}
                {new Date(housing.created_at!).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
            </p>
        </article>
    );
};

export default Card;
