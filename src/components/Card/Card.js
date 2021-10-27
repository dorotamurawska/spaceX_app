import classes from './Card.module.scss';

const Card = ({ name, homePort, img, weight }) => {

    const styleImg = {
        backgroundImage: `url(${img})`
    };

    return (
        <article className={classes.article}>
            <div className={classes.wrap_img}
                style={styleImg}>
            </div>
            <div className={classes.wrap_txt}>
                <h3 className={classes.h3}>{name}</h3>
                <div className={classes.wrap_descrip}>
                    <p className={classes.lable}>Home port</p>
                    <p className={classes.p}>{homePort}</p>
                </div>
                <div className={classes.wrap_descrip}>
                    <p className={classes.lable}>{`weight [kg]`}</p>
                    <p className={classes.p}>{weight ? weight : 'unknown'}</p>
                </div>
            </div>
        </article>
    );
}

export default Card;