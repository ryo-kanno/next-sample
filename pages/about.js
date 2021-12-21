import fetch from 'isomorphic-unfetch'

const About = (props) => (
    <div>
        取得結果
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