import fetch from 'isomorphic-unfetch'

const About = (props) => (
    <div>
        εεΎη΅ζ
        <br></br>
        {props.shows}
    </div>
)

About.getInitialProps = async function () {
    const res = await fetch('/api/demo')
    const data = await res.json()

    console.log('Show data fetched')

    return {
        shows: data
    }
}

export default About