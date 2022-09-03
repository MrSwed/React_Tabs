import React from 'react';
import ReactDOM from "react-dom";
import { HashRouter, BrowserRouter as Routes, Route, Redirect, Link, matchPath, withRouter } from "react-router-dom";

const Tabs = withRouter(({ location, items, match }) => {
  const active = items.find((item) =>
    matchPath(location.pathname, {
      path: `/${item.route}`,
      exact: true,
    }),
  );

  const activeId = active && active.id;

  return (
    <div className="tabs">
      <ul role="tablist" aria-orientation="horizontal" className="tabs-list">
        {/* We loop through the "items" and create tabs for each */}
        {items.map((item) => (
          <li className="tabs-list__item" key={`tab-${item.name}`}>
            <Link
              to={item.route}
              className={`tabs-list__tab ${activeId === item.id ? 'active' : 'inactive'}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* Tab content - we use a Switch to only show one tab at a time */}
      <Routes>
        {/* We loop through the "items" and create routes to correspond to each tab */}
        {items.map((item) => (
          <Route
            key={item.id}
            path={`/${item.route}`}
            render={item.render}

          />
        ))}
        {/* We can have a Redirect route to ensure we always have an active route */}
        <Route render={() => <Redirect to={items[0] ? items[0].route : '/'} />} />
      </Routes>
    </div>
  )
});

function App() {
  return (
    <HashRouter>
      <Tabs items={[
        {
          id: 'id1',
          name: 'Tab #1',
          route: 'id1',
          render: () => (
            <div className="tab-content">
              Depths burying snare value law merciful value snare society eternal-return decieve aversion.
              Holiest virtues pious war depths noble inexpedient against endless ultimate. Merciful
              disgust convictions grandeur abstract battle gains revaluation fearful inexpedient right
              holiest faithful battle. Merciful depths decrepit intentions virtues salvation war ultimate.
              Sea transvaluation virtues suicide battle against victorious.
            </div>
          )
        },
        {
          id: 'id2',
          name: 'Tab #2',
          route: 'id2',
          render: () => (
            <div className="tab-content">
              Ideal overcome free burying grandeur aversion. Dead morality self right superiority passion
              virtues hope society play of snare grandeur. Good oneself burying law good ultimate burying.
              Play justice snare holiest noble sea reason marvelous right.
            </div>
          )
        },
        {
          id: 'id3',
          name: 'Tab #3',
          route: 'id3',
          render: () => (
            <div className="tab-content">
              Inexpedient gains prejudice aversion pious snare noble ocean ocean overcome self ubermensch
              prejudice philosophy. Ocean strong sea burying reason ultimate burying spirit. Pious christianity
              decieve endless abstract decrepit abstract. Ocean burying depths evil horror suicide mountains
              fearful depths christianity disgust gains horror. Self marvelous passion faith against grandeur.
            </div>
          )
        }
      ]} />
    </HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));