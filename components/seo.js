/**
 * SEO component for persitent header
 */
import Head from 'next/head';
import PropTypes from 'prop-types';
import { metaNameType, metaPropertyType } from '../types/meta';

const SEO = ({ description, meta, title }) => {
    const metaData = {
        description: 'The description of the site',
        title: 'Some site',
        email: 'some.email@somesite.com',
        phone: '+1 888 ADDPHONE',
    };
    const metaDescription = description || metaData.description;
    const metaTitle = title ? `${title} | ${metaData.title}` : metaData.title;
    const metaContent = [
        {
            name: `viewport`,
            content: 'width=device-width, initial-scale=1.0',
        },
        {
            name: `description`,
            content: metaDescription,
        },
        // {
        //     property: 'image',
        //     content: Image,
        // },
        {
            property: `og:title`,
            content: metaTitle,
        },
        {
            property: `og:description`,
            content: metaDescription,
        },
        {
            property: `og:type`,
            content: `website`,
        },
        // {
        //     property: `og:image`,
        //     content: Image,
        // },
        {
            name: `twitter:card`,
            content: `summary`,
        },
        {
            name: `twitter:creator`,
            content: metaData.author || ``,
        },
        {
            name: `twitter:title`,
            content: metaTitle,
        },
        {
            name: `twitter:description`,
            content: metaDescription,
        },
        // {
        //     name: `twitter:image`,
        //     content: Image,
        // },
    ].concat(meta);

    return (
        <Head>
            <title>{metaTitle}</title>
            {metaContent.map((item) => (
                <meta {...item} key={item.property || item.name} />
            ))}
            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "url": "https://yoursite.com",
                        "name": "Your Site",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "availableLanguage": "English",
                            "email": "${metaData.email}",    
                            "telephone": "${metaData.phone}",
                            "contactType": "Sales"
                        }
                    }
              `}
            </script>
        </Head>
    );
};

SEO.defaultProps = {
    meta: [],
    description: ``,
    title: ``,
};

SEO.propTypes = {
    description: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.oneOfType([metaNameType, metaPropertyType])),
    title: PropTypes.string,
};

export default SEO;
