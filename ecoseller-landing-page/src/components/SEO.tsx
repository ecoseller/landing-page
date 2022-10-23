import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ISEOProps {
    title?: string;
    description?: string;
    name?: string;
    type?: string;
}

const SEO = ({title, description, name, type}: ISEOProps) => {
    return (
        <Helmet>
        { /* Standard metadata tags */ }
        <title>{title || 'ecoseller.io | elevate your ecommerce'}</title>
        <meta name='description' content={description || ''} />
        { /* End standard metadata tags */ }
        { /* Facebook tags */ }
        <meta property="og:type" content={type || ''} />
        <meta property="og:title" content={title || 'ecoseller.io'} />
        <meta property="og:description" content={description || ''} />
        { /* End Facebook tags */ }
        { /* Twitter tags */ }
        <meta name="twitter:creator" content={name || ''} />
        <meta name="twitter:card" content={type || ''} />
        <meta name="twitter:title" content={title || 'ecoseller.io'} />
        <meta name="twitter:description" content={description || ''} />
        { /* End Twitter tags */ }
        </Helmet>
    )
}

export default SEO;