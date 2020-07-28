# tone.global

tone.global is responsive and mobile friendly SPA - Single Page Application built in the MERN stack (Mongo Express React Node). The purpose is to serve the Versatile Tone Group, an artist management and creative consultancy. The SPA integrates UX and analytics to stay in touch with its demographics and help it scale accordingly. It utilizes Continuous Integration (from Development through Staging to Production servers) via an Heroku Pipeline. This assures maximum workflow integrity and app stability.

Heroku provides extensive testing, SSL, scalable dynos, addons, and other features that make it easier to administer the site. It uses GitHub integration which is about as familiar to developers as their back hands. Being open source, this invites improvement by other developers, open registration of issues, and all around developer friendliness.

WordPress is the Content Management System as it is familiar to most people. The backend "admin" at versatileco.me controls the content of tone.global via a RESTful API. The site however has a frontend and can be used as a 2nd site targeting a different demographic under a different purpose. 

WordPress has blogging features, a vast ecosystem of plugins, such as ecommerce, and publishing industry style permissions paradigm. Any of this can be extended to tone.global or be exposed on versatileco.me

## UX Development Tools

- [Flowmapp](https://www.flowmapp.com/) for sitemaps and userflows
- [Google-Analytics](https://analytics.google.com/) for well, analytics
- [Hightail](https://spaces.hightail.com/) for design review
- [Asana](https://app.asana.com/) for Agile project management including extensive documentation
- [Browserstack](https://www.browserstack.com/) for cross browser testing
- [MindNode](https://apps.apple.com/us/app/mindnode-mind-map/) a mind mapping tool for Information Architecture
- [Balsamiq](https://balsamiq.com/) for wireframing

## Continuous Integration

- Via Heroku Pipeline from localhost development server to [GitHub](https://github.com/) 
- to [Heroku](https://dashboard.heroku.comlines/), which takes it through temporary apps, a staging server, and a production server
- The production app is then resolved via the DNS (located at [Godaddy](https://godaddy.com) to tone.global)

## CMS WordPress RESTful API

The WordPress "admin" controls (selected) content of tone.global. The (selected areas) for content management are handled via a REST API in a [WordPress](https://versatileco.me/wp-admin) instance.

## WordPress is actually a second site

It is important to note that the WordPress admin is a site unto itself and can has a front end. This can be an alternative UI to tone.global. A two-for-one situation where additional content and presentation can be put forward on the WordPress site to address a separate demographic than tone.global, yet share content.

## Extensibility

The application is able to scale as usage increases or as needs change. NOTE: tone.global can go much, much further in terms of scale, animation, database, API, and music sources integration. The app is currently targeted at its demographic and purpose. But as that expands, so can the application because much of this is stubbed out.
- [CloudFlare](https://www.cloudflare.com/)
- [GSAP](https://greensock.com/)
- [WordPress](https://developer.wordpress.org/rest-api/)
- [React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [Mongo](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [Node](https://nodejs.org/en/)
- [Spotify](https://developer.spotify.com/documentation/web-api/)
- And much, much more

## Issues

Please register issues accordingly on GitHub [Issues](https://github.com/perrycipolloni/versatile-server/issues)


## License
[MIT](https://choosealicense.com/licenses/mit/)