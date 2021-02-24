import * as SimpleIcons from 'react-icons/si'

function Footer() {
    return (
        <>
            <SocialMediaIcon
                socialMedia='Facebook'
                url='https://www.facebook.com/alex.czarnick'
            />
            <SocialMediaIcon
                socialMedia='Instagram'
                url='https://www.instagram.com/alexczarnick/'
            />
            <SocialMediaIcon
                socialMedia='Twitter'
                url='https://twitter.com/apz2016'
            />
        </>
    )
}

function SocialMediaIcon(props) {
    const Icon = SimpleIcons[`Si${props.socialMedia}`]
    return (
        <a href={props.url}>
            <Icon/>
        </a>
    )
}

export default Footer