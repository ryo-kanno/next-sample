import fetch from 'isomorphic-unfetch'

const About = (props) => (
    <div>
        {props.shows}
    </div>
)

About.getInitialProps = async function () {
    const res = await fetch('/api/demo/12345')
    const data = await res.json()

    console.log('Show data fetched')

    return {
        shows: data
    }
}

export default About