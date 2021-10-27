import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Ships from './components/Ships/Ships';

import { useEffect, useState } from 'react';

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './App.module.scss';

const App = () => {
  const [missions, setMissions] = useState(undefined);

  const url = 'https://api.spacex.land/graphql/';
  const query = `{
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
        site_name
      }
      links {
        wikipedia
        article_link
      }
      rocket {
        rocket_name
        fairings {
          recovered
        }
      }
      ships {
        name
        home_port
        image
        weight_kg
        id
      }
    }
  }`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: query
          })
        })
        const json = await response.json();
        setMissions(json.data.launchesPast);
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchData();
  }, [query]);

  if (missions === undefined) {
    return null
  }

  const renderMissions = missions.map((mission) => {

    const isRecovered = mission.rocket.fairings === null || mission.rocket.fairings.recovered === null ? false : true;

    const isArticleLink = mission.links.article_link === null ? mission.links.wikipedia : mission.links.article_link;

    return (
      <Carousel.Item
        key={mission.mission_name}>
        <Main
          missionName={mission.mission_name}
          rocketName={mission.rocket.rocket_name}
          recovered={isRecovered}
          date={mission.launch_date_local}
          site={mission.launch_site.site_name}
          title={mission.launch_site.site_name_long}
          link={isArticleLink} />
        <Ships
          ships={mission.ships} />
      </Carousel.Item>);
  })

  return (
    <div className={classes.App}>
      <Header />
      <Carousel
        wrap={false}
        interval={null}
        indicators={false}>
        {renderMissions}
      </Carousel>
    </div>
  );
}

export default App;
