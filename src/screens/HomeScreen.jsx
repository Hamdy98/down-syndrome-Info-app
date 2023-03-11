import React from 'react';
import { Container } from 'react-bootstrap';
import background from "../images/childrendownsyndrome-9.jpeg";

const HomeScreen = () => {
  return (
    <>
      <section style={{position: 'relative', backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'left top', backgroundAttachment: 'fixed', minHeight: '92vh'}}>
        <div style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(33,150,243,0.4)'}}></div>
        <h1 style={{position: 'absolute' , width:'max-content' ,zIndex:3, top: '50%', left: '50%', translate: '-50% -50%', color: '#fff'}}>ما هي متلازمة داون ؟</h1>
        <div style={{position: 'absolute', width: '50px', bottom: '30px', left: '50%', right: '50%'}}>
          <a href='#what-is-down-syndroma'>
            <i className="fa-solid fa-angles-down  fa-bounce fa-2xl" style={{color: '#fff', cursor: 'pointer'}}></i>
          </a>
        </div>
      </section>

      <section id='what-is-down-syndroma' style={{minHeight: '92vh'}}>
        <Container className='bg-light py-3'>
        <h3 className='py-3' style={{textAlign: 'right', borderBottom: '2px solid #2196f3'}}>متلازمة داون <i className="fa-solid fa-hand-point-left"></i></h3>
        <p>متلازمة داون هو اضطراب جيني يتسبب في زيادة عدد الكروموسومات من 46 لتصبح 47 كروموسومًا، وذلك عند حدوث انقسام غير طبيعي للخلايا في المادة الوراثية من الكروموسوم رقم 21</p>
        <p>هذا الاضطراب الجيني يختلف من طفل لآخر في شدته مسببًا إعاقة ذهنية وتأخرًا في النمو مدى الحياة وصعوبات في التعلم عند الأطفال المصابين به
          إن التدخل المبكر للمصابين بمتلازمة داون يمكن أن يحسّن إلى حد كبير نوعية الحياة للأطفال والبالغين الذين يعانون هذا الاضطراب ومساعدتهم على التعايش مع المجتمع</p>
        <p>يقدر عدد المصابين بمتلازمة داون بين 1 في 1000 إلى 1 في 1100 من الولادات الحية في جميع أنحاء العالم. ويولد كل عام ما يقرب من 3،000 الى 5،000 من الأطفال الذين يعانون من هذا الاضطراب الجيني. كما يعتقد بأنه يوجد حوالي 250،000 عائلة في الولايات المتحدة الأمريكية ممن تأثروا بمتلازمة داون.
ويمكن تحسين نوعية حياة المصابين الذين يعانون من متلازمة داون من خلال تلبية احتياجاتهم من توفير الرعاية الصحية والتي تشمل إجراء الفحوص الطبية المنتظمة لمراقبة النمو العقلي والبدني وتوفير التدخل في الوقت المناسب سواء كان ذلك في مجال العلاج الطبيعي أو تقديم المشورة أو التعليم الخاص. كما يمكن للمصابين بمتلازمة داون تحقيق نوعية حياة مثلى من خلال الرعاية الأبوية والدعم والتوجيه الطبي ونظم الدعم القائمة في المجتمع، مثل توفير المدارس الخاصة مثلا. وتساعد جميع هذه الترتيبات على إشراك المصابين بمتلازمة داون في المجتمع لتمكينهم ولتحقيق ذاتهم.</p>
        </Container>
      </section>
    </>
  )
}

export default HomeScreen;
