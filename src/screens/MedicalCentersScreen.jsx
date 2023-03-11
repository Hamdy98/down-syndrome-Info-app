import React from 'react';
import { Container } from 'react-bootstrap';

const MedicalCentersScreen = () => {
  return (
    <>
      <section style={{minHeight: '84vh'}}>
        <Container className='bg-light py-3'>
          <h3 className='py-3' style={{textAlign: 'right', borderBottom: '2px solid #2196f3'}}>بعض المراكز الطبية لعلاج متلازمة داون <i className="fa-solid fa-hand-point-left"></i></h3>
          <p>دكتور مخ و أعصاب ( د/ إيهاب رجائي بمركز البحوث القومي ) <i className="fa-solid fa-caret-left"></i></p>
          <p>دكتور علاج طبيعي ( مركز الحمد ) <i className="fa-solid fa-caret-left"></i></p>
          <p>دكتور قلب أطفال ( د حنان ذكري ) <i className="fa-solid fa-caret-left"></i></p>
          <p>معهد السمع و الكلام <i className="fa-solid fa-caret-left"></i></p>
        </Container>
      </section>
    </>
  )
}

export default MedicalCentersScreen;
