import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import classes from './Main.module.scss';

const Main = ({ missionName, rocketName, recovered, date, site, title, link, isMobile }) => {

    const formatDate = () => {
        const monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const day = date[8] === '0' ? date[9] : `${date[8]}${date[9]}`;
        const indexForMonth = date[5] === '0' ? date[6] - 1 : `${date[5]}${date[6]}` - 1;
        const month = `${monthsArr[indexForMonth]}`;
        const year = date.slice(0, 4);
        return `${day} ${month} ${year}`;
    }

    const renderRecoveredInfo = recovered ? <p className={classes.rocket_recovered}>recovered</p> : <p className={classes.rocket_unrecovered}>unrecovered</p>;

    return (
        <main className={classes.main}>
            <div className={classes.left}>
                <div className={classes.mission}>
                    <p className={classes.mission_lable}>Mission</p>
                    <h1 className={classes.mission_name}>{missionName}</h1>
                </div>
                <div className={classes.rocket}>
                    <p className={classes.rocket_lable}>Rocket</p>
                    <div className={classes.rocket_wrap}>
                        <h2 className={classes.rocket_name}>{rocketName}</h2>
                        {renderRecoveredInfo}</div>
                </div>
                <a
                    className={classes.btn}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >Learn more</a>
            </div>
            <div className={classes.right}>
                <div className={classes.date_wrap}>
                    <p className={classes.lable}>Launch date</p>
                    <p className={classes.date}>{isMobile ? date : formatDate()}</p>
                </div>
                <div className={classes.site_wrap}>
                    <p className={classes.lable}>Launch site</p>
                    <OverlayTrigger
                        placement='bottom-end'
                        overlay={
                            <Tooltip >
                                {title}
                            </Tooltip>
                        }>
                        <p
                            className={classes.site}
                        >{site}</p>
                    </OverlayTrigger>
                </div>
            </div>
        </main>
    );
}

export default Main;
