import React from 'react'
import { Container } from 'react-bootstrap'

const ContactMap = () => {
    return (

        <Container className='contact-map'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10327.429695042376!2d-84.17948313122227!3d39.68653663271636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884085ea472f9553%3A0xeba6534ba5a88cc7!2s28%20E%20Stroop%20Rd%2C%20Kettering%2C%20OH%2045429%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1699290947658!5m2!1str!2str"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading='lazy'></iframe>
        </Container>



    )
}

export default ContactMap