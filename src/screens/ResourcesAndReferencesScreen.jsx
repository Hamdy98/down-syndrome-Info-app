import React from 'react';
import { Container } from 'react-bootstrap';

const ResourcesAndReferencesScreen = () => {
  return (
      <>
        <section style={{minHeight: '84vh'}}>
          <Container className='bg-light py-3'>
            <h3 className='py-3' style={{textAlign: 'right', borderBottom: '2px solid #2196f3'}}>المصادر و المراجع <i className="fa-solid fa-hand-point-left"></i></h3>
            <p><a href='https://www.mayoclinic.org/ar'>https://www.mayoclinic.org/ar </a><i className="fa-solid fa-globe ps-1"></i></p>
            <p><a href='https://www.webteb.com/'>https://www.webteb.com/ </a> <i className="fa-solid fa-globe ps-1"></i></p>
            <p><a href='https://www.moh.gov.sa/Pages/Default.aspx'>https://www.moh.gov.sa/ </a> <i className="fa-solid fa-globe ps-1"></i></p>
            <p><a href='https://altibbi.com/'>https://altibbi.com/ </a> <i className="fa-solid fa-globe ps-1"></i></p>
            <p><a href='https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B5%D9%81%D8%AD%D8%A9_%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9'>https://ar.wikipedia.org/wiki/ </a> <i className="fa-solid fa-globe ps-1"></i></p>
          </Container>
        </section>
      </>
  )
}

export default ResourcesAndReferencesScreen;
