import Card from '../Card/Card';
import classes from './Ships.module.scss';

const Ships = ({ ships }) => {

    const renderShipsCard = ships.map((ship) => (
        ship ?
            <div
                key={ship.id}
                className={classes.wrap}>
                <Card
                    className={classes.card}
                    name={ship.name}
                    homePort={ship.home_port}
                    img={ship.image}
                    weight={ship.weight_kg} />
            </div> : null));

    return (
        <>
            <h1 className={classes.h1}>Rescue ships</h1>
            <section className={classes.section}>
                {renderShipsCard}
            </section >
        </>
    );
}

export default Ships;
