import React from 'react'
// import jsonFetch from "simple-json-fetch";
import styled from 'styled-components'
import siteConfig from '../../../data/siteConfig'

import Loader from '../loader'

// const endpoint =
// `https://api.github.com/users/${siteConfig.githubUsername}/repos?type=owner&sort=updated&per_page=5&page=1`

class Repositories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: [],
      status: 'loading',
    }
  }
  async componentDidMount() {
    // const repos = await jsonFetch(endpoint);
    // console.log('repos:', repos.json);
    // if (repos.json && repos.json.length) {
    //   this.setState({ repos: repos.json, status: 'ready' })
    // }
    const repoInfo = [
      {
        name: 'Notifyme',
        description:
          'react-notification-timeline is a reactjs based component helps in managing the notifications in time-based manner. It is capable of keep tracking of the incoming notifications, manage read vs unread messages and allows many more customizations.',
        stargazers_count: 69,
        html_url: 'https://github.com/atapas/notifyme',
      },
      {
        name: 'Covid-19',
        description:
          'COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019.With the oubreak world-wide and increasing number of active patients, there are many efforts to project the data in some form for people to follow and understand.COVID-19 World is yet another Project to build a Dashboard like app to showcase the data related to the COVID-19(Corona Virus).',
        stargazers_count: 19,
        html_url: 'https://github.com/atapas/covid-19',
      },
      {
        name: 'Samvahana',
        description:
          'Samvahana is to bring people together to discuss, communicate doubts about a topic, project, product, etc. It is a platform for cross-learning and sharing',
        stargazers_count: 0,
        html_url: 'https://github.com/atapas/samvahana',
      },
      {
        name: 'static_website_using_gatsby_netlify',
        description:
          'Creating static website using Gatsby and hosting the same in netlify.',
        stargazers_count: 0,
        html_url: 'https://github.com/NagarjunShroff/static_website_using_gatsby_netlify',
      },
      {
        name: 'sails_react_parcel_boiler_plate',
        description:
          'Bolier plate for sails + React bundled with Parcel',
        stargazers_count: 0,
        html_url: 'https://github.com/NagarjunShroff/sails_react_parcel_boiler_plate',
      },
      {
        name: 'Code Practice',
        description:
          '',
        stargazers_count: 0,
        html_url: 'https://github.com/NagarjunShroff/MyCoding',
      },
    ]
    this.setState({ repos: repoInfo, status: 'ready' })
  }

  render() {
    const { status } = this.state
    return (
      <div className={this.props.className}>
        <h2>Latest repositories on Github</h2>
        {status === 'loading' && (
          <div className="repositories__loader">
            <Loader />
          </div>
        )}
        {status === 'ready' && this.state.repos && (
          <React.Fragment>
            <div className="repositories__content">
              {this.state.repos.map(repo => (
                <React.Fragment key={repo.name}>
                  <div className="repositories__repo">
                    <a className="repositories__repo-link" href={repo.html_url}>
                      <strong>{repo.name}</strong>
                    </a>
                    <div>{repo.description}</div>
                    {/* <div className="repositories__repo-date">
                        Updated: {new Date(repo.updated_at).toUTCString()}
                      </div> */}
                    <div className="repositories__repo-star">
                      ★ {repo.stargazers_count}
                    </div>
                  </div>
                  <hr />
                </React.Fragment>
              ))}
            </div>
          </React.Fragment>
        )}
      </div>
    )
  }
}

export default styled(Repositories)`
  position: relative;
  .repositories__content {
    margin-bottom: 40px;
  }

  .repositories__repo {
    position: relative;
  }

  .repositories__repo-link {
    text-decoration: none;
    color: #25303b;
  }

  .repositories__repo-date {
    color: #bbb;
    font-size: 10px;
  }

  .repositories__repo-star {
    position: absolute;
    top: 0;
    right: 0;
  }

  .repositories__loader {
    display: flex;
  }

  hr {
    margin-top: 16px;
  }
`
